import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import books from "../data/books";

const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);

const BookReader = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <Container py={8}>
        <Heading size="lg" textAlign="center">
          لم يتم العثور على الكتاب
        </Heading>
      </Container>
    );
  }

  return (
    <Container
      minH="calc(100vh - 72px)"
      py={8}
      maxW="container.lg"
      display="flex"
      flexDirection="column"
    >
      <Stack spacing={8} flex={1} minH={0}>
        <MotionHeading
          size="xl"
          textAlign="center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {book.title}
        </MotionHeading>

        <MotionBox
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          flex={1}
          display="flex"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src={`${import.meta.env.BASE_URL}/${book.pdfUrl}`}
            title={book.title}
            style={{ flex: 1, minHeight: 0 }}
          />
        </MotionBox>
      </Stack>
    </Container>
  );
};

export default BookReader;
