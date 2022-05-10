import styled from "styled-components";
import { Link } from "react-router-dom";

/* Section Actualités */

export const SectionActualites = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 5px;
  align-items: center;
  justify-content: space-around;
  margin-top: 100px;
`

/* Cadre 1 - Evènement 1 */

export const Event = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 410px;
  height: 502px;
  border: 4px solid rgb(176, 226, 159);
  border-radius: 10px;
  
  img {
    height: 420px;
    border-radius: 15px;
  }
`

/* Titre Evènement */

export const HeaderEvent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 405px;
  height: 60px;
  background: rgb(176, 226, 159);
  border-radius: 8px;

  h3 {
    color: white;
    text-transform: uppercase;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 46px;
    text-align: center;
  };

  h3:hover{
    color: rgb(90, 188, 58);
  }

  .ResSociaux{
    font-size: 40px;
  }
`
export const LinkTitleEvent = styled(Link)`
  text-decoration: none;
  width: 405px;
  height: 60px;
  border-radius: 8px;

  :hover{
    color: rgb(90, 188, 58);
    background: white;
    border: 4px solid rgb(90, 188, 58);
  }
  
`