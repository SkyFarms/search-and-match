import React, { useCallback, useEffect, useState } from 'react';

import Pages from 'pages';
import ChoiceQuestion from 'components/ChoiceQuestion';

import Questions from './questions';

const ANIMATION_INTERVAL = 300;

const CreateProjectPage = () => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [showQuestion, setShowQuestion] = useState<boolean>(true);
	const [selectedOptions, setSelectedOptions] = useState<number[] | []>([]);

	const currentQuestion = Questions[currentQuestionIndex];

	useEffect(() => {
		setTimeout(() => {
			setShowQuestion(true);
		}, ANIMATION_INTERVAL);
	}, [currentQuestionIndex]);

	const showNextQuestion = () => {
		setShowQuestion(false);
		let nextQuestionIndex = currentQuestionIndex + 1;
		if (nextQuestionIndex === Questions.length) {
			nextQuestionIndex = 0;
		}
		setCurrentQuestionIndex(nextQuestionIndex);
	};

	const handleOptionSelected = useCallback((optionId: number) => {
		let newSelectedOptions = [...selectedOptions];
		if (newSelectedOptions.indexOf(optionId) !== -1) {
			newSelectedOptions = newSelectedOptions.filter((option: number) => option !== optionId);
		} else {
			if (currentQuestion.isMulti) {
				newSelectedOptions.push(optionId);
			} else {
				newSelectedOptions = [optionId];
			}
		}
		setSelectedOptions(newSelectedOptions);
	}, [selectedOptions, currentQuestion]);

	return (
		<Pages>
			<ChoiceQuestion
				show={showQuestion}
				question={currentQuestion.question}
				options={currentQuestion.options}
				selectedOptions={selectedOptions}
				animationInterval={ANIMATION_INTERVAL}
				onOptionSelected={handleOptionSelected}
			/>
			<button onClick={showNextQuestion}>Next</button>
		</Pages>
	)
};

export default CreateProjectPage;