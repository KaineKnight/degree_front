import React, { memo } from 'react';

import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';
import House from '../House';

const properties = [
  {
    id: 1,
    img: 'house',
    price: '35000',
    address: '8502 Preston',
    bedrooms: 2,
    bathrooms: 2,
    space: 2000,
  },
];

const PropertiesBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const PropertiesTextBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

function Properties() {
  return (
    <Box sx={{ mt: 5, backgroundColor: '#f5fafe', py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: '#000339', fontSize: '35px', fontWeight: 'bold' }}
          >
            Featured Properties
          </Typography>
          <Typography sx={{ color: '#5a6473', fontSize: '16px', mt: 1 }}>
            Eerything you need to know when looking for a service center!
          </Typography>
        </PropertiesTextBox>

        <PropertiesBox>
          {
            properties.map((property) => (
              <House
                key={`${property.name}-${property.key}`}
                img={property.img}
                price={property.price}
                address={property.address}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                space={property.space}
              />
            ))
          }
        </PropertiesBox>
      </Container>
    </Box>
  );
}

export default memo(Properties);
