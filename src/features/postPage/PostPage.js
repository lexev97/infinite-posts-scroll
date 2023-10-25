import { useParams } from 'react-router-dom';

import { FullPost } from '../../entities/Post/index';
import { useGetPostByIdQuery } from '../../shared/api/rtkApi';
import { LoadingSpinner } from '../../shared/ui';

import './PostPage.css';

const PostPage = () => {
  const { postId } = useParams();

  const { data: post, isLoading, error } = useGetPostByIdQuery(postId);

  return (
    <section className='main__wrapper topic'>
      {!isLoading && !error && <FullPost post={post} />}
      {isLoading && !error && <LoadingSpinner />}
      {error && <h2>Такого поста не существует.</h2>}
    </section>
  );
};

export default PostPage;
