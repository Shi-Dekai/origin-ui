module.exports = {
  title: 'Hello VuePress',
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
    displayAllHeaders: true,
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/'
        ]
      },
      {
        title: '组件',
        children: ['/components/button']
      }
    ]
  }
}