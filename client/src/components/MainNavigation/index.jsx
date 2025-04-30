import { NavLink } from "react-router-dom";
import playdateLogo from "../../assets/playdate_logo.png"
import "./MainNavigation.css"

const MainNavigation = () => {

    return (
            <nav className="navbar sticky-top navbar-expand-lg">
                
                <div className="container-fluid" id="nav-bar">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Parks
                            </a>
                            <ul className="dropdown-menu">
                                <li><NavLink to="/playgrounds" className="dropdown-item">Playgrounds</NavLink></li>
                                <li><a className="dropdown-item" href="#">Open Fields</a></li>
                                <li><a className="dropdown-item" href="#">Indoor Play Places</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/museums" className="nav-link" >Museums</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/zoos" className="nav-link" >Zoos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/hikes" className="nav-link" >Hikes</NavLink>
                        </li>
                        <li className="nav-item">
                        <   NavLink to="/amusement-parks" className="nav-link" >Amusement Parks</NavLink>
                        </li>
                    </ul>
                    </div>
                    <NavLink to="/" className="navbar-brand" ><img src={playdateLogo} alt="Playdate"/></NavLink>
                </div>

            </nav>
                
    )
}

export default MainNavigation