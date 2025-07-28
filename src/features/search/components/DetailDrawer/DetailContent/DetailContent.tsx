import { AspectRatio, Card, Image, Table } from '@mantine/core';
import type { SearchResultItem } from '~features/search/api/useSearchQuery';
import styles from './DetailContent.module.css';
import { data } from 'react-router';

type DetailContentProps = {
    dataItem: SearchResultItem;
    onCellClick: (dataItem: SearchResultItem) => void;
};

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function DetailContent({ dataItem }: DetailContentProps) {

    return (
        <Table>
            <Table.Tbody>
                <Table.Tr>
                    <Table.Th vert='top' top={1}>Year</Table.Th>
                    <Table.Td>{data?.Year}</Table.Td>
                </Table.Tr>                    <Table.Tr>
                <Table.Th justify='top'>Plot</Table.Th>
                <Table.Td>{data?.Plot}</Table.Td>
            </Table.Tr>
            </Table.Tbody>
        </Table>
    );
}
