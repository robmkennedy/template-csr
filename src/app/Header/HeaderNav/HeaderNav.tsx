import { Group, UnstyledButton } from '@mantine/core';

export function HeaderNav() {
    return (
        <Group gap='md' visibleFrom='sm'>
            <UnstyledButton>Blog</UnstyledButton>
            <UnstyledButton>Contacts</UnstyledButton>
            <UnstyledButton>Support</UnstyledButton>
        </Group>
    );
}
