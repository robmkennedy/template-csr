import { useTranslation } from 'react-i18next';
import { SimpleGrid } from '@mantine/core';
import { FooterLink } from '~app/Footer/FooterLink/FooterLink';
import { aboutIcon, chartsIcon, itemsIcon, searchIcon } from '~assets/icons';

export function Footer() {
    const { t } = useTranslation();

    return (
        <SimpleGrid h='100%' cols={4} spacing={0}>
            <FooterLink to={'search'} icon={searchIcon} label={t('app.header.nav.search')} />
            <FooterLink to={'items'} icon={itemsIcon} label={t('app.header.nav.items')} />
            <FooterLink to={'charts'} icon={chartsIcon} label={t('app.header.nav.charts')} />
            <FooterLink to={'about'} icon={aboutIcon} label={t('app.header.nav.about')} />
        </SimpleGrid>
    );
}
