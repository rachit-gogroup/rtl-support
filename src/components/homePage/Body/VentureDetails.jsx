import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { VENTURE_DETAILS, CO_PILOT_IMAGE, VENTURE_STUDIO_IMAGE, DEDICATED_VENTURE_TEAMS_IMAGE } from '../../../utils/siteConstants'
import { useTranslation, Trans } from "react-i18next";

export default function VentureDetails() {
    let { t } = useTranslation(),
        { 
            venture_platform_work, venture_platform_accelerates, explore, 
            enhance_your_idea, find_test_right_idea, discover_co_pilot,
            dedicated_venture_teams, full_time_long_team, build_and_scale
        } = t('body');

    const getTranslation = (key) => t('body')[key];

    return (
        <Box mt={2} bgcolor='rgb(219, 231, 251, 0.4)' padding='168px 94px 24px'>
            <Box display='flex' justifyContent='space-between'>
                {VENTURE_DETAILS.map(data => 
                    <Box key={data.id + data.label}>
                        <Typography variant='h2_semibold' textAlign='center' color='rgb(255, 51, 87, 1)'>{data.value}</Typography>
                        <Typography variant='p2' mt={2} textAlign='center'>{getTranslation(data.label)}</Typography>
                    </Box>
                )}
            </Box>
            <Box mt={14}>
                <Typography variant='h3_semibold' mt={2} textAlign='center' lineHeight='1'>
                   <Trans i18nKey={venture_platform_work} components={{ 1: <br /> }} />
                </Typography>
                <Typography variant='p1' mt={4} textAlign='center' lineHeight='1' sx={{ opacity: '0.7' }}>
                    <Trans i18nKey={venture_platform_accelerates} components={{ 1: <br /> }} />
                </Typography>
            </Box>
            <Box mt={18} display='flex' justifyContent='space-between'gap={18} paddingInlineStart={10} paddingBlockEnd={4}>
                <Box>
                    <Typography variant='p3' mt={2} sx={{ opacity: '0.5' }}>
                       {discover_co_pilot}
                    </Typography>
                    <Typography variant='h3_semibold' mt={4} lineHeight='1'>
                        {find_test_right_idea}
                    </Typography>
                    <Typography variant='p1' mt={4} lineHeight='1.3' sx={{ opacity: '0.7' }}>
                        {enhance_your_idea}
                    </Typography>
                    <Button variant='outlined' sx={{ width: '180px', height: '55px', marginTop: '40px' }}>
                        <Typography variant='h3' color='rgb(255, 51, 87, 1)' letterSpacing='1px'>
                            {explore}
                        </Typography>
                    </Button>
                </Box>
                <Box mt='-50px'>
                    <img src={CO_PILOT_IMAGE} alt="co_pilot_image" loading='lazy' width='643' height='442' />
                </Box>
            </Box>
            <Box mt={18} display='flex' justifyContent='space-between' gap={18} paddingInlineStart={10} paddingBlockEnd={4}>
                <Box>
                    <img src={DEDICATED_VENTURE_TEAMS_IMAGE} alt="dedicated_venture_teams_image" loading='lazy' width='633' height='404' />
                </Box>
                <Box mt='-16px'>
                    <Typography variant='p3' mt={2} sx={{ opacity: '0.5' }}>
                       {dedicated_venture_teams}
                    </Typography>
                    <Typography variant='h3_semibold' mt={4} lineHeight='1'>
                        {full_time_long_team}
                    </Typography>
                    <Typography variant='p1' mt={4} lineHeight='1.3' sx={{ opacity: '0.7' }}>
                        {build_and_scale}
                    </Typography>
                    <Button variant='outlined' sx={{ width: '180px', height: '55px', marginTop: '40px' }}>
                        <Typography variant='h3' color='rgb(255, 51, 87, 1)' letterSpacing='1px'>{explore}</Typography>
                    </Button>
                </Box>
            </Box>
            <Box mt={18} display='flex' justifyContent='space-between' gap={18} paddingInlineStart={10} paddingBlockEnd={4}>
                <Box>
                    <Typography variant='p3' mt={2} sx={{ opacity: '0.5' }}>
                        {getTranslation('venture_studio')}
                    </Typography>
                    <Typography variant='h3_semibold' mt={4} lineHeight='1'>
                        {getTranslation('pre-validated-ideas')}
                    </Typography>
                    <Typography variant='p1' mt={4} lineHeight='1.3' sx={{ opacity: '0.7' }}>
                        {getTranslation('identify_and_evaluate')}
                    </Typography>
                    <Button variant='outlined' sx={{ width: '180px', height: '55px', marginTop: '40px' }}>
                        <Typography variant='h3' color='rgb(255, 51, 87, 1)' letterSpacing='1px'>
                            {getTranslation('explore')}
                        </Typography>
                    </Button>
                </Box>
                <Box mt={2}>
                    <img src={VENTURE_STUDIO_IMAGE} alt="venture_studio_image" loading='lazy' width='643' height='442' />
                </Box>
            </Box>
            <Box display='flex' justifyContent='center' mt={8} mb={10}>
                <Button variant='rounded' sx={{ width: '220px', height: '55px', marginTop: '30px' }}>
                    <Typography variant='h3' color='#fff'>
                        {getTranslation('start_building_today')}
                    </Typography>
                </Button>
            </Box>
        </Box>
    )
}
