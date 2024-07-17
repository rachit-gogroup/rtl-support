import poppinsBold from '../assets/poppins-font/Poppins-Bold.ttf';
import poppinsSemiBold from '../assets/poppins-font/Poppins-SemiBold.ttf';
import poppinsMedium from '../assets/poppins-font/Poppins-Medium.ttf';
import poppinsRegular from '../assets/poppins-font/Poppins-Regular.ttf';
import poppinsLight from '../assets/poppins-font/Poppins-Light.ttf';

export const MuiCssBaseline = {
  styleOverrides: `
      @font-face {
        font-family: 'poppins-font-bold';
        font-style: normal;
        font-display: auto;
        src: url(${poppinsBold}) format('truetype');
      }
      @font-face {
        font-family: 'poppins-font-semibold';
        font-style: normal;
        font-display: auto;
        src: url(${poppinsSemiBold}) format('truetype');
      }
      @font-face {
        font-family: 'poppins-font-medium';
        font-style: normal;
        font-display: auto;
        src: url(${poppinsMedium}) format('truetype');
      }
      @font-face {
        font-family: 'poppins-font-regular';
        font-style: normal;
        font-display: auto;
        src: url(${poppinsRegular}) format('truetype');
      }
      @font-face {
        font-family: 'poppins-font-light';
        font-style: normal;
        font-display: auto;
        src: url(${poppinsLight}) format('truetype');
      }
    `,
};
