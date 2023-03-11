import React from 'react';
import axios from 'axios';
import { Carousel, Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

class App extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            // images: [
            //     "./resources/images/AndysConcrete/sideWalkDemoStart.jpg",
            //     "./resources/images/AndysConcrete/sideWalkDemoFirstMiddle.jpg",
            //     "./resources/images/AndysConcrete/sideWalkDemoSecondMiddle.jpg",
            //     "./resources/images/AndysConcrete/sideWalkDemoFirstFinal.jpg",
            //     "./resources/images/AndysConcrete/sideWalkDemoFinalFinal.jpg"
            // ],
            email: '',
            message: '',
            files: [],
        }
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleMultiImageUpload = this.handleMultiImageUpload.bind(this);
        this.sendClientEmail = this.sendClientEmail.bind(this);
    }

    handleTextChange ( event ) {
        let stateTarget = event.target.id;
        let value = event.target.value;
        this.setState({ [stateTarget]: value});
        console.log(this.state);
    }

    handleMultiImageUpload ( event ) {
        console.log( event );
    }

    sendClientEmail ( event ) {
        axios.post( '/email', {
            email: this.state.email,
            message: this.state.message,
            files: 'this.files'
        })
            .then( ( response ) => {
                console.log( response.data );
            });
    }

    render() {
        return ( 
            <div>
                <Card>
                    <Card.Header>
                        <h1>Constructing Connections</h1>
                        <p>Please check below the project gallery for the form with which you may reach us.</p>
                    </Card.Header>
                    <Card.Body>
                            <p>We aim to join ambitious skilled private construction contractors with residential jobs.</p>

                        <Row>
                            <Col>
                                <h3>
                                    Homeowners:::
                                </h3>
                            </Col>
                            <Col xs={9}>
                                If you are interested in a quote for any kind of home improvement project or repair, please prepare images and dimensions of the project at hand. 
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
                                    <Form.Control onChange={ this.handleTextChange } as="textarea" type="message" rows={3} />
                                </Form.Group>
                                <Button onClick={ this.sendClientEmail } variant="primary" >Send</Button>
                            </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
  }
  export default App;