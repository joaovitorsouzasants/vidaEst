import React from "react";
import {
    Container, Header, Title, Icon, Footer, LostTransaction, Amount, Icontotal,
} from "./styles";

interface Props {
    title: string;
    amount: string;
    lastTransaction: string;
    type: 'income' | 'expense' | 'total';
}
export function HighlightCard({
    title,
    amount,
    lastTransaction,
    type
}: Props) {
    const icons = {
        income: "input",
        expense: "input",
        total: "md-calculator-outline"
    }
    return (

        <Container  type={type}>
            <Header>
                <Title>
                    {title}
                </Title>
                {
                    type === 'total' ?
                        <Icontotal name={icons[type]} type={type}/> :
                        <Icon name={icons[type]} type={type}/>
                }
            </Header>
            <Footer>
                <LostTransaction>{lastTransaction}</LostTransaction>
                <Amount> {amount}</Amount>
            </Footer>

        </Container>

    )
}