import { Routes, Route } from 'react-router-dom';

import MainPage from './mainPage/MainPage';
import PostView from './postView/PostView';
import NotFound from './notFound/NotFound';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/:postId' element={<PostView />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
