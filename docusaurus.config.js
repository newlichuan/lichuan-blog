module.exports = {
  title: "川",
  tagline: "我的博客",
  url: "https://lichuan.run",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "首页",
      logo: {
        alt: "My Logo",
        src: "img/logo.jpg"
      },
      links: [
        {
          href: "https://github.com/newlichuan",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus"
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus"
        //     },
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/docusaurus"
        //     }
        //   ]
        // },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "blog"
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/facebook/docusaurus"
        //     }
        //   ]
        // }
      ],
      copyright: `版权所有 侵权必究`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: {
          path: "./blog/",
          routeBasePath: "/",
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
