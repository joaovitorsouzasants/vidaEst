
import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

import { Container, Header, ContentWrapper, UserInfo, Photo, User, UserGreeting, UserName, Icon , HighLightCards} from './styles';
export function Home() {
  return (
    <Container>
      <Header>
        <ContentWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://github.com/deniseferreira06.png' }} />
            <User>
              <UserGreeting> Olá, </UserGreeting>
              <UserName> Denise Ferreira</UserName>
            </User>
          </UserInfo>
          <Icon name="logout" />
        </ContentWrapper>
      </Header>

      <HighLightCards>
        <HighlightCard />
        <HighlightCard/>
        </HighLightCards>
      
    </Container>
  );
}


