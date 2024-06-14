"use client";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schema";
import { createImageUrlBuilder } from "@sanity/image-url";

const config = {
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID || "9qmwexgy",
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET || "production",
  schema,
  plugins: [
    structureTool(),
    {
      defaultApiVersion:
        process.env.NEXT_PUBLIC_SANITY_STUDIO_API_VERSION || "2024-05-31",
    },
  ],
};
export default defineConfig(config);
