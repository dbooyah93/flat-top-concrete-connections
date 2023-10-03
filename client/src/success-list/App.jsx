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
        let targetForm = event.target;
        // let acomplishment = targetForm.getElementById('acomplishment')
        const formData = new FormData(event.target);
        let formValues = [...formData];
        formValues.map((submission, i) => {
            console.log({submission, i});
            formData.append(submission[0], submission[1])
            console.log(formData.get('acomplishment'));
        })
        for (let i = 0; i < formData.length; i++) {
            formData.append(i[0], i[1]);
            console.log(...formData);
            console.log(i[0], i[1]);
        }
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