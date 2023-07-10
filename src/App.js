import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import FrontPage from './components/FrontPage.tsx';

const App = () => {
  return (
    <ChakraProvider>
      <FrontPage />
    </ChakraProvider>
  );
};

export default App;
