import { Group, NavLink } from '@mantine/core';

export function NavLink() {
    return (
        <Group p='md'>
            <NavLink href='#required-for-focus' label='With'></NavLink>
            <NavLink href='#required-for-focus' label='Contacts'></NavLink>
            <NavLink href='#required-for-focus' label='Support'></NavLink>
        </Group>
    );
}