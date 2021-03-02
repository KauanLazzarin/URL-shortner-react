import styled from 'styled-components';
import React from 'react';

/* 
===============================================================
    SHORTNER INPUT STYLES
===============================================================
*/

const ShortnerContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const ShortnerInputContainer = styled.div`
    width: 100%;
    height:50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const UrlShortnerInput = styled.input`
    background: none;
    border-bottom: 2px solid #5608a0;
    width: 80%;
    height: 5vh;
    font-size:24px;
    text-align: center;
    margin-left: 20px;
    outline: 0;
    color:#460879;
    font-family:'Ubuntu';
    font-weight: 400;

    &:focus-within {
        border-radius: 40px;
        border: 2px solid #a247d6;
        box-shadow: 1px 1px 10px 1px #a874eb;
    }
`;

const UrlShortnerButton = styled.button`
    width: 15vw;
    margin: 10vh 0;
    padding: 2vh 0;
    border-radius: 40px;
    font-family: 'Ubuntu';
    font-weight: bold;
    font-size: 26px;
    color: white;
    background-color: #5608a0;
`;

/* 
===============================================================
    URL RESULTS STYLES
===============================================================
*/

const ResultContainer = styled.div`
    width: 100%;
    height:auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background: white;
`;

const ResultHead = styled.h2`
    width: 70%;
    margin-top: 2vh;
    font-size:42px;
    font-weight: 400;
    font-family: 'Architects Daughter';
    color: #1d0431;
    padding: 20px;
    text-align: center;
`;

const ResultDisplay = styled.h3`
    width:70%;
    margin-bottom: 20vh;
    font-size: 32px;
    font-family: 'Ubuntu';
    color: #3b3b3b;
    font-weight: 400;
    text-align: center;
`;

const LoadingAnimation = styled.div`
    margin-top: 3vh;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    border: 2px solid #34033d;
    animation-name: rotate;
    animation-duration: 3s;
    animation-iteration-count: infinite;

    @keyframes rotate {
        50% {
            transform: rotate(360deg);
            box-shadow: 1px 1px 10px 1px #10b910;
            border-color: #10b910;
        }

        70% {
            transform: rotate(360deg);
            box-shadow: 1px 1px 10px 1px #eaf36a;
            border-color: #eaf36a;
        }

        100% {
            transform: rotate(360deg);
            box-shadow: 1px 1px 10px 1px #fd2424;
            border-color: #fd2424;
        }
    }
`

export default function Shortner () {
    const [urlToShort, setUrlToShort] = React.useState('');
    const [shortnedUrl, setShortnedUrl] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    function handleInputChange (value) {
        setUrlToShort(value);
    };

    async function getShortnedUrl () {
        setIsLoading(true);
        setShortnedUrl('');
        setError('');

        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${urlToShort}`);
        const data = await response.json();

        console.log(data);

        setIsLoading(false);

        // Error handling 
        if (data.ok === true) {
            setShortnedUrl(data.result.full_short_link);
        } else if (data.error_code === 1) {
            setError('No URL set, please give a URL ');
        } else if (data.error_code === 2) {
            setError('Not a valid URL, please enter a valid URL');
        } else if (data.erro_code === 3) {
            setError('Rate limit reached, wait a second and try again');
        } else {
            setError('Unknown Error, contact the admins or try again later');
        };
        
    };

    return (
        <ShortnerContainer>
            <ShortnerInputContainer>
                <UrlShortnerInput
                    required 
                    type="text" 
                    placeholder="Puts the URL here" 
                    onChange={( { target } ) => handleInputChange(target.value)}
                />

                <UrlShortnerButton onClick={getShortnedUrl}>
                    Short URL
                </UrlShortnerButton>

            </ShortnerInputContainer>

            <ResultContainer>
                <ResultHead>See here your shortned URL</ResultHead>

                {
                    isLoading && <LoadingAnimation />
                }
                
                {
                    error && <ResultDisplay>{error}</ResultDisplay>
                }

                <ResultDisplay>{shortnedUrl}</ResultDisplay>

            </ResultContainer>
        </ShortnerContainer>
    );
}