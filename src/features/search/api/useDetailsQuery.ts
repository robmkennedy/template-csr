import axios from 'axios';
import type { DetailsQuery, DetailsResult } from '~features/search/types/searchTypes';
import { useQuery } from '@tanstack/react-query';

const apiKey = 'eb143593';

const fetchDetails = async (imdbID: string | undefined): Promise<DetailsResult> => {
    const response = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
    return response.data;
};

export const useDetailsQuery = ({ imdbID }: DetailsQuery) => {
    return useQuery({
        queryKey: ['details', imdbID],
        queryFn: () => fetchDetails(imdbID),
        enabled: !!imdbID
    });
};