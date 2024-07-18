import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';

const ModernVenture = lazy(() =>
  import("./ModernVenture")
);

const VentureDetails = lazy(() =>
  import("./VentureDetails")
);

export default function Body() {
  return (
    <Suspense fallback='loading...'>
        <Box>
            <ModernVenture />
            <VentureDetails />
        </Box>
    </Suspense>
  )
}
