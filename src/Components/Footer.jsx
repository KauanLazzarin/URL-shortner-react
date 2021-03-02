import styled from 'styled-components';

const FooterContainer = styled.footer `
    width: 100%;
    position: absolute;
    bottom: 0;

    background: black;
    display: flex;
    align-items: center;
    justify-content:center;
    text-align: center;
`;

const FooterText = styled.p`
    font-family: 'Architects Daughter';
    color: white;
    font-size: 28px;
`;

const DevLink = styled.a`
    font-family: 'Architects Daughter';
    color: white;
    font-size: 28px;
    transition:0.2s;

    &:hover {
        color: #5e109e;
    }
`;

export default function Footer () {
    return (
        <FooterContainer>
            <FooterText>
                Developed with ❤ by: <DevLink href="https://github.com/KauanLazzarin">Kauan Lazzarin</DevLink>
            </FooterText>
        </FooterContainer>
    )
}