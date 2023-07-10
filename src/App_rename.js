import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import FrontPage from './components/FrontPage.js';


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