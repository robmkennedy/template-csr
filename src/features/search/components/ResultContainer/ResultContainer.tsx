import { Container, Loader } from '@mantine/core';
import { Notice } from '~common/components/Notice/Notice';
import { ResultGrid } from '~features/search/components/ResultGrid/ResultGrid';
import { useSearchQuery } from '~features/search/api/useSearchQuery';
import { useSearchTerm } from '~features/search/slices/searchFeatureSlice';
import { useTranslation } from 'react-i18next';

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function ResultContainer() {
    const { t } = useTranslation();
    const [searchTerm] = useSearchTerm();
    const searchResult = useSearchQuery({ searchTerm });
    const { data, isSuccess, isPending, isError } = searchResult;
    const { hasNextPage, fetchNextPage, isFetchingNextPage, isFetchNextPageError } = searchResult; // Tidier!

    console.log(searchResult);

    return (
        <Container mt='lg' size='xl'>
            {!isError && !isSuccess && !searchTerm && <Notice message={t('search.results.enter')} />}
            {isError && !isPending && <Notice message={t('search.results.error')} />}
            {!isError && isPending && searchTerm && <Loader />}
            {!isError && !isPending && isSuccess && (
                <ResultGrid
                    searchTerm={searchTerm}
                    dataPages={data?.pages}
                    hasNextPage={hasNextPage}
                    fetchNextPage={fetchNextPage}
                    isFetchingNextPage={isFetchingNextPage}
                    isFetchNextPageError={isFetchNextPageError}
                />
            )}
        </Container>
    );
}
