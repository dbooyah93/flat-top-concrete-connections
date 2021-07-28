import React from 'react';
import { Carousel, Container, Row, Col, Card, Form } from 'react-bootstrap';

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
                                We aim to join ambitious skilled private construction contractors with residential jobs.
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Please check below Andy's images for a form to reach us at. --- AS OF 7/28/21 THIS IS NOT FUNCTIONAL PLEASE EXPECT AN UPDATE WITHIN 24 HOURS
                            </Col>
                        </Row>
                        <Container >
                            <Carousel fade={true}>
                                {
                                    this.state.images.map( ( imagePath, index ) => {
                                        return (
                                            <Carousel.Item key={index}>
                                                <img
                                                className="d-block w-100"
                                                src={imagePath}
                                                alt="First slide"
                                                height="800"
                                                />
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </Carousel>
                        </Container>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We will never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
  }
  export default App;