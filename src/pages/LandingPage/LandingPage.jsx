import React, { memo } from 'react';
import { HashLink } from 'react-router-hash-link';

import { Box, Fab, Tooltip } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import {
  ServicePhotos,
  About,
  Footer,
  Placard,
  Manual,
  Banner,
  WhereToFind,
  Questions,
} from '../../components';

import styles from './LandingPage.module.css';

function LandingPage() {
  return (
    <Box className={styles.landingPage}>
      <Banner />
      <Manual />
      <WhereToFind />
      <About />
      <ServicePhotos />
      <Questions />
      <Placard />
      <Footer />

      <HashLink to="#navbar" smooth>
        <Tooltip
          title="Up"
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 10,
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          <Fab color="primary">
            <KeyboardArrowUpIcon />
          </Fab>
        </Tooltip>
      </HashLink>
    </Box>
  );
}

export default memo(LandingPage);
