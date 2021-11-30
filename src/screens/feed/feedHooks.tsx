import {Feed} from 'feed';
import {useEffect, useState} from 'react';
import {FAVOURITE_LIST} from '../../consts';
import {createFeed} from '../../lib/feedGenerator';
import {StorageManager} from '../../lib/storage.service';
import {useDispatch, useSelector} from 'react-redux';
import {updateGeneralProps} from '../../redux/actions';

const feedCount = 10;

interface FeedHoosProps {
  feeds: Feed[];
  loading: boolean;
  addOrRemoveFromFavourites: (e: Feed) => void;
}

export function FeedHooks(): FeedHoosProps {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  let mounted = true;
  const dispatch = useDispatch();

  useEffect(() => {
    if (mounted) {
      fetchFeeds();
      getFavouriteList();
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mounted = false;
    };
  }, []);

  async function fetchFeeds() {
    const newFeedList = [];
    for (let index = 0; index < feedCount; index++) {
      const newFeed = createFeed();
      newFeedList.push(newFeed);
    }
    setFeeds(newFeedList);
    setLoading(false);
  }

  async function getFavouriteList() {
    const favList = await StorageManager.getValue(FAVOURITE_LIST);
    console.log('favList: ', favList);
    if (!!favList) {
      dispatch(
        updateGeneralProps({
          key: FAVOURITE_LIST,
          value: favList,
        }),
      );
    }
  }

  function addOrRemoveFromFavourites(feed: Feed) {
    console.log('add or remove : ', feed);
  }

  return {
    feeds,
    loading,
    addOrRemoveFromFavourites,
  };
}
