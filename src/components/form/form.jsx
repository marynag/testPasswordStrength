import styles from './forms.module.scss';
import { useEffect, useState } from 'react';

export const Form = () => {
	const [userInput, setUserInput] = useState('');
	const [status, setStatus] = useState('');

	useEffect(() => {
		const containLetters = !!userInput.match(/(.*[A-z].*)/);
		const containNumber = !!userInput.match(/(.*[0-9].*)/);
		const containSpecialChar = !!userInput.match(/(.*[-+_!@#$%^&*.,?].*)/);
		if (containLetters || containNumber || containSpecialChar) {
			setStatus('weak');
		}
		if (
			(containLetters && containSpecialChar) ||
			(containLetters && containNumber) ||
			(containSpecialChar && containNumber)
		) {
			setStatus('medium');
		}
		if (containLetters && containNumber && containSpecialChar) {
			setStatus('strong');
		}
		if (userInput.length < 8) {
			setStatus('short');
		}
		if (!userInput) {
			setStatus('');
		}
	}, [userInput]);

	return (
		<form className={styles.form}>
			<h2>Test Password Strength</h2>
			<input
				onChange={(e) => setUserInput(e.target.value)}
				value={userInput}
				placeholder='Enter password'
				type='password'
			/>
			<div className={[`${styles.passwordCheacking}`]}>
				<div className={[`${styles[status]}`]}></div>
				<div className={[`${styles[status]}`]}></div>
				<div className={[`${styles[status]}`]}></div>
			</div>
			{status && <p>Your password is {status}</p>}
		</form>
	);
};
