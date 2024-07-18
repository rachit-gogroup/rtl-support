import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import GoGroupLogo from '../../../shared/GoGroupLogo';
import { SUPPORTED_LANGUAGES } from '../../../utils/siteConstants';
import LanguageSelector from '../../../LanguageSelector'
import { useTranslation } from "react-i18next";

export default function Header({ setLayoutDirection }) {
    let { t } = useTranslation(),
        { for_startups, for_innovation_units, success_stories, carrier, get_in_touch } = t('header');

    return (
        <Box display='flex' justifyContent='space-between' padding='20px' mt={3}>
            <GoGroupLogo textColor='#000' />
            <Box display='flex'>
                <Typography variant='p2'>{for_startups}</Typography>
                <Typography marginInlineStart={2} variant='p2'>{for_innovation_units}</Typography>
                <Typography marginInlineStart={2} variant='p2'>{success_stories}</Typography>
            </Box>
            <Box display='flex'>
                <Typography variant='p2' color='rgb(216, 85, 96, 1)'>GoGroup Studios</Typography>
                <Typography marginInlineStart={2} variant='p2' color='rgb(216, 85, 96, 1)'>{carrier}</Typography>
            </Box>
            <Box display='flex' gap={3}>
                <LanguageSelector setLayoutDirection={setLayoutDirection} />
                <Button variant='rounded' sx={{ width: '205px', height: '55px', marginTop: '-15px' }}>
                    <Typography variant='h3' color='#fff'>{get_in_touch}</Typography>
                </Button>
            </Box>
        </Box>
    )
}
