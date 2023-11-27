import React from "react";
import styles from "./styles.module.css";

const Login = () => {
	return (
		<div className={styles.container}>
			<div className={styles.pageContainer}>
				<div className={styles.imageContainer}>
					<img src="/Images/loginBg.jpg" alt="" />
				</div>
				<div className={styles.loginContainer}>
					<h1 className={styles.loginTitle}>Login</h1>
					<form className={styles.loginForm} action="">
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Enter your email"
							className={styles.inputField}
						/>
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Enter your password"
							className={styles.inputField}
						/>

						<input type="submit" value="Login" className={styles.submitBtn} />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
