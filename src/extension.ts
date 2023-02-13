import * as vscode from 'vscode'
import {
  type CompletionItemProvider,
} from 'vscode'
import webTypes from 'naive-ui/web-types.json'
import { componentMap, ComponentDescriptor } from './componentMap'
import { bigCamelize, kebabCase, isString } from './utils'

const ATTR_RE = /(?:<(n-[\w-]+)[^>/]*)|(?:<(N[\w-]+)[^>/]*)/g
const DOC = 'https://www.naiveui.com/zh-CN/os-theme/components/'
const EN_DOC = 'https://www.naiveui.com/en-US/os-theme/components/'

const LINK_RE = /(?<=<n-)([\w-]+)/g
const BIG_CAMELIZE_RE = /(?<=<N)([\w-]+)/g

const files = ['vue', 'typescript', 'javascript', 'javascriptreact', 'typescriptreact']

function getWebTypesTags() {
  return  webTypes.contributions.html['vue-components'];
}

function provideCompletionItems() {
  const completionItems: vscode.CompletionItem[] = []

  Object.keys(componentMap).forEach((key) => {
    completionItems.push(
      new vscode.CompletionItem(`n-${key}`, vscode.CompletionItemKind.Field),
      new vscode.CompletionItem(bigCamelize(`n-${key}`), vscode.CompletionItemKind.Field)
    )
  })

  return completionItems
}

function resolveCompletionItem(item: vscode.CompletionItem) {
  const name = kebabCase(item.label as string).slice(2)
  const descriptor: ComponentDescriptor = componentMap[name]

  const attrText = descriptor.attrs ? ' ' + descriptor.attrs.join(' ') : ''
  const tagSuffix = descriptor.closeSelf ? '' : `</${item.label}>`
  const characterDelta = -tagSuffix.length + (descriptor.characterDelta ?? 0)

  item.insertText = `<${item.label}${attrText}`
  item.insertText += descriptor.closeSelf ? '/>' : `>${tagSuffix}`

  item.command = {
    title: 'naive.move-cursor',
    command: 'naive.move-cursor',
    arguments: [characterDelta],
  }

  return item
}

function provideHover(document: vscode.TextDocument, position: vscode.Position) {
  const line = document.lineAt(position)
  const linkComponents = line.text.match(LINK_RE) ?? []
  const bigCamelizeComponents = line.text.match(BIG_CAMELIZE_RE) ?? []
  const components = [...new Set([...linkComponents, ...bigCamelizeComponents.map(kebabCase)])]

  if (components.length) {
    const contents = components
      .filter((component) => componentMap[component])
      .map((component) => {
        const { site } = componentMap[component]
        const isCN = vscode.env.language === 'zh-cn'
        const text = isCN
          ? `查看${bigCamelize(component)}组件官方文档`
          : `Watch ${bigCamelize(component)} component documentation`

        return `\
[NaiveUI -> ${text}](${isCN ? DOC : EN_DOC}${site})`
      })
    return new vscode.Hover(contents)
  }
}

function moveCursor(characterDelta: number) {
  const active = vscode.window.activeTextEditor!.selection.active!
  const position = active.translate({ characterDelta })
  vscode.window.activeTextEditor!.selection = new vscode.Selection(position, position)
}

const attrProvider: CompletionItemProvider = {
  provideCompletionItems(document, position) {
    const text = document.getText(new vscode.Range(new vscode.Position(0, 0), new vscode.Position(position.line, position.character)))

    if (!Array.from(text.matchAll(ATTR_RE)).length) {
      return null
    }

    let name: string
    let lastValue: string
    let startIndex: number

    // eslint-disable-next-line no-restricted-syntax
    for (const matched of text.matchAll(ATTR_RE)) {
      name = bigCamelize(matched[1] ?? matched[2])
      lastValue = matched[0]
      startIndex = matched.index!
    }

    const currentIndex = text.length
    const endIndex = startIndex! + lastValue!.length

    if (currentIndex > endIndex || currentIndex < startIndex!) {
      return null
    }

    const tags = getWebTypesTags()
    const tag = tags.find((tag) => tag.name === name)

    if (!tag) {
      return null
    }

    const hasAt = text.endsWith('@')
    const hasColon = text.endsWith(':')

    const events = tag.js.events.map((event: any) => {
      const item = new vscode.CompletionItem(
        {
          label: `@${event.name}`,
          description: event['doc-url'],
        },
        vscode.CompletionItemKind.Event
      )

      item.documentation = new vscode.MarkdownString(`\
**Event**: ${event.name}

**Description**: ${event['doc-url']}`)
      item.insertText = hasAt ? event.name : `@${event.name}`

      return item
    })

    const props = tag.props.map((attr: any) => {
      const item = new vscode.CompletionItem(
        {
          label: attr.name,
          description: attr['doc-url'],
        },
        vscode.CompletionItemKind.Value
      )

      item.sortText = '0'

      item.documentation = new vscode.MarkdownString(`\
**Prop**: ${attr.name}

**Description**: ${attr['doc-url']}

**Type**: ${attr.type}`)

      item.insertText = attr.name

      return item
    })

    return [...(hasAt ? [] : props), ...(hasColon ? [] : events)]
  },

  resolveCompletionItem(item: vscode.CompletionItem) {
    if (!isString(item.label)) {
      item.command = {
        title: 'naive.move-cursor',
        command: 'naive.move-cursor',
        arguments: [-1],
      }
      item.insertText = `${item.insertText}=""`
    }

    return item
  },
}

export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('naive.move-cursor', moveCursor)

  context.subscriptions.push(vscode.languages.registerHoverProvider(files, { provideHover }))
  context.subscriptions.push(vscode.languages.registerCompletionItemProvider(files, {
    provideCompletionItems,
    resolveCompletionItem,
  }))
  context.subscriptions.push(vscode.languages.registerCompletionItemProvider(files, attrProvider, ' ', '@', ':'))
  
}

export function deactivate() {}