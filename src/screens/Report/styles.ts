import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.listagem};
    flex: 1;
`;

export const Header = styled.View`
align-items: center;
    width: 100%;
    height: ${RFPercentage(14)}px;
    justify-content: flex-end;
    padding-bottom: 5px;
    background-color: ${({ theme }) => theme.colors.listagem};
`;

export const Title = styled.Text`
color:${({ theme }) => theme.colors.text} ;
font-family: ${({ theme }) => theme.fonts.bold};
font-size: ${RFValue(18)}px;
`;