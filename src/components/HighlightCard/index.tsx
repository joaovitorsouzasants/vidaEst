import React from "react";
import {
    Container, Header, Title, Icon, Footer, LostTransaction, Amount,
} from "./styles";

export function HighlightCard() {
    return (

            <Container >
                <Header>
                    <Title>
                        Entrada
                    </Title>
                    <Icon name="input" />
                </Header>
                <Footer>
                    <LostTransaction>Ultima movimentação: 09/03/2022</LostTransaction>
                    <Amount> R$ 10.000,00</Amount>
                </Footer>

            </Container>

    )
}