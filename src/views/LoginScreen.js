// ** core
import React, {useState} from 'react';
// ** css
import '../css/views/LoginScreen.css';
// ** external components
import {Button} from 'reactstrap';
import {ToastContainer} from 'react-toastify';
import {showFailedToast, showSuccessToast, showWarningToast} from '../config/showToast';
import {useNavigate,} from 'react-router-dom';
import {signInApiHandler} from "../config/API";
import Loader from "../config/LoaderConfig";

function LoginScreen() {
    let navigate = useNavigate();

    let [credential, setCredential] = useState({
        username: '',
        password: '',
    });

    let [isLoading, setIsLoading] = useState(false);


    const saveHandler = async () => {
        if (credential?.username !== '' && credential?.password !== '') {
            setIsLoading(true);

            // ** API invoke
            let response = await signInApiHandler({
                email: credential.username,
                password: credential.password,
            });

            setIsLoading(false);
            let {code, result} = response?.data

            if (code === '200') {
                showSuccessToast("Login Success!");

                // ** store token
                await localStorage.setItem('token', JSON.stringify(result.token));
                await localStorage.setItem('email', JSON.stringify(credential.username));

                // ** navigate to home
                navigate && navigate('/home');

                return true;
            } else if (code === '500') {
                showFailedToast(result)
                return false;
            }

        } else {
            showWarningToast("Required field must not be blank.");
        }
    }

    return (
        <main className='main-auth-container'>

            <img src={require('../assets/logo-b.png')} id='logo'/>

            <div id='form-container'>
                <div>
                    <h2 id='text-login'>Login</h2>
                </div>

                <hr id='hr'/>

                {/* input  */}
                <label id='form-label'>username or email address</label>
                <input
                    className='input-regular'
                    placeholder=''
                    value={credential?.username}
                    onChange={(val) => {
                        setCredential({
                            ...credential,
                            username: val?.target?.value
                        })
                    }}
                />

                {/* input  */}
                <label id='form-label'>password</label>
                <input
                    className='input-regular'
                    placeholder=''
                    type='password'
                    value={credential?.password}
                    onChange={(val) => {
                        setCredential({
                            ...credential,
                            password: val?.target?.value
                        })
                    }}
                />

                <div id='button-login-container'>
                    <Button
                        color="primary"
                        id='button-login'
                        onClick={saveHandler}
                    >
                        Let's Go
                    </Button>

                </div>
            </div>


            <Loader isLoading={isLoading}/>
            {/* toast : important */}
            <ToastContainer/>
        </main>
    )
}

export default LoginScreen;
