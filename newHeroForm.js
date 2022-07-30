import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const NewHeroForm = (props) => {
    const { createHero } = props;
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [phone, setPhone] = useState('');
    const [powers, setPowers] = useState([]);


    const onSubmit = (e) => {
        e.preventDefault();
        if (firstname && lastname && address && city && state && phone && powers) {
            createHero({firstname, lastname, address, city, state, phone, powers});
            setFirstName('');
            setLastName('');
            setAddress('');
            setCity('');
            setState('');
            setPhone('');
        } else {
            alert('Invalid input:  Please re-enter hero!');
            console.log('Invalid Hero Input, re-enter required!');
        }
    };

  

    return  (
        <div className="new-hero">
            <div className="sm-col-4 p-2 border m-4">
                <h4><strong>Heroes: Sign Up for Hire</strong></h4>
                <Form className="new-form" onSubmit={onSubmit}>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='Hero First Name'
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstname}
                    />
                    <span>&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='Hero Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastname}
                    />
                    <br /><br />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='Address'
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                    />
                    <span>&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='City'
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />
                    <span>&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='State'
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                    />
                    <br /><br />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='Phone'
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                    <br /><br />

                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <button 
                        className='btn-my-color rounded' 
                        type='submit' 
                        onClick={onSubmit}>Add Hero</button>
                    <br />
                </Form>
            </div>
        </div>
        )
}; 

export default NewHeroForm;