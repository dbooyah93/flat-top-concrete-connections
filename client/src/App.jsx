import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';

class App extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
        }
    }
    render() {
        return ( 
            <div>
                <Card>
                    <Card.Header>
                        <h1>Andy's Concrete Solutions </h1>
                        <h3>Hosted by Concrete Connections</h3>
                    </Card.Header>
                    <Card.Body>

                        <Row>
                            <Col>
                                This site is under constant maintenance. Please check back daily for updates. Soon we will we allow comunication to reach me, David, and our current contractor, Andy.
                            </Col>
                        </Row>
                        <Container>
                            <Carousel fade>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="./resources/images/AndysConcrete/sideWalkDemoStart.jpg"
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="./resources/images/AndysConcrete/sideWalkDemoFirstMiddle.jpg"
                                    alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="./resources/images/AndysConcrete/sideWalkDemoSecondMiddle.jpg"
                                    alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="./resources/images/AndysConcrete/sideWalkDemoFirstFinal.jpg"
                                    alt="Fourth slide"
                                    />

                                    <Carousel.Caption>
                                    <h3>Fourth slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        )
    }
  }
  export default App;