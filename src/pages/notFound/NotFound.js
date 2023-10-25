import { Fragment } from 'react';

import { Header, Main, Footer } from '../../widgets';

const PostView = () => {
  return (
    <Fragment>
      <Header />
      <Main>
        <h2 style={{ textAlign: 'center' }}>Маршрут не найден :(</h2>
      </Main>
      <Footer />
    </Fragment>
  );
};

export default PostView;
