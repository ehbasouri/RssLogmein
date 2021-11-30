import {Feed} from 'feed';
import {useEffect, useState} from 'react';
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
  const favouriteFeeds: Feed[] = useSelector(
    state => state?.general_reducer?.favouriteFeeds,
  );

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
    const favList = await StorageManager.getValue('favouriteFeeds');
    if (favList) {
      dispatch(
        updateGeneralProps({
          key: 'favouriteFeeds',
          value: favList,
        }),
      );
    }
  }

  function addOrRemoveFromFavourites(feed: Feed) {
    let newFavouriteList: Feed[] = [];
    if (favouriteFeeds?.length === 0) {
      newFavouriteList = [feed];
    } else {
      const result = favouriteFeeds.findIndex(
        element => element.options.id === feed.options.id,
      );
      if (result === -1) {
        newFavouriteList = [feed, ...favouriteFeeds];
      } else {
        newFavouriteList = favouriteFeeds.filter(
          element => element.options.id !== feed.options.id,
        );
      }
    }
    dispatch(
      updateGeneralProps({
        key: 'favouriteFeeds',
        value: newFavouriteList,
      }),
    );
    StorageManager.setValue('favouriteFeeds', newFavouriteList);
  }

  return {
    feeds,
    loading,
    addOrRemoveFromFavourites,
  };
}
