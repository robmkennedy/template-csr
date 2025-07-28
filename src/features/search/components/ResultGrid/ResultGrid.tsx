import { type ReactNode, useState } from 'react';
import { Container } from '@mantine/core';
import { ImageCard } from '~common/components/ImageCard/ImageCard';
import { InfiniteGrid } from '~common/components/InfiniteGrid/InfiniteGrid';
import { DetailDrawer } from '~features/search/components/DetailDrawer/DetailDrawer';
import type { SearchResultItem, SearchResultPage } from '~features/search/searchTypes';
import { useSearchQuery } from '~features/search/api/useSearchQuery';

type ResultGridProps = {
    searchTerm: string;
    hasNextPage: boolean;
    fetchNextPage: () => void;
    isFetchingNextPage: boolean;
    isFetchNextPageError: boolean;
    dataPages: SearchResultPage[] | undefined;
};

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function ResultGrid(props: ResultGridProps) {
    const [selectedItem, setSelectedItem] = useState<SearchResultItem | null>(null);
    const sTerm = '';
    console.log(`Search TERM: ` + sTerm)
    const { searchTerm } = props;
    // const { searchTerm, dataPages = [], hasNextPage, fetchNextPage, isFetchingNextPage, isFetchNextPageError } = props;

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
            const { imdbID, Poster, Title, Year } = resultItem;
            return (
                <ImageCard
                    key={imdbID}
                    ratio={1 / 1.54}
                    img={Poster}
                    alt={`${Title} (${Year})`}
                    onClick={() => handleCellClick(resultItem)}
                />
            );
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
