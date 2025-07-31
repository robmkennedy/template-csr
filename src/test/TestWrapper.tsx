import { type PropsWithChildren } from 'react';
import { MantineProvider } from '@mantine/core';
import { theme } from '~/styles/theme.ts';

export function TestWrapper({children}: PropsWithChildren) {
    return (
        <MantineProvider theme={theme} env='test'>
            {children}
        </MantineProvider>
    );
}