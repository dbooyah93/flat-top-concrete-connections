import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// create a template for a single task

const Task = ({title, description, time}) => {
    return (
        <tempate>
            <h5 class="task__title">{{title}}</h5>
            <p class="task__description">{{description}}</p>
            <p class="task__time">{{time}}</p>
        </tempate>
    )
}

export default Task;