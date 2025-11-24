import { Box } from '@chakra-ui/react';
import About from '../sections/About';
import Books from '../sections/Books';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <Box>
      <About />
      <Books />
      <Contact />
    </Box>
  );
};

export default Home;
