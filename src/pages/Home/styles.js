import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
        "header"
        "content";

    > main {
        width: 100%;
        height: 80vh;
        max-width: 113.7rem;
        margin: 4rem auto;

        display: flex;
        flex-direction: column;
        grid-area: content;
        padding: 5.0rem 12.3rem 4.0rem 10.6rem;
    }    
`;

export const SubHeader = styled.div`

    display: flex;
    align-items: center;

    justify-content: space-between;
    margin-bottom: 5.0rem;
`;

export const NewMovie = styled(Link)`
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    padding: 1.35rem 3.2rem;
    border-radius: 0.8rem;
`;

export const Content = styled.div`
    max-height: 65vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    scrollbar-color: ${({ theme }) => theme.COLORS.PINK} transparent;
    scrollbar-width: 0.8rem;
`;
