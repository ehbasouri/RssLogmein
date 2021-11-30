function rndYear(): number {
  return 2000 + Math.floor(Math.random() * 20) + 1;
}

export const FeedMock = {
  title: 'Feed Title',
  description: 'This is my personal feed!',
  id: 'http://example.com/',
  link: 'http://example.com/',
  language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  image: 'http://example.com/image.png',
  favicon: 'http://example.com/favicon.ico',
  copyright: 'All rights reserved 2013, John Doe',
  updated: new Date(rndYear(), 6, 14), // optional, default = today
  generator: 'awesome', // optional, default = 'Feed for Node.js'
  feedLinks: {
    json: 'https://example.com/json',
    atom: 'https://example.com/atom',
  },
  author: {
    name: 'John Doe',
    email: 'johndoe@example.com',
    link: 'https://example.com/johndoe',
  },
};

export const FeedPosts = [
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

export const FeedItem = {
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
  ]
}
