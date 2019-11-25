import React from 'react';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component {
    constructor() {
        super()



        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const {value, name} = event.target

        this.setState({ [name]: value })
    }


    render() {
        return(
            <div className='sign-in'>
                <h2>Already have an account?</h2>
                <span>Sign In with your email and password here!</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="email"
                        required 
                    />
                    
                    <FormInput
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label="password"
                        required
                    />

                    <CustomButton type='submit'>Sign In </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;