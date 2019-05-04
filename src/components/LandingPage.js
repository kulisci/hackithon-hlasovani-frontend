import React, {Component} from 'react';
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

export default class VotingReasons extends Component {

  constructor(props){
      super(props);
      this.state = {
          reasons: [],
          isLoaded: false,
      }
  }

  componentDidMount() {

      fetch('http://192.168.87.76/votingReasons.php')
          .then(res => res.json())
          .then(json => {
              this.setState({
                  isLoaded: true,
                  reasons: json,
              })
              console.log(json);
          });

  }

  render(){
      var { isLoaded, reasons } = this.state;

      if(!isLoaded){
        return <div>Loading....</div>;
      }else{
        return(
          <ButtonWraper>
            <Button>á</Button>
            {reasons.map(reason =>(
              <Button key={reason.id} title={reason.popis}>{reason.popis}</Button>
            ))}
            
          </ButtonWraper>
        );
      }
  }
}

