import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



function HomePage (props) {
    return (
        <div className="container">            
            <div className="row mt-5">
                <div className="col-md-8 mx-auto">
                    <h1 className="text-center">Howdy! Welcome to Hire-A-Hero</h1>
                </div> 
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-8 mx-auto">
                        <p>
                        The <strong>Hire-A Hero App</strong> has a multifaceted purpose. 
                            <br /> <br />  We aim to be the one stop shop for all your superpowered 
                            needs. 
                            We give access to <strong>Heroes</strong> to put their services up here 
                            for hire. These heroes list their stats so you can choose the one
                            that best fits your needs. They can also volunteer their services, 
                            or sign up for events, which you can create.<br />
                            <br />
                            We also allow you to select power upgrades for sale if you don't feel
                            like hiring someone for the job, or feel like becoming the hero yourself.
                            You'll have to sign a liability form on the off chance you become a villain.
                            Please don't become a villain.


                            
                        </p>
                    </div>
                </div>
            </div>             
        </div>
    )
}

export default HomePage;
