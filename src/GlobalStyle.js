import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
        *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    user-select: none;
  }
`;


export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 100px 0;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }

  h3{
    /* display: flex;
    justify-content: center; */
    font-family: 'Nunito', sans-serif;
    font-size: 42px;
    font-weight: 600;
    color: rgb(90, 188, 58);
    text-transform: uppercase;
  }
`

export const Citation = styled.h1`
  color: rgb(90, 188, 58);
  display: flex;
  justify-content: center;
  font-style: italic;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 40px;
`

export const Button = styled.button`
  border-radius: 3px;
  background: rgb(90, 188, 58);
  border: none;
  white-space: nowrap;
  padding: 10 20px;
  font-size: 16px;
  color: white;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:before {
    background: white;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover:before {
    height: 500%;
  }
  &:hover {
    border: 1px solid rgb(90, 188, 58);
    box-shadow: 2px 4px 0px rgb(90, 188, 58);
    color: white;
  }
`

export default GlobalStyle
