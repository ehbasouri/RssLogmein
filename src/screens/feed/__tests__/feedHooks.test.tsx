import {renderHook, act} from '@testing-library/react-hooks';
import {waitFor} from '@testing-library/react-native';
import {FeedHooks} from '../feedHooks';
import * as reactRedux from 'react-redux';

// somewhere in your configuration files
import AsyncStorageMock from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {INITIAL_STATES_GENERAL} from '../../../redux/reducer/reducers';

AsyncStorageMock.multiGet = jest.fn(([keys], callback) => {
  // do something here to retrieve data
  callback([]);
});

export default AsyncStorageMock;

describe('test suite', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  test('feedHooks tests', async () => {
    useSelectorMock.mockReturnValue({...INITIAL_STATES_GENERAL});

    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    /* SANITY CHECK */
    expect(dummyDispatch).not.toHaveBeenCalled();

    const {result} = renderHook(() => FeedHooks());
    expect(result.current.feeds.length).toBe(10);

    const newFeed: any = {};

    act(() => {
      result.current.feeds = [newFeed];
    });
    await waitFor(() => {
      expect(result.current.feeds.length).toBe(1);
    });
    expect(AsyncStorageMock.getItem).toBeCalledWith('favouriteFeeds');
  });
});

// it('checks if Async Storage is used', async () => {
//   // await asyncOperationOnAsyncStorage();

// })
