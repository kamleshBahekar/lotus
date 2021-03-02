

import React from 'react';
import img from './../assets/images.jpeg'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const Teacher= () =>{
    return (
        <Row style={{paddingTop:60}}>
        <Col sm="6">
        <Card>
        <CardImg top width="100%" src={img} alt="Card image cap" />
            <CardBody className="text-center">
              <CardTitle tag="h5">Divya Gokulnath</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">The Science and Math specialist</CardSubtitle>
              <CardText>- Co-founder - BYJU'S</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6"  style={{paddingRight: 30 }}>
        <Card>
        <CardImg top width="100%" src={img} alt="Card image cap" />
            <CardBody className="text-center">
              <CardTitle tag="h5">Vinay MR</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">The Science Genius</CardSubtitle>
              <CardText>
              - CAT Topper BTech, RVCE
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6" style={{ paddingTop: 10 }}>
        <Card>
        <CardImg top width="100%" src={img} alt="Card image cap" />
            <CardBody className="text-center">
              <CardTitle tag="h5">Anita Kishore</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">The Math Magician</CardSubtitle>
              <CardText>- University topper, VJTI Gold medallist, IIM A</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6" style={{ paddingTop: 20 ,  paddingRight: 30}}>
        <Card>
        <CardImg top width="100%" src={img} alt="Card image cap" />
            <CardBody className="text-center">
              <CardTitle tag="h5">Sankar N Krishna</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">The Sorcerer of Science</CardSubtitle>
              <CardText>- PhD. Northwestern University</CardText>
            </CardBody>
          </Card>
        </Col>
        </Row>
      );
    };

export default Teacher;








// <div>
//       <Card>
//         <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
//         <CardBody>
//           <CardTitle tag="h5">Card title</CardTitle>
//           <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//     </div>