import {
    Container, Descricao, Amount, Footer, Categoria, Icon, Name, Date
} from './style';
interface categoria{
    name: string;
    icon:string;
}
export interface TransactionCardProps{
    title: string;
    amount: string;
    categoria: categoria;
    data: string;
}
interface Props{
    data: TransactionCardProps;
}
export function TransactionCard({ data }:Props){
  
    return(
        <Container>
           <Descricao>{data.title}</Descricao>  
           <Amount>{data.amount}</Amount>
           <Footer>
           <Categoria>
               <Icon name = {data.categoria.icon}/>
               <Name>{data.categoria.name}</Name>
           </Categoria>
           <Date>{data.data}</Date>
           </Footer>  
        </Container>
    );
}