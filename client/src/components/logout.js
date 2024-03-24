import { GoogleLogout } from 'react-google-login'
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const clientId = "966725211415-8b81k79dqkb7rlskcf7i2hrpb0v4vdkj.apps.googleusercontent.com"

function Logout() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const onSuccess = () => {
        console.log("Logout Successful!");
        navigate('/'); // Navigate back to the login route upon logout
    };

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText='Logout'
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
}

export default Logout;
