import React from 'react';
import axios from 'axios';
import Timer from './modules/timer.jsx'
import { Carousel, Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

class App extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            some: 'sample text'
        }

        // this.methods go here
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
                        <Timer/>
                    </Card.Header>
                    <Card.Body>
                        <p> this is the card body</p>
                        {this.some}
                    </Card.Body>
                </Card>
            </div>
        )
    }
  }
  export default App;