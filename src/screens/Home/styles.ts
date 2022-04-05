
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons} from "@expo/vector-icons"

import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.colors.background};
`;
export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(39)}px;
    background-color: ${({ theme}) => theme.colors.background};
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;


export  const ContentWrapper = styled.View`
width: 100%;
padding: 0 23px;
flex-direction: row;

align-items: center;
justify-content: space-between;
`;
export  const UserInfo = styled.View`
flex-direction: row;
align-items: center;
`;
export  const Photo = styled.Image`
    width:  ${RFValue(41)}px;
    height: ${RFValue(40)}px;
    border-radius: 30px;
`;
export const User = styled.View`
margin-left: ${RFValue(20)}px;
`;
export const UserGreeting = styled.Text`
color: ${({ theme})=> theme.colors.text};
font-family: ${({})=>theme.fonts.regular};
line-height: ${RFValue(24)}px;
`;
export const UserName = styled.Text`
color: ${({ theme})=> theme.colors.text};
font-family: ${({})=>theme.fonts.bold};
line-height: ${RFValue(24)}px;
`;
export const Icon = styled(MaterialIcons)`
color:${({ theme})=> theme.colors.buttonExit} ;
font-size:  ${RFValue(30)}px;
`;
