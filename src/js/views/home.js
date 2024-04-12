import React, {useContext, useEffect} from "react";
import {Context} from "../store/appContext"
import "../../styles/home.css";
import { Card } from "../component/Card";
import { Cardplanet } from "../component/Cardplanet";
export const Home = () => {
	const {store, actions}=useContext(Context)
	useEffect (()=>{
		actions.loadSomePeople()
		actions.loadSomePlanet()
	},[])
	return (
	<div className="text-center mt-5">
		<h1>People</h1>
		<Card/>
		<h1>Planet</h1>
		<Cardplanet/>
		
	</div>
	)
};
