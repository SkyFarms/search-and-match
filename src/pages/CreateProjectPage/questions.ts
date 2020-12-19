import Indoor from '../../assets/images/Indoor.jpg';
import Outdoor from '../../assets/images/Outdoor.jpg';
import Greenhouse from '../../assets/images/Greenhouse.jpg';
import Aquaponics from '../../assets/images/Aquaponics.jpg';
import Hydroponics from '../../assets/images/Hydroponics.png';
import Aeroponics from '../../assets/images/Aeroponics.jpg';
import Permaculture from '../../assets/images/Permaculture.jpg';
import VerticalFarm from '../../assets/images/VerticalFarm.jpg';
import FlatFarm from '../../assets/images/FlatGrowing.jpg';
import HaveSpace from '../../assets/images/HaveSpace.jpeg';
import NeedSpace from '../../assets/images/NeedSpace.jpg';
import UndergroundFarm from '../../assets/images/UndergroundGrowing.jpg';
import WallFarm from '../../assets/images/WallFarm.jpg';
import YardFarm from '../../assets/images/YardFarm.jpeg';
import ParkingLot from '../../assets/images/ParkingLot.jpg';
import Rooftop from '../../assets/images/Rooftop.jpg';
import ShippingContainer from '../../assets/images/ContainerFarm.jpg';
import Residential from '../../assets/images/Residential.png';
import Commercial from '../../assets/images/Commercial.jpg';
import Terrace from '../../assets/images/Rooftop.jpg';
import Garage from '../../assets/images/Warehouse.jpg';
import Kitchen from '../../assets/images/Kitchen.jpg';
import LocalScale from "../../assets/images/LocalFarmersMarket.jpeg";
import PersonalScale from "../../assets/images/SmallFamilyFarm.jpg";
import UrbanScale from "../../assets/images/UrbanFarm.jpg";
import LargeScale from '../../assets/images/LargeIndustrialFarm.jpg';
import CoopScale from "../../assets/images/CommunityFarm.jpg";
import HighTech from "../../assets/images/High-Tech.jpg";
import SmartTech from "../../assets/images/SmartFarming.jpg";
import LowTech from "../../assets/images/LowTech.jpg";
import Education from "../../assets/images/Education.jpg";
import DataInsights from "../../assets/images/DataInsights.jpg";
import Consulting from "../../assets/images/Consulting.jpeg";
import SmartAG from "../../assets/images/SmartAG.png";
import Design from "../../assets/images/Design.jpg";
import Investment from "../../assets/images/Investment.jpg";
import Research from "../../assets/images/Research.png";
import Volunteers from "../../assets/images/Volunteers.jpg";
import Tools from "../../assets/images/Tools.jpeg";
import SustainableOptions from "../../assets/images/SustainableOptions.jpg";


const Questions = [
	{
		id: 1,
		question: 'What kind of farm would you like to grow?',
		options: [
			{
				id: 1,
				image: Indoor,
				text: 'INDOOR(CEA)'
			},
			{
				id: 2,
				image: Outdoor,
				text: 'OUTDOOR'
			},
			{
				id: 3,
				image: Greenhouse,
				text: 'GREENHOUSE'
			}
		],
		isMulti: false
	},
	{
		id: 2,
		question: 'What growing method interests you?',
		options: [
			{
				id: 4,
				image: Aquaponics,
				text: 'AQUAPONICS (fish)'
			},
			{
				id: 5,
				image: Hydroponics,
				text: 'HYDROPONICS (h2o)'
			},
			{
				id: 6,
				image: Aeroponics,
				text: 'AEROPONICS (mist)'
			},
			{
				id: 7,
				image: Permaculture,
				text: 'PERMACULTURE - REGENERATIVE FARMING (SOIL)'
			}
		],
		isMulti: true
	},
	{
		id: 3,
		question: 'Which way do you want to grow?',
		options: [
			{
				id: 8,
				image: VerticalFarm,
				text: 'VERTICAL'
			},
			{
				id: 9,
				image: FlatFarm,
				text: 'FLAT'
			}
		],
		isMulti: false
	},
	{
		id: 4,
		question: '',
		options: [
			{
				id: 10,
				image: HaveSpace,
				text: 'I HAVE SPACE'
			},
			{
				id: 11,
				image: NeedSpace,
				text: 'I NEED SPACE'
			}
		],
		isMulti: false
	},
	{
		id: 5,
		question: 'What kind of space?',
		options: [
			{
				id: 12,
				image: UndergroundFarm,
				text: 'UNDERGROUND - BASEMENT'
			},
			{
				id: 13,
				image: WallFarm,
				text: 'WALL'
			},
			{
				id: 14,
				image: YardFarm,
				text: 'YARD OR EMPTY PLOT'
			},
			{
				id: 15,
				image: ParkingLot,
				text: 'PARKING LOT'
			},
			{
				id: 16,
				image: Rooftop,
				text: 'ROOF'
			},
			{
				id: 17,
				image: ShippingContainer,
				text: 'SHIPPING CONTAINER'
			},
			{
				id: 18,
				image: Residential,
				text: 'RESIDENTIAL'
			},
			{
				id: 19,
				image: Commercial,
				text: 'COMMERCIAL'
			},
			{
				id: 20,
				image: Terrace,
				text: 'TERRACE'
			},
			{
				id: 21,
				image: Garage,
				text: 'GARAGE, WAREHOUSE or SPARE ROOM'
			},
			{
				id: 22,
				image: Kitchen,
				text: 'MICROFARM - KITCHEN'
			}
		],
		isMulti: true
	},
	{
		id: 6,
		question: "What size, or market, is your project intended for?",
		options: [
			{
				id: 23,
				image: LocalScale,
				text: "LOCAL SCALE - FARMERS MARKET"
			},
			{
				id: 24,
				image: PersonalScale,
				text: "PERSONAL SCALE or FAMILY FARM"
			},
			{
				id: 25,
				image: UrbanScale,
				text: "URBAN SCALE - CITY FARM"
			},
			{
				id: 26,
				image: LargeScale,
				text: 'LARGE SCALE INDUSTRIAL FARM '
			},
			{
				id: 27,
				image: CoopScale,
				text: "CO-OP SCALE - COMMUNITY FARM - CSA"
			}
		],
		isMulti: false
	},
	{
		id: 7,
		question: "What kind of approach to your farming project would you like to take?",
		options: [
			{
				id: 28,
				image: HighTech,
				text: "HIGH-TECH (SMART/PRECISION AG)"
			},
			{
				id: 29,
				image: SmartTech,
				text: "SMART OPTIONS"
			},
			{
				id: 30,
				image: LowTech,
				text: "LOW-TECH (REGENERATIVE AG, PERMACULTURE, HORTICULTURE, AGRONOMY)"
			}
		],
		isMulti: false
	},
	{
		id: 8,
		question: "What resources do you need access to for this farming project?",
		options: [
			{
				id: 31,
				image: Education,
				text: "EDUCATION"
			},
			{
				id: 32,
				image: DataInsights,
				text: "DATA INSIGHTS"
			},
			{
				id: 33,
				image: Consulting,
				text: "CONSULTING"
			},
			{
				id: 34,
				image: SmartAG,
				text: "SMART AG FOOD SECURITY MODEL"
			},
			{
				id: 35,
				image: Design,
				text: "DESIGN - PLANS"
			},
			{
				id: 36,
				image: Investment,
				text: "INVESTMENT"
			},
			{
				id: 37,
				image: Research,
				text: "RESEARCH and INNOVATION"
			},
			{
				id: 38,
				image: Volunteers,
				text: "VOLUNTEERS"
			},
			{
				id: 39,
				image: Tools,
				text: "TOOLS - EQUIPMENT - SEEDS - INPUTS"
			},
			{
				id: 40,
				image: SustainableOptions,
				text: "SUSTAINABLE CLOSED-LOOP ADDITIONS/OPTIONS: APIARY, WATER, SOLAR ENERGY, COMPOST, "
			}
		],
		isMulti: true
	}
];

export default Questions;