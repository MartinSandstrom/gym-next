import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage } from 'mdbreact';

const Card = ({ children }) => {
  return (
    <MDBCard>
      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
      <MDBCardBody>
        {
          children
        }
      </MDBCardBody>
    </MDBCard>
  )
}

export default Card;
