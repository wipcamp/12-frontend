import React, { Component } from 'react'
import MainNav from '../components/MainNav'
import ImageInfo from '../components/ImgInfo'
export default class index extends Component {
    render() {
        return (
            <div>
                <MainNav />

                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-5">
                            <ImageInfo src="/temp.jpg" info="Eiusmod Lorem et consequat exercitation non proident aliquip proident adipisicing enim. Aliquip laboris qui minim ut et. Sit consectetur nulla cupidatat ad exercitation. Culpa incididunt in elit in. Mollit cillum amet voluptate fugiat." />
                        </div>
                        <div className="col-md-auto">

                        </div>
                        <div className="col col-lg-5">
                            <ImageInfo src="/temp.jpg" />
                        </div>
                    </div>
                    {/* br */}
                    
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-5">
                            <ImageInfo src="/temp.jpg" />
                        </div>
                        <div className="col-md-auto">

                        </div>
                        <div className="col col-lg-5">
                            <ImageInfo src="/temp.jpg" />
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}
