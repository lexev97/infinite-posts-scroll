import { useState, useEffect } from 'react';

import { PostLine } from '../../entities/Post/index';
import { useGetAllPostsQuery } from '../../shared/api/rtkApi';
import { LoadingSpinner } from '../../shared/ui';

import './PostList.css';

const windowOuterHeight = window.outerHeight;

const PostList = () => {
  const [isMyFetchingDown, setIsMyFetchingDown] = useState(false);
  const [isMyFetchingUp, setIsMyFetchingUp] = useState(false);
  const [currentPostStart, setCurrentPostStart] = useState(0);
  const { data: posts, isLoading } = useGetAllPostsQuery({
    limit: windowOuterHeight / 60,
    start: currentPostStart,
  });

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (isMyFetchingDown) {
      setCurrentPostStart((prev) => {
        return prev < (100 - windowOuterHeight / 60) ? prev + 2 : prev;
      });
      setIsMyFetchingDown(false);
    }
  }, [isMyFetchingDown]);

  useEffect(() => {
    if (isMyFetchingUp) {
      setCurrentPostStart((prev) => {
        return prev > 0 ? prev - 2 : prev;
      });
      setIsMyFetchingUp(false);
    }
  }, [isMyFetchingUp]);

  console.log(currentPostStart);

  const scrollHandler = (e) => {
    console.log(e.target.documentElement.scrollTop);
    if (e.target.documentElement.scrollTop < 30) {
      setIsMyFetchingUp(true);
    }
    if (
      e.target.documentElement.scrollHeight -
        e.target.documentElement.scrollTop -
        window.innerHeight <
      30
    ) {
      setIsMyFetchingDown(true);
      window.scrollTo(
        0,
        e.target.documentElement.scrollHeight +
          e.target.documentElement.scrollTop
      );
    }
  };

  return (
    <section className='main__wrapper topics'>
      <ul className='topics__list'>
        {posts?.map((post) => (
          <PostLine key={post.id} post={post} />
        ))}
        {isLoading && <LoadingSpinner />}
      </ul>
    </section>
  );
};

export default PostList;
