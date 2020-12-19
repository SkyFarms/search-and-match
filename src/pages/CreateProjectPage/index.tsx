import React, { useCallback, useState } from 'react';

import Pages from 'pages';
import ContactInfo, { ContactInfoState } from './ContactInfo';
import Questionanaire from './Questionnaire';

import Questions from './questions';
import Root from './styles';

const CreateProjectPage = () => {
	const [answersFromQuestionnaire, setAnswersFromQuestionnaire] = useState<any[][]>();

	const onQuestionnaireFinish = useCallback((answers: any[][]) => {
		setAnswersFromQuestionnaire(answers);
	}, []);

	const onContactInfoSubmit = useCallback((contactInfo: ContactInfoState) => {
		// TODO: integrate call to save
		console.log("CreateProject flow finished: ", contactInfo);
	}, []);

	return (
		<Pages>
			<Root>
				{!answersFromQuestionnaire ? (
					<ContactInfo onSubmit={onContactInfoSubmit} />
				) : (
					<Questionanaire questions={Questions} onFinish={onQuestionnaireFinish} />
				)}
			</Root>
		</Pages>
	);
};

export default CreateProjectPage;