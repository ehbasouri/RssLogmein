import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Entry from '../Entry';
import {AppContext} from '../../../App/AppContext';

describe('test suite', () => {
  test('Entry tests', async () => {
    const props: any = {
      navigation: {goBack: jest.fn()},
      onEntryPress: jest.fn(),
      route: {
        params: {
          title: 'title',
          items: [{title: 'item-title', links: [{url: 'url'}]}],
        },
      },
    };
    const {getByText, toJSON} = render(
      <AppContext.Provider value={props}>
        <Entry {...props} />
      </AppContext.Provider>,
    );
    expect(getByText('title')).toBeTruthy();
    expect(getByText('item-title')).toBeTruthy();
    const button = getByText('BACK');
    expect(button).toBeTruthy();
    fireEvent.press(button);
    expect(props.navigation.goBack).toHaveBeenCalled();
    expect(toJSON()).toMatchSnapshot();
  });
});
