import {Feed} from 'feed';
import {FeedItem, FeedMock, FeedPosts} from '../consts/Feeds';


export function createFeed(): Feed {
  let feed: Feed = new Feed(FeedMock());

  FeedPosts.forEach(post => {
    feed = new Feed(FeedMock());

    feed.addItem({
      title: post.title,
      id: post.url,
      link: post.url,
      description: post.description,
      content: post.content,
      date: post.date,
      image: post.image,
      ...FeedItem,
    });
  });

  return feed;
}
