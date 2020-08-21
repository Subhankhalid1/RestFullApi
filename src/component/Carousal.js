import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

function Carousels() {
    return (

        <div>

            <div className='container-fluid' >

                <div className="row title" style={{ marginBottom: "20px" }} >

                    <div className="col-sm-12 btn btn-warning">

                Find the 100 users that love you & figure out why.

                         </div>

                </div>

            </div>
            <div className='container-fluid' >

                <Carousel>

                    <Carousel.Item style={{ 'height': "300px" }} >

                        <img style={{ 'height': "300px", 'width': "600px" }}

                            className="d-block w-100"

                            src={'image/xyz.jpg'} />

                        <Carousel.Caption>

                            <h3 style={{ color: "orange" }}>Swipe for more! </h3>

                        </Carousel.Caption>

                    </Carousel.Item  >


                    <Carousel.Item style={{ 'height': "300px" }} >

                        <img style={{ 'height': "400px", 'width': "500px" }}

                            className="d-block w-100"

                            src={'image/dev.jpg'} />

                        

                    </Carousel.Item  >

                    <Carousel.Item style={{ 'height': "300px" }}>

                        <img style={{ 'height': "300px" }}

                            className="d-block w-100"

                            src={'image/main.jpg'} />

                        <Carousel.Caption>

                            {/* <h3>Second Demo</h3>   */}

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{ 'height': "300px" }}>

                        <img style={{ 'height': "400px" }}

                            className="d-block w-100"

                            src={'image/abc.png'} />

                        <Carousel.Caption>

                            {/* <h3>Third Demo</h3>   */}

                        </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item style={{ 'height': "300px" }}>

                        <img style={{ 'height': "400px" }}

                            className="d-block w-100"

                            src={'image/animated.gif'} />

                        <Carousel.Caption>

                            {/* <h3>Third Demo</h3>   */}

                        </Carousel.Caption>

                    </Carousel.Item>

                </Carousel>

            </div>

        </div>



    )

}



export default Carousels;