import { useNavigate } from "react-router-dom";
import Header from "../../components/shared/header/header";
import './loginPage.css';

function LoginPage(){

    const navigate = useNavigate();

    function handleLogin()
    {
        navigate('/');
    }

    return(
        <div>
            <Header/>
            <div className="container">
                <h3>Login Page</h3>
                <hr />
                <form action="" onSubmit={handleLogin}>
                <input type="text" className="form-control mb-3" placeholder="User Name"/>

                <input type="text" className="form-control mb-3" placeholder="Password"/>

                <button className="btn btn-success float-end mb-2" type="submit">Sign In</button>
                </form>
                <br />
                <br />
                <div className="btn-pair">
                <button className="btn btn-primary facebook.btn">
              <img src="https://i.pinimg.com/564x/d2/17/4b/d2174bdef984e49aafabeb437744ca7a.jpg" className=" facebook-img"/>
              Sign In With Facebook</button>
  
             
              <button className="btn google-btn">
                  <img src=" https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className=" google-img"/>
                  <b>Sign In With Google</b></button>
                  </div>
            </div>
        </div>
    );
}

export default LoginPage;