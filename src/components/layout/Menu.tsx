import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import LabelIcon from '@mui/icons-material/Label';

import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
    useSidebarState,
} from 'react-admin';

import employees from '../employees';
import chemicals from '../chemicals';
import moc from '../moc';
import riskAssessments from '../riskAssessments';
import waste from '../waste';
import SubMenu from './SubMenu';
import Moc from '../moc';

type MenuName = 'menuEmployees' | 'menuChemicals' | 'menuMOC' | 'menuRiskAssessments' | 'menuWaste';

const Menu = ({ dense = false }: MenuProps) => {
    const [state, setState] = useState({
        menuEmployees: true,
        menuChemicals: true,
        menuMOC: true,
        menuRiskAssessments: true,
        menuWaste: true,
    });
    const translate = useTranslate();
    const [open] = useSidebarState();

    const handleToggle = (menu: MenuName) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <Box
            sx={{
                width: open ? 200 : 50,
                marginTop: 1,
                marginBottom: 1,
                transition: theme =>
                    theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
            }}
        >
            <DashboardMenuItem />
            <SubMenu
                handleToggle={() => handleToggle('menuEmployees')}
                isOpen={state.menuEmployees}
                name="Employees"
                icon={<employees.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to="/employees"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.commands.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<chemicals.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to="/orgchart"
                    state={{ _scrollToTop: true }}
                    primaryText={translate(`resources.invoices.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<moc.icon />}
                    dense={dense}
                />
            </SubMenu>
            
        </Box>
    );
};

export default Menu;