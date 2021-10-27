import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email : '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email:'', password:''});
        }catch(error) {
            console.log(error);
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({[name] : value})
    }

    render() {
        return(
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        required
                        label="Email"
                    />

                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                    /><br/>

                    <div className="buttons">
                        <CustomButton type="submit"> Sign in</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                            {' '} 
                            Sign in with Google 
                            {' '}
                            </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;

// const myAsyncFunction = async() => {
//     try{
//         const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
//         const users = await usersResponse.json();
//         const secondUser = users[1];
//         console.log(secondUser);
//         const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId='+ secondUser.id);
//         const posts = await postResponse.json();
//         console.log(posts);
//     }catch(err){
//         console.log('there was an error'+ err);
//     }
// }