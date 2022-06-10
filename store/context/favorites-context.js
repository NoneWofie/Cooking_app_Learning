import { createContext, useState } from "react";

export const FavouriteContext = createContext({
	ids: [],
	addFavourite: id => {},
	removeFavorite: id => {},
});

export default function FavouriteContextProvider({ children }) {
	const [favouriteMealIds, setFavouriteMealIds] = useState([]);

	function addFavorite(id) {
		setFavouriteMealIds(prevState => {
			return [...prevState, id];
		});
	}

	function removeFavorite(id) {
		setFavouriteMealIds(prevState => {
			return prevState.filter(mealId => mealId !== id);
		});
	}

	const value = {
		ids: favouriteMealIds,
		addFavourite: addFavorite,
		removeFavorite: removeFavorite,
	};

	return (
		<FavouriteContext.Provider value={value}>
			{children}
		</FavouriteContext.Provider>
	);
}
