/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';

import HomePage from 'containers/HomePage/Loadable';

const AppWrapper = styled.div`
  max-width: 1064px;
  height: 100%;
  margin: 30px auto;
  min-height: 100%;
  display: flex;
  width: 100%;
  padding-top: 30px;
  border: 1px solid #000;
`;

export default function App() {
  return (
    <AppWrapper>
        <HomePage />
    </AppWrapper>
  );
}
