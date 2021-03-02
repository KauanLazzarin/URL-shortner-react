import styled from 'styled-components';
import urlIcon from './../Assets/url.svg'

const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: var(--light-bg);
    padding: 4vh 0 ;
`;

const HeaderTitle = styled.h1`
    font-size: 52px;
    font-family: 'Architects Daughter';
    font-weight: 400;
    color: var(--text);
`;

const HeaderIcon = styled.img`
    width: 3vw;
    margin-right: 2vw;
    filter: drop-shadow(3px 3px 3px #3b1fda);
`;

export default function Header () {
    return (
        <HeaderContainer>
            <HeaderIcon  src={urlIcon} />
            <HeaderTitle> URL Shortner! </HeaderTitle>
        </HeaderContainer>
    )
};