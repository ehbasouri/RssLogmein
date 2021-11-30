import {useEffect, useState} from 'react';

interface FeedHoosProps {
  feeds: any[];
  loading: boolean;
}

export function FeedHooks(): FeedHoosProps {
  const [feeds, setFeeds] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  let mounted = true;

  useEffect(() => {
    if (mounted) {
      fetchFeeds();
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mounted = false;
    };
  }, []);

  async function fetchFeeds() {
    //TODO
  }

  return {
    feeds,
    loading,
  };
}
