import { AppShell, Burger, Group } from '@mantine/core';
import { Header } from '~app/components/Header/Header';
import { Navbar } from '~app/components/Navbar/Navbar';
import { Footer } from '~app/components/Footer/Footer';
import { Outlet } from 'react-router';

import { useNavbarOpened } from '~app/hooks/appHooks';

export function App() {
    const [navbarOpened, toggleNavbarOpened] = useNavbarOpened();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !navbarOpened } }}
            footer={{ height: 60 }}
            padding='md'>
            <AppShell.Header>
                <Group h='100%' px='md'>
                    <Burger opened={navbarOpened} onClick={toggleNavbarOpened} hiddenFrom='sm' size='sm' />
                    <Header />
                </Group>
            </AppShell.Header>

            <AppShell.Navbar>
                <Navbar />
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>

            <AppShell.Footer>
                <Footer />
            </AppShell.Footer>
        </AppShell>
    );
}
