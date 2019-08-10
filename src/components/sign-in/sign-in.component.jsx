import React from "react";

import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: "", password: "" })
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name] : value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your email and your password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                     name="email" 
                     type="email" 
                     value={this.state.email} 
                     handleChange={ this.handleChange }
                     label="Email"
                     required 
                    />


                    <FormInput
                     name="password"
                     type="password" 
                     value={this.state.password} 
                     handleChange={this.handleChange}
                     label="password"
                     required 
                    />

                    <div className="buttons" >
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;