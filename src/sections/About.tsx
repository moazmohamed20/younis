import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);
const MotionStack = motion.create(Stack);
const MotionImage = motion.create(Image);

const About = () => {
  return (
    <Box id="about" py={8}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={8}
          align="fex-start"
        >
          <Stack>
            <MotionBox
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Heading size="2xl" textAlign="center" mb={8}>
                نبذة عن الكاتب
              </Heading>
            </MotionBox>
            <MotionStack
              spacing={4}
              textAlign="justify"
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.600", "gray.300")}
              >
                وُلد الدكتور يونس بن مرهون الرحبي يوم الأحد 4 شعبان 1396هـ
                الموافق 1 أغسطس 1976م، في محافظة مسقط بسلطنة عُمان، ونشأ في بيئة
                علمية تُقدّر المعرفة وتحتفي بالتعلّم، مما كان له أثرٌ بالغ في
                تشكيل توجهه الأكاديمي والمهني. منذ سنواته المبكرة، برز اهتمامه
                بالقراءة والتحليل، ولا سيما في مجالات الإدارة وفهم النفس
                البشرية، وهو ما أسهم في انتقاله الطبيعي إلى الميدانين التربوي
                والإداري.
              </Text>
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.600", "gray.300")}
              >
                واصل الدكتور يونس مسيرته العلمية حتى حصل على درجة دكتوراه
                الفلسفة في التربية من جامعة المنصورة، متخصصًا في الإدارة
                التربوية، ليبدأ بعدها رحلة مهنية حافلة بالعطاء والإنجاز. ويتميز
                برؤية إدارية تستند إلى قناعة راسخة بأن نجاح المؤسسات يبدأ بفهم
                الإنسان وتوظيفه بما يتوافق مع ميوله وقدراته النفسية.
              </Text>
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.600", "gray.300")}
              >
                انعكست هذه الرؤية بوضوح في مؤلفاته المتعددة التي اتسمت بالاختصار
                والعمق والوضوح، وفي أبحاثه التي مزج فيها بين النظرية والتطبيق.
                يشغل الدكتور يونس حاليًا منصب المدير العام لمجموعة مدارس تبارك
                الخاصة بسلطنة عُمان، ويواصل إسهاماته في تطوير الفكر الإداري
                التربوي من خلال الكتابة والبحث والممارسة الميدانية.
              </Text>
            </MotionStack>
          </Stack>
          <MotionBox
            mb={-8}
            alignSelf="stretch"
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MotionImage
              src={`${import.meta.env.BASE_URL}/Younis.webp`}
              alt="الدكتور يونس بن مرهون الرحبي"
              transform="scaleX(-1)"
              h="100%"
              objectFit="cover"
            />
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
