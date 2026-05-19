import { defineConfig } from 'astro/config';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'YOUR_GITHUB_USERNAME';
const isUserSite = repo.endsWith('.github.io');

export default defineConfig({
  // GitHub Actions에서 자동으로 repo 이름을 읽어 base 경로를 맞춥니다.
  // username.github.io 저장소면 base는 '/', 일반 저장소면 '/repo-name/'이 됩니다.
  site: process.env.SITE ?? `https://${owner}.github.io`,
  base: process.env.BASE_PATH ?? (repo && !isUserSite ? `/${repo}/` : '/'),
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
