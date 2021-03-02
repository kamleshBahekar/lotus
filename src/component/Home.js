import Login from './Login'
import React from 'react';
import Teacher from './Teacher'
import Footer from './Footer'
import Header from './Header'
import { Row, Col,  } from 'reactstrap';
function Home() {
    return (
      <div>
         <div className="text-center" style={{ position:'absolute', left: 0, top: 0, right: 0, backgroundColor: "#803482"}}>
           <Header/>
         </div>
        <Row  style={{paddingTop: 60}}>
        <Col sm="12">
            <h4 className="text-center">
                <i>Attend a 60-minute FREE class with our top teachers
            Our teachers are Science and Maths super-experts who simplify
            complex concepts visually through real life examples</i>
            </h4>
        </Col>
        <Col sm="6">
        <Login/>
        </Col>
        <Col sm="6">
        <Teacher/>
        </Col>
      </Row>
       <div style={{ position:'absolute', left: 0, bottom: 0, right: 0, backgroundColor: "#803482"}}>
       <Footer/>
       </div>
        </div>

    );
  }
  
  export default Home;