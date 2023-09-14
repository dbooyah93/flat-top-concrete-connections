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
                        <h1> This is the card header</h1>
                    </Card.Header>
                    <Card.Body>
                        <p> this is the card body</p>
                    </Card.Body>
                </Card>
            </div>
        )
    }
  }
  export default App;