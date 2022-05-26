import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useState, useRef, useEffect } from "react"
import HorizontalScroll from './HorizontalScroll';
import ScrollItem from './ScrollItem';


export default function ShoppingZone() {
	const arrowWidth = 60;
	const viewRef = useRef(null)
	const [viewWidth, setViewWidth] = useState(0)
	const [itemWidth, setItemWidth] = useState(0)

	useEffect(() => {
		const itemWidthCalculation = (viewRef.current.clientWidth - (arrowWidth * 2)) * (1 / 3)
		// console.log("Calculation: " + itemWidthCalculation)
		// console.log("Item: " + (itemWidthCalculation * .7))
		// console.log("Margin: " + (itemWidthCalculation * .15))

		
	})

	return (
		<View ref = { viewRef } style = {{ flex: 1, position: "relative" }}>
			<HorizontalScroll 
				title = "Tops" 
				theme = "#E26A6A" 
				RenderItem = {
					({ item }) => <ScrollItem item = { item } theme = "#E26A6A" arrowWidth = { arrowWidth } />
				}/>
				<HorizontalScroll 
				title = "Tops" 
				theme = "#E26A6A" 
				RenderItem = {
					({ item }) => <ScrollItem item = { item } theme = "#E26A6A" arrowWidth = { arrowWidth } />
				}/>
				<HorizontalScroll 
				title = "Tops" 
				theme = "#E26A6A" 

				RenderItem = {
					({ item }) => <ScrollItem item = { item } theme = "#E26A6A" arrowWidth = { arrowWidth }/>
				}/>
			
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
	highlight: {
	  backgroundColor: "lightgrey", 
	  position: "absolute", 
	  height: "100%", 
	  width: "100%",
	  zIndex: -1,
	}
  });
  