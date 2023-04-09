import { FormEvent, useState } from 'react'
import styles from "@/styles/loginPage.module.scss"
import signInIllustration from "@/assets/imgs/signIn-illus-preview.png"
import { useNavigate } from 'react-router-dom'

interface FormInputTypes {
    value: string,
    err: null | string
}



function LoginPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState<FormInputTypes>({ value: "", err: null });
    const [password, setPassword] = useState<FormInputTypes>({ value: "", err: null });
    const [isShowPassword, setIsShowPassword] = useState(false);



    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let isFormError = false;

        if (email.value.trim() === "") {
            isFormError = true;
            setEmail({ ...email, err: "Input can't be empty" });
        }
        if (password.value.trim() === "") {
            isFormError = true;
            setPassword({ ...password, err: "Input can't be empty" });
        }

        if (isFormError) return;

        // Verify user info at the backend
        const userDetails = { email: email.value }
        localStorage.setItem("LendsqrAuthDetails", JSON.stringify(userDetails))

        // navigate to dashboard if info verification was successfull
        navigate("/")
    }
    return (
        <div data-testid="loginWrapper" className={styles.wrapper}>
            <div className={styles.container}>
                <section>
                    <div className={styles.logo}>
                        <img src={"/logo.svg"} alt="company-logo" />
                    </div>
                    <div className={styles.illusration}>
                        <img src={signInIllustration} alt="illustration" />
                    </div>
                </section>
                <section>
                    <div>
                        <h1>Welcome!</h1>
                        <p>Enter details to login.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                data-testid="emailInput"
                                placeholder='Email'
                                className={email.err ? styles.inputError : ""}
                                onChange={(e) => setEmail({ value: e.target.value, err: null })}
                            />
                            {
                                email.err && <small data-testid="loginErrorPrompt">{email.err}</small>
                            }

                        </div>
                        <div>
                            <div>
                                <input
                                    type={isShowPassword ? "text" : "password"}
                                    data-testid="passwordInput"
                                    placeholder='Password'
                                    className={password.err ? styles.inputError : ""}
                                    onChange={(e) => setPassword({ value: e.target.value, err: null })}
                                />
                                <p onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? "Hide" : "Show"}</p>
                            </div>
                            {
                                password.err && <small data-testid="loginErrorPrompt">{password.err}</small>
                            }
                        </div>
                        <p>Forgot PASSWORD?</p>
                        <button data-testid="formSubmit" type='submit'>LOG IN</button>
                    </form>
                </section>
            </div>

        </div>
    )
}

export default LoginPage