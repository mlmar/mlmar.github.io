import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const history = defineCollection({
    loader: file('./src/config/history.json'),
    schema: z.object({
        start: z.string(),
        end: z.string(),
        title: z.string(),
        product: z.string().optional(),
        company: z.string(),
        image: z.string()
    })
});

const music = defineCollection({
    loader: file('./src/config/music.json'),
    schema: z.object({
        id: z.string(),
        src: z.string(),
        title: z.string(),
        url: z.string(),
        image: z.string(),
        startTime: z.number()
    })
})

const projects = defineCollection({
    loader: file('./src/config/projects.json'),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        description: z.string().optional(),
        github: z.string().optional(),
        uri: z.string(),
        image: z.string(),
        stack: z.array(z.string()),
        active: z.boolean(),
        order: z.number()
    })
})

export const collections = {
    history,
    music,
    projects
}