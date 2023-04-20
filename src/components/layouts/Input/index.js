import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

function InputTimes({ title, placeholderHour, placeholder, timeTitle }) {
    return (
        <Form.Group className="mb-3 col-md-3">
            <Form.Label>{title}</Form.Label>
            <InputGroup className='align-items-center'>
                <Form.Control type="number" placeholder={placeholderHour} />
                <Form.Control type="number" placeholder={placeholder} />
                <span className="ms-1">{timeTitle}</span>
            </InputGroup>
        </Form.Group>
    );
}

export default InputTimes;
