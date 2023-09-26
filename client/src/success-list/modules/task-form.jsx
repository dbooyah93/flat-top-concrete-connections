import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// create a form
// title input
// description input
// date is automatic 
    // default text updates with every second
    // can be overwritten

const TaskForm = ({}) => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Acomplishment</Form.Label>
                <Form.Control type="text" placeholder="What does this mean to YOU?" aria-label="Acomplishment title"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Details</Form.Label>
                <Form.Control as="textarea" aria-label="Detail the acomplishment"></Form.Control>
            </Form.Group>
        </Form>
    )
}

export default TaskForm;