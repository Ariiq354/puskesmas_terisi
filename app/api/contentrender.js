import marked from "marked";

const markdownContent = `
# This is a Markdown Heading

This is some **bold** and *italic* text.

- You can create lists.
- Like this.

1. You can create numbered lists.
2. Like this.

Here's a [link to a website](https://example.com).

![An image](https://example.com/image.jpg)
`;

const htmlContent = marked(markdownContent);

export { htmlContent };
