import React from 'react';
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap'
import NewPowerForm  from './newPowerForm';
import NewHeroPowerForm from './newHeroPowerForm';
import NewEventPowerForm from './newEventPowerForm';
import { powerApi } from '../rest/PowerApi.js';
import { heroApi } from '../rest/HeroApi';
import { eventApi } from '../rest/EventApi';



function Powers (props) {
    const[error, setError] = useState(null);
    const[isLoaded, setIsLoaded] = useState(false);
    const[power, setPowers] = useState([])

    const createPower = async (newPower) => {
        console.log(newPower);
        let newresponse = await powerApi.post(newPower);
        console.log(power);
        console.log(newresponse);
        runThisEveryTime();
    };

    const deletePower = async (powId) => {
        await powerApi.delete(powId);
        runThisEveryTime();
    };

    const addHeroPower = async (id, powId) => {
        console.log("id: " + id + " powId: " + powId);
        let power = await powerApi.getOne(powId);
        console.log(power);
        let hero = await heroApi.getOne(id);
        console.log(hero);
        hero.powers.push(power);
        console.log(hero);
        heroApi.put(hero);
        runThisEveryTime();
    };

    const addEventPower = async (id, powId) => {
        console.log("id: " + id + " power: " + powId);
        let power = await powerApi.getOne(powId);
        console.log(power);
        let event = await eventApi.getOne(id);
        console.log(event);
        event.powers.push(power);
        console.log(event);
        eventApi.put(event);
        runThisEveryTime();
    };


    const runThisEveryTime  = (() => {
        fetch('https://crudcrud.com/api/d82374f11e984155b75ab2d98f74a6f7/powers')
        .then( res => res.json() )
        .then(
            (result) => {
                console.log(result);
                setIsLoaded(true);
                setPowers(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error)
            }
        ) 
    });

  useEffect( () => {
        runThisEveryTime();
    }, [])

    if (error) {
        return <div>An error was encountered: {error.message}</div>
    } else {
        return(
            <div className="container">
                <div className="row my-3">
                    <div className="col-md-8 mx-auto">
                        <h2 className="text-center"><strong>Available Powers</strong></h2>                    
                    </div>
                </div>
                <div className="power-list row">
                    {power.map( (i, ind) => (
                        <div className="col-4 my-3" key={ind}>
                            <Card key={i._id}>
                                <Card.Body className="new-card"> {ind+1}. &nbsp;
                                    <strong>{i.name},  {i.description} </strong>
                                    <br /><br /> 
                                    <NewHeroPowerForm powId={i._id} addHeroPower={addHeroPower}/>
                                     <br /><br />  
                                     <NewEventPowerForm powId={i._id} addEventPower={addEventPower} />
                                    <br /><br />  
                                    <button className="btn-my-color rounded" onClick={e =>
                                    deletePower(i._id)}>Delete Power</button>
                                </Card.Body>                                 
                            </Card>       
                        </div>
                    ))}
                </div>
                <div className="new-button-power flex">
                    <div className="sm-col-2" />
                    <div className="sm-col-2 ">
                    <NewPowerForm createPower={createPower}/>
                    </div>
                    <div className="sm-col-2" />
                </div>
            </div>
        );
    }
}

export default Powers;
