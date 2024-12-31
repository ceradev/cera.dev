import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			url: z.string(),
			tags: z.array(z.string()),
			preview: z.string(),
			preview_alt: z.string().optional(),
			imgs: z.array(z.string()),
			imgs_alt: z.string().optional(),
		}),
	}),
};
