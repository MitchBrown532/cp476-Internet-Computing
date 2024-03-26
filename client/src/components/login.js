import { GoogleLogin } from 'react-google-login'
const clientId = "966725211415-8b81k79dqkb7rlskcf7i2hrpb0v4vdkj.apps.googleusercontent.com"

function Login({ setIsAuthenticated }) { // Accept setIsAuthenticated as a prop
    const onSuccess = (res) => {
        console.log("Login Success! Current User: ", res.profileObj);
        setIsAuthenticated(true); // Use setIsAuthenticated to update the authentication state
    };


    const onFailure = (res) => {
        console.log("Login Failed! res:", res)
    }

    return (
        <div id="signInButton">
            <h1>Student Database Managment System</h1>
            <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login