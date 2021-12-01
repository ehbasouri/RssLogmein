import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {FeedItem} from '..';

describe('Feed Item tests', () => {
  it('Feed Item tests', () => {
    let props: any = {
      onPress: jest.fn(),
      feed: 'url',
      onFavouritePress: jest.fn(),
      isFav: true,
    };
    const {toJSON, getByTestId, getByText} = render(<FeedItem {...props} />);

    const item = getByTestId('feed-item');
    fireEvent.press(item);
    expect(props.onPress).toHaveBeenCalled();

    const button = getByTestId('favourite-button');
    fireEvent.press(button);
    expect(props.onFavouritePress).toHaveBeenCalled();
    const url = getByText('url');
    expect(url).toBeTruthy();

    const buttonTitle = getByText('remove from Favourite');
    expect(buttonTitle).toBeTruthy();
    expect(toJSON).toMatchSnapshot();
  });
});
