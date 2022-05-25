import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

import { useTranslate, useLocaleState, useTheme, Title } from 'react-admin';

import { darkTheme, lightTheme } from '../layout/themes';

const Configuration = () => {
    const translate = useTranslate();
    const [locale, setLocale] = useLocaleState();
    const [theme, setTheme] = useTheme();

    return (
        <>
        <Card>
            <Title title={translate('pos.configuration')} />
            <CardContent>
                <Box sx={{ width: '10em', display: 'inline-block' }}>
                    {translate('pos.theme.name')}
                </Box>
                <Button
                    variant="contained"
                    sx={{ margin: '1em' }}
                    color={
                        theme?.palette?.mode === 'light'
                            ? 'primary'
                            : 'secondary'
                    }
                    onClick={() => setTheme(lightTheme)}
                >
                    {translate('pos.theme.light')}
                </Button>
                <Button
                    variant="contained"
                    sx={{ margin: '1em' }}
                    color={
                        theme?.palette?.mode === 'dark'
                            ? 'primary'
                            : 'secondary'
                    }
                    onClick={() => setTheme(darkTheme)}
                >
                    {translate('pos.theme.dark')}
                </Button>
            </CardContent>
            <CardContent>
                <Box sx={{ width: '10em', display: 'inline-block' }}>
                    {translate('pos.language')}
                </Box>
                <Button
                    variant="contained"
                    sx={{ margin: '1em' }}
                    color={locale === 'en' ? 'primary' : 'secondary'}
                    onClick={() => setLocale('en')}
                >
                    en
                </Button>
                <Button
                    variant="contained"
                    sx={{ margin: '1em' }}
                    color={locale === 'fr' ? 'primary' : 'secondary'}
                    onClick={() => setLocale('fr')}
                >
                    fr
                </Button>
            </CardContent>
        </Card>
        <Accordion>
            <AccordionSummary 
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>
                    Sites
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>
        </>
    );
};

export default Configuration;
