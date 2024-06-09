import ProfileImage from "../UI/ProfileImage";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Navbar</span>
                <div className="">
                    <div className="dropdown dropstart">
                        <div data-bs-toggle="dropdown" aria-expanded="false" style={{cursor: 'pointer'}}>
                            <ProfileImage size="35" nombre="wilgen garcia" />
                        </div>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                            <li className="dropdown-item">Action</li>
                            <li className="dropdown-item">Another action</li>
                            <li className="dropdown-item">Something else here</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;