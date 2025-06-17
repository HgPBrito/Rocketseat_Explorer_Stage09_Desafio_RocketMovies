import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
        "header"
        "content";

    > main {
        grid-area: content;
        padding: 0 12.3rem 0 10.6rem;
    }    
`;

export const Content = styled.div`

    width: 100%;
    height: 80vh;
    max-width: 113.7rem;
    margin: 4rem auto;

    display: flex;
    flex-direction: column;

    button {
        background: none;
        border: none;
    }

    div {
        display: flex;
        align-items: center;
    }

    .movie-info {
        gap: 0.8rem;
        margin-top: 2.4rem;

        p:nth-child(1),
        div {
            display: flex;
            align-items: center;
            gap: 0.8rem;
        }

        img {
            width: 1.6rem;
            height: 1.6rem;
            border-radius: 50%;
        }

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    h1 {
        font-weight: 700;
        font-size: 3.6rem;
        margin-right: 1.9rem;
    }

    >.description {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        padding: 0 2.4rem 0 0;

        scrollbar-color: ${({ theme }) => theme.COLORS.PINK} transparent;
        scrollbar-width: 0.8rem;

        p {
            text-align: justify;
            color: ${({ theme }) => theme.COLORS.WHITE};

            margin-top: 4rem;
            max-width: calc(100% - 0.8rem);

            line-height: 2.1rem;
        }
    }
    > .description::-webkit-scrollbar {
        width: 0.8rem;
    }

    > .description::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 0.8rem;
    }


`;