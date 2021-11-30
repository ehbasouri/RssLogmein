import React from 'react';
import {cleanup, render} from '@testing-library/react-native';
import FeedList from '../FeedList';

afterEach(cleanup);

test('fetch and display data in FeedList', async () => {
  const props: any = {};
  const {toJSON} = render(<FeedList {...props} />);
  // expect(toJSON()).toMatchSnapshot();
});
