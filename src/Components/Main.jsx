import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import Shortner from './Shortner';

const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-color:#e9ecff;
`;

export default function Main () {
    return (
        <Container>
            <Header></Header>
            <Shortner></Shortner>

            <Footer />
        </Container>
    )
}