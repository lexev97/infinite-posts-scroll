import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../shared/ui/index';

import './PostLine.css';

const PostLine = ({ post }) => {
  const navigate = useNavigate();

  return (
    <li className='topics__item'>
      <p className='topics__no'>
        <span className='topics__span'>#</span>
        {post.id}
      </p>
      <h2 className='topics__title'>
        <span className='topics__span'>Заголовок: </span>
        {post.title}
      </h2>
      <p className='topics__content'>
        <span className='topics__span'>Содержание: </span>
        {post.body}
      </p>
      <Button onClick={() => navigate(`${post.id}`)}>Просмотр</Button>
    </li>
  );
};

export default PostLine;
