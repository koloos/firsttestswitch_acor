import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainSectionChiffres = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* background: rgb(90, 188, 58); */
  margin-top: 20px;

  h3{
    color: rgb(90, 188, 58);
    text-transform: uppercase;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 46px;
  };

  h3:hover{
    color: white;
    text-shadow: 1px 1px 2px rgb(90, 188, 58), 0 0 1em rgb(90, 188, 58), 0 0 0.1em rgb(90, 188, 58);
  }

  p{
      font-style: italic;
      font-family: 'Lato', sans-serif;
  }
`;

export const LinkTitleChiffres = styled(Link)`
  text-decoration: none;
  color: rgb(90, 188, 58);

  :hover{
    color: white;
    text-shadow: 1px 1px 2px rgb(90, 188, 58), 0 0 1em rgb(90, 188, 58), 0 0 0.1em rgb(90, 188, 58);
  }
`

export const OneCircle = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const ContainCircles = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;  
    
    p{
      font-family: 'Nunito', sans-serif;
      font-weight: 500;
      color: rgb(90, 188, 58);
      text-align: center;
    }
`;

export const CircleChiffre = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 15px solid rgb(176, 226, 159);
    margin-right: 40px;

    h4{
        font-family: 'Nunito', sans-serif;
        font-size: 74px;
        font-weight: 500;
        color: rgb(90, 188, 58);
    }

  
`;
