import React, { Component } from 'react';

class Intro extends Component {
    render() {
        return (
                <div className="intro">
                    <video className="video" src="./img/video.mp4" muted type="video/mp4" autoPlay="auto" loop="true"> </video>
                    <h1 className="name">MyPet</h1>
                    <div className="text">Cửa hàng với sản phẩm, dịch vụ uy tín, đảm bảo chất lượng</div>
                    <div className="btn btn-primary mua">Mua ngay</div>
                </div>
        );
    }
}

export default Intro;