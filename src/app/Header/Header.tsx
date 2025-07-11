import { Group } from '@mantine/core';
import { HeaderNav } from '~app/Header/HeaderNav/HeaderNav';
import { HeaderLogo } from '~app/Header/HeaderLogo/HeaderLogo';

export function Header() {
    return (
        <Group justify='space-between' flex={1}>
            <HeaderLogo />
            <HeaderNav />
        </Group>
    );
}
