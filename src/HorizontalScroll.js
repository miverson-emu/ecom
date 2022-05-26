import { FlatList, StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { useState, useRef, useEffect } from 'react'
import { Title } from 'react-native-paper'
import IOIcon from 'react-native-vector-icons/Ionicons';

export default function HorizontalScroll({ theme, title, RenderItem, arrowWidth, itemWidth }) {

	const [ pos, setPos ] = useState(0)
	const [item_size, item_margin, item_padding] = [100, 15, 0]
	const [titleSize, setTitleSize] = useState(0)
	const titleRef = useRef(null)

	useEffect(() => {
		setTitleSize(titleRef.current.clientHeight)
	})

	const DATA = [...Array(5).keys()].map((item) => {
		return {
				display: item, 
				placeholder: false
			}
	})

	DATA.unshift({
			display: 99, 
			placeholder: true
	})

	DATA.push({
		display: 99, 
		placeholder: true
	})

	let itemListing = useRef(null);

	useEffect(() => {
		console.log("Start Posiition Changed:", pos)
		scrollToIndex(pos)

	}, [ pos ])


	const scrollToIndex = (index) => {
		// console.log(itemListing)
		itemListing.current.scrollToIndex({ animated: true, index: index, viewPosition: 0})
	}

	const scrollRight = () => {
		console.log("Scroll Right")
		setPos(pos + 1)
	}

	const scrollLeft = () => {
		console.log("Scroll Left")
		setPos(pos - 1)
	}

	return (

		<View>
			<View ref = { titleRef }>
				<Title style = { [ styles.title, { color: theme }] }>{ title }</Title>
			</View>

			<View style = { styles.scroll_cont }>
				<TouchableOpacity
					style = {{ alignSelf: "center" }}
					disabled = { pos == 0 }
					onPress = {() => { scrollLeft() }}>
					<IOIcon name = "chevron-back" style = {{ color: pos == 0 ? "lightgrey": theme}} size = {50}/>
				</TouchableOpacity>			
				
				<FlatList 
				horizontal
				scrollEnabled = { false }
				data = { DATA }
				ref = { itemListing }
				renderItem = { RenderItem }
				keyExtractor = { (item, index) => index}
				style = {{ flexGrow: 0 }}
				contentContainerStyle = {{ 
					width: (item_size + (item_margin * 2) + (item_padding * 2)) * 3 ,
					alignSelf: "center", 
					minHeight: item_size + (item_margin * 2) + (item_padding * 2)
				}}
				onScrollToIndexFailed = { (error) => {
					console.log(error) 
				}}
				/>

				<View style = { [ styles.highlight, { width: item_size + ( 2 * item_margin), height: item_size + ( 2 * item_margin) + titleSize } ] }/>
				
				<TouchableOpacity
					style = {{ alignSelf: "center"}}
					disabled = { pos == DATA.length - 3 }
					onPress = {() => { scrollRight() }}>
					<IOIcon name = "chevron-forward" style = {{ color: pos == DATA.length - 3 ? "lightgrey": theme}} size = {50}/>
				</TouchableOpacity>

			</View>


			</View>

		
	)
}

const styles = StyleSheet.create({
	scroll_cont: {
		flex: 1, 
		flexDirection: "row", 
		justifyContent: "center", 
		alignItems: "center", 
	},
	item: {
		borderWidth: 3, 
		aspectRatio: 1, 
		borderRadius: "50%", 
		overflow: "hidden", 
		alignItems: "center", 
		justifyContent: "center"
	}, 
	title: {
		fontWeight: "bold", 
		paddingLeft: 20
	}, 
	highlight: {
		backgroundColor: "#E8E6E3", 
		position: "absolute", 
		height: "100%", 
		width: "100%",
		zIndex: -1,
	  }

})