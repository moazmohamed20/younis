Create a very simple React + TypeScript application for an Arabic book-writer portfolio using Chakra UI. Include a Book Details screen. Follow these requirements carefully:

## 🔹 General Requirements

- The app language is Arabic (RTL).
- Use React + TypeScript.
- Use Chakra UI for all UI components (no classNames).
- Use Chakra’s built-in light/dark mode with useColorMode.
- Use functional components only.
- Keep the project structure simple and maintainable.
- Support RTL using Emotion Cache + stylis-plugin-rtl.

## 🔹 Screens / Pages

1. Home Sections

   - نبذة عن الكاتب (About the Author)
   - الكتب (Books list)
   - تواصل (Contact)

2. Book Details Screen

Route example:  
`/books/:id`

This screen should show:

    - Book title
    - Book cover
    - Short summary
    - A “اقرأ الآن” (Read Now) button
    - A “تحميل” (Download) button
    - A Back button (رجوع) to return to the books list

3. Book Reading Screen

Route example:  
`/books/:id/read`

This page should show:

    - Book title
    - A simple scrollable reading area using Chakra components
    - Dummy text (placeholder)
    - Back button to go back to Book Details

4. Download Behavior

- The Download button should trigger downloading a local file from public/ (PDF placeholder).

## 🔹 Chakra UI Layout Requirements

    - Use components like: Container, Stack, Box, Flex, Heading, Text, Image, Button, IconButton
    - Use a clean minimal look.
    - No external CSS — only Chakra props.

## 🔹 Routing Requirements

Use React Router v6 with these routes:

```
/
  /books
  /books/:id
  /books/:id/read
  /contact
```

## 🔹 Simple Folder Structure

```
src/
  main.tsx
  App.tsx
  theme.ts
  router.tsx
  components/
    Navbar.tsx
  sections/
    About.tsx
    Books.tsx
    Contact.tsx
  pages/
    BookDetails.tsx
    BookReader.tsx
  data/
    books.ts
public/
  sample-book.pdf
```

## 🔹 Dummy Data

In `books.ts`, create an array of books:

    - id
    - title
    - description
    - cover image URL
    - pdfUrl (link to sample-book.pdf)

```ts
export default [
  {
    id: 1,
    title: "كتاب التجربة",
    description: "هذا وصف قصير للكتاب.",
    cover: "/covers/book1.jpg",
    pdfUrl: "/books/sample1.pdf",
  },
  {
    id: 2,
    title: "كتاب آخر",
    description: "وصف آخر قصير.",
    cover: "/covers/book2.jpg",
    pdfUrl: "/books/sample2.pdf",
  },
];
```

## 🔹 UI Text

    - All text must be in Arabic.
    - Keep the tone simple and suitable for an author portfolio.

## 🔹 Additional Notes

    - Keep the codebase easy to understand for beginners.
    - Avoid unnecessary abstractions.
    - Keep each component small and clean.
    - The theme should respect RTL by default.
