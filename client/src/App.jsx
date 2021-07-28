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
                            <Col></Col>
                            <Col xs={10}>
                                We aim to join ambitious skilled private construction contractors with residential jobs.
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col xs={10}>
                                Please check below Andy's images for a form to reach us with. --- AS OF 7/28/21 THIS IS NOT FUNCTIONAL PLEASE EXPECT AN UPDATE WITHIN 24 HOURS
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>
                                    Homeowners:::
                                </h3>
                            </Col>
                            <Col xs={9}>
                                 if you are interested in a quote for any kind of home improvement project or repair, please prepare images and dimensions of the project at hand. 
                                The more detail you provide the more accurate the quote. Final quotes will be given after the first visit from the contractor.
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <h3>
                                    Contractors:::
                                </h3>
                            </Col>
                            <Col xs={9}>
                                If you are interested in providing a service please check back soon with your questions ready. I am building this site with a contractor and if I don't know something, he will.
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
                                <Form.Label>Your message</Form.Label>
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