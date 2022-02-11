import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.tsx
const request = require.context("../src/components", true, /.stories.tsx$/);

const loadStories = () => {
  request.keys().forEach(filename => request(filename));
}

configure(loadStories, module);