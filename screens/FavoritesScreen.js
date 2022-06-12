import { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { FavouriteContext } from "../store/context/favorites-context";

import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
	const favoriteMealsCtx = useContext(FavouriteContext);

	const favoriteMeals = MEALS.filter(meals => {
		return favoriteMealsCtx.ids.includes(meals.id);
	});

	if (favoriteMeals.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>You have no favourite meals yet</Text>
			</View>
		);
	}

	return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 19,
		color: "white",
		fontWeight: "bold",
	},
});
