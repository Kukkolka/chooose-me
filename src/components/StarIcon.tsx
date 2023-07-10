import React from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { StarIcon as ChakraStarIcon } from '@chakra-ui/icons';

const StarIcon = ({ rating }) => {
  const maxRating = 5;
  const filledStars = Math.floor(rating);
  const decimal = rating - filledStars;
  const widthPercentage = decimal ? `${Math.round(decimal * 100)}%` : '0';

  const emptyStars = maxRating - filledStars - (decimal >= 0.5 ? 1 : 0);

  return (
    <Box display="inline-block">
      {[...Array(filledStars)].map((_, index) => (
        <Icon key={index} as={ChakraStarIcon} color="yellow.400" />
      ))}
      {decimal > 0 && decimal < 0.5 && (
        <Icon as={ChakraStarIcon} color="yellow.400" overflow="hidden">
          <Box
            width={widthPercentage}
            height="100%"
            bgGradient="linear(to right, yellow.400, yellow.400, transparent, transparent)"
          />
        </Icon>
      )}
      {decimal >= 0.5 && (
        <Icon as={ChakraStarIcon} color="yellow.400" />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <Icon key={index + filledStars + 1} as={ChakraStarIcon} color="gray.300" />
      ))}
    </Box>
  );
};

export default StarIcon;
