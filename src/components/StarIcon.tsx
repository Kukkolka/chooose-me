import React from 'react';
import { StarIcon as ChakraStarIcon, Box } from '@chakra-ui/react';

const StarIcon = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;
  const yellowStars = [...Array(fullStars)].map((_, index) => (
    <ChakraStarIcon key={index} color="yellow.400" />
  ));
  let partialStar = null;
  if (decimal > 0) {
    const width = `${decimal * 100}%`;
    partialStar = (
      <Box position="relative" display="inline-block">
        <ChakraStarIcon color="yellow.400" />
        <Box
          position="absolute"
          top="0"
          left="0"
          width={width}
          overflow="hidden"
        >
          <ChakraStarIcon color="gray.300" />
        </Box>
      </Box>
    );
  }
  const grayStars = [...Array(5 - fullStars - (decimal > 0 ? 1 : 0))].map((_, index) => (
    <ChakraStarIcon key={index} color="gray.300" />
  ));

  return (
    <>
      {yellowStars}
      {partialStar}
      {grayStars}
    </>
  );
};

export default StarIcon;