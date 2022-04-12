import styled, {css} from "styled-components/native";
import { MaterialIcons, Ionicons} from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps{
    type: 'income' | 'expense' | 'total';
}

export const  Container = styled.View<TypeProps>`
background-color: ${({ theme, type}) => type === 'expense' ? theme.colors.backSaida: theme.colors.entradaRec};
width: ${RFValue(350)}px;
border-radius: 5px;
`;
export const  Header = styled.View`

`;
export const  Title = styled.Text`
text-align: center;
font-size:  ${RFValue(20)}px;
font-family: ${({theme})=>theme.fonts.regular};
margin-top: ${RFValue(10)}px;
`;
export const   Icon = styled(MaterialIcons)<TypeProps>`
font-size:  ${RFValue(50)}px;
margin:auto;
margin-top: ${RFValue(20)}px;
margin-bottom: ${RFValue(20)}px;
${(props)=> props.type === 'income' && css` color:${({ theme})=> theme.colors.iconInputEntrada}`} 

${(props)=> props.type === 'expense' && css` color:${({ theme})=> theme.colors.iconInputSaida}`}
`;
export const  Icontotal = styled(Ionicons)<TypeProps>`
font-size:  ${RFValue(50)}px;
margin:auto;
margin-top: ${RFValue(20)}px;
margin-bottom: ${RFValue(20)}px;
${(props)=> props.type === 'expense' && css` color:${({ theme})=> theme.colors.iconTotal}`}
`;
export const  Footer = styled.View`
`;
export const  LostTransaction = styled.Text`
margin: 5px 10px;
font-size: ${RFValue(15)}px;
color:${({ theme})=> theme.colors.text};
`;
export const   Amount = styled.Text`
margin: 5px 10px 0px 10px;
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(18)}px;
color:${({ theme})=> theme.colors.text};
`;

