const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personaje: [],
			onepersonaje: {},
			favorite: [],
			planet:[],
			oneplanet:{}
		},
		actions: {
			// Use getActions to call a function within a fuction

			loadSomePeople: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => setStore({ personaje: data.results }))
					.catch(err => console.error(err))

			},
			loadOnePeople: (uid) => {
				fetch(`https://www.swapi.tech/api/people/${uid}`)
					.then(res => res.json())
					.then(data => setStore({ onepersonaje: data.result }))
					.catch(err => console.error(err))

			},

			addfavorite(nombre) {
				const store = getStore()
				const fav = store.favorite
				const newfavorite = [...fav, { name: nombre, id: fav.length }]
				setStore({ favorite: newfavorite })
			},

			eliminaFavorito(id) {
				const store = getStore();
				const fav = store.favorite;
				const favActualizado = fav.filter((item) => item.id !== id);
				setStore({ favorite: favActualizado })
			},
			
			loadSomePlanet: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planet: data.results }))
					.catch(err => console.error(err))

			},
			loadOnePlanet: (uid) => {
				fetch(`https://www.swapi.tech/api/planets/${uid}`)
					.then(res => res.json())
					.then(data => setStore({ oneplanet: data.result }))
					.catch(err => console.error(err))

			},
			}
		};
	};

	export default getState;
