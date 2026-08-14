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
        company: z.string()
    })
});

const music = defineCollection({
    loader: file('./src/config/music.json'),
    schema: z.object({
        id: z.string(),
        src: z.string(),
        title: z.string(),
    })
})

export const collections = {
    history,
    music
}