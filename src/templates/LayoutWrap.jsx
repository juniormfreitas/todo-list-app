import React from 'react';
import { Flex } from '@adobe/react-spectrum';

const LayoutWrap = ({ children }) => (
  <Flex direction="column" gap="size-100">
    {children}
  </Flex>
);

export default LayoutWrap;
