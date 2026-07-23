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

// const projects = defineCollection({
//     loader: file('./src/config/projects.json'),
//     schema: z.object({
//         title: z.string(),
//         description: z.string(),
//         github: z.string(),
//         uri: z.string(),
//         imgUri: z.string(),
//         stack: z.array(z.string()),
//     })
// })

export const collections = {
    history,
    // projects
}