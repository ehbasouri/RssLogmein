import {Feed} from 'feed';
import {FeedItem, FeedMock, FeedPosts} from '../consts/Feeds';

const feed: Feed = new Feed(FeedMock);

export function createFeed(): Feed {
  FeedPosts.forEach(post => {
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

  feed.addCategory('Technologie');

  feed.addContributor({
    name: 'Johan Cruyff',
    email: 'johancruyff@example.com',
    link: 'https://example.com/johancruyff',
  });

  return feed;
}
