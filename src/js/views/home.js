import React, {useContext, useEffect} from "react";
import {Context} from "../store/appContext"
import "../../styles/home.css";

export const Home = () => {
	const {store, actions}=useContext(Context)
	useEffect (()=>{actions.loadSomePeople()},[])
	return (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
	)
};
