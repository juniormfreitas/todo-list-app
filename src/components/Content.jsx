import React from 'react';
import { View } from '@adobe/react-spectrum';

const Content = () => {
  console.log('test');

  return (
    <>
      <View backgroundColor="purple-600" gridArea="content" />
    </>
  );
};

export default Content;
