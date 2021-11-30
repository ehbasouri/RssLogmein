import {render} from '@testing-library/react-native';
import React from 'react';
import {FeedItem, FeedPosts} from '../../../consts/Feeds';
import Entry from '../Entry';

const newEntry = {
  title: FeedPosts[0].title,
  id: FeedPosts[0].url,
  link: FeedPosts[0].url,
  description: FeedPosts[0].description,
  content: FeedPosts[0].content,
  date: FeedPosts[0].date,
  image: FeedPosts[0].image,
  ...FeedItem,
};

it('Entry tests', () => {
  let props: any = {
    route: {
      params: {
        options: newEntry,
      },
    },
    navigation: {
      setOptions: jest.fn(),
    },
  };
  const {getByText} = render(<Entry {...props} />);

  const header = getByText(newEntry.title);
  expect(header).toBeTruthy();
});
