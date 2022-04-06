import styled from "styled-components/native";
import { MaterialIcons} from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize";

export const  Container = styled.View`
background-color: ${({ theme}) => theme.colors.entradaRec};
width: ${RFValue(350)}px;
border-radius: 5px;
`;
export const  Header = styled.View`

`;
export const  Title = styled.Text`
text-align: center;
font-size:  ${RFValue(20)}px;
font-family: ${({theme})=>theme.fonts.regular};
`;
export const   Icon = styled(MaterialIcons)`
font-size:  ${RFValue(70)}px;
color:${({ theme})=> theme.colors.iconInput} ;
margin: auto;
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

