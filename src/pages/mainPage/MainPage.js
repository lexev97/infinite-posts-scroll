import { Fragment } from 'react';

import { Header, Main, Footer } from '../../widgets';
import { PostList } from '../../features';

const MainPage = () => {
  return (
    <Fragment>
      <Header />
      <Main>
        <PostList />
      </Main>
      <Footer />
    </Fragment>
  );
};

export default MainPage;
