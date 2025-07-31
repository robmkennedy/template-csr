import type { SearchResultItem } from '~features/search/types/searchTypes';
import { ImageCard } from '~shared/components/ImageCard/ImageCard';

type ResultGridCellProps = {
    resultItem: SearchResultItem;
    onClick: (selectedItem: SearchResultItem) => void;
};

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function ResultGridCell({ resultItem, onClick }: ResultGridCellProps) {
    const { imdbID, Poster, Title, Year } = resultItem;
    return (
        <ImageCard
            key={imdbID}
            ratio={1 / 1.54}
            img={Poster}
            alt={`${Title} (${Year})`}
            onClick={() => onClick(resultItem)}
        />
    );
}
