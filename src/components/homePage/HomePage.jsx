import React, { lazy, Suspense, useState } from 'react';
import { Box, Typography } from '@mui/material';
import '../../styles/homePage/homePage.css';

const Header = lazy(() =>
  import("./Header/Header")
);

const Body = lazy(() =>
  import("./Body/Body")
);

const Footer = lazy(() =>
  import("./Footer/Footer")
);

export default function LandingPage() {
  const storedLayoutDirection = localStorage.getItem('i18nextLng');
  const [isRightDirection, setIsRightDirection] = useState(storedLayoutDirection === 'ar');

  const setLayoutDirection = (layoutDirection) => {
    setIsRightDirection(layoutDirection);
  }

  return (
    <Suspense fallback='loading...'>
      <Box dir={isRightDirection ? 'rtl' : 'ltr'}>
        <Box>
          <Header setLayoutDirection={setLayoutDirection} />
          <Body />
          <Footer />
        </Box>
      </Box>
    </Suspense>
  )
}
