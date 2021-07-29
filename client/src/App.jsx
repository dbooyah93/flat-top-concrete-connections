import React from 'react';
import { Carousel, Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

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
            ],
            email: '',
            message: '',
            files: [],
        }
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleMultiImageUpload = this.handleMultiImageUpload.bind(this);
        this.sendClientEmail = this.sendClientEmail.bind(this);
    }

    handleTextChange ( event ) {
        let stateTarget = event.target.type;
        let value = event.target.value;
        this.setState({ [stateTarget]: value});
        console.log(this.state);
    }

    handleMultiImageUpload ( event ) {
        console.log( event );
    }

    sendClientEmail ( event ) {
        console.log( event );
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
                            We aim to join ambitious skilled private construction contractors with residential jobs.
                        </Row>
                        <Row>
                            Please check below Andy's images for a form to reach us with. --- AS OF 7/28/21 THIS IS NOT FUNCTIONAL. AS OF 7/29/21 THIS IS NOT FUNCTIONAL. Check back within the next day or two for updates to the page and the form.
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
                        <Container>
                            <Carousel fade={true} height="800">
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
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={ this.handleTextChange } type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We will only share your email address with the contractor(s) you choose
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>Check back in this weekend for the ability to upload images</Form.Label>
                                <Form.Control onChange={ this.handleMultiImageUpload } type="file" multiple disabled/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="message">
                                <Form.Label>Your message</Form.Label>
                                <Form.Control onChange={ this.handleTextChange } as="textarea" rows={3} />
                            </Form.Group>
                            <Button onClick={ this.sendClientEmail } variant="primary" disabled>Send</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
  }
  export default App;