Below are clear, structured learning notes for Markdown (MD files).
This is a learning checklist + reference, not just syntax. You can paste this into a file like markdown-notes.md.

# Markdown (MD) Learning Notes

---

## 1. What is Markdown

- Markdown is a **lightweight markup language**
- Used to write **formatted text using plain text**
- Commonly used for:
  - README files
  - Documentation
  - Notes
  - GitHub projects

File extension: `.md`

---

## 2. Why Use Markdown

- Easy to read and write
- No complex syntax
- Supported by GitHub, VS Code, GitLab
- Converts easily to HTML, PDF

---

## 3. Headings

Use `#` symbols.

```md
# Heading 1 (Title – use once)
## Heading 2 (Main section)
### Heading 3 (Subsection)
#### Heading 4


Rule:

Use only one # title per file

4. Paragraphs & Line Breaks

Leave a blank line between paragraphs

This is paragraph one.

This is paragraph two.

5. Text Formatting
Bold
**Bold text**

Italic
*Italic text*

Bold + Italic
***Bold and Italic***

Inline Code
Use `npm install` to install packages

6. Lists
Unordered List
- Node.js
- Express
- MongoDB

Ordered List
1. Install Node.js
2. Initialize project
3. Run server

7. Links
[Google](https://www.google.com)

8. Images
![Alt text](image-url)


Example:

![Node Logo](https://nodejs.org/static/images/logo.svg)

9. Code Blocks (Very Important)
Without language

console.log("Hello");

With language (Recommended)
```js
console.log("Hello");

npm install express

PORT=3000


Why:

Syntax highlighting

Professional look

10. Blockquotes (Notes / Warnings)
> This is a note

> ⚠️ Warning: Do not push `.env` to GitHub

> ✅ Tip: Use nodemon for development

11. Horizontal Line
---


Used to separate sections.

12. Tables
| Tool     | Purpose            |
|----------|--------------------|
| Node.js  | Backend runtime    |
| Express  | API framework      |
| Vite     | Frontend tooling   |

13. Table of Contents (Manual)
## Table of Contents
- [Node.js](#nodejs)
- [Express](#express)
- [Axios](#axios)


Headings must match the section titles.

14. Checkboxes (Task Lists)
- [x] Learn Markdown basics
- [ ] Practice writing README
- [ ] Create project docs

15. File Structure for Markdown Notes
docs/
 ├── README.md
 ├── fullstack-notes.md
 ├── markdown-notes.md

16. Markdown in VS Code
Preview Markdown
Ctrl + Shift + V

Recommended Extension

Markdown All in One

Features:

Auto-format

TOC generation

Keyboard shortcuts

17. Markdown Linting (Optional but Pro)

Install:

npm install -g markdownlint-cli


Run:

markdownlint markdown-notes.md

18. Common Mistakes to Avoid

❌ No blank lines between sections
❌ Inconsistent heading levels
❌ No language in code blocks
❌ Huge paragraphs
❌ No structure

19. When to Use Markdown

Project documentation

Learning notes

Interview prep

GitHub repositories

Technical blogs (basic)

20. Final Tip

Markdown is not about decoration.
It is about clarity, structure, and readability.