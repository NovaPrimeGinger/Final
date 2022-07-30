import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


const NewEventPowerForm = (props) => {
    const { addEventPower } = props;
    const { powId } = props;
    const [id, setId] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Event Id: " + id + " Power: " + powId);
        if (id && powId) {
            addEventPower(id, powId);
            setId('');
        } else {
            alert('Invalid input: enter hero and power again');
            console.log('Invalid Hero Power Input, enter again');
        }
    };


    return  (
        <div className="new-powerupgrade">
            <div className="sm-col-4" />
                <div className="sm-col-4 p-2 border m-4">
                    <Form className="new-form" onSubmit={onSubmit}>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <input
                            type='text'
                            placeholder='Event Id'
                            onChange={(e) => setId(e.target.value)}
                            value={id}
                        />                       
                        <br /><br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <button 
                            className='btn-my-color rounded' 
                            type='submit' 
                            onClick={onSubmit}>Add Event Power</button>
                        <br />
                    </Form>
                </div>
            <div className="sm-col-4" />
        </div>
        ) 
}; 

export default NewEventPowerForm;