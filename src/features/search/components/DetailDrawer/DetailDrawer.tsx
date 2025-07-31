import { Box, Drawer } from '@mantine/core';
import type { SearchResultItem } from '~features/search/types/searchTypes';
import { useDetailsQuery } from '~features/search/api/useDetailsQuery';
import { DetailContent } from '~features/search/components/DetailDrawer/DetailContent/DetailContent';
import { Notice } from '~shared/components/Notice/Notice';
import { Loader } from '~shared/components/Loader/Loader';
import { t } from 'i18next';

type DetailDrawerProps = {
    selectedItem: SearchResultItem | null;
    onClose: () => void;
};

/**
 * A text element that can be shared between the pages and used as the page title.
 */
export function DetailDrawer({selectedItem, onClose}: DetailDrawerProps) {
    const {data, isSuccess, isPending, isError} = useDetailsQuery({imdbID: selectedItem?.imdbID});

    const handleDrawerClose = () => {
        onClose();
    };

    return (
        <Drawer position="right" opened={!!selectedItem} onClose={handleDrawerClose} title={selectedItem?.Title}>
            <Box mt="xl">
                {isError && <Notice message={t('search.details.error')} />}
                {!isError && isPending && <Loader message={t('search.details.loading')} />}
                {!isError && !isPending && isSuccess && <DetailContent details={data} />}
            </Box>
        </Drawer>
    );
}
