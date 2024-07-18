import { createTheme } from "@mui/material/styles";
import { typography } from './typography';
import { MuiCssBaseline } from './fontDetails';

const breakpointsTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0, // extra-small
        sm: 320, // mobile
        md: 600, // tab
        lg: 1280, // 13 inch laptops
        xl: 1536, // 14 inch and above laptops
      },
    },
});

export const theme = createTheme(breakpointsTheme, {
    // palette: paletteColors,
    typography: typography(breakpointsTheme),
    components: {
      MuiCssBaseline,
      MuiButton: {
          styleOverrides: {
            root: {
              height: '40px',
              textTransform: 'none',
              cursor: 'pointer',
      
              '&:hover': {
                backgroundColor: 'none'
              },
              '&.Mui-disabled': {
                pointerEvents: 'auto',
                cursor: 'not-allowed',
              },
            },
            text: {
              textDecoration: 'underline',
      
              '&:hover': {
                backgroundColor: 'inherit !important',
              },
            },
            contained: {
              borderRadius: '32px',
            },
            outlined: {
              borderRadius: '32px',
              border: '1px solid rgb(255, 51, 87, 1)',
              backgroundColor: 'transparent'
            },
            rounded: {
              padding: '16px 24px 16px 24px',
              borderRadius: '32px',
              backgroundColor: 'rgb(255, 51, 87, 1)',
            }
          },
      },
      MuiAvatarGroup: {
        styleOverrides: {
          root: {
            display: 'flex',
            flexDirection: 'row'
          }
        }
      }
    },
});
