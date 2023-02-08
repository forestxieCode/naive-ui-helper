export interface ComponentDescriptor {
  site: string
  attrs?: string[]
  characterDelta?: number
  closeSelf?: boolean
}

export const componentMap: Record<string, ComponentDescriptor> = {
  avatar: {
    site: '/avatar',
    attrs: ['src=""'],
    closeSelf: true,
    characterDelta: -3
  },
  button: {
    site: '/button'
  },
  'button-group': {
    site: '/button-group'
  },
  card: {
    site: '/card'
  },
  carousel: {
    site: '/carousel'
  },
  collapse: {
    site: '/collapse'
  },
  'collapse-item': {
    site: '/collapse-item',
    attrs: ['title=""'],
    characterDelta: -2
  },
  divider: {
    site: '/divider',
  },
  dropdown : {
    site: '/dropdown',
    attrs: [':options=""'],
    closeSelf: true,
    characterDelta: -3
  },
  ellipsis : {
    site: '/ellipsis'
  },
  'gradient-text': {
    site: '/gradient-text',
    attrs: ['type="success"']
  },
  icon: {
    site: '/icon'
  },
  'page-header': {
    site: '/page-header'
  },
  'tag': {
    site: '/tag'
  },
  watermark: {
    site: '/watermark',
    attrs: ['content="大家艰苦一下，一切都会有的"','cross', 'fullscreen', ':font-size="16"', ':line-height="16"', ':width="384"', ':height="384"', ' :x-offset="12"', ' :y-offset="60"', ':rotate="-15"']
  },
  'auto-complete': {
    site: '/auto-complete',
    attrs: ['v-model:value=""'],
    characterDelta: -2
  },
  cascader: {
    site: '/cascader',
    attrs: ['v-model:value=""'],
    closeSelf: true,
    characterDelta: -3
  },
  'color-picker': {
    site: '/color-picker'
  },
  checkbox: {
    site: '/checkbox',
    attrs: ['v-model:checked=""'],
    characterDelta: -2
  },
  'date-picker': {
    site: '/date-picker',
    attrs: ['v-model:value=""'],
    closeSelf: true,
    characterDelta: -3
  },
  'dynamic-input': {
    site: '/dynamic-input',
    attrs: ['v-model:value=""'],
    closeSelf: true,
    characterDelta: -3
  },
  'dynamic-tags': {
    site: '/dynamic-tags',
    attrs: ['v-model:value=""'],
    closeSelf: true,
    characterDelta: -3
  },
  form: {
    site: '/form',
    attrs: [':model=""'],
    characterDelta: -2
  },
  input: {
    site: '/input',
    attrs: ['v-model:value=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  'input-number': {
    site: '/input-number',
    attrs: ['v-model:value=""'],
    closeSelf: true,
    characterDelta: -3,
  },
  radio: {
    site: '/radio',
    attrs: ['value=""'],
    characterDelta: -2
  },
  rate: {
    site: '/rate',
  },
  select: {
    site: '/select',
    attrs: ['v-model:value=""', ':options=""'],
    closeSelf: true,
    characterDelta: -3
  },
  slider: {
    site: '/slider',
    attrs: ['v-model:value=""'],
    closeSelf: true,
    characterDelta: -3
  },
  switch: {
    site: '/switch',
    attrs: ['v-model:value=""'],
    closeSelf: true,
    characterDelta: -3
  },
  'time-picker': {
    site: '/time-picker',
    attrs: ['v-model:value=""'],
    closeSelf: true,
    characterDelta: -3
  },
  transfer: {
    site: '/transfer',
    attrs: ['v-model:value=""', ':options=""'],
    closeSelf: true,
    characterDelta: -3
  },
  'tree-select': {
    site: '/tree-select',
    attrs: [':options=""'],
    closeSelf: true,
    characterDelta: -3
  },
  upload: {
    site: '/upload'
  },
  calendar: {
    site: '/calendar',
    attrs: ['v-model:value=""'],
    characterDelta: -2
  },
  countdown: {
    site: '/countdown',
    attrs: [':duration=""'],
    closeSelf: true,
    characterDelta: -3
  },
  code: {
    site: '/code',
    attrs: ['language="js"',':duration=""'],
    closeSelf: true,
    characterDelta: -3
  },
  'data-table': {
    site: '/data-table',
    attrs: [':columns=""',':data=""'],
    closeSelf: true,
    characterDelta: -3
  },
  descriptions: {
    site: '/descriptions',
    attrs: ['title=""'],
    characterDelta: -2
  },
  'descriptions-item': {
    site: '/descriptions-item'
  },
  empty: {
    site: '/empty',
  },
  'config-provider': {
    site: '/config-provider',
    attrs: [':katex=""'],
    characterDelta: -2
  },
  equation: {
    site: '/equation',
    attrs: [':value=""'],
    closeSelf: true,
    characterDelta: -3
  },
  image: {
    site: '/image',
    attrs: ['src=""'],
    closeSelf: true,
    characterDelta: -3
  },
  list: {
    site: '/list'
  },
  'list-item': {
    site: '/list-item'
  },
  thing: {
    site: '/thing'
  },
  log: {
    site: '/log'
  },
  'number-animation': {
    site: '/number-animation',
    attrs: [':from=""', ':to=""'],
    closeSelf: true,
    characterDelta: -3
  },
  statistic: {
    site: '/number-animation',
    attrs: ['label=""', ':value=""'],
    closeSelf: true,
    characterDelta: -3
  },
  table: {
    site: '/table',
  },
  time: {
    site: '/time',
    attrs: [':time=""'],
    closeSelf: true,
    characterDelta: -3
  },
  timeline: {
    site: '/timeline',
  },
  'timeline-item': {
    site: '/timeline-item',
    attrs: ['content=""'],
    closeSelf: true,
    characterDelta: -3
  },
  tree: {
    site: '/tree',
    attrs: ['data=""'],
    characterDelta: -2
  },
  affix: {
    site: '/affix'
  },
  anchor: {
    site: '/anchor'
  },
  'anchor-link': {
    site: '/anchor-link',
    attrs: ['title=""'],
    closeSelf: true,
    characterDelta: -3
  },
  'back-top': {
    site: '/back-top'
  },
  breadcrumb: {
    site: '/breadcrumb'
  },
  'breadcrumb-item': {
    site: '/breadcrumb-item'
  },
  menu: {
    site: '/menu',
    attrs: [':options=""'],
    closeSelf: true,
    characterDelta: -3
  },
  pagination: {
    site: '/pagination',
    attrs: ['v-model:page=""', ':page-count=""'],
    closeSelf: true,
    characterDelta: -3
  },
  steps: {
    site: '/steps'
  },
  step: {
    site: '/step'
  },
  tabs: {
    site: '/tabs'
  },
  'tab-pane': {
    site: '/tab-pane'
  },
  alert: {
    site: '/alert',
    attrs: ['title=""'],
    characterDelta: -2
  },
  badge: {
    site: '/badge',
    attrs: [':value=""'],
    characterDelta: -2
  },
  drawer: {
    site: '/drawer',
    attrs: ['v-model:show=""'],
    characterDelta: -2
  },
  'drawer-content': {
    site: '/drawer-content'
  },
  modal: {
    site: '/modal',
    attrs: ['v-model:show=""'],
    characterDelta: -2
  },
  popconfirm: {
    site: '/popconfirm'
  },
  popover: {
    site: '/popover'
  },
  popselect: {
    site: '/popselect',
    attrs: ['v-model:value=""', ':options=""'],
    characterDelta: -2
  },
  progress: {
    site: '/progress',
  },
  result: {
    site: '/result',
    attrs: ['status="404"', 'title="404 资源不存在"'],
    characterDelta: -2
  },
  skeleton: {
    site: '/skeleton'
  },
  spin: {
    site: '/spin'
  },
  tooltip: {
    site: '/tooltip'
  },
  layout: {
    site: '/layout'
  },
  'layout-content': {
    site: '/layout-content'
  },
  'layout-header': {
    site: '/layout-header'
  },
  'layout-sider': {
    site: '/layout-sider'
  },
  'layout-footer': {
    site: '/layout-footer'
  },
  grid: {
    site: '/grid'
  },
  gi: {
    site: '/gi'
  },
  space: {
    site: '/space'
  },
  'collapse-transition': {
    site: '/collapse-transition',
    attrs: [':show=""'],
    characterDelta: -2
  },
  scrollbar: {
    site: '/scrollbar'
  }
}