import {Feed} from 'feed';
import {useEffect, useState} from 'react';
import {createFeed} from '../../lib/feedGenerator';

const feedCount = 10;

interface FeedHoosProps {
  feeds: Feed[];
  loading: boolean;
}

export function FeedHooks(): FeedHoosProps {
  const [feeds, setFeeds] = useState<Feed[]>([]);
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
    const newFeedList = [];
    for (let index = 0; index < feedCount; index++) {
      const newFeed = createFeed();
      newFeedList.push(newFeed);
    }
    setFeeds(newFeedList);
    setLoading(false);
  }

  return {
    feeds,
    loading,
  };
}
