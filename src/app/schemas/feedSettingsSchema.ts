import {z} from "zod";
import { articleSitesEnum } from "../models/enums/articleSitesEnum";

export const feedSettingsSchema = z.object({
    excludedSources: z.array(z.nativeEnum(articleSitesEnum))
});

export type FeedSettingsSchema = z.infer<typeof feedSettingsSchema>;