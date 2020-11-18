const Questions = [
	{
		id: 1,
		question: 'What kind of farm would you like to grow?',
		options: [
			{
				id: 1,
				image: 'http://localhost:4000/Indoor.jpg',
				text: 'INDOOR(CEA)'
			},
			{
				id: 2,
				image: 'http://localhost:4000/Outdoor.jpg',
				text: 'OUTDOOR'
			},
			{
				id: 3,
				image: 'http://localhost:4000/Greenhouse.jpg',
				text: 'GREENHOUSE'
			}
		]
	},
	{
		id: 2,
		question: 'What growing method interests you?',
		options: [
			{
				id: 4,
				image: 'http://localhost:4000/Aquaponics.jpg',
				text: 'AQUAPONICS (fish)'
			},
			{
				id: 5,
				image: 'http://localhost:4000/Hydroponics.png',
				text: 'HYDROPONICS (h2o)'
			},
			{
				id: 6,
				image: 'http://localhost:4000/Aeroponics.jpg',
				text: 'AEROPONICS (mist)'
			},
			{
				id: 7,
				image: 'http://localhost:4000/Permaculture%20%28SOIL%29.jpg',
				text: 'PERMACULTURE - REGENERATIVE FARMING (SOIL)'
			}
		]
	},
	{
		id: 3,
		question: 'Which way do you want to grow?',
		options: [
			{
				id: 8,
				image: 'http://localhost:4000/Vertical%20Farm.jpg',
				text: 'VERTICAL'
			},
			{
				id: 9,
				image: 'http://localhost:4000/Flat%20Growing.jpg',
				text: 'FLAT'
			}
		]
	},
	{
		id: 4,
		question: '',
		options: [
			{
				id: 10,
				image: 'http://localhost:4000/I%20have%20space.jpeg',
				text: 'I HAVE SPACE'
			},
			{
				id: 11,
				image: 'http://localhost:4000/I%20Need%20Space.jpg',
				text: 'I NEED SPACE'
			}
		]
	},
	{
		id: 5,
		question: 'What kind of space?',
		options: [
			{
				id: 12,
				image: 'http://localhost:4000/Underground%20Growing.jpg',
				text: 'UNDERGROUND - BASEMENT'
			},
			{
				id: 13,
				image: 'http://localhost:4000/Wall%20Farm.jpg',
				text: 'WALL'
			},
			{
				id: 14,
				image: 'http://localhost:4000/Yard%20Farm.jpeg',
				text: 'YARD OR EMPTY PLOT'
			},
			{
				id: 15,
				image: 'http://localhost:4000/Parking%20Lot.jpg',
				text: 'PARKING LOT'
			},
			{
				id: 16,
				image: 'http://localhost:4000/Rooftop.jpg',
				text: 'ROOF'
			},
			{
				id: 17,
				image: 'http://localhost:4000/Container%20Farm.jpg',
				text: 'SHIPPING CONTAINER'
			},
			{
				id: 18,
				image: 'http://localhost:4000/Residential.png',
				text: 'RESIDENTIAL'
			},
			{
				id: 19,
				image: 'http://localhost:4000/Commercial.jpg',
				text: 'COMMERCIAL'
			},
			{
				id: 20,
				image: 'http://localhost:4000/Rooftop.jpg',
				text: 'TERRACE'
			},
			{
				id: 21,
				image: 'http://localhost:4000/Garage%3AWarehouse.jpg',
				text: 'GARAGE, WAREHOUSE or SPARE ROOM'
			},
			{
				id: 22,
				image: 'http://localhost:4000/Kitchen.jpg',
				text: 'MICROFARM - KITCHEN'
			}
		]
	},
	{
		id: 6,
		question: "What size, or market, is your project intended for?",
		options: [
			{
				id: 23,
				image: "http://localhost:4000/Local%20Farmers%20Market.jpeg",
				text: "LOCAL SCALE - FARMERS MARKET"
			},
			{
				id: 24,
				image: "http://localhost:4000/Small%20Family%20Farm.jpg",
				text: "PERSONAL SCALE or FAMILY FARM"
			},
			{
				id: 25,
				image: "http://localhost:4000/Urban%20Farm.jpg",
				text: "URBAN SCALE - CITY FARM"
			},
			{
				id: 26,
				image: 'http://localhost:4000/Large%20Industrial%20Farm.jpg',
				text: 'LARGE SCALE INDUSTRIAL FARM '
			},
			{
				id: 27,
				image: "http://localhost:4000/Community%20Farm.jpg",
				text: "CO-OP SCALE - COMMUNITY FARM - CSA"
			}
		]
	},
	{
		id: 7,
		question: "What kind of approach to your farming project would you like to take?",
		options: [
			{
				id: 28,
				image: "http://localhost:4000/High-Tech.jpg",
				text: "HIGH-TECH (SMART/PRECISION AG)"
			},
			{
				id: 29,
				image: "http://localhost:4000/SMART%20Farming.jpg",
				text: "SMART OPTIONS"
			},
			{
				id: 30,
				image: "http://localhost:4000/Low%20Tech.jpg",
				text: "LOW-TECH (REGENERATIVE AG, PERMACULTURE, HORTICULTURE, AGRONOMY)"
			}
		]
	},
	{
		id: 8,
		question: "What resources do you need access to for this farming project?",
		options: [
			{
				id: 31,
				image: "http://localhost:4000/Education.jpg",
				text: "EDUCATION"
			},
			{
				id: 32,
				image: "http://localhost:4000/Data%20Insights.jpg",
				text: "DATA INSIGHTS"
			},
			{
				id: 33,
				image: "http://localhost:4000/Consulting.jpeg",
				text: "CONSULTING"
			},
			{
				id: 34,
				image: "http://localhost:4000/SMART%20AG%201.png",
				text: "SMART AG FOOD SECURITY MODEL"
			},
			{
				id: 35,
				image: "http://localhost:4000/Design.jpg",
				text: "DESIGN - PLANS"
			},
			{
				id: 36,
				image: "http://localhost:4000/Investment.jpg",
				text: "INVESTMENT"
			},
			{
				id: 37,
				image: "http://localhost:4000/Research.png",
				text: "RESEARCH and INNOVATION"
			},
			{
				id: 38,
				image: "http://localhost:4000/Volunteers.jpg",
				text: "VOLUNTEERS"
			},
			{
				id: 39,
				image: "http://localhost:4000/Tools.jpeg",
				text: "TOOLS - EQUIPMENT - SEEDS - INPUTS"
			},
			{
				id: 40,
				image: "http://localhost:4000/Sustainable%20Options.JPG",
				text: "SUSTAINABLE CLOSED-LOOP ADDITIONS/OPTIONS: APIARY, WATER, SOLAR ENERGY, COMPOST, "
			}
		]
	}
];

export default Questions;