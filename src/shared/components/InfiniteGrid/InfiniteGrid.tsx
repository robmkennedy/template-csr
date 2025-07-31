import type { ReactNode } from 'react';
import { Button, SimpleGrid, Stack, type StyleProp } from '@mantine/core';
import { Loader } from '~shared/components/Loader/Loader';
import { Notice } from '~shared/components/Notice/Notice';
import { useTranslation } from 'react-i18next';
import { moreIcon } from '~assets/icons';

type InfiniteGridProps = {
    cells?: ReactNode[];
    cols: StyleProp<number>;
    hasMore?: boolean;
    isError?: boolean;
    isLoading?: boolean;
    onShowMore?: () => void;
};

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function InfiniteGrid(props: InfiniteGridProps) {
    const { t } = useTranslation();
    const { cells = [], cols = {}, isError = false, isLoading = false, hasMore = false, onShowMore } = props;

    console.log(props);

    const handleMoreClick = () => {
        onShowMore && onShowMore();
    };

    return (
        <Stack align='center' gap='xl'>
            {cells.length === 0 && <Notice message={t('common.grid.empty')} />}
            {!isError && <SimpleGrid cols={cols}>{cells}</SimpleGrid>}
            {isError && <Notice message={t('common.grid.error')} />}
            {!isError && !isLoading && hasMore  && (
                <Button variant='outline' rightSection={moreIcon} onClick={handleMoreClick}>
                    {t('common.grid.more')}
                </Button>
            )}
            {!isError && isLoading && <Loader />}
        </Stack>
    );
}
