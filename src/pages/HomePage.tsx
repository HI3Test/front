import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <h1>Welcome to Home Page</h1>
    </HomePageContainer>
  );
};

export default HomePage;