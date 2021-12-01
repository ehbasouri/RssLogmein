import React, {useEffect, useState} from 'react';
import * as rssParser from 'react-native-rss-parser';
import {StorageManager} from '../lib/storage.service';
import {Linking} from 'react-native';
import {AppContextType} from './AppContext';

const FeedUrl = [
  'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
  'https://www.nasa.gov/rss/dyn/breaking_news.rss',
  'https://feeds.npr.org/1001/rss.xml',
];

export function CustomHooks(): AppContextType {
  const [feeds, setFeeds] = useState<any[]>(FeedUrl);
  const [favouriteFeeds, setFavouriteFeeds] = useState<any[]>([]);
  const [feedDetails, setFeedDetails] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getFavouriteList();
  }, []);

  async function fetchRss(url: string, navigation: any) {
    setLoading(true);
    fetch(url)
      .then(response => response.text())
      .then(responseData => rssParser.parse(responseData))
      .then(rss => {
        setFeedDetails(rss);
        navigation.navigate('entry', rss);
        setLoading(false);
      })
      .catch(err => {
        console.log('err : ', err);
        setLoading(false);
      });
  }

  async function getFavouriteList() {
    const favList: string[] = await StorageManager.getValue('favouriteFeeds');
    if (favList) {
      setFavouriteFeeds(favList);
    }
  }

  function checkInFavoriteFeeds(feed: string, isAddAction: boolean): string[] {
    if (favouriteFeeds?.length === 0) {
      return [feed];
    }
    const result = favouriteFeeds.includes(feed);
    if (!result) {
      return [feed, ...favouriteFeeds];
    }
    if (!isAddAction) {
      return favouriteFeeds.filter(element => element !== feed);
    }
    return favouriteFeeds;
  }

  function addOrRemoveFromFavourites(feed: string, add: boolean) {
    const newFavouriteList = checkInFavoriteFeeds(feed, add);
    setFavouriteFeeds(newFavouriteList);
    StorageManager.setValue('favouriteFeeds', newFavouriteList);
  }

  function onEntryPress(url: string): void {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  }

  return {
    feeds,
    loading,
    fetchRss,
    feedDetails,
    addOrRemoveFromFavourites,
    favouriteFeeds,
    onEntryPress,
  };
}
