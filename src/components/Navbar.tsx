import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa6";
import { Link as RouterLink, useLocation } from "react-router-dom";

const MotionBox = motion.create(Box);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== import.meta.env.BASE_URL + "/") {
      window.location.href = `${import.meta.env.BASE_URL}/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MotionBox
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={1000}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          <Heading
            size="md"
            as={RouterLink}
            to="/"
            _hover={{ textDecoration: "none" }}
          >
            يونس الرحبي
          </Heading>

          <Stack direction="row" spacing={2} align="center">
            <Button
              as={motion.button}
              variant="ghost"
              onClick={() => scrollToSection("about")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              نبذة
            </Button>
            <Button
              as={motion.button}
              variant="ghost"
              onClick={() => scrollToSection("books")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              الكتب
            </Button>
            <Button
              as={motion.button}
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              تواصل
            </Button>

            <IconButton
              as={motion.button}
              aria-label="تبديل الوضع"
              icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              variant="ghost"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Stack>
        </Flex>
      </Container>
    </MotionBox>
  );
};

export default Navbar;
