import Post from './models/post';

export default function () {
  Post.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const content1 = 'Welcome to Auquan Interview! This is boilerplate code to get you started.';

    const content2 = 'This is a dummy post entry created in the database. Entry can be found in posts collection in databse mern-starter.';

    const post1 = new Post({ name: 'Nikhil ', title: 'Welcome To Auquan', visits: '3', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
    const post2 = new Post({ name: 'Smiley', title: 'Database Details', visits: '5', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });
    const post3 = new Post({ name: 'Shub', title: 'Database Details2', visits: '1', slug: 'lorem-ipsum2', cuid: 'cikqgkv4q01ck7453ualdn3h2', content: content1 });

    Post.create([post1, post2, post3], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
