import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import StarRating from 'react-star-ratings';
import '../App.css';

const DataItem = ({ data, isMobile }) => {
  const HeaderSize = 'lg';
  const SubheaderSize = '8px';
  const TinyText = '12px';
  const RatingText = '9px';

  const { backgroundImage, rating, countries, days, emissionOffset, header } = data;
  const imageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '10px',
    paddingTop: '6em',
    WebkitBorderRadius: '10px',
    MozBorderRadius: '10px',
  };

  const formattedEmissionOffset = emissionOffset >= 1000 ? `${(emissionOffset / 1000).toFixed(2)} t` : `${emissionOffset} kg`;

  return (
    <Flex
      width="100%"
      maxWidth={['100%', isMobile ? '100%' : '500px']}
      minHeight={['auto', '230px']}
      padding={['3rem', '2rem']}
      backgroundColor="#fbfcfe"
      paddingBottom="0px"
      className="image-container"
      flexDirection="column"
      height="100%"
      style={imageStyle}
    >
      <Box flex="1" textAlign="center" overflow="hidden" width="100%">
        <Text
          fontSize={[HeaderSize, HeaderSize, HeaderSize, HeaderSize]}
          fontWeight="bold"
          marginBottom="2"
          color="white"
          position="absolute"
          top="36%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          width="100%"
          className="header"
        >
          {header}
        </Text>

        <Text fontSize={[SubheaderSize, SubheaderSize, SubheaderSize, SubheaderSize]} marginBottom="2" color="white" className="subheader">
          Countries: {countries} Days: {days}
        </Text>

        <Box
          className="emission-offset-box"
          marginBottom="2"
          position="absolute"
          top="56%"
          left="50%"
          transform="translate(-50%, -50%)"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontFamily="sans-serif" fontSize={[TinyText, TinyText, TinyText, TinyText]} color="white" className="emission-offset-text">
            <span style={{ color: 'white' }}>Emission offset:</span>
          </Text>
          <Text fontFamily="sans-serif" fontSize={[TinyText, TinyText, TinyText, TinyText]} color="white" className="emission-offset-text">
            {formattedEmissionOffset} CO<sub>2</sub>E
          </Text>
        </Box>

        <Box
          className="trip-rating-container"
          marginTop="auto"
          transform="translate(-50%, -0%)"
          left="50%"
        >
          <Flex align="center" justify="flex-start">
            <Text fontFamily="sans-serif" fontWeight="500" fontSize={[RatingText, RatingText, RatingText, RatingText]} fontWeight="bold" color="gray.800" marginRight="2" marginTop="4px" className="trip-rating-text">
              Trip Rating:
            </Text>
            <StarRating
              marginTop="-6px"
              rating={rating}
              starRatedColor="#ffd315"
              starEmptyColor="#1f2837"
              starDimension="15px"
              starSpacing="1px"
            />
            <Text fontFamily="sans-serif" fontWeight="bold" color="gray.800" marginRight="2" marginTop="4px" className="star-rating-value">
              <b>{rating}</b>
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default DataItem;
