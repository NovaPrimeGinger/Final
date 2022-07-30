import React, { useState } from 'react';
import { Form } from 'react-bootstrap';



const NewEventForm = (props) => {
    const { createEvent } = props;
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [powers, setPowers] = useState([]);


    const onSubmit = (e) => {
        e.preventDefault();
        if (name && date && duration && address && city && state && phone && description && powers) {
            createEvent({name, date, duration, address, city, state, phone, description, powers});
            setName('');
            setDate('');
            setDuration('');
            setAddress('');
            setCity('');
            setState('');
            setPhone('');
            setDescription('');
            setPowers('');
        } else {
            alert('Invalid input: enter event again');
            console.log('Invalid Event Input, enter again');
        }
    }; 



    return  (
        <div className="new-hero">
            <div className="sm-col-4 p-2 border m-4">
                <h4><strong>Enter a New Event</strong></h4>
                <Form className="new-form" >
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='Name of Event'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <span>&nbsp;&nbsp;</span>
                    <input
                        type='date'
                        placeholder='Date'
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                    />
                    <span>&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='Duration'
                        onChange={(e) => setDuration(e.target.value)}
                        value={duration}
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
                    <input
                        type='text'
                        placeholder='Description'
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input
                        type='text'
                        placeholder='Powers Needed'
                        onChange={(e) => setPowers(e.target.value)}
                        value={powers}
                    />
                    <br /><br />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <button 
                        className='btn-my-color rounded' 
                        type='submit' 
                        onClick={onSubmit}>Add Event</button>
                    <br />
                </Form>
            </div>
        </div>
        )
};

export default NewEventForm;