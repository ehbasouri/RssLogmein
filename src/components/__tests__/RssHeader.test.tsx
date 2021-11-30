import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {RssHeader} from '../RssHeader';

describe('Rss Header tests', () => {
  it('Header test', () => {
    let props: any = {
      onBackPress: jest.fn(),
      title: 'title',
      showBack: true,
    };
    const {toJSON, getByText} = render(<RssHeader {...props} />);

    const item = getByText('BACK');
    fireEvent.press(item);
    expect(props.onBackPress).toHaveBeenCalled();
    const title = getByText('title');
    expect(title).toBeTruthy();
    expect(toJSON).toMatchSnapshot();
  });
});
