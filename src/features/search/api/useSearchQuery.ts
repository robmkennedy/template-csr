import axios from 'axios';
import type { SearchQuery, SearchResultPage } from '~features/search/types/searchTypes';
import { useInfiniteQuery } from '@tanstack/react-query';

const apiKey = 'eb143593';

const fetchSearch = async (searchTerm: string, pageParam: number): Promise<SearchResultPage> => {
    const response = await axios.get<SearchResultPage>(
        `https://www.omdbapi.com/?s=${searchTerm}&page=${pageParam}&apiKey=${apiKey}`
    );
    if (response.data.Response === 'False') {
        response.data.Search = [];
    }
    return response.data;
};

export const useSearchQuery = ({ searchTerm }: SearchQuery) => {
    return useInfiniteQuery({
        queryKey: ['search', searchTerm],
        queryFn: ({ pageParam = 0 }) => fetchSearch(searchTerm, pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage: SearchResultPage, pages: SearchResultPage[]) => {
            const totalResults = parseInt(lastPage.totalResults);
            const totalPageCount = Math.ceil(totalResults / 10);
            return pages.length < totalPageCount ?  pages.length + 1 : undefined;
        },
        enabled: !!searchTerm
    });
};
