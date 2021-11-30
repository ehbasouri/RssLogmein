import React from 'react';
import {render} from '@testing-library/react-native';
import FeedList from '../FeedList';
import * as reactRedux from 'react-redux';
import {INITIAL_STATES_GENERAL} from '../../../redux/reducer/reducers';

describe('test suite', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  test('fetch and display data in FeedList', async () => {
    useSelectorMock.mockReturnValue({...INITIAL_STATES_GENERAL});

    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    /* SANITY CHECK */
    expect(dummyDispatch).not.toHaveBeenCalled();

    const props: any = {};
    const {toJSON} = render(<FeedList {...props} />);
    // expect(toJSON()).toMatchSnapshot();
  });
});
