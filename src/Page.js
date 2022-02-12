import logo from './react-logo-clear.png';
import "./page.css";

function Page() {
    return (
      <div>
        <img src={logo} alt="" />
        
        <h1>
          <b> Fun facts about React </b>
        </h1>
        
        <ol>
          <li>It's composable</li>
          <li>It's declarative</li>
          <li>It's a hireable skill</li>
          <li>It's actively maintained by skilled people</li>
        </ol>
      </div>
    );
}

export default Page;