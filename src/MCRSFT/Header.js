import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const Header = ({ productCount, companyCount }) => {
    
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li>
                            <a href="#">Product <span className="badge-circle">2</span></a>
                        </li>
                        <li>
                            <a href="#">Company <span className="badge-circle">3</span></a>
                        </li>
                        
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        {/* <li>
                            <a href="#">
                                <img src="logo.png" alt="site logo" style={{ maxHeight: '30px' }} />
                            </a>
                        </li> */}
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
