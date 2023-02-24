import styles from './forms.module.scss';
import { useState } from 'react';

export const Form = () => {
	const [userInput, setUserInput] = useState('');

	const handleChange = (event) => {
		setUserInput(event.target.value);
	};

	return (
		<form className={styles.form}>
			<h2>Password Validator</h2>
			<input
				onChange={handleChange}
				value={userInput}
				placeholder='Enter password'
				type='password'
			/>
			<div className={[`${styles.passwordCheacking}`]}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</form>
	);
};
