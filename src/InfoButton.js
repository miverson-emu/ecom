import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import { useState, useRef, useEffect } from 'react';

export default function InfoButton({ theme }) {
	const [size, setSize] = useState(0);
	let container = useRef(null)

	useEffect(() => {
		setSize(container.current.clientHeight)
	})

	return (
		<TouchableOpacity
			onPress = {() => { console.log("Info Button Clicked")}}
		>
		<View style = {[ styles.cont, {backgroundColor: theme }]} ref = { container }>
			<Text style = {[ styles.text, {fontSize: size * .8}]}>i</Text>
		</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	cont: {
		flex: 1, 
		aspectRatio: 1, 
		borderColor: "white", 
		borderWidth: 2, 
		borderRadius: "50%", 
		alignItems: "center", 
		justifyContent: "center", 
	}, 
	text: {
		color: "white", 
		fontFamily: 'serif',
		fontWeight:800

	}
})