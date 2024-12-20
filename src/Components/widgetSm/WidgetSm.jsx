import "./widgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Newly Joined Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img className="widgetSmPfp" src="../../assets/pfp/1.jpeg" alt="" />
          <div className="widgetSmContainer">
            <span className="widgetSmUsername">Hellen Keller</span>
            <span className="widgetSmUserTitle">UI/UX designer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" /> 
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img className="widgetSmPfp" src="../../assets/pfp/5.jpeg" alt="" />
          <div className="widgetSmContainer">
            <span className="widgetSmUsername">Yousra Ben</span>
            <span className="widgetSmUserTitle">Dev sec ops engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/> 
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img className="widgetSmPfp" src="../../assets/pfp/3.jpeg" alt="" />
          <div className="widgetSmContainer">
            <span className="widgetSmUsername">Anna Trunks</span>
            <span className="widgetSmUserTitle">Full Stack Developer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/> 
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img className="widgetSmPfp" src="../../assets/pfp/8.jpeg" alt="" />
          <div className="widgetSmContainer">
            <span className="widgetSmUsername">Sarah Baker</span>
            <span className="widgetSmUserTitle">Product manager</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/> 
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img className="widgetSmPfp" src="../../assets/pfp/2.jpeg" alt="" />
          <div className="widgetSmContainer">
            <span className="widgetSmUsername">Leon S.kennedy</span>
            <span className="widgetSmUserTitle">Data Analyst</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/> 
            Display
          </button>
        </li>

      </ul>
    </div>
  )
}
