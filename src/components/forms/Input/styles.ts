import { RFValue } from "react-native-responsive-fontsize";
import styled  from "styled-components/native";

export const Container = styled.TextInput`
background-color: ${({theme})=>theme.colors.background};
border-radius: 5px;
color: ${({theme})=>theme.colors.text};
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(14)}px;

padding: 25px 15px;
margin-bottom: 32px;
`;