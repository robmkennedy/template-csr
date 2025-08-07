import { Group } from '@mantine/core';
import { HeaderLink } from '~app/components/Header/HeaderNav/HeaderLink/HeaderLink';
import { aboutIcon, chartsIcon, itemsIcon, searchIcon } from '~assets/images/icons';
import { useTranslation } from 'react-i18next';

export function HeaderNav() {
    const { t } = useTranslation();

    return (
        <Group gap='md' visibleFrom='sm'>
            <HeaderLink to={'search'} icon={searchIcon} label={t('app.header.nav.search')} />
            <HeaderLink to={'items'} icon={itemsIcon} label={t('app.header.nav.items')} />
            <HeaderLink to={'charts'} icon={chartsIcon} label={t('app.header.nav.charts')} />
            <HeaderLink to={'about'} icon={aboutIcon} label={t('app.header.nav.about')} />
        </Group>
    );
}
