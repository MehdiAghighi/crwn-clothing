import React from "react";

import "./sign-up.style.scss"

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Password and confirm password don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (err) {
            console.log("an error has occoured while adding a user", err)
        }

    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name] : value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return(
            <div className="sign-up" >
                <h2 className="title">I don't have an account</h2>
                <span className="subtitle">Create a account with your email and password</span>

                <form className="sign-up-form" onSubmit={ this.handleSubmit }>
                    <FormInput
                        name="displayName" 
                        type="text" 
                        value={displayName} 
                        handleChange={ this.handleChange }
                        label="Display Name"
                        required 
                    />
                    <FormInput
                        type="text"
                        name="email"
                        value={email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="text"
                        name="password"
                        value={password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="text"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;