import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const Login = (props) => {
  const handleSignIn = () => {
    const apiKey = "0f761f26b968717e5ec39fe7cb222b12";
    const redirectUrl = "http://localhost:3000/";
    window.location.href = `https://trello.com/1/authorize?name=YourAppName&scope=read&expiration=never&response_type=token&key=${apiKey}&return_url=${redirectUrl}`;
  };

  return (
    <div className="login-container bg-primary">
      <div className="top-container">
        <img
          src="http://res.cloudinary.com/dgmtyceb9/image/upload/c_scale,w_25/v1693743713/kisspng-trello-logo-slack-atlassian-trello-5b2bcdc8b0e154.9936644115295973847245_fame2f.png"
          alt="trello-logo"
          className="login-image"
        />
        <h1 className="heading">Task manager</h1>
      </div>
      <div className="trello-box">
        <img
          src="https://res.cloudinary.com/dgmtyceb9/image/upload/c_crop,x_711,y_438/v1693746594/iconicHome_strres.svg"
          alt="trello"
          className="vector-image"
        />
        <p className="login-para">Task Tracking for your everyday needs</p>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={handleSignIn}
        >
          LOG IN WITH TRELLO
        </button>
      </div>
    </div>
  );
};

export default Login;
