import { type ReactNode, useState } from 'react';
import { Container } from '@mantine/core';
import { InfiniteGrid } from '~shared/components/InfiniteGrid/InfiniteGrid';
import type { SearchResultItem } from '~features/search/types/searchTypes';
import { ResultGridCell } from '~features/search/components/ResultGrid/ResultGridCell/ResultGridCell';
import { DetailDrawer } from '~features/search/components/DetailDrawer/DetailDrawer';
import { useSearchQuery } from '~features/search/api/useSearchQuery';
import { useSearchTerm } from '~features/search/hooks/searchHooks';

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function ResultGrid() {
    const [selectedItem, setSelectedItem] = useState<SearchResultItem | null>(null);
    const [searchTerm] = useSearchTerm();

    const {
        data = { pages: [] },
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
        isFetchNextPageError
    } = useSearchQuery({ searchTerm });

    const handleDrawerClose = () => {
        setSelectedItem(null);
    };

    const handleCellClick = (selectedItem: SearchResultItem) => {
        setSelectedItem(selectedItem);
    };

    const cells = data.pages.reduce<ReactNode[]>((accumulator, currentPage) => {
        const currentCells = currentPage.Search.map((resultItem) => {
            return <ResultGridCell resultItem={resultItem} onClick={handleCellClick}/>
        });
        return accumulator.concat(currentCells);
    }, []);

    console.log(cells);

    return (
        <Container size='xl'>
            <InfiniteGrid
                cells={cells}
                cols={{ base: 2, xs: 4, sm: 5, md: 6, lg: 7 }}
                hasMore={hasNextPage}
                isError={isFetchNextPageError}
                isLoading={isFetchingNextPage}
                onShowMore={fetchNextPage}
            />
            <DetailDrawer selectedItem={selectedItem} onClose={handleDrawerClose} />
        </Container>
    );
}
