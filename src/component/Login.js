import React from 'react';
import { Row, Col,Card, CardText, CardBody,
    CardTitle, CardSubtitle,Button, Form, FormGroup, Label, Input, FormText, CustomInput  } from 'reactstrap';
const Login = () =>{
    return (
        <Row  style={{paddingRight: 10 , paddingLeft: 70, paddingTop:60}}>
        <Col sm="12" >
        <Card>
        <CardBody>
          <CardTitle className="text-center">
              <h5><strong>Sign up for a FREE trial class</strong></h5>
               <p>Limited seats only!</p>
               </CardTitle>
        <CardText> 
        <Form>
        <Row>
        <Col sm="6">
        <FormGroup>
        <Input type="text" name="text" id="name" placeholder="Name of you child" />
        </FormGroup>
        </Col>
        <Col sm="6">
        <FormGroup>
        <Input type="select" name="class" id="class">
          <option>Grade</option>
          <option>Class 1</option>
          <option>Class 2</option>
          <option>Class 3</option>
          <option>Class 4</option>
          <option>Class 5</option>
          <option>Class 6</option>
          <option>Class 7</option>
          <option>Class 8</option>
          <option>Class 9</option>
          <option>Class 10</option>
          <option>Class 11</option>
          <option>Class 12</option>
        </Input>
      </FormGroup>
        </Col>
        <Col sm="12">
        <FormGroup>
        <Input type="text" name="text" id="mobile" placeholder="Mobile Number" />
        </FormGroup>
        </Col>
        <Col sm="12">
        <FormGroup>
        <Input type="email" name="email" id="email" placeholder="Email Address" />
        </FormGroup>
        </Col>
        <Col sm="12">
        <FormGroup>
        <Input type="select" name="class" id="class">
          <option>State</option>
          <option>Andaman & Nicobar Islands</option>
          <option>Andhra Pradesh</option>
          <option>Arunachal Pradesh</option>
          <option>Assam</option>
          <option>Bihar</option>
        </Input>
      </FormGroup>
        </Col>
        <Col sm="12" className="text-center">
        <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
        </Col>
        <Col sm="12" className="text-center"  style={{paddingTop: 8}}>
        <Button style={{backgroundColor:"#5c72ff"}}>BOOK FREE 60 MIN CLASS</Button>
        </Col>
      </Row>
    </Form>
    </CardText>
    </CardBody>
    </Card>
    </Col>
    </Row>
    )
}
export default Login;