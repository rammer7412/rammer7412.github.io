import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'rammer7412';
const isUserSite = repo.endsWith('.github.io');

export default defineConfig({
  site: process.env.SITE ?? `https://${owner}.github.io`,
  integrations: [sitemap()],
  base: process.env.BASE_PATH ?? (repo && !isUserSite ? `/${repo}/` : '/'),
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: {
        light: 'github-light-default',
        dark: 'github-dark-default'
      }
    }
  }
});
