import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Favourite from '../Favourite';
import {AppContext} from '../../../App/AppContext';

describe('test suite', () => {
  test('Favourite test', async () => {
    const props: any = {
      favouriteFeeds: ['url'],
      navigation: {goBack: jest.fn()},
    };
    const {getByText, toJSON} = render(
      <AppContext.Provider value={props}>
        <Favourite {...props} />
      </AppContext.Provider>,
    );
    expect(getByText('url')).toBeTruthy();
    expect(getByText('Favourite List')).toBeTruthy();
    const button = getByText('BACK');
    expect(button).toBeTruthy();
    fireEvent.press(button);
    expect(props.navigation.goBack).toHaveBeenCalled();
    expect(toJSON()).toMatchSnapshot();
  });
});
