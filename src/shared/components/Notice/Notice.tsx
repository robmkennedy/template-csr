import { Container, Text } from '@mantine/core';

type NoticeProps = {
    message: string;
};

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function Notice({ message }: NoticeProps) {
    return <Container fluid>{message && <Text ta='center'>{message}</Text>}</Container>;
}
