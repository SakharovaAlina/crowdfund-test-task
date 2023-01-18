import {fetcher} from 'src/fetcher';
import useSWR from 'swr';

export function useCertificate() {
  return useSWR('/api/certificate', fetcher);
}
