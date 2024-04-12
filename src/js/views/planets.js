import React, { useState, useEffect, useContext } from "react";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
    useEffect (()=>{
        actions.loadOnePlanet(params.uid)
    },[])
    console.log(store.oneplanet)
	
	return (
		<div  className="jumbotron">
			<img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
            <h5>{store.oneplanet.properties?.name}</h5>
			 <h5>climate: {store.oneplanet.properties?.climate}</h5>
			<h5>diameter: {store.oneplanet.properties?.diameter}</h5>
			<h5>gravity: {store.oneplanet.properties?.gravity}</h5>
			<h5>population: {store.oneplanet.properties?.population}</h5> 
		</div> 
	);
};


