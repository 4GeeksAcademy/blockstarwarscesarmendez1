import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Card = props => {
	const { actions, store } = useContext(Context);
console.log (store.personaje)
	return (
		<div className="d-flex flex-row overflow-scroll">
			{store.personaje.map((item,index)=>(
			<div key={index} className="card">
			<img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				
				<div className="d-flex justify-content-between">
					<Link to={`/people/${item.uid}`}>
						<button className="btn btn-dark">learn more</button>
					</Link>
					<button
						className="btn btn-outline-warning border-0"
						onClick={() => {
							actions.addfavorite(item.name);
						}}>
						 {props.buttonFavorite ? (
							<i className="fas fa-heart border-0" />
						) : (
							<i className="far fa-heart border-0" />
						)} 
					</button>
				</div>
			</div>
			</div>
			))}
		</div>
	);
};

