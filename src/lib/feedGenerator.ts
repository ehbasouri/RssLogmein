import {Feed} from 'feed';
import {FeedMock} from '../consts/Feeds';

const feed: Feed = new Feed(FeedMock);

export function createFeed(): Feed {
  const posts = [
    {
      url: 'https://example.com/posts1',
      title: 'post1',
      description: 'description1',
      content: '',
      date: new Date(),
      image: '',
    },
    {
      url: 'https://example.com/posts2',
      title: 'post1',
      description: 'description2',
      content: '',
      date: new Date(),
      image: '',
    },
  ];

  posts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: post.url,
      link: post.url,
      description: post.description,
      content: post.content,
      author: [
        {
          name: 'Jane Doe',
          email: 'janedoe@example.com',
          link: 'https://example.com/janedoe',
        },
        {
          name: 'Joe Smith',
          email: 'joesmith@example.com',
          link: 'https://example.com/joesmith',
        },
      ],
      contributor: [
        {
          name: 'Shawn Kemp',
          email: 'shawnkemp@example.com',
          link: 'https://example.com/shawnkemp',
        },
        {
          name: 'Reggie Miller',
          email: 'reggiemiller@example.com',
          link: 'https://example.com/reggiemiller',
        },
      ],
      date: post.date,
      image: post.image,
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
