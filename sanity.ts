// sanity.ts
import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: "9qmwexgy", // Replace with your actual project ID
  dataset: "production", // Replace with your actual dataset name
  useCdn: false, // Set to `false` if you want to ensure fresh data
  apiVersion: "2024-05-31", // Use a date string in the format YYYY-MM-DD
};
// Set up the client for fetching data in the getProps page function
export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
