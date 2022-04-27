import styled from "styled-components/native";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.listagem};
    flex: 1;
`;

export const Form = styled.View`
    flex: 1;
    justify-content: space-between;
    padding: 22px;
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
export const Fields = styled.View``;