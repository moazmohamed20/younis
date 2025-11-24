import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaBookOpen, FaDownload } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import books from "../data/books";

const MotionBox = motion.create(Box);
const MotionStack = motion.create(Stack);
const MotionImage = motion.create(Image);

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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
    <Container p={8} maxW="container.lg">
      <MotionBox
        borderRadius="lg"
        boxShadow="xl"
        overflow="hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Flex
          bg={useColorModeValue("white", "gray.900")}
          direction={{ base: "column", md: "row" }}
          gap={8}
          p={8}
        >
          <MotionImage
            flex={1}
            src={`${import.meta.env.BASE_URL}/${book.cover}`}
            alt={book.title}
            borderRadius="md"
            boxShadow="lg"
            maxW={{ base: "100%", md: "300px" }}
            h="auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <MotionStack
            spacing={8}
            flex={1}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Heading size="2xl">{book.title}</Heading>

            <Text
              fontSize="lg"
              textAlign="justify"
              color={useColorModeValue("gray.600", "gray.300")}
            >
              {book.description}
            </Text>

            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              mt="auto"
            >
              <Button
                as={motion.button}
                size="lg"
                colorScheme="purple"
                onClick={() => navigate(`/books/${book.id}/read`)}
                leftIcon={<FaBookOpen />}
                flex={{ sm: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                اقرأ الآن
              </Button>

              <Button
                as={motion.a}
                href={`${import.meta.env.BASE_URL}/${book.pdfUrl}`}
                download={`${book.title}.pdf`}
                size="lg"
                colorScheme="green"
                leftIcon={<FaDownload />}
                flex={{ sm: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                تحميل
              </Button>
            </Stack>
          </MotionStack>
        </Flex>
      </MotionBox>
    </Container>
  );
};

export default BookDetails;
