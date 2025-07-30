import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { App } from '~/app/App/App';
import { theme } from '~common/styles/theme';
import '~common/styles/main.css';
import '~/i18n/i18n';

const queryClient = new QueryClient();

(window as any).__TANSTACK_QUERY_CLIENT__ = queryClient;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <MantineProvider theme={theme}>
                    <App />
                </MantineProvider>
            </QueryClientProvider>
        </BrowserRouter>
    </StrictMode>
);
