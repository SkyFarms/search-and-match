import React from 'react';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';

import Root from './styles';

interface Option {
	id: number;
	image: string;
	text?: string;
}

interface Props {
	show: boolean;
	options: Option[];
	question?: string;
	animationInterval?: number; // in milliseconds
}

const ChoiceQuestion: React.FC<Props> = ({ show, options, question, animationInterval = 500 }) => (
	<Root container spacing={4}>
		<Grid item xs={12}>
			<Grid container justify="center" alignItems="center" spacing={4}>
				{options.map((option: Option, index: number) => (
					<Grow key={option.id} in={show} timeout={animationInterval*index}>
						<Grid item xs={options.length === 2 || options.length === 4 ? 6 : 4}>
							<Paper>
								<div className="option"  style={{'backgroundImage': `url('${option.image}')`}} />
								{option.text ? <div>{option.text}</div> : undefined}
							</Paper>
						</Grid>
					</Grow>
				))}
			</Grid>
		</Grid>
		<Grid item xs={12}>
			<div>{question}</div>
		</Grid>
	</Root>
);

export default ChoiceQuestion;