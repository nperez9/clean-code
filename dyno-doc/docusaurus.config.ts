import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Clean Code Handbook',
  tagline: 'A lovely start-up handbook to help you write code for humans.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nperez9', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Clean Code Handbook',
      logo: {
        alt: 'Code logo',
        src: 'img/book.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'References',
          items: [
            {
              label: 'Scalastic.io',
              href: 'https://scalastic.io/en/solid-dry-kiss/?ref=clean-code-handbook',
            },
            {
              label: 'Refactoring Guru',
              href: 'https://refactoring.guru/refactoring?ref=clean-code-handbook',
            }
          ],
        },
        {
          title: 'Find me!',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/nperez9',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/nicol%C3%A1s-agust%C3%ADn-perez-23a5b1aa/',
            },
          ],
        },
        {
          title: 'Other Projects',
          items: [
            {
              label: 'Stone Tower Studio',
              href: 'https://stone-tower-studio.vercel.app/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} By Nicolas Agustin Perez. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.synthwave84,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
