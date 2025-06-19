// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./app/sanity/schemas"; // Corrected import path

const config = defineConfig({
  name: "default",
  title: "Bakaluba Services",
  plugins: [deskTool()],
  projectId: "44uvjedb", // <- Replace with your Sanity project ID
  dataset: "production", // <- Usually 'production'
  apiVersion: "2025-06-13", // <- Replace with your API version
  plugins: [deskTool()],
  basePath: "/admin", // Optional / Default: ''
  schema: {
    types: schemas,
  },
});
export default config;
