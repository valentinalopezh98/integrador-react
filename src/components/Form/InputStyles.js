import styled from "styled-components"

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    `

export const Input = styled.input`
    width: 100%;
    height: 2.1875rem;
    padding-left: 0.3125rem;
    font-family: 'Roboto Mono', monospace;
    border-color: ${({error}) => (error ? "var(--secondary-color)" : "var(--white)")};
`

export const TextArea = styled.textarea`
    height: 4.375rem;
    padding: 0.3125rem;
    border-color: ${({error}) => (error ? "var(--secondary-color)" : "var(--white)")};
`
    

export const ErrorMessageStyled = styled.span`
    font-size: 14px;
    color: var(--secondary-color);
    margin-top: 5px;
`