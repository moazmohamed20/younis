import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import books from "../data/books";

const MotionBox = motion.create(Box);

const Books = () => {
  const navigate = useNavigate();
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box id="books" py={8} bg={useColorModeValue("white", "gray.900")}>
      <Container maxW="container.xl">
        <Stack spacing={8}>
          <MotionBox
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heading size="2xl" textAlign="center" mb={8}>
              الكتب
            </Heading>
          </MotionBox>

          <SimpleGrid
            as={motion.div}
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={8}
            viewport={{ once: true, margin: "-100px" }}
          >
            {books.map((book) => (
              <MotionBox
                key={book.title}
                bg={cardBg}
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                border="1px"
                borderColor={borderColor}
                transition={{ duration: 0.5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "xl",
                }}
              >
                <Image
                  src={`${import.meta.env.BASE_URL}/${book.cover}`}
                  alt={book.title}
                  w="100%"
                  objectFit="cover"
                />
                <Stack p={6} spacing={4}>
                  <Heading size="md">{book.title}</Heading>
                  <Text
                    color={useColorModeValue("gray.600", "gray.300")}
                    noOfLines={3}
                  >
                    {book.description}
                  </Text>
                  <Button
                    colorScheme="purple"
                    onClick={() => navigate(`/books/${book.id}`)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    as={motion.button}
                  >
                    عرض التفاصيل
                  </Button>
                </Stack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Books;
