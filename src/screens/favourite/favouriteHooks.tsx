import React, {useEffect, useState} from 'react';
import {Feed} from 'feed';
import {StorageManager} from '../../lib/storage.service';
import {FAVOURITE_LIST} from '../../consts/common';

export function FavouriteHooks() {
  const [list, setList] = useState<Feed[]>([]);
  let mounted: boolean = true;

  useEffect(() => {
    if (mounted) {
      getFavouriteList();
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mounted = false;
    };
  }, []);

  async function getFavouriteList() {
    //TODO
    const favList = await StorageManager.getValue(FAVOURITE_LIST);
    setList(favList);
  }

  return {list};
}
