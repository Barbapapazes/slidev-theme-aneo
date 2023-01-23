export default defineAppConfig({
  docus: {
    title: 'Slidev Theme Aneo',
    description: 'A Slidev theme for Aneo to create beautiful presentations',
    image:
      'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      github: 'Barbapapazes/slidev-theme-aneo',
    },
    github: {
      owner: 'Barbapapazes',
      repo: 'slidev-theme-aneo',
      dir: '.docs',
      branch: 'main',
      edit: true,
    },
    aside: {
      level: 1,
      exclude: [],
    },
    header: {
      logo: false,
      showLinkIcon: true,
      title: 'Slidev Aneo',
      exclude: [],
    },
    footer: {
      iconLinks: [],
    },
  },
})
