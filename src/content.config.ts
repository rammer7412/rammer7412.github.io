import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    domain: z.enum([
      'privacy-governance',
      'privacy-engineering',
      'security-forensics',
      'systems-development',
      'cryptography-math',
      'research-cases',
      'project'
    ]),
    format: z.enum([
      'study-note',
      'lab',
      'problem-solving',
      'paper-review',
      'report-review',
      'case-analysis',
      'project',
      'opinion'
    ]),
    type: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    image: z.string().optional()
  })
});

export const collections = { posts };
