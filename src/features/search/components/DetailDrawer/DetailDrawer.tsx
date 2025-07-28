import { Drawer, Table } from '@mantine/core';
import type { SearchResultItem } from '~features/search/searchTypes';
import { useDetailsQuery } from '~features/search/api/useDetailsQuery';
import { data } from 'react-router';
import { useGetItemDetailsQuery } from '~features/search/slices/searchApiSlice';

type DetailDrawerProps = {
    selectedItem: SearchResultItem | null;
    onClose: () => void;
};

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function DetailDrawer({ selectedItem, onClose }: DetailDrawerProps) {
    const { data, isSuccess, isFetching, isError } = useGetItemDetailsQuery({ imdbID: selectedItem?.imdbID });

    // console.log(data);

    const handleDrawerClose = () => {
        onClose();
    };

    return (
        <Drawer position='right' opened={!!selectedItem} onClose={handleDrawerClose} title={selectedItem?.Title}>

        </Drawer>
    );
}
