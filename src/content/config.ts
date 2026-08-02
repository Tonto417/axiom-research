import { defineCollection, z } from 'astro:content';

const advisoriesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        severity: z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']),
        author: z.string().default('Axiom Research Group'),
        description: z.string(),
    }),
});

export const collections = {
    'advisories': advisoriesCollection,
};
