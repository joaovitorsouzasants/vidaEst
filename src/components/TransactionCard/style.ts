import styled from "styled-components/native";
import {MaterialIcons} from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize";



export const Container = styled.View`
    background-color: ${({theme})=>theme.colors.listagem};
    padding: 25px 26px;
    margin-top: 20px;
`;
export const Descricao = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({theme})=>theme.fonts.regular};
color: ${({theme})=>theme.colors.text};
`;

export const Amount = styled.Text`
font-size: ${RFValue(20)}px;
font-family: ${({theme})=>theme.fonts.regular};
color: ${({theme})=>theme.colors.text};
`; 

export const Footer= styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 20px;
`;
export const Categoria = styled.View`
flex-direction: row;
align-items: center;
`;
export const Icon = styled(MaterialIcons)`
font-size: ${RFValue(20)}px;
color: ${({theme})=>theme.colors.text};
`;
export const Name = styled.Text`
font-size: ${RFValue(14)}px;
color: ${({theme})=>theme.colors.text};
font-family:  ${({theme})=>theme.fonts.regular};
margin-left: 17px;
`;
export const Date = styled.Text`
font-size: ${RFValue(14)}px;
color: ${({theme})=>theme.colors.data};
font-family:  ${({theme})=>theme.fonts.regular};
`;

