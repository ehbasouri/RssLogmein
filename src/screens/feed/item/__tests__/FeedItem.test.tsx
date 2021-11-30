import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {FeedItem} from '..';

describe('Feed Item tests', () => {
  it('render feed item and user action tests', () => {
    let props: any = {
      onPress: jest.fn(),
      feed: {},
    };
    const {toJSON, getByTestId} = render(<FeedItem {...props} />);

    const item = getByTestId('feed-item');
    fireEvent.press(item);
    expect(props.onPress).toHaveBeenCalled();
    expect(toJSON).toMatchSnapshot();
  });
});
