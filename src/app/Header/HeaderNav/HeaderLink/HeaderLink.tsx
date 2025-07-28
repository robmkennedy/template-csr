import type { ReactNode } from 'react';
import { NavLink as RouterLink } from 'react-router';
import { NavLink } from '@mantine/core';

type HeaderLinkProps = {
    to: string;
    label: string;
    icon: ReactNode;
};

export function HeaderLink({ to, label, icon }: HeaderLinkProps) {
    return (
        <NavLink
            w='auto'
            variant='subtle'
            component={RouterLink}
            to={to}
            leftSection={icon}
            label={label}
        />
    );
}
