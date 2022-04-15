
import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import { Container, Header, ContentWrapper, UserInfo, Photo, User, UserGreeting, UserName, Icon, Body, HighLightCards, Transactions, Title, TransactionList } from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}
export function Home() {
  const transactionData: DataListProps[] = [
    {
      id: '1',
      type: 'expense',
      title: 'Almoço da semana',
      amount: 'R$ 100,00',
      categoria: {
        icon: 'fastfood',
        name: 'Alimentação'
      },
      data: '09/03/2022'
    },
    {
      id: '2',
      type: 'expense',
      title: 'Transporte para Francisco Sá',
      amount: 'R$ 54,00',
      categoria: {
        icon: 'directions-bus',
        name: 'Transporte'
      },
      data: '21/03/2022'
    },
    {
      id: '3',
      type: 'income',
      title: 'Aluguel recebido',
      amount: 'R$ 500,00',
      categoria: {
        icon: 'home',
        name: 'Transporte'
      },
      data: '02/04/2022'
    },
  ]
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
      <Body>

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
      </Body>
      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={transactionData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            <TransactionCard data={item} />
          }
        />
      </Transactions>
    </Container>
  );
}


