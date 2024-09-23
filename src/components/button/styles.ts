import { styled } from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.25rem;
    border-radius: 0.25rem;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.black};
    border: 0;
    padding: 0 0.75rem;
    transition: all 100ms;

    &:hover{
        background-color: ${theme.colors.primarydark};
    }
`