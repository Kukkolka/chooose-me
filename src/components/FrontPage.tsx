import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import DataItem from './DataItem.tsx';
import config from '../config';
import '../App.css';

const FrontPage = () => {
  const [data, setData] = useState([]);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(config.apiEndpoint);
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const gridColumns = useBreakpointValue({ base: 1, md: 3 });

  return (
    <SimpleGrid
      columns={gridColumns}
      width="100%"
      maxWidth="100%"
      backgroundColor="#f6f7f9"
      padding={['3rem', '2rem']}
      paddingBottom="0px"
      minHeight={['auto', '230px']}
      height="100%"
    >
      {data.map((item, index) => (
        <Box
          marginRight="15px"
          key={index}
          width={isMobile ? '100%' : 'auto'}
          marginBottom={['4rem', '1rem']}
          border="10px solid"
          borderColor="#f2f3f7"
          borderRadius="15px"
          boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
        >
          <DataItem data={item} isMobile={isMobile} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default FrontPage;
