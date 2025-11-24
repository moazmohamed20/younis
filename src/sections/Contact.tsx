import {
  Box,
  Container,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const MotionBox = motion.create(Box);
const MotionLink = motion.create(Link);
const MotionHStack = motion.create(HStack);

const Contact = () => {
  const iconColor = useColorModeValue("gray.600", "gray.300");

  const links = [
    {
      href: "https://wa.me/96696669934",
      icon: <FaWhatsapp size={36} />,
      hover: "#25D366",
    },
    {
      href: "https://www.facebook.com/profile.php?id=100094139751979",
      icon: <FaFacebook size={36} />,
      hover: "#1877F2",
    },
    {
      href: "https://www.instagram.com/younis_elrahbi",
      icon: <FaInstagram size={36} />,
      hover: "#E1306C",
    },
    {
      href: "https://x.com/younis_elrahbi",
      icon: <FaXTwitter size={36} />,
      hover: "#000000",
    },
    {
      href: "mailto:younis.m.alrahbi@gmail.com",
      icon: <FaEnvelope size={36} />,
      hover: "#EA4335",
    },
  ];

  return (
    <Box id="contact" py={8}>
      <Container maxW="container.md">
        <Stack spacing={8} align="center">
          <MotionBox
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heading size="2xl" textAlign="center" mb={8}>
              تواصل مع الكاتب
            </Heading>
          </MotionBox>
          <MotionHStack spacing={8}>
            {links.map((item, index) => (
              <MotionLink
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                color={iconColor}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  scale: 1.2,
                  color: item.hover,
                }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
              </MotionLink>
            ))}
          </MotionHStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
