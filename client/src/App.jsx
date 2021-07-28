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
                                This site is under constant maintenance. Please check back daily for updates. Soon we will we allow comunication to reach me, David, and our current contractor, Andy.
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