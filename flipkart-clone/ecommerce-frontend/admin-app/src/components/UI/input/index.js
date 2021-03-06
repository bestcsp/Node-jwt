import React from 'react';
import {Form} from 'react-bootstrap'

const Input = (props) => (
    <div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{props.Label}</Form.Label>
            <Form.Control type={props.type}
             placeholder={props.placeholder} 
             value={props.value}
             onChange={props.onChange}
             />
            <Form.Text className="text-muted">

                {props.errorMessage}
            </Form.Text>
        </Form.Group>
    </div>
);

export default Input;

// Input.propTypes = {
// };