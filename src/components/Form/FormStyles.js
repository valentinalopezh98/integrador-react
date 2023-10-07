import styled from 'styled-components'

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;

    & .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 0;
        height: 2.5rem;
        cursor: pointer;
        background-color: var(--bg-color);
        border: 0.125rem solid white;
        color: white;
        text-transform: uppercase;
        transition: all 0.3s ease-in;
        animation: fade;
        font-family: 'Roboto Mono', monospace;
    }

    & .btn:hover{
        background-color: var(--font-color);
        color: var(--bg-color);
        transition: all 0.3s ease-in;
        animation: fade;
    }
`

