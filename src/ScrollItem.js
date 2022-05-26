import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useState } from "react"
import InfoButton from "./InfoButton"

export default function ScrollItem({ item, theme }) {

	const [item_size, item_margin, item_padding] = [100, 15, 0]
	const [info_size] = [ .3 * item_size]
	const [ color, setColor ] = useState(theme)


	const onPress = () => {
		setColor(color == theme ? "lightgrey" : theme)
	}
	return (
		<View style = {[ { opacity: item.placeholder ? 0 : 100 }]}>

			{/* ITEM IMAGE */}
			<TouchableOpacity
			onPress = {onPress}>

				<View style = {[ styles.item, 
					{ 
						width: item_size, 
						margin: item_margin,  
						borderColor: color
					}]}>
					<Text> { item.display }</Text>
				</View>
			</TouchableOpacity>

			{/* INFO BUTTON */}
			<View style = {[ styles.info, 
				{ 
					top: item_size + item_margin - (info_size), 
					left: item_size - (info_size / 2), 
					width: info_size, 
					aspectRatio: 1 
				}]}>

				<InfoButton theme = "#E26A6A"/>

			</View>
		</View>
	)
}

const styles = StyleSheet.create({
		item: {
			borderWidth: 3, 
			aspectRatio: 1/1, 
			borderRadius: "50%", 
			overflow: "hidden", 
			alignItems: "center", 
			justifyContent: "center", 
			position: "relative", 
			backgroundColor: "white",
		}, 
		
		info: {
			position: "absolute", 

		}
})