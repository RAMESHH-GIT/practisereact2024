import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {
    return (
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner" role="listbox">
                <div className="item active">
                    <img src="https://via.placeholder.com/1200x400?text=Header+Image+1" alt="First slide" />
                </div>
                <div className="item">
                    <img src="https://via.placeholder.com/1200x400?text=Header+Image+1" alt="Second slide" />
                </div>
                <div className="item">
                    <img src="https://via.placeholder.com/1200x400?text=Header+Image+1" alt="Third slide" />
                </div>
            </div>

            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;
