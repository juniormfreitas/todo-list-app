import React from 'react';
import { Provider, lightTheme } from '@adobe/react-spectrum';

import '../scss/main.scss';

import Layout from '../templates/LayoutWrap';
import Sidebar from './Sidebar';
import Content from './Content';

function App() {
  return (
    <Provider colorScheme="light" theme={lightTheme}>
      <Layout>
        <Sidebar />
        <Content />
      </Layout>
    </Provider>
  );
}

export default App;
