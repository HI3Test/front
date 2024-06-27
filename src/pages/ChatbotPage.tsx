import React from 'react';
import styled from 'styled-components';

const ChatbotPageContainer = styled.div`
  padding: 20px;
`;

const ChatbotPage = () => {
  return (
    <ChatbotPageContainer>
      <h2>Chatbot Page</h2>
      <p>Here you can perform various Chatbot.</p>
    </ChatbotPageContainer>
  );
};

export default ChatbotPage;