import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const { store, actions } = useContext(Context)
	console.log(store.favorite)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>

			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Dropdown button
				</button>
				<ul  className="dropdown-menu">
					{store.favorite.map((item, index) => (
						<li key={index} className="dropdown-item">{item.name}
						  <button onClick={()=>{actions.eliminaFavorito(item.id)}}> 
							X </button>
							</li>))}
				</ul>
			</div>




			
		</nav>
	);
};
