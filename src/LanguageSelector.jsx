import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import { SUPPORTED_LANGUAGES } from "./utils/siteConstants";
import { getLocalStorageItemDetails } from "./utils/helper";

const languages = [
  {code: "en", lang: "English"},
  {code: "ge", lang: "German"},
  {code: "ar", lang: "Arabic"},
];

const LanguageSelector = ({ setLayoutDirection }) => {
  let { i18n } = useTranslation(),
    stored_language = getLocalStorageItemDetails('i18nextLng')?.split('-')?.[0] ?? 'en',
    stored_language_details = SUPPORTED_LANGUAGES[stored_language];

  const changeLanguage = (lng) => {
    let new_language_id = stored_language_details.id + 1,
      new_language_code = '';

    switch(new_language_id) {
      case 1:
        new_language_code = 'en'
        break;
      case 2:
        new_language_code = 'ge'
        break;
      case 3:
        new_language_code = 'ar'
        break;
      default:
        new_language_code = 'en'
    }
    i18n.changeLanguage(new_language_code);

    if (new_language_code === 'ar') setLayoutDirection(true);
    else setLayoutDirection(false);
  };

  return (
    <Box className='language-selector' onClick={() => changeLanguage()}>
      <Typography variant='p2' marginInlineStart='10px'>{stored_language_details?.label}</Typography>
      <Box mt='6px'>
        <img src={stored_language_details.logo} alt='eng' width='28' height='28' />
      </Box>
    </Box>
  );
};

export default LanguageSelector;
