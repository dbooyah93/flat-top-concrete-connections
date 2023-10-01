import React from 'react';
import axios from 'axios';
import Timer from './modules/timer.jsx'
import TaskForm from './modules/task-form.jsx'
import { Carousel, Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

class App extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            some: 'sample text',
            previousSuccess: this.findCurrentData()
        }

        // this.methods = this.method.bind(this) go here
    }

    findCurrentData = function () {
        let previousSuccess = localStorage.getItem('previousSuccess');
        console.log('Previous success: ' + previousSuccess);
    }

    handleSubmit = function ( event ) {
        event.preventDefault();
        console.log( event );
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
                        <TaskForm handleSubmit={this.handleSubmit}/>
                        {this.some}
                    </Card.Body>
                </Card>
            </div>
        )
    }
  }
  export default App;