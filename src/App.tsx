import * as React from 'react';
import { Admin, CustomRoutes, Resource } from 'react-admin';
// import polyglotI18nProvider from 'ra-i18n-polyglot';
import { Route } from 'react-router';
import lb4Provider from 'react-admin-lb4';

import { authProvider } from './components/authProvider';
import { Login, Layout } from './components/layout';
import { Dashboard } from './components/dashboard';
import englishMessages from './components/i18n/en';
import { lightTheme } from './components/layout/themes';

import employeess from './components/employees';
import chemicals from './components/chemicals';
import products from './components/moc';
import invoices from './components/riskAssessments';
import categories from './components/waste';


import Configuration from './components/configuration/Configuration';
import employees from './components/employees';
import riskAssessments from './components/riskAssessments';
import waste from './components/waste';
import moc from './components/moc';

/**const i18nProvider = polyglotI18nProvider(locale => {
    if (locale === 'fr') {
        return import('./i18n/fr').then(messages => messages.default);
    }

    // Always fallback on english
    return englishMessages;
}, 'en'); **/

const App = () => {
    return (
        <Admin
            title=""
            dataProvider={lb4Provider('http:localhost:4000')}
            authProvider={authProvider}
            dashboard={Dashboard}
            loginPage={Login}
            layout={Layout}
            disableTelemetry
            theme={lightTheme}
        >
            <CustomRoutes>
                <Route path="/configuration" element={<Configuration />} />               
            </CustomRoutes>
            <Resource name="employees" {...employees} />
            <Resource name="chemicals" {...chemicals} options={{ label: 'Orders' }}
            />
            <Resource name="MOC" {...moc} />
            <Resource name="riskAssssments" {...riskAssessments} />
            <Resource name="waste" {...waste} />
            
        </Admin>
    );
};

export default App;