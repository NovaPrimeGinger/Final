import React from "react";
import { Table } from "react-bootstrap";
import  NewHeroForm  from './newHeroForm';
import { useEffect, useState } from 'react';
import { heroApi } from '../rest/HeroApi.js';

function Heroes(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hero, setHero] = useState([])

    const createHero = async (newHero) => {
        await heroApi.post(newHero);
        runThisEveryTime();
    };
    
    const deleteHero = async (heroId) => {
        await heroApi.delete(heroId);
        runThisEveryTime();
    };

    

    const removeHeroPower = async (heroId, powerId)  => {    
        console.log("In removeHeroPower", heroId);
        let newHero = await heroApi.getOne(heroId);
        console.log("In removeHeroPower, after getOne", newHero);
        const updatedHero =  {
            ...newHero,
            powers: newHero.powers.filter((x) => x._id !== powerId)
        };
        console.log("updatedHero: " + updatedHero);
        heroApi.put(updatedHero);
        runThisEveryTime();
    }

    const runThisEveryTime  = (() => {
        fetch('https://crudcrud.com/api/d82374f11e984155b75ab2d98f74a6f7/heroes')
            .then( res => res.json() )
            .then( 
                (result) => {
                    setIsLoaded(true);
                    setHero(result);
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
        return <div>Encountering an error: {error.message}</div>
    } else {
        return(
        <div className="container my-4">
            <h2 className="text-center mx-auto mb-4"> <strong>Heroes For Hire </strong></h2>
        <Table className="container my-4" striped bordered hover>
            <thead>
                <tr>
                <th>Id</th>   
                <th>First Name</th>
                <th> <strong>Last Name</strong></th> 
                <th>Address</th>
                <th>Phone</th>
                <th>Powers</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {hero.map( (u, i) => (
                    <tr key={i}>
                        <td>{u._id}</td>                       
                        <td>{u.firstname}</td>
                        <td>{u.lastname}</td>   
                        <td>{u.address}, {u.city}, {u.state}</td>
                        <td>{u.phone}</td>
                        
                        <td>
                          <ul>
                            {u.powers.map( (pow, j) => (
                            <li key={pow._id}> &nbsp;
                                <strong>{pow.name}  </strong>
                            <br />
                            <button className="btn-my-color rounded" onClick={e =>
                                removeHeroPower(u._id, pow._id)}>Remove </button>
                            </li>  
                            ))}
                          </ul>
                        </td>
                        <td>
                        <button className="btn-my-color rounded" onClick={e =>
                        deleteHero(u._id)}>Delete Hero</button>
                        </td> 
                    </tr>
                ))}               
            </tbody>
            </Table>
            <NewHeroForm createHero={createHero}/>
            </div>
    );
}
}
export default Heroes;