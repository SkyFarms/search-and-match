import React from 'react';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';

import Root from './styles';

interface OptionType {
	id: number;
	image: string;
	text?: string;
}

interface Props {
	show: boolean;
	options: OptionType[];
	isMultipleAnswer?: boolean;
	question?: string;
	selectedOptions: number[];
	animationInterval?: number; // in milliseconds
	onOptionSelected?: (optionId: number) => void;
	onActionPrevious?: () => void;
	onActionNext?: () => void;
}

interface OptionProps {
	xs: 4 | 6;
	image: string;
	text?: string;
	selected: boolean;
	visible: boolean;
	animationTimeout: number;
	onSelect?: () => void;
}

const Option: React.FC<OptionProps> = ({ xs, image, text, visible, selected, animationTimeout, onSelect }) => (
	<Grow in={visible} timeout={animationTimeout}>
		<Grid item xs={xs} onClick={onSelect}>
			<Paper className={`option ${selected ? 'selected' : ''}`}>
				<div className="image"  style={{'backgroundImage': `url('${image}')`}} />
				{text ? <div className="text">{text}</div> : undefined}
			</Paper>
		</Grid>
	</Grow>
);

const ChoiceQuestion: React.FC<Props> = ({
	show,
	options,
	isMultipleAnswer = false,
	question,
	selectedOptions,
	animationInterval = 500,
	onOptionSelected,
	onActionPrevious,
	onActionNext
}) => (
	<Root container spacing={4}>
		<Grid item container spacing={4} xs={12} md={12}>
			<Grid item xs={12}>
				<div className="question">{question}</div>
				{isMultipleAnswer && <div>(you can select multiple)</div>}
			</Grid>
			<Grid item xs={12}>
				<Grid container justify="center" alignItems="center" spacing={4}>
					{options.map((option: OptionType, index: number) => (
						<Option
							key={option.id}
							visible={show}
							xs={options.length === 2 || options.length === 4 ? 6 : 4}
							image={option.image}
							text={option.text}
							selected={selectedOptions.indexOf(option.id) !== -1}
							animationTimeout={animationInterval*index}
							onSelect={() => onOptionSelected && onOptionSelected(option.id)}
						/>
					))}
				</Grid>
			</Grid>
		</Grid>
		<Grid item xs={12}>
			<div className="actionsWrapper">
				<button className={onActionPrevious ? '' : 'hidden'} onClick={onActionPrevious}>Prev</button>
				{onActionNext && <button disabled={Boolean(!selectedOptions.length)} onClick={onActionNext}>Next</button>}
			</div>
		</Grid>
	</Root>
);

export default ChoiceQuestion;