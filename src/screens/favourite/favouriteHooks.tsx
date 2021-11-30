import React from 'react';
import {Feed} from 'feed';
import {StorageManager} from '../../lib/storage.service';
import {updateGeneralProps} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {DefaultRootStateProps} from '../../redux/reducer/reducers';

interface FavouriteHooksProps {
  addOrRemoveFromFavourites: (e: Feed) => void;
  favouriteFeeds: Feed[];
}

export function FavouriteHooks(): FavouriteHooksProps {
  const dispatch = useDispatch();
  const favouriteFeeds: Feed[] = useSelector(
    (state: DefaultRootStateProps) => state?.general_reducer?.favouriteFeeds,
  );
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

  return {addOrRemoveFromFavourites, favouriteFeeds};
}
