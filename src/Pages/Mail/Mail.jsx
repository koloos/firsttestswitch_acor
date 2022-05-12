import React, { useRef } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Container } from '../../GlobalStyle';
import { ContainForm, Row1, Row2, Row3, Row4, Row5, Row6 } from './MailStyle';
import { reCaptcha } from '../../Pages/Mail/Components/reCaptcha';
import emailjs from 'emailjs-com';



function Mail(e) { 
  
  {/* --- METHOD TO SEND THE MAIL --- */}
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_bg89aih', e.target, 'PwhIRcAYGXwgT5gG1')
      .then(res => {
          console.log(res);
      }).catch(err => console.log(err));
  }
   
  const { register } = useForm()
   
    
  return (
    <>
      <Container>
        <CoverMail />
        <TitleMail>Je veux prendre contact avec vous</TitleMail>
        <ContainForm>
        <form onSubmit={sendEmail}>
          <Row1>
            <label>Nom</label>
            <input type="text" placeholder="Nom" name='name' />
            <label>Prénom</label>
            <input type="text" placeholder="Prénom"  name='prenom' />
          </Row1>
          <Row2>
            <label>Email</label>
            <input type="text" placeholder="Email" name='user_email' />
          </Row2>
          <Row3>
            <label>Sujet</label>
            <select name='subject'>
              <option value="Je choisis mon sujet">Je choisis mon sujet</option>
              <option value="Je postule">Je postule</option>
              <option value="Je veux être accompagné">Je veux être accompagné</option>
              <option value="Demande de stage">Demande de stage</option>
            </select>
          </Row3>
          <Row4>
            <label>Message</label>
            <input type="textarea" placeholder="Message" name='Message' />
          </Row4>

          <Row5>
          <reCaptcha />
          <input type="radio" value="Je suis d'accord avec les conditions générales" className='radio' />
          <label>Je suis d'accord avec les conditions générales</label>
          </Row5>

          <Row6>
          <button type="submit">Envoyer</button>
          <label>Je souhaite joindre un document à mon message :</label>
          <input name="image" type="file" /> 
          <button type="upload">Joindre</button>
          </Row6>
        </form>
        </ContainForm>
      </Container>
    </>
  )
}

/* CoverMail */

const CoverMail = styled.div`
  width: 100%;
  height: 430px;
  background: url('./img/covers/mail.png'),
    linear-gradient(
      180deg,
      rgba(90, 188, 58, 0.6) 0%,
      rgba(90, 188, 58, 0.2) 100%
    );
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const TitleMail = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-size: 48px;
  font-weight: 600;
  color: rgb(90, 188, 58);
  text-transform: uppercase;
  text-align: center;
  padding-top: 40px;
`;

const Checkmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 10px;
    width: 10px;
    border: 1px solid #818181;
    border-radius: 50%;
    &::after {
        content: "";
        position: absolute;
        display: none;
        top: 2px;
        left: 2px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #4eb3ff;
    }
`;

const Input = styled.input`
    display: none;
    &:checked ~ ${Checkmark} {
        border: 1px solid #4eb3ff;
        transition: all .25s ease-in-out;
    }
    &:checked ~ ${Checkmark}:after {
        display: block;
    }
`;

export default Mail;
