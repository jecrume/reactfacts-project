import logo from './react-logo-clear.png';
import "./page.css";

function Page() {
    return (
      <div className="page-container">
        <div className="img">
          <img src={logo} alt="" />
        </div>
        <h1>
          <b> Fun facts about React </b>
        </h1>

        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Wilke</li>
          <li>has well over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    );
}

export default Page;