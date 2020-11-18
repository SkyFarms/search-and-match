import React, { useEffect, useState } from 'react';

import Pages from 'pages';
import ChoiceQuestion from 'components/ChoiceQuestion';

import Questions from './questions';

const ANIMATION_INTERVAL = 300;

const CreateProjectPage = () => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [showQuestion, setShowQuestion] = useState<boolean>(true);

	const currentQuestion = Questions[currentQuestionIndex];

	useEffect(() => {
		setTimeout(() => {
			setShowQuestion(true);
		}, ANIMATION_INTERVAL);
	}, [currentQuestionIndex]);

	const showNextQuestion = () => {
		setShowQuestion(false);
		setCurrentQuestionIndex(currentQuestionIndex+1);
	};

	return (
		<Pages>
			<ChoiceQuestion show={showQuestion} question={currentQuestion.question} options={currentQuestion.options} animationInterval={ANIMATION_INTERVAL} />
			<button onClick={showNextQuestion}>Next</button>
		</Pages>
	)
};

export default CreateProjectPage;