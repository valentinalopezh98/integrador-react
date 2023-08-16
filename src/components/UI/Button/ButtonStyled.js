import {styled} from "styled-components"
import {color, motion} from "framer-motion"

export const StyledButton = styled(motion.button)`
    background-color:${props => props.color? "var(--bg-color)" : "var(--font-color)"};
    border: 0.125rem solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.625rem 3.125rem;
    color:${props => props.color? "var(--font-color)" : "var(--bg-color)"};
    text-transform: uppercase;
    font-size: 0.875rem;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease-in;

    &:hover{
        background-color:${props => props.color? "var(--font-color)" : "var(--bg-color)"};
        color: ${props => props.color? "var(--bg-color)" : "var(--font-color)"};;
        transition: all 0.3s ease-in;
    }

    &::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0.125rem solid white;
    top: 20%;
    left: 4%;
    z-index: -1;
}
`