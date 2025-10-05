import { Link } from "react-router-dom"
import './header.css'
export function Header(){
    return(
        <header className="d-flex justify-content-around mt-4 container-fluid" style={{
            height:"100px "
        }}>
            <div className="fw-bold bi bi-globe2 fs-4">Juhi Web</div>
            <nav className="d-flex ">
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/contact">ContactUs</Link></li>
            </nav>

        </header>
    )
}