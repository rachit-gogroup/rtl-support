import React from 'react'
import { Box, Typography, Card, CardContent } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageSelector from './LanguageSelector';

export default function Demo() {
    const { t } = useTranslation();

    return (
        <Card className='card-content'>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {t('greeting')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {t('desc')}
                </Typography>
            </CardContent>
        </Card>
    )
}
