import {renderHook, act} from '@testing-library/react-hooks';
import {waitFor} from '@testing-library/react-native';
import {CustomHooks} from '../customHooks';

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
});
