import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import StarRatings from 'react-star-ratings';

const RatingBox = ({ rating }) => {
  return (
    <Box
      width="60%"
      backgroundColor="white"
      padding="4"
      borderTopLeftRadius="md"
      borderTopRightRadius="md"
      marginBottom="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      bottom="0"
      left="20%"
    >
      <Text fontSize="lg" fontWeight="bold" marginBottom="2">
        Trip Rating
      </Text>
      <StarRatings
        rating={rating}
        starRatedColor="yellow"
        starEmptyColor="gray"
        starDimension="20px"
        starSpacing="2px"
      />
      <Text fontSize="lg" fontWeight="bold" marginLeft="2">
        {rating.toFixed(1)} / 5
      </Text>
    </Box>
  );
};

export default RatingBox;
