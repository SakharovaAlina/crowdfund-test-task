import { updater } from 'src/fetcher';
import useSWRMutation from 'swr/mutation';

export function useDonation() {
  return useSWRMutation('/api/donation', updater);
}
