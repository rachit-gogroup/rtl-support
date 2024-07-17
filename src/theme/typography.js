export const typography = (breakpointsTheme) => {
    const renderResponsiveFontSizes = (xs, sm, md, lg, xl) => {
      return {
        [breakpointsTheme.breakpoints.up("xs")]: {
          fontSize: xs,
        },
        [breakpointsTheme.breakpoints.up("sm")]: {
          fontSize: sm,
        },
        [breakpointsTheme.breakpoints.up("md")]: {
          fontSize: md,
        },
        [breakpointsTheme.breakpoints.up("lg")]: {
          fontSize: lg,
        },
        [breakpointsTheme.breakpoints.up("xl")]: {
          fontSize: xl,
        },
      };
    };
  
    return {
      fontFamily: ["poppins"],
      h1: {
        display: "block",
        fontFamily: ["poppins-font-semibold"],
        fontWeight: 600,
        color: '#000',
        ...renderResponsiveFontSizes(20, 22, 24, 60, 60),
      },
      h2: {
        display: "block",
        fontFamily: ["poppins-font-semibold"],
        fontWeight: 600,
        color: '#000',
        ...renderResponsiveFontSizes(16, 18, 20, 22, 20),
      },
      h2_semibold: {
        display: "block",
        fontFamily: ["poppins-font-semibold"],
        fontWeight: 600,
        color: '#000',
        ...renderResponsiveFontSizes(16, 18, 20, 36, 36),
      },
      h3: {
        display: "block",
        fontFamily: ["poppins-font-medium"],
        fontWeight: 600,
        color: '#000',
        ...renderResponsiveFontSizes(16, 18, 20, 16, 16),
      },
      h3_semibold: {
        display: "block",
        fontFamily: ["poppins-font-medium"],
        fontWeight: 600,
        color: '#000',
        ...renderResponsiveFontSizes(16, 18, 20, 48, 48),
      },
      p1: {
        display: "block",
        fontFamily: ["poppins-font-regular"],
        fontWeight: 400,
        color: '#000',
        ...renderResponsiveFontSizes(16, 18, 20, 20, 20),
      },
      p2: {
        display: "block",
        fontFamily: ["poppins-font-medium"],
        fontWeight: 400,
        color: '#000',
        ...renderResponsiveFontSizes(16, 18, 20, 16, 16),
      },
      p3: {
        display: "block",
        fontFamily: ["poppins-font-medium"],
        fontWeight: 600,
        color: '#000',
        ...renderResponsiveFontSizes(16, 18, 20, 14, 14),
      }
    };
};
  