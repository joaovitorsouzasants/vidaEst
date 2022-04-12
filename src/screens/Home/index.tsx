
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
        <HighlightCard 
        title='Entrada'
        amount='R$ 10.000,00'
        lastTransaction='Ultima movimentação: 09/03/2022'
      type='income'
/>
<HighlightCard 
        title='Saída'
        amount='R$ 8.000,00'
        lastTransaction='Ultima movimentação: 09/03/2022'
      type='expense'
/>
<HighlightCard 
        title='Total'
        amount='R$ 2.000,00'
        lastTransaction='Ultima movimentação: 09/03/2022'
      type='total'
/>
        </HighLightCards>
      
    </Container>
  );
}


