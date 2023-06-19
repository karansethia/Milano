import { styled } from "styled-components";
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    /* margin-left: 24px; */
    text-decoration: none;
    font-weight: bold;
`;

export const MobileIcons = styled.div`
    display: none;

    @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,50%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: -22px;
    list-style: none;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        transition: 0.5s all ease-in;
        border-bottom: 3px solid #8800ff;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 10px;
    background-color: #8800ff;
    white-space: nowrap;
    padding: 10px 20px;
    color: #efddff;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: 520;
    letter-spacing: 1px;
    &:hover{
        transition: all 0.3s ease-in-out;
        background-color: white;
        color: #8800ff;
    }
`;