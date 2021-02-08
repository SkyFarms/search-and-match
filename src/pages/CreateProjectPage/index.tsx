import React, { useCallback, useState } from 'react';
import axios from 'axios';

import Pages from 'pages';
import ContactInfo, { ContactInfoState } from './ContactInfo';
import Questionnaire from './Questionnaire';

import Questions from './questions';

const CreateProjectPage = () => {
	const [answersFromQuestionnaire, setAnswersFromQuestionnaire] = useState<any[][]>();

	const onQuestionnaireFinish = useCallback((answers: any[][]) => {
		setAnswersFromQuestionnaire(answers);
	}, []);

	const onContactInfoSubmit = useCallback((contactInfo: ContactInfoState) => {
		const finalAnswers = answersFromQuestionnaire?.map((answers, index) => {
			const Question = Questions[index];
			const chosenOptions = answers.map(answer => Question.options.find(option => option.id === answer)?.text)
			return {
				question: Question.question,
				answers: chosenOptions
			}
		});

		const data = {
			"contact": {
				...contactInfo
			},
			"questions": finalAnswers
		};

		axios.post('https://www.skyfarms.io/search-and-match/index.php', { data })
			.then(res => {
				console.log("response here: ", res)
				console.log("res data: ", res.data);
			})
			.catch(err => {
				console.error("error in post: ", err);
			});
	}, [answersFromQuestionnaire]);

	return (
		<Pages>
			{answersFromQuestionnaire ? (
				<ContactInfo onSubmit={onContactInfoSubmit} />
			) : (
				<Questionnaire questions={Questions} onFinish={onQuestionnaireFinish} />
			)}
		</Pages>
	);
};

export default CreateProjectPage;