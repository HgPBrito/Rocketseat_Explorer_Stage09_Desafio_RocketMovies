import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
    
    height: 100vh;
    display: flex;
    align-items: stretch;

`;

export const Form = styled.form`
    padding:  0 13.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > h2 {
        font-size: 2.4rem;
        margin: 4.8rem 0;
    }

    > p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.Gray_100};
    }

    > a {
        margin-top: 4.2rem;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 1.6rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        > svg {
            margin-right: 0.8rem;
            font-size: 2rem;
        }   
    }

    
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;

`;