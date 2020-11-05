import React from 'react';
// import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Pages from 'pages';
import Grid from 'components/Grid';

import Root from './styles';

const ProjectsListPage = () => {
	const photoGridItems = [
    {
      id: 1,
      name: 'Warsaw Community College',
      image: 'https://popupcity.net/wp-content/uploads/2018/05/Barcelona-rooftop-gardens-1-800x600.jpg'
    },
    {
      id: 2,
      name: 'Victory Garden California',
      image: 'https://www.springwise.com/wp-content/uploads/2016/12/FarmInABox_community-farming_Springwise.jpg'
    },
    {
      id: 3,
      name: 'Victory Garden Michigan',
      image: 'https://i.pinimg.com/originals/c2/ba/9d/c2ba9daa0daaaf0bbcbe0b5b52d2c8dc.jpg'
	},
	{
      id: 4,
      name: 'Warsaw Community College',
      image: 'https://popupcity.net/wp-content/uploads/2018/05/Barcelona-rooftop-gardens-1-800x600.jpg'
    },
    {
      id: 5,
      name: 'Victory Garden California',
      image: 'https://www.springwise.com/wp-content/uploads/2016/12/FarmInABox_community-farming_Springwise.jpg'
    },
    {
      id: 6,
      name: 'Victory Garden Michigan',
      image: 'https://i.pinimg.com/originals/c2/ba/9d/c2ba9daa0daaaf0bbcbe0b5b52d2c8dc.jpg'
	},
	{
      id: 7,
      name: 'Warsaw Community College',
      image: 'https://popupcity.net/wp-content/uploads/2018/05/Barcelona-rooftop-gardens-1-800x600.jpg'
    },
    {
      id: 8,
      name: 'Victory Garden California',
      image: 'https://www.springwise.com/wp-content/uploads/2016/12/FarmInABox_community-farming_Springwise.jpg'
    }
  ];

	return (
		<Pages>
			<Root>
				<Grid type="photo" items={photoGridItems} />
				{/* <Grid container spacing={2} justify="center">
					{photoGridItems.map((item: any) => (
						<Grid item key={item.id}>
							<div className="image" style={{ backgroundImage: `url(${item.image})` }}></div>
    						<div className="name">{item.name}</div>
						</Grid>
					))}
				</Grid> */}
			</Root>
		</Pages>
	);
};

export default ProjectsListPage;