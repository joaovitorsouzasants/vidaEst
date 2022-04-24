import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
align-items: center;
border-radius: 5px;
width: 100%;
background-color: ${({theme})=>theme.colors.buttonLogin};
padding: 7px;

`;
export const Title = styled.Text`
    color: ${({theme})=>theme.colors.listagem};
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: ${RFValue(14)}px ;
 
`;


