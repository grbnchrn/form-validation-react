import { useState } from "react";
import LoginInput from "./LoginInput";
import { isValidEmail, isValidPassword } from "../util/validation";

let inValidEmail = false;
let inValidPassword = false;

export default function Login() {
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
    });

    const [edited, setEdited] = useState({
        email: false,
        password: false,
    });



    inValidEmail = edited.email && !isValidEmail(loginDetails.email);
    inValidPassword =
        edited.password && !isValidPassword(loginDetails.password);

    function handleLoginSubmit(event) {
        event.preventDefault();
        if (inValidEmail || inValidPassword) {
            return;
        }
        console.log(loginDetails);
    }

    function handleInputChange1(event) {
        const inputType = event.target.type;
        const inputValue = event.target.value;
        if (inputType === "email") {
            setLoginDetails((prevLoginDetails) => {
                const updatedLoginDetails = {
                    ...prevLoginDetails,
                    email: inputValue,
                };
                console.log(updatedLoginDetails);
                return updatedLoginDetails;
            });
        }
        if (inputType === "password") {
            setLoginDetails((prevLoginDetails) => {
                const updatedLoginDetails = {
                    ...prevLoginDetails,
                    password: inputValue,
                };
                console.log(updatedLoginDetails);
                return updatedLoginDetails;
            });
        }
    }

    function handleInputBlur(identifier) {
        setEdited((prevState) => {
            const updatedState = {
                ...prevState,
                [identifier]: true,
            };
            return updatedState;
        });
    }
    function handleInputFocus(identifier) {}

    function handleInputChange(identifier, inputValue) {
        setLoginDetails((prevLoginDetails) => {
            const updatedLoginDetails = {
                ...prevLoginDetails,
                [identifier]: inputValue,
            };
            return updatedLoginDetails;
        });
        setEdited((prevState) => {
            const updatedState = {
                ...prevState,
                [identifier]: false,
            };
            return updatedState;
        });
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
                    value={loginDetails.email}
                    onChange={(event) =>
                        handleInputChange("email", event.target.value)
                    }
                    onBlur={(event) => handleInputBlur("email")}
                    error={inValidEmail && "Please enter a valid email"}
                />

                <LoginInput
                    label="Password"
                    id="login-password"
                    type="password"
                    name="password"
                    value={loginDetails.password}
                    onChange={(event) =>
                        handleInputChange("password", event.target.value)
                    }
                    onBlur={(event) => handleInputBlur("password")}
                    error={inValidPassword && "Please enter a valid password"}
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
