import { Box, Center, Container, Loader as MantineLoader } from '@mantine/core';

type LoaderProps = {
    message?: string;
};

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function Loader({ message }: LoaderProps) {
    return (
        <Container fluid>
            <Center>
                <MantineLoader />
            </Center>
            {message && <Center mt={'md'}><Box>{message}</Box></Center>}
        </Container>
    );
}
