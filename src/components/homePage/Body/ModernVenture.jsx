import React from 'react'
import { Avatar, AvatarGroup, Button, Box, Typography } from '@mui/material'
import { ROADMAP_IMAGE, TEAM_SIZE_IMAGE, LEADERS, TALENT_NETWORK_AVATAR_IMAGES } from '../../../utils/siteConstants'
import { useTranslation, Trans } from "react-i18next";

export default function ModernVenture() {
    let { t } = useTranslation(),
        { modern_venture_platform, startups_get_going, start_building_today, fulltime_talent, loved_by_leaders } = t('body');

    return (
        <Box padding='20px'>
            <Box display='flex' justifyContent='space-evenly' mt={14} paddingInline={5}>
                <Box mt={11}>
                    <img src={ROADMAP_IMAGE} alt='roadmap-image' loading='lazy' width='421' height='446' />
                </Box>
                <Box>
                    <Typography variant='h1' textAlign='center' lineHeight='1' marginInlineStart='-8px'>
                        <Trans i18nKey={modern_venture_platform} components={{ 1: <br /> }} />
                    </Typography>
                    <Typography variant='p1' mt={3} textAlign='center'>{startups_get_going}</Typography>
                    <Box display='flex' justifyContent='center'>
                        <Button variant='rounded' sx={{ width: '220px', height: '55px', marginTop: '30px' }}>
                            <Typography variant='h3' color='#fff'>{start_building_today}</Typography>
                        </Button>
                    </Box>
                    <Box display='flex' mt={7} marginInline={9}>
                        <AvatarGroup>
                            <Avatar alt="avatar-image-1" src={TALENT_NETWORK_AVATAR_IMAGES.image_1} />
                            <Avatar alt="avatar-image-2" src={TALENT_NETWORK_AVATAR_IMAGES.image_2} />
                            <Avatar alt="avatar-image-3" src={TALENT_NETWORK_AVATAR_IMAGES.image_3} />
                            <Avatar alt="avatar-image-4" src={TALENT_NETWORK_AVATAR_IMAGES.image_4} />
                        </AvatarGroup>
                        <Typography variant='p1' mt={1} marginInline={2}>{fulltime_talent}</Typography>
                    </Box>
                </Box>
                <Box mt={-8}>
                    <img src={TEAM_SIZE_IMAGE} alt='roadmap-image' loading='lazy' width='356' height='562' />
                </Box>
            </Box>
            <Box>
                <Typography variant='p3' textAlign='center' letterSpacing='1.6px' sx={{ opacity: '0.5' }}>{loved_by_leaders}</Typography>

                <Box display='flex' justifyContent='space-between' mt={6}>
                    {LEADERS.map(data => 
                        <Box key={data.id + data.label}>
                            <img src={data.value} alt={data.label} loading='lazy' max-width='100%' height='40px' />
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )
}
