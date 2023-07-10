import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import FrontPage from './components/FrontPage.tsx';
import FrontPage from './components/FrontPagenew.tsx';



function App() {
  return (
    <ChakraProvider maxWidth="100%" overflowX="none">
      <Box bg="#f6f7f9">
        <FrontPage />
      </Box>
    </ChakraProvider>
  );
}

export default App;