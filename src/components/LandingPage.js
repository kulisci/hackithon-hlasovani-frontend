import React from 'react';
import 'styled-components/macro';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid black;
  min-height: 5rem;
  background-color: white;
  overflow: hidden;
  position: relative;
  height: 3rem;
  border-radius: .5rem;  
  padding: 1rem 1rem 1rem 1rem;
  &:after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 1.2em;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
  }
  &:hover {
    cursor: pointer;
  }
  &:focus {
    border-radius: .5rem;
    outline: 0;    
    border: 1px solid blue;
  }
  -moz-box-shadow:    1px 1px 2px 3px #ccc;
  -webkit-box-shadow: 1px 1px 2px 3px #ccc;
  box-shadow:         1px 1px 2px 3px #ccc;
  &:hover {
    -moz-box-shadow:    0px 0px 1px 2px #ccc;
    -webkit-box-shadow: 0px 0px 1px 2px #ccc;
    box-shadow:         0px 0px 1px 2px #ccc;
  }
`;

const ButtonWraper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: .5rem;
  margin: auto 20% auto 20%;
  @media (min-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 60rem) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default () => (
  <div>
    <ButtonWraper>
      {/*Používej takto: <Button title="X">X</Button>*/}
      <Button> Zastupitelstvo města projednalo návrh na prodej části pozemku v k. ú. Chlum u Děčína a schvaluje prodej části pozemku p. č. 1037/1, dle GP č. 265-201/2018 nově ozn. jako p. p. č. 1037/13 o vým. 402 m2, v k. ú. Chlum u Děčína, se všemi součástmi a příslušenstvím pro p. Dalibora Mikeše, Zámecká 1069/1, Děčín I, za cenu 80.400,00 Kč + poplatek ve výši 12.060,00 Kč za užívání pozemku bez nájemního vztahu + ostatní náklady. </Button>
      <Button> Zastupitelstvo města projednalo návrh na prodej části pozemku v k. ú. Chlum u Děčína a schvaluje prodej části pozemku p. č. 1037/1, dle GP č. 265-201/2018 nově ozn. jako p. p. č. 1037/13 o vým. 402 m2, v k. ú. Chlum u Děčína, se všemi součástmi a příslušenstvím pro p. Dalibora Mikeše, Zámecká 1069/1, Děčín I, za cenu 80.400,00 Kč + poplatek ve výši 12.060,00 Kč za užívání pozemku bez nájemního vztahu + ostatní náklady. </Button>
      <Button> Zastupitelstvo města projednalo návrh na prodej části pozemku v k. ú. Chlum u Děčína a schvaluje prodej části pozemku p. č. 1037/1, dle GP č. 265-201/2018 nově ozn. jako p. p. č. 1037/13 o vým. 402 m2, v k. ú. Chlum u Děčína, se všemi součástmi a příslušenstvím pro p. Dalibora Mikeše, Zámecká 1069/1, Děčín I, za cenu 80.400,00 Kč + poplatek ve výši 12.060,00 Kč za užívání pozemku bez nájemního vztahu + ostatní náklady. </Button>
      <Button> Zastupitelstvo města projednalo návrh na prodej části pozemku v k. ú. Chlum u Děčína a schvaluje prodej části pozemku p. č. 1037/1, dle GP č. 265-201/2018 nově ozn. jako p. p. č. 1037/13 o vým. 402 m2, v k. ú. Chlum u Děčína, se všemi součástmi a příslušenstvím pro p. Dalibora Mikeše, Zámecká 1069/1, Děčín I, za cenu 80.400,00 Kč + poplatek ve výši 12.060,00 Kč za užívání pozemku bez nájemního vztahu + ostatní náklady. </Button>
      <Button> Zastupitelstvo města projednalo návrh na prodej části pozemku v k. ú. Chlum u Děčína a schvaluje prodej části pozemku p. č. 1037/1, dle GP č. 265-201/2018 nově ozn. jako p. p. č. 1037/13 o vým. 402 m2, v k. ú. Chlum u Děčína, se všemi součástmi a příslušenstvím pro p. Dalibora Mikeše, Zámecká 1069/1, Děčín I, za cenu 80.400,00 Kč + poplatek ve výši 12.060,00 Kč za užívání pozemku bez nájemního vztahu + ostatní náklady. </Button>
      <Button> Zastupitelstvo města projednalo návrh na prodej části pozemku v k. ú. Chlum u Děčína a schvaluje prodej části pozemku p. č. 1037/1, dle GP č. 265-201/2018 nově ozn. jako p. p. č. 1037/13 o vým. 402 m2, v k. ú. Chlum u Děčína, se všemi součástmi a příslušenstvím pro p. Dalibora Mikeše, Zámecká 1069/1, Děčín I, za cenu 80.400,00 Kč + poplatek ve výši 12.060,00 Kč za užívání pozemku bez nájemního vztahu + ostatní náklady. </Button>
      <Button> Zastupitelstvo města projednalo návrh na prodej části pozemku v k. ú. Chlum u Děčína a schvaluje prodej části pozemku p. č. 1037/1, dle GP č. 265-201/2018 nově ozn. jako p. p. č. 1037/13 o vým. 402 m2, v k. ú. Chlum u Děčína, se všemi součástmi a příslušenstvím pro p. Dalibora Mikeše, Zámecká 1069/1, Děčín I, za cenu 80.400,00 Kč + poplatek ve výši 12.060,00 Kč za užívání pozemku bez nájemního vztahu + ostatní náklady. </Button>
      <Button> Zastupitelstvo města projednalo návrh na prodej části pozemku v k. ú. Chlum u Děčína a schvaluje prodej části pozemku p. č. 1037/1, dle GP č. 265-201/2018 nově ozn. jako p. p. č. 1037/13 o vým. 402 m2, v k. ú. Chlum u Děčína, se všemi součástmi a příslušenstvím pro p. Dalibora Mikeše, Zámecká 1069/1, Děčín I, za cenu 80.400,00 Kč + poplatek ve výši 12.060,00 Kč za užívání pozemku bez nájemního vztahu + ostatní náklady. </Button>
    </ButtonWraper>
  </div>
);
