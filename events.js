import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap'
import  NewEventForm  from './newEventForm';
import { eventApi } from '../rest/EventApi.js';


function Events (props) {
    const[error] = useState(null);
    const[isLoaded, setIsLoaded] = useState(false);
    const[event, setEvent] = useState([])


    const createEvent = async (newEvent) => {
        await eventApi.post(newEvent);
        runThisEveryTime();
    };

    const deleteEvent = async (eventId) => {
        await eventApi.delete(eventId);
        runThisEveryTime();
    };

    const removeEventPower = async (eventId, powerId)  => {    
        console.log("In removeEventPower", eventId);
        let newEvent = await eventApi.getOne(eventId);
        console.log("In removeEventPower, after getOne", newEvent);
        const updatedEvent =  {
            ...newEvent,
            powers: newEvent.powers.filter((x) => x._id !== powerId)
        };
        console.log("updatedEvent: " + updatedEvent);
        eventApi.put(updatedEvent);
        runThisEveryTime();
    }
    
    const runThisEveryTime  = (() => {
        fetch('https://crudcrud.com/api/d82374f11e984155b75ab2d98f74a6f7/events')
       .then( res => res.json() )
        .then(
            (result) => {
                setIsLoaded(true);
                setEvent(result);
                console.log(result);
            },
            (error) => {
                setIsLoaded(true);
                setEvent(error);
                console.log(error);
            }
        )
    });

    useEffect( () => {    
        runThisEveryTime();
    }, []);      

    if (error) {
        return <div>An error was encountered: {error.message}</div>
    } else {
        return(
            <div className="container">
                <div className="row my-4">
                    <div className="col-md-8 mx-auto">
                        <h2 className="text-center"><strong>Available Events</strong></h2>
                    </div>
                </div>
                <div className="row">
                    {event.map( (g, ind) => (
                        <div className="event-card col-4 my-3" key={g._id}>
                            <Card className="info-event-card m-2 p-2">
                                <Card.Body>
                                <Card.Title>{ind+1}. &nbsp; <strong>{g.name}</strong></Card.Title>
                                <Card.Text>
                                    Id: {g._id} <br />
                                    <strong>On: </strong> {g.date} <br />
                                    <strong>Located at:</strong> <br/> 
                                    {g.address}, {g.city}, {g.state}.<br /><br /> 
                                    <strong>Description:</strong><span>&nbsp;</span>{g.description}<br /><br /> 
                                    <strong>Contact Info: </strong> <span>&nbsp;</span>{g.phone}
                                    <br /><strong>Powers Requested:</strong> 
                                    <br />
                                    <ul>
                                    {g.powers.map( (pow, j) => (
                                        
                                        <li className="border" key={pow._id}>  &nbsp;
                                             <strong>{pow.name} </strong>
                                        <br />
                                        <button className="btn-my-color rounded" onClick={e =>
                                            removeEventPower(g._id, pow._id)}>Remove </button> 
                                        </li>
                                    ))}
                                    </ul>
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <button className="btn-my-color rounded" onClick={e =>
                                    deleteEvent(g._id)}>Delete Event</button>
                                </Card.Footer>
                            </Card>       
                        </div>
                    ))}
                </div>
                <NewEventForm createEvent={createEvent} />
            </div>
        );
    }
}

export default Events;


  