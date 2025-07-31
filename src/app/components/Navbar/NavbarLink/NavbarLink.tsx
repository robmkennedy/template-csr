import type { ReactNode } from 'react';
import { NavLink as RouterLink } from 'react-router';
import { NavLink } from '@mantine/core';
import { useNavbarOpened } from '~app/hooks/appHooks';

type NavbarLinkProps = {
    to: string;
    label: string;
    icon: ReactNode;
};

export function NavbarLink({ to, label, icon }: NavbarLinkProps) {
    const toggleNavbarOpened = useNavbarOpened()[1];

    return (
        <NavLink
            to={to}
            label={label}
            variant='subtle'
            leftSection={icon}
            component={RouterLink}
            onClick={toggleNavbarOpened}
        />
    );
}
