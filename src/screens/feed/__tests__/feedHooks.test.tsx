import {renderHook, act} from '@testing-library/react-hooks';
import {waitFor} from '@testing-library/react-native';
import {FeedHooks} from '../feedHooks';

test('feedHooks tests', async () => {
  const {result} = renderHook(() => FeedHooks());
  expect(result.current.feeds.length).toBe(10);

  const newFeed: any = {};

  act(() => {
    result.current.feeds = [newFeed];
  });
  await waitFor(() => {
    expect(result.current.feeds.length).toBe(1);
  });
});
