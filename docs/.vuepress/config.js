module.exports = {
  title: 'origin-ui',
  description: 'Just playing around',
  plugins: [
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {},
      },
    ],
  ],
  themeConfig: {
    nav: [
      {text: '首页', link: '/'},
      {text: '文档', link: '/install/'},
      { text: 'GitHub', link: 'https://github.com/Shi-Dekai' },
    ],
    sidebar: [
      {
        title: '入门',
        children:
          [
            '/install/',
            '/get-started/'
          ]
      },
      {
        title: '组件',
        children:
          [
            '/components/button',
            '/components/input',
            '/components/layout',
            '/components/grid',
            '/components/popover',
            '/components/tabs',
            '/components/toast',
            '/components/collapse'
          ]
      }
    ]
  }
}