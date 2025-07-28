import type { ReactNode } from 'react';
import { NavLink as RouterNavLink } from 'react-router';
import { NavLink } from '@mantine/core';
import styles from './FooterLink.module.css';

type FooterLinkProps = {
    to: string;
    label: string;
    icon: ReactNode;
};

export function FooterLink({ to, label, icon }: FooterLinkProps) {
    return (
        <NavLink
            variant='subtle'
            classNames={{ root: styles.root, section: styles.section }}
            component={RouterNavLink}
            to={to}
            label={label}
            leftSection={icon}
        />
    );
}
