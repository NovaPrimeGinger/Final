import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


const newPowerForm = (props) => {
    const { createPower } = props;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && section) {
            createPower({name, description});
            setName('');
            setDescription('');
        } else {
            alert('Invalid input: Power must be entered again');
            console.log('Invalid Power Input, enter again');
        }
    };

    return  (
        <div className="new-powerupgrade">
            <div className="sm-col-4" />
                <div className="sm-col-4 p-2 border m-4">
                    <h4><strong>Enter a New Power</strong></h4>
                    <Form className="new-form" onSubmit={onSubmit}>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <input
                            type='text'
                            placeholder='Power Name'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <span>&nbsp;&nbsp;</span>
                        <input
                            type='text'
                            placeholder='Power Description'
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                        <br /><br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <button 
                            className='btn-my-color rounded' 
                            type='submit' 
                            onClick={onSubmit}>Add Power</button>
                        <br />
                    </Form>
                </div>
            <div className="sm-col-4" />
        </div>
        )
};

export default newPowerForm;