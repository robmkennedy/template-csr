import { Group } from '@mantine/core';
import { NavbarLink } from '~app/components/Navbar/NavbarLink/NavbarLink';
import { aboutIcon, chartsIcon, itemsIcon, searchIcon } from '~assets/icons';
import { useTranslation } from 'react-i18next';


export function Navbar() {
    const { t } = useTranslation();

    return (
        <Group p='md'>
            <NavbarLink to={'search'} icon={searchIcon} label={t('app.header.nav.search')} />
            <NavbarLink to={'items'} icon={itemsIcon} label={t('app.header.nav.items')} />
            <NavbarLink to={'charts'} icon={chartsIcon} label={t('app.header.nav.charts')} />
            <NavbarLink to={'about'} icon={aboutIcon} label={t('app.header.nav.about')} />
        </Group>
    );
}