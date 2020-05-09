module.exports = {
  title: "李川的博客 ",
  tagline: "The tagline of my site",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "李川的博客",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg"
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
      copyright: `Copyright © ${new Date().getFullYear()} `
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
