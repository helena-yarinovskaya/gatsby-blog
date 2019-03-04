import React from 'react';
import PropTypes from 'prop-types';
import HeaderBlock from './shared/header-block';
import ExpandButton from './shared/expand-button';
import Post from './post';

const posts = [
  {
    image: 'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg',
    date: 'JULY 28, 2014',
    tags: ['fun', 'travel', 'trends'],
    author: 'admin',
    title: 'The Magic Wheel',
    text: `It’s not it to understand them in the objects we’re playing. Products fulfilling a product more innovative,
        bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial
        correlation. Good design is derived from so deep and then there’s no other product useful. `,
    responses: 1,
  },
  {
    image: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    date: 'JULY 28, 2014',
    tags: ['fun', 'travel', 'trends', 'web design'],
    author: 'admin',
    title: 'The lonely road',
    text: `If you’ve studied design at all, you’ve probably encountered Lorem Ipsum placeholder text at some point. 
        Anywhere there is text, but the meaning of that text isn’t particularly important, you might see Lorem Ipsum. `,
    responses: 3,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBdhYDpDu9MnhnDW8VjLYrj2mi8FAwll5AqcYDhRiFpsLN4y0H',
    date: 'JULY 28, 2014',
    tags: ['fun', 'trends', 'web design'],
    author: 'admin',
    title: 'I love gasoline smell',
    text: `Many of the content, and often about their precious turfpossessed selves and principles are shortcomings of seeing and colors to cover
         up a paucity of design. Zero out your interface. I think that are deep and profound indeed, these tasks and showing. `,
    responses: 0,
  },
  {
    image:
      'https://www.thesprucepets.com/thmb/Pb_PTJEBm9vIDY2HWnbFOgmSCIE=/2867x1913/filters:no_upscale()/close-up-of-cat-miaowing-624192648-5c070a6f46e0fb00019d1759.jpg',
    date: 'JULY 28, 2014',
    tags: ['fun', 'travel', 'trends'],
    author: 'admin',
    title: 'The magic wheel',
    text: `It’s not it to understand them in the objects we’re playing. Products fulfilling a product more innovative,
        bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial
        correlation. Good design is derived from so deep and then there’s no other product useful. `,
    responses: 3,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOD7uc1bCe8jGOehxNSdsB3RewoVlWU-4EON8EXBLTIupS4YQS',
    date: 'JULY 28, 2014',
    tags: ['fun', 'travel', 'trends'],
    author: 'admin',
    title: 'The magic wheel',
    text: `It’s not it to understand them in the objects we’re playing. Products fulfilling a product more innovative,
        bullets grunts, powerful or stay at every multivariate spacetime point of analysis. People have enormous serial
        correlation. Good design is derived from so deep and then there’s no other product useful. `,
    responses: 0,
  },
];

const Blog = ({ posts }) => (
  <section className="blog" id="my-blog">
    <hr className="blog__line" />
    <div className="blog__container">
      <HeaderBlock title="My blog" subtitle="News from my house" />

      <div className="blog__content">
        {posts.map((post, i)=> (
          <Post key={i} {...post} />
        ))}
      </div>
      <ExpandButton text="Show all posts" />
    </div>
    <hr className="blog__line" />
  </section>
);

Blog.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      tags: PropTypes.arrayOf(PropTypes.string.isRequired),
    })
  ),
};

Blog.defaultProps = {
  posts: posts,
};

export default Blog;
