import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Main } from '~app/Main/Main.tsx';
import { Header } from '~app/Header/Header.tsx';
import { Navbar } from '~app/Navbar/Navbar.tsx';

export function App() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding='md'>
            <AppShell.Header>
                <Group h='100%' px='md'>
                    <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
                    <Header />
                </Group>
            </AppShell.Header>

            <AppShell.Navbar>
                <Navbar />
            </AppShell.Navbar>

            <AppShell.Main>
                <Main />
            </AppShell.Main>
        </AppShell>
    );
}
