import { TranslationMessages } from 'react-admin';
import englishMessages from 'ra-language-english';

const customEnglishMessages: TranslationMessages = {
    ...englishMessages,
    pos: {
        search: 'Search',
        configuration: 'Configuration',
        language: 'Language',
        theme: {
            name: 'Theme',
            light: 'Light',
            dark: 'Dark',
        },
        dashboard: {
            monthly_revenue: 'Monthly Revenue',
            month_history: '30 Day Revenue History',
            new_orders: 'New Orders',
            pending_reviews: 'Pending Reviews',
            all_reviews: 'See all reviews',
            new_customers: 'New Customers',
            all_customers: 'See all customers',
            pending_orders: 'Pending Orders',
            order: {
                items:
                    'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items',
            },
            welcome: {
                title: 'Welcome to the react-admin e-commerce demo',
                subtitle:
                    "This is the admin of an imaginary poster shop. Feel free to explore and modify the data - it's local to your computer, and will reset each time you reload.",
                ra_button: 'react-admin site',
                demo_button: 'Source for this demo',
            },
        },
        menu: {
            employees: 'Employees',
            chemicals: 'Chemicals',
            riskAssessments: 'Risk Assessments',
            moc: 'MOC',
            waste: 'Waste',
        },
    },
    resources: {
        employees: {
            name: 'Employee |||| Employees'
        },
        orgchart: {
            name: 'Org Chart'
        },
    },
};

export default customEnglishMessages;
