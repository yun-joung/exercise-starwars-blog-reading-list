import React from 'react';
import '../style/index.scss'
import LineCardCharec from '../Components/LineCardCharec';
import LineCardPlanet from '../Components/LineCardPlanet';
import LineCardVehicle from '../Components/LineCardVehicle';

const Home = () => {
    return (
        <div className="container-fluid px=0">
            <div className="row mt-3">
            <LineCardCharec category="Chareacters"/>
            </div>
            <div className="row mt-5">
            <LineCardPlanet category="Planetas"/>
            </div>
            <div className="row mt-5">
            <LineCardVehicle category="Vehicles"/>
            </div>
        </div>
        
    )
}

export default Home