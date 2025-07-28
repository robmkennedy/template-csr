import { Container, Loader as MantineLoader } from '@mantine/core';

type LoaderProps = {
    message?: string;
};

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function Loader({ message }: LoaderProps) {
    return (
        <Container fluid>
            <MantineLoader></MantineLoader>
            {message && <div>{message}</div>}
        </Container>
    );
}
