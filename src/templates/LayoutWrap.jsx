import React from 'react';
import { Grid } from '@adobe/react-spectrum';
import LayoutHeader from '../components/LayoutHeader';
import LayoutFooter from '../components/LayoutFooter';
import { HEADER_HEIGHT, FOOTER_HEIGHT } from '../constants';

const LayoutWrap = ({ children }) => (
  <Grid
    areas={['header  header', 'sidebar content', 'footer  footer']}
    columns={['1fr', '3fr']}
    rows={[HEADER_HEIGHT, 'auto', FOOTER_HEIGHT]}
    height="size-6000"
    gap="size-100"
    minHeight="100vh"
  >
    <LayoutHeader />
    {children}
    <LayoutFooter />
  </Grid>
);

export default LayoutWrap;
