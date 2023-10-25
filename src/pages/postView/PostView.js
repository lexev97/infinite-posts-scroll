import { Fragment } from 'react';

import { Header, Main, Footer } from '../../widgets';
import { PostPage } from '../../features';

const PostView = () => {
  return (
    <Fragment>
      <Header />
      <Main>
        <PostPage />
      </Main>
      <Footer />
    </Fragment>
  );
};

export default PostView;
