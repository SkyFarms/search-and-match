import React, { useCallback, useEffect, useState } from 'react';

import ChoiceQuestion from 'components/ChoiceQuestion';

interface Props {
	questions: any[];
	onFinish: (answersForQuestions: any[][]) => void;
}

const ANIMATION_INTERVAL = 300;

const Questionanaire: React.FC<Props> = ({ questions, onFinish }) => {
	const [answersForQuestions, setAnswersForQuestions] = useState<any[][]>([[]]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [showQuestion, setShowQuestion] = useState<boolean>(true);
	
	useEffect(() => {
		setTimeout(() => {
			setShowQuestion(true);
		}, ANIMATION_INTERVAL);
	}, [currentQuestionIndex]);

	const showNextQuestion = useCallback(() => {
		setShowQuestion(false);
		if (currentQuestionIndex === questions.length - 1) {
			onFinish(answersForQuestions);
		} else {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		}
	}, [currentQuestionIndex, onFinish, questions, answersForQuestions]);

	const showPreviousQuestion = useCallback(() => {
		setShowQuestion(false);
		setCurrentQuestionIndex(currentQuestionIndex - 1);
	}, [currentQuestionIndex]);

	const currentQuestion = questions[currentQuestionIndex];
	const answersForCurrentQuestion = answersForQuestions[currentQuestionIndex];

	const handleOptionSelected = useCallback((optionId: number) => {
		let newSelectedOptions = answersForCurrentQuestion ? [...answersForCurrentQuestion] : [];
		if (newSelectedOptions.indexOf(optionId) !== -1) {
			newSelectedOptions = newSelectedOptions.filter((option: number) => option !== optionId);
		} else {
			if (currentQuestion.isMulti) {
				newSelectedOptions.push(optionId);
			} else {
				newSelectedOptions = [optionId];
			}
		}

		const answersForQuestionsUpdated = [...answersForQuestions];
		answersForQuestionsUpdated[currentQuestionIndex] = newSelectedOptions;
		setAnswersForQuestions(answersForQuestionsUpdated);
	}, [answersForCurrentQuestion, currentQuestion, answersForQuestions, currentQuestionIndex]);

	return (
		<ChoiceQuestion
			show={showQuestion}
			question={currentQuestion.question}
			isMultipleAnswer={currentQuestion.isMulti}
			options={currentQuestion.options}
			selectedOptions={answersForCurrentQuestion || []}
			animationInterval={ANIMATION_INTERVAL}
			onOptionSelected={handleOptionSelected}
			onActionPrevious={currentQuestionIndex !== 0 ? showPreviousQuestion : undefined}
			onActionNext={showNextQuestion}
		/>
	)
}

export default Questionanaire;
