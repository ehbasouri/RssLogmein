import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import FeedList from '../FeedList';
import {AppContext} from '../../../App/AppContext';

describe('test suite', () => {
  test('FeedList tests', async () => {
    const props: any = {
      feeds: ['url'],
      navigation: {navigate: jest.fn()},
    };
    const {getByText, toJSON} = render(
      <AppContext.Provider value={props}>
        <FeedList {...props} />
      </AppContext.Provider>,
    );
    expect(getByText('url')).toBeTruthy();
    expect(getByText('Feed List')).toBeTruthy();
    const button = getByText('Favourite');
    expect(button).toBeTruthy();
    fireEvent.press(button);
    expect(props.navigation.navigate).toHaveBeenCalled();
    expect(toJSON()).toMatchSnapshot();
  });
});
