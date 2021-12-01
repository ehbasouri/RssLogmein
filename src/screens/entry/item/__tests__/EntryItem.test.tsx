import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {EntryItem} from '..';

describe('EntryItem tests', () => {
  it('EntryItem test', () => {
    let props: any = {
      onPress: jest.fn(),
      entry: {
        title: 'title',
        links: [{url: 'url'}],
      }
    };
    const {toJSON, getByTestId, getByText} = render(<EntryItem {...props} />);
    expect(getByText('title')).toBeTruthy();
    expect(getByText('url')).toBeTruthy();

    const item = getByTestId('entry-item');
    fireEvent.press(item);
    expect(props.onPress).toHaveBeenCalled();
    expect(item).toBeTruthy();
    // expect(toJSON).toMatchSnapshot();
  });
});
