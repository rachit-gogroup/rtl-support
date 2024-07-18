import React from 'react'
import { Box, Divider, Typography, Grid } from '@mui/material'
import GoGroupLogo from '../../../shared/GoGroupLogo'
import { FOOTER_DETAILS } from '../../../utils/siteConstants'
import { useTranslation, Trans } from "react-i18next";

export default function Footer() {
    let { t } = useTranslation();

    const getTranslation = (key) => t('footer')[key];

    return (
        <Box padding='112px 64px 48px' bgcolor='rgb(0, 0, 0, 1)' sx={{ borderTopLeftRadius: '32px', borderTopRightRadius: '32px' }}>
            <Grid container display='flex' justifyContent='space-between'>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Box>
                        <GoGroupLogo textColor='#fff' />
                        <Typography color='rgb(255, 255, 255, 0.6)' variant='p2' mt={6} lineHeight={1.5}>
                            {getTranslation('startups_get_going')}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Box display='flex' justifyContent='space-between'>
                        <Box>
                            <Typography variant='p2' color='rgb(255, 51, 87, 1)'>{getTranslation('company')}</Typography>
                            <Box mt={6}>
                                {FOOTER_DETAILS.COMPANY_TYPES.map(data =>
                                    <Box key={data.label + data.id} mt={data.id !== 1 && 4}>
                                        <Typography variant='p2' color='rgb(255, 255, 255, 0.6)'>
                                            {getTranslation(data.label)}
                                        </Typography>
                                    </Box>
                                )}
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography variant='p2' color='rgb(255, 51, 87, 1)'>{getTranslation('legal')}</Typography>
                                <Box mt={6}>
                                    {FOOTER_DETAILS.LEGAL_TYPES.map(data =>
                                        <Box key={data.label + data.id} mt={data.id !== 1 && 4}>
                                            <Typography variant='p2' color='rgb(255, 255, 255, 0.6)' mt={data.id !== 1 && 4}>
                                                {getTranslation(data.label)}
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Typography variant='p2' color='rgb(255, 51, 87, 1)'>{getTranslation('company')}</Typography>
                                <Box mt={6}>
                                    {FOOTER_DETAILS.COMPANY_JOB_TYPES.map(data =>
                                        <Box key={data.label + data.id} mt={data.id !== 1 && 4}>
                                            <Typography variant='p2' color='rgb(255, 255, 255, 0.6)' mt={data.id !== 1 && 4}>
                                                {getTranslation(data.label)}
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Box mt={14}>
                <Divider sx={{ backgroundColor: '#70707070' }} />
                <Typography variant='p2' mt={6} color='rgb(255, 255, 255, 0.7)' textAlign='center'>
                    {getTranslation('copyright')}
                </Typography>
            </Box>
        </Box>
    )
}
