import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    background-color: 1px solid var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export const Options = styled.button`
    font-style: normal;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid transparent;
    color: var(--white);
    background: #0d0d0d;


    &:hover,
    &:focus {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export default Button;
