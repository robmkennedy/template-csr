import type { ReactNode } from 'react';
import { Table } from '@mantine/core';
import type { DetailsResult } from '~features/search/types/searchTypes';

type DetailContentProps = {
    details: DetailsResult;
};

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function DetailContent({ details }: DetailContentProps) {
    const buildRow = (label: string, value: string): ReactNode => {
        return (
            <Table.Tr>
                <Table.Th top={1}>{label}</Table.Th>
                <Table.Td>{value}</Table.Td>
            </Table.Tr>
        );
    };

    return (
        <Table>
            <Table.Tbody>
                {details.Year && buildRow('Year', details.Year)}
                {details.Genre && buildRow('Genre', details.Genre)}
                {details.Plot && buildRow('Plot', details.Plot)}
                {details.Actors && buildRow('Actors', details.Actors)}
                {details.Rated && buildRow('Rated', details.Rated)}
            </Table.Tbody>
        </Table>
    );
}
