import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import StarIcon from './StarIcon.tsx';

const FrontPage = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [rating, setRating] = useState(0);
  const [emissionOffset, setEmissionOffset] = useState(0);
  const [header, setHeader] = useState('');
  const [subheader, setSubheader] = useState('');

  const updateDb = async () => {
    const newData = { name: 'New Name' }; // Modify the data to be sent to the server
    try {
      const response = await fetch('http://localhost:3001/data', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        console.log('Successfully updated db.json');
      } else {
        console.log('Failed to update db.json');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch('http://localhost:3001/data')
      .then((response) => response.json())
      .then((data) => {
        const imagePath = `/assets/${data.backgroundImage}`;
        setBackgroundImage(imagePath);
        setRating(data.rating);
        setEmissionOffset(data.emissionOffset);
        setHeader(data.header);
        setSubheader(data.subheader);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box
      width="100vw"
      height="100vh"
      position="relative"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage={`url(${backgroundImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        zIndex="-1"
      />
      <Flex
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        bg="rgba(0, 0, 0, 0.5)"
        flexDirection="column"
        padding="4"
        position="relative"
      >
        <Heading as="h1" size="2xl" color="white" textAlign="center" marginBottom="4">
          {header}
        </Heading>
        <Heading as="h3" size="lg" color="white" textAlign="center" marginBottom="2">
          {subheader}
        </Heading>
        <Box
          width="100%"
          backgroundColor="gray.200"
          padding="2"
          borderRadius="md"
          marginBottom="2"
          display="flex"
          justifyContent="space-between"
        >
          <Text fontSize="lg" fontWeight="bold">
            Emission offset:
          </Text>
          <Text fontSize="lg">{emissionOffset}</Text>
        </Box>
        <Flex
          width="60%"
          justifyContent="center"
          alignItems="center"
          marginTop="4"
          position="absolute"
          bottom="4"
          left="20%"
        >
          <Box display="flex" alignItems="center">
            {[...Array(6)].map((_, index) => (
              <StarIcon rating={rating} maxRating='5' key={index} color={index < rating ? 'yellow.400' : 'gray.300'} />
            ))}
          </Box>
        </Flex>
        <button onClick={updateDb}>Update db.json</button> {/* Add the update button */}
      </Flex>
    </Box>
  );
};

export default FrontPage;