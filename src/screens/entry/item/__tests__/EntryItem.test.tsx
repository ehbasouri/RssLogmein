import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {EntryItem} from '..';

describe('EntryItem tests', () => {
  it('Header test', () => {
    let props: any = {
      onPress: jest.fn(),
    };
    const {toJSON, getByTestId} = render(<EntryItem {...props} />);

    const item = getByTestId('entry-item');
    fireEvent.press(item);
    expect(props.onPress).toHaveBeenCalled();
    expect(item).toBeTruthy();
    // expect(toJSON).toMatchSnapshot();
  });
});
