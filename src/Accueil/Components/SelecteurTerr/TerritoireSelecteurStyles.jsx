import styled from 'styled-components';

export const ContainSelect = styled.div`
  display: flex;
  justify-content: center;
  width: 599px;
  height: 85px;
  padding-bottom: 20px;

  .brd {
    border: 1px solid #e2eded;
    border-color: #eaf1f1 #e4eded #dbe7e7 #e4eded;
  }

  #info {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    color: #2d3667;
    font-size: 16px;
    text-align: center;
    padding: 14px;
    background-color: #f3f9f9;
  }

  #app-cover {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    width: 300px;
    height: 42px;
    margin: 20px auto 0 auto;
  }

  #select-button {
    position: absolute;
    height: 20px;
    padding: 20px 14px;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }

  #options-view-button {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }

  #selected-value {
    font-size: 16px;
    line-height: 0;
    margin-right: 26px;
  }

  .option img {
    width: 30px;
    height: 30px;
  }

  .option,
  .label {
    color: #2d3667;
    font-size: 16px;
  }

  #chevrons {
    position: absolute;
    top: 5px;
    right: 0;
    bottom: 0;
    width: 12px;
    padding: 9px 14px;
  }

  #chevrons i {
    display: block;
    height: 50%;
    color: rgb(90, 199, 58);
    font-size: 12px;
    text-align: right;
  }

  #options-view-button:checked + #select-button #chevrons i {
    color: #2d3667;
  }

  /* .options
{
    position: absolute;
    left: 0;
    width: 250px;
} */

  #options {
    position: absolute;
    top: 42px;
    right: 0;
    left: 0;
    width: 298px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 4px;
  }

  #options-view-button:checked ~ #options {
    border: 1px solid #e2eded;
    border-color: #eaf1f1 #e4eded #dbe7e7 #e4eded;
  }

  .option {
    position: relative;
    line-height: 1;
    transition: 0.3s ease all;
    z-index: 2;
  }

  .option img {
    position: absolute;
    left: 14px;
    padding: 0;
    display: none;
  }

  #options-view-button:checked ~ #options .option img {
    display: block;
    padding: 6px 0;
  }

  .label {
    display: none;
    padding: 0;
    margin-left: 27px;
  }

  #options-view-button:checked ~ #options .label {
    display: block;
    padding: 12px 35px;
  }

  .s-c {
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
  }

  .s-c.top {
    top: 0;
  }

  .s-c.bottom {
    bottom: 0;
  }

  input[type='radio'] {
    position: absolute;
    right: 0;
    left: 0;
    width: 100%;
    height: 50%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
  }

  .s-c:hover ~ img {
    color: #fff;
    opacity: 0;
  }

  .s-c:hover {
    height: 100%;
    z-index: 1;
  }

  .s-c.bottom:hover + img {
    bottom: -10px;
    animation: moveup 0.3s ease 0.1s forwards;
  }

  .s-c.top:hover ~ img {
    top: -10px;
    animation: movedown 0.3s ease 0.1s forwards;
  }

  @keyframes moveup {
    0% {
      bottom: -10px;
      opacity: 0;
    }
    100% {
      bottom: 0;
      opacity: 1;
    }
  }

  @keyframes movedown {
    0% {
      top: -10px;
      opacity: 0;
    }
    100% {
      top: 0;
      opacity: 1;
    }
  }

  .label {
    transition: 0.3s ease all;
  }

  .opt-val {
    position: absolute;
    left: 14px;
    width: 217px;
    height: 21px;
    opacity: 0;
    background-color: #fff;
    transform: scale(0);
  }

  .option input[type='radio']:checked ~ .opt-val {
    opacity: 1;
    transform: scale(1);
  }

  .option input[type='radio']:checked ~ img {
    top: 0;
    bottom: auto;
    opacity: 1;
    animation: unset;
  }

  .option input[type='radio']:checked ~ img,
  .option input[type='radio']:checked ~ .label {
    color: #fff;
  }

  .option input[type='radio']:checked ~ .label:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  #options-view-button:not(:checked)
    ~ #options
    .option
    input[type='radio']:checked
    ~ .opt-val {
    top: -30px;
  }

  .option:nth-child(1) input[type='radio']:checked ~ .label:before {
    background-color: rgb(90, 90, 90);
    border-radius: 4px 4px 0 0;
  }

  .option:nth-child(1) input[type='radio']:checked ~ .opt-val {
    top: -31px;
  }

  .option:nth-child(2) input[type='radio']:checked ~ .label:before {
    background-color: rgb(90, 90, 90);
  }

  .option:nth-child(2) input[type='radio']:checked ~ .opt-val {
    top: -71px;
  }

  .option:nth-child(3) input[type='radio']:checked ~ .label:before {
    background-color: rgb(90, 90, 90);
  }

  .option:nth-child(3) input[type='radio']:checked ~ .opt-val {
    top: -111px;
  }

  .option:nth-child(4) input[type='radio']:checked ~ .label:before {
    background-color: rgb(90, 90, 90);
  }

  .option:nth-child(4) input[type='radio']:checked ~ .opt-val {
    top: -151px;
  }

  .option:nth-child(5) input[type='radio']:checked ~ .label:before {
    background-color: rgb(90, 90, 90);
  }

  .option:nth-child(5) input[type='radio']:checked ~ .opt-val {
    top: -191px;
  }

  .option:nth-child(6) input[type='radio']:checked ~ .label:before {
    background-color: rgb(90, 90, 90);
    border-radius: 0 0 4px 4px;
  }

  .option:nth-child(6) input[type='radio']:checked ~ .opt-val {
    top: -231px;
  }

  .option .ariege {
    color: rgb(90, 199, 58);
  }

  .option .gers {
    color: rgb(90, 199, 58);
  }

  .option .lotEtGaronne {
    color: rgb(90, 199, 58);
  }

  .option .pyreneesAtlantique {
    color: rgb(90, 199, 58);
  }

  .option .hautesPyrenees {
    color: rgb(90, 199, 58);
  }

  #option-bg {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 40px;
    transition: 0.3s ease all;
    z-index: 1;
    display: none;
  }

  #options-view-button:checked ~ #options #option-bg {
    display: block;
  }

  .option:hover .label {
    color: #fff;
  }

  .option:nth-child(1):hover ~ #option-bg {
    top: 0;
    background-color: rgb(90, 90, 90);
    border-radius: 4px 4px 0 0;
  }

  .option:nth-child(2):hover ~ #option-bg {
    top: 40px;
    background-color: rgb(90, 90, 90);
  }

  .option:nth-child(3):hover ~ #option-bg {
    top: 80px;
    background-color: rgb(90, 90, 90);
  }

  .option:nth-child(4):hover ~ #option-bg {
    top: 120px;
    background-color: rgb(90, 90, 90);
  }

  .option:nth-child(5):hover ~ #option-bg {
    top: 160px;
    background-color: rgb(90, 90, 90);
  }

  .option:nth-child(6):hover ~ #option-bg {
    top: 200px;
    background-color: rgb(90, 90, 90);
    border-radius: 0 0 4px 4px;
  }
`
