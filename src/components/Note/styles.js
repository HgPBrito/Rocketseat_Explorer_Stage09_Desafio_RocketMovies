import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

    border: none;
    border-radius: 1rem;
    margin-top: 0;
    padding: 2.2rem;
    margin-bottom: 24px;


    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 2.4rem;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    > p {
        text-align: left;
        color: #999591;
        line-height: 1.875rem;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 2.4rem;
    }
`;