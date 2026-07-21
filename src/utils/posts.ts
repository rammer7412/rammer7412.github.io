export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  tags?: string[];
  type?: string;
  domain?: string;
  format?: string;
  featured?: boolean;
  draft?: boolean;
  image?: string;
  status?: 'planned' | 'in-progress' | 'completed' | 'paused';
}

export interface PostSummary {
  slug: string;
  frontmatter: PostFrontmatter;
}

const modules = import.meta.glob('../content/posts/*.md', { eager: true });

export function getAllPosts(): PostSummary[] {
  return Object.entries(modules)
    .map(([path, module]) => {
      const mod = module as { frontmatter: PostFrontmatter };
      return {
        slug: path.split('/').pop()?.replace('.md', '') ?? '',
        frontmatter: mod.frontmatter
      };
    })
    .filter((post) => !post.frontmatter.draft)
    .sort((a, b) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date));
}

export function normalizeFormat(frontmatter: PostFrontmatter) {
  if (frontmatter.format) return frontmatter.format;
  if (frontmatter.type === 'lab') return 'lab';
  if (frontmatter.type === 'problem') return 'problem-solving';
  return 'study-note';
}

export function normalizeDomain(frontmatter: PostFrontmatter) {
  if (frontmatter.domain) return frontmatter.domain;
  const category = frontmatter.category?.toLowerCase() ?? '';
  if (category.includes('security')) return 'security-forensics';
  if (category.includes('math')) return 'cryptography-math';
  return 'systems-development';
}
