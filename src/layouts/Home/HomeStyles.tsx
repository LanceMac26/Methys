import styled from 'styled-components';
import { Menu, Tag, Space, Input, Button, Layout } from 'antd';

const { Header } = Layout;

const StyledSideNav = styled(Menu)`
    height: 100vh;
    background: #122046;
`;

const StyledTag = styled(Tag)``;

const StyledSpace = styled(Space)``;

const StyledNavContainer = styled.div`
    padding: 0;
    float: left;
`;

const StyledTableContainer = styled.div`
    border-radius: 25px;
    box-shadow: 1px 1px 1px 1px;
`;

const StyledBodyContainer = styled.div`
    float: left;
    padding-top: 1%;
    padding-left: 3rem;
    border: 1px;
`;

const StyledPage = styled.div`
    overflow: hidden;
`;

const StyledInput = styled(Input)`
    width: 17vh;
    margin-bottom: 15px;
`;

const StyledViewButton = styled(Button)``;

const PrimaryColumnText = styled.div`
    color: black;
    font-weight: bold;
`;

const SecondaryColumnText = styled.div`
    color: rgb(135 148 159);
`;

const StyledHeader = styled(Header)`
    height: 7rem;
    padding-inline: 50px;
    color: rgb(15 22 39);
    line-height: 64px;
    background: #ffffff !important;
    
    border-bottom: 2px solid #f0f4f7;

    font-family: Roboto;
    font-size: 2.5rem;
    line-height: 6rem;
    font-weight: bold;

    padding: 1rem 0rem 5rem 4rem;
`;

const StyledLayout = styled(Layout)``;

export {
    StyledSideNav,
    StyledTag,
    StyledSpace,
    StyledBodyContainer,
    StyledNavContainer,
    StyledPage,
    StyledTableContainer,
    StyledInput,
    StyledViewButton,
    PrimaryColumnText,
    SecondaryColumnText,
    StyledHeader,
    StyledLayout,
};