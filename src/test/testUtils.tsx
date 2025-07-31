import { type ReactNode } from 'react';
import { render as testingLibraryRender, type RenderOptions } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { theme } from '~/styles/theme.ts';

const TestWrapper = (children: ReactNode) => {
    return (
        <MantineProvider theme={theme} env='test'>
            {children}
        </MantineProvider>
    );
};

const customRender = (ui: ReactNode, options: RenderOptions) =>
    testingLibraryRender(ui, { wrapper: TestWrapper, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
