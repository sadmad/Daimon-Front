import "./Login.css";
import Logo from '../../../images/Logo-white.png'

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <div className="form-card">
            <div className="card">
              <div className="card-head bg-white">
                <div className="d-flex align-items-center justify-content-center my-2">
                  <div className="login-logo">
                    <img
                      src='https://www.presse.tu-clausthal.de/fileadmin/_processed_/c/3/csm_Logo_EN_gr%C3%BCn_404735dda6.jpg'
                      alt=""
                    />
 
                  </div>
                </div>
              </div>
              <div className="card-form">
                <p className="text-center text-muted fs-08 mt-3">
                  With you registered Email
                </p>
                <div className="d-flex align-items-center input-field">
                  <span className="far fa-envelope text-muted"></span>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="d-flex align-items-center input-field">
                  <span className="fas fa-key text-muted"></span>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    required
                  />
                </div>
                <div className="d-flex align-items-center">
                  <input type="checkbox" name="remember" id="remember" />
                  <label className="text-muted ms-2" for="remember">
                    Remember me
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <div class="btn btn-primary mt-3">Sign In</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
