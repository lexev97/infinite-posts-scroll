import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../shared/ui/index';

import './FullPost.css';

const FullPost = ({ post }) => {
  const navigate = useNavigate();

  return (
    <article className='topic__wrapper'>
      <p className='topic__no'>#{post.id}</p>
      <h2 className='topic__title'>{post.title}</h2>
      <p className='topic__content'>{post.body}</p>
      <Button onClick={() => navigate(-1)}>Назад</Button>
    </article>
  );
};

export default FullPost;
