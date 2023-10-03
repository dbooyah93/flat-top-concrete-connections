import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// create a form
// title input
// description input
// date is automatic 
    // default text updates with every second
    // can be overwritten

const TaskForm = ({ handleSubmit }) => {
    return (
        <Form
            id="form"
            onSubmit={ handleSubmit }
            data-bs-theme="dark">
            <Form.Group
                data-bs-theme="dark"
                className="mb-3">
                <Form.Label
                    data-bs-theme="dark"
                    >Acomplishment</Form.Label>
                <Form.Control name="acomplishment" data-bs-theme="dark" type="text" placeholder="What does this mean to YOU?" aria-label="Acomplishment title"/>
            </Form.Group>
            <Form.Group
                data-bs-theme="dark"
                className="mb-3">
                <Form.Label
                    data-bs-theme="dark"
                    >Details</Form.Label>
                <Form.Control  name="details" data-bs-theme="dark" as="textarea" aria-label="Detail the acomplishment"></Form.Control>
            </Form.Group>
            <Button type="submit">
                Submit Form
            </Button>
        </Form>
    )
}

export default TaskForm;