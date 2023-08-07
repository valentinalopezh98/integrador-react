import { styled } from "styled-components";

export const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 60px;
    gap: 40px;
    padding: 20px 0;

    & a img{
        width: 150px;
    }
    
    & p{
        font-size: 0.875rem;
        color: var(--font-grey);
        font-weight: 200;
    }
`