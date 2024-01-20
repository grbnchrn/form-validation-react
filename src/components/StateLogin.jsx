import LoginInput from "./LoginInput";
import { isValidEmail, isValidPassword } from "../util/validation";
import { useInput } from "../hook/useInput";

export default function StateLogin() {
    const {
        value: emailValue,
        handleInputBlur: handleEmailBlur,
        handleInputChange: handleEmailInputChange,
        hasError: emailError,
    } = useInput("", (value) => isValidEmail(value));

    const {
        value: pwdValue,
        handleInputBlur: handlePwdBlur,
        handleInputChange: handlePwdInputChange,
        hasError: pwdError,
    } = useInput("", (value) => isValidPassword(value));

    function handleLoginSubmit(event) {
        event.preventDefault();
        if (emailError || pwdError) {
            return;
        }
        console.log(emailValue + pwdValue);
    }

    return (
        <form onSubmit={handleLoginSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <LoginInput
                    label="Email"
                    id="login-email"
                    type="email"
                    name="email"
                    value={emailValue}
                    onChange={handleEmailInputChange}
                    onBlur={handleEmailBlur}
                    error={emailError && "Please enter a valid email"}
                />

                <LoginInput
                    label="Password"
                    id="login-password"
                    type="password"
                    name="password"
                    value={pwdValue}
                    onChange={handlePwdInputChange}
                    onBlur={handlePwdBlur}
                    error={pwdError && "Please enter a valid password"}
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat" type="reset">
                    Reset
                </button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
