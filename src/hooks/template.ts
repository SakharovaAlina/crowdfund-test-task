import {fetcher} from 'src/fetcher';
import useSWR from 'swr';

export function useTemplate() {
    return useSWR('/api/template', fetcher);
}
