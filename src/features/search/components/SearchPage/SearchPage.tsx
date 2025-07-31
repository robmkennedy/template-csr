import { Stack } from '@mantine/core';
import { Page } from '~/shared/components/Page/Page';
import { SearchBar } from '~features/search/components/SearchBar/SearchBar';
import { ResultContainer } from '~features/search/components/ResultContainer/ResultContainer';

/**
 * The home page of the application. It presents a search bar to the user allowing
 * them to search for a particular movie based on title. IF a movie is found, the poster
 * and detail information for the movie is displayed beneath the search bar.
 */
export function SearchPage() {
    return (
        <Page>
            <Stack mt='lg' gap='xl'>
                <SearchBar />
                <ResultContainer />
            </Stack>
        </Page>
    );
}
