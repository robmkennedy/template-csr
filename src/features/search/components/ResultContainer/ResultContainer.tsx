import { Container } from '@mantine/core';
import { Notice } from '~shared/components/Notice/Notice';
import { Loader } from '~shared/components/Loader/Loader';
import { ResultGrid } from '~features/search/components/ResultGrid/ResultGrid';
import { useSearchQuery } from '~features/search/api/useSearchQuery';
import { useSearchTerm } from '~features/search/hooks/searchHooks';
import { useTranslation } from 'react-i18next';

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function ResultContainer() {
    const { t } = useTranslation();
    const [searchTerm] = useSearchTerm();
    const { isSuccess, isPending, isError } = useSearchQuery({ searchTerm });

    return (
        <Container mt='lg' size='xl'>
            {!isError && !isSuccess && !searchTerm && <Notice message={t('search.results.enter')} />}
            {isError && !isPending && <Notice message={t('search.results.error')} />}
            {!isError && isPending && searchTerm && <Loader message={t('search.results.loading')} />}
            {!isError && !isPending && isSuccess && <ResultGrid />}
        </Container>
    );
}
