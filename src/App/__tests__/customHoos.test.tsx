import {renderHook, act} from '@testing-library/react-hooks';
import {waitFor} from '@testing-library/react-native';
import {CustomHooks} from '../customHooks';
// somewhere in your configuration files
import AsyncStorageMock from '@react-native-async-storage/async-storage/jest/async-storage-mock';

AsyncStorageMock.multiGet = jest.fn(([keys], callback) => {
  // do something here to retrieve data
  callback && callback([]);
});

describe('test suite', () => {
  test('feedHooks tests', async () => {
    const {result} = renderHook(() => CustomHooks());
    expect(result.current.feeds.length).toBe(3);

    act(() => {
      result.current.favouriteFeeds = ['url'];
    });
    await waitFor(() => {
      expect(result.current.favouriteFeeds.length).toBe(1);
    });
  });
  test('asyncstorage test', async ()=>{
    const {result} = renderHook(() => CustomHooks());
    await waitFor(() => {
      expect(AsyncStorageMock.getItem).toBeCalledWith('favouriteFeeds');
    });
  });
});
