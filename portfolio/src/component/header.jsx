import { Link } from "react-router-dom"

export function Header(){
    return(
        <header>
            <div className="fw-bold bi bi-globe2 fs-4">Juhi Web</div>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/servics">Servics</Link></li>
                <li><Link to="/contactUs">ContactUs</Link></li>
            </nav>

        </header>
    )
}