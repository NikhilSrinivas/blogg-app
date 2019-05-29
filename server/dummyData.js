import Post from './models/post';

export default function () {
  Post.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const content1 = 'Welcome to Auquan Interview! This is boilerplate code to get you started.';

    const content2 = 'This is a dummy post entry created in the database. Entry can be found in posts collection in databse mern-starter.';

    const post1 = new Post({ name: 'Shub', title: 'Welcome To Auquan', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
    const post2 = new Post({ name: 'Shub', title: 'Database Details', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

    Post.create([post2, post1], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
