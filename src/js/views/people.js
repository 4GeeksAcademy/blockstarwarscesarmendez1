import React, { useState, useEffect, useContext } from "react";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
    useEffect (()=>{
        actions.loadOnePeople(params.uid)
    },[])
    console.log(store.onepersonaje)
	
	return (
		<div  className="jumbotron">
			<img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
            <h5>{store.onepersonaje.properties?.name}</h5>
			<h5>gender: {store.onepersonaje.properties?.gender}</h5>
			<h5>birth year: {store.onepersonaje.properties?.birth_year}</h5>
			<h5>eye color: {store.onepersonaje.properties?.eye_color}</h5>
			<h5>height: {store.onepersonaje.properties?.height}</h5>
		</div>
	);
};


