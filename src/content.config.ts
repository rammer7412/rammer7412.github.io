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
      'project',
      'math',
      'linear-algebra',
      'probability-theory',
      'operating-systems',
      'artificial-intelligence'
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
    image: z.string().optional(),
    status: z.enum(['planned', 'in-progress', 'completed', 'paused']).optional(),
    series: z.string().optional(),
    seriesOrder: z.number().int().positive().optional()
  })
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.enum(['Travel', 'Books', 'Daily', 'Culture', 'Thoughts', 'Other']),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    location: z.string().optional(),
    draft: z.boolean().default(false)
  })
});


const courses = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    theme: z.enum(['python', 'c-language', 'security', 'forensics', 'privacy', 'default']).default('default'),
    order: z.number().int().nonnegative().default(0),
    draft: z.boolean().default(false)
  })
});

const lectures = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lectures' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    course: z.string(),
    courseSlug: z.string(),
    lectureNumber: z.number().int().positive(),
    pdfUrl: z.string().url(),
    theme: z.enum(['python', 'c-language', 'security', 'forensics', 'privacy', 'default']).default('default'),
    fileName: z.string().optional(),
    topics: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { posts, journal, courses, lectures };
