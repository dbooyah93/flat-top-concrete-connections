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

        this.findCurrentData = this.findCurrentData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.establishFormDataEntries = this.establishFormDataEntries.bind(this);

    }

    findCurrentData = function () {
        let previousSuccess = localStorage.getItem('previousSuccess');
        console.log('Previous success: ' + previousSuccess);
    }

    appendFormDataEntries = function ( formDataClass ) {
        let formValues = [...formDataClass];
        formValues.map((submission, i) => {
            console.log({submission, i});
            formDataClass.append(submission[0], submission[1])
        });
        return formDataClass;
    }

    handleSubmit = function ( event ) {
        event.preventDefault();
        let targetForm = event.target;
        // let acomplishment = targetForm.getElementById('acomplishment');
        const formData = new FormData(event.target);
        // establish key,values to formData object
        this.appendFormDataEntries( formData );
        for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
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