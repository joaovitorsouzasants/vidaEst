import {
    Container, Descricao, Amount, Footer, Categoria, Icon, Name, Date
} from './style';
interface categoria{
    name: string;
    icon:string;
}
export interface TransactionCardProps{
    type: 'income' | 'expense';
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
           <Amount type={data.type}>
               {data.type==='expense' &&'- '}
               {data.amount}</Amount>
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