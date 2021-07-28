import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';

class App extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            images: [
                "./resources/images/AndysConcrete/sideWalkDemoStart.jpg",
                "./resources/images/AndysConcrete/sideWalkDemoFirstMiddle.jpg",
                "./resources/images/AndysConcrete/sideWalkDemoSecondMiddle.jpg",
                "./resources/images/AndysConcrete/sideWalkDemoFirstFinal.jpg",
                "./resources/images/AndysConcrete/sideWalkDemoFinalFinal.jpg"
            ]
        }
    }
    render() {
        return ( 
            <div>
                <Card>
                    <Card.Header>
                        <h1>Andy's Concrete Solutions </h1>
                        <h3>Hosted by Constructing Connections</h3>
                    </Card.Header>
                    <Card.Body>

                        <Row>
                            <Col>
                                We aim to join ambitious skilled private construction contractors with residential jobs. Please check back daily for updates as soon we will allow you to send messages, request a quote, and allow contractors to set up profiles with their own galleries.

                                Thank you!!

                            </Col>
                        </Row>
                        <Container>
                            <Carousel fade>
                                {
                                    this.state.images.map( ( imagePath, index ) => {
                                        return (
                                            <Carousel.Item key={index}>
                                                <img
                                                className="d-block w-100"
                                                src={imagePath}
                                                alt="First slide"
                                                />
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </Carousel>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        )
    }
  }
  export default App;