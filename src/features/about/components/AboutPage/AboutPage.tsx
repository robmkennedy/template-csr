import { Center } from '@mantine/core';
import { Page } from '~/shared/components/Page/Page';

/**
 * The home page of the application. It presents a search bar to the user allowing
 * them to search for a particular movie based on title. IF a movie is found, the poster
 * and detail information for the movie is displayed beneath the search bar.
 */
export function AboutPage() {
    return (
        <Page>
            <Center mt='xl'>
                <div>About Page</div>
            </Center>
        </Page>
    );
}
