
import React from 'react';
import { FaMapMarkedAlt, FaPhone, FaPaperPlane, FaHotel, FaSearch } from "react-icons/fa"
      
class THREE extends React.Component {
        componentDidMount() {
                $('.carousel').carousel({
                        interval: 50000
                })
                $('.carousel-search ').focus(function () {
                        $('#MainCarousel').carousel('pause')
                }).blur(function () {
                        $("#MainCarousel").carousel('cycle');
                });

}
render() {
        return (
                <div className=" w-100 h-100 container ">
                        <div className="row pt-3">
                                <div className="col-12 col-lg-6 ">
                                        <h2 className="text-light">
                                                Research and Publications
                                                </h2>
                                </div>
                                <div className="col-12 col-lg-6 ">
                                        <div className="input-group mb-3">
                                                <input type="text" className="form-control carousel-search" placeholder="Search for publications, authors and research topics" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                <div className="input-group-append">
                                                        <button className="btn btn-outline-light" type="button" id="button-addon2"><FaSearch></FaSearch></button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="row ">
                                <div className="col-12">
                                        <div className="card research-card">
                                                <div className="card-header">
                                                        Featured Publications
                                                        </div>
                                                <div className="card-body featured-list">
                                                        <p className="featured-text ">With supporting Link below as a natural lead-in to additional content.</p>
                                                        <p className="featured-text ">With supporting Link below as a natural lead-in to additional content.</p>
                                                        <p className="featured-text ">With supporting Link below as a natural lead-in to additional content.</p>
                                                        <p className="featured-text ">With supporting Link below as a natural lead-in to additional content.</p>
                                                        <p className="featured-text ">With supporting Link below as a natural lead-in to additional content.</p>
                                                        <p className="featured-text ">With supporting Link below as a natural lead-in to additional content.</p>
                                                        <p className="featured-text ">With supporting Link below as a natural lead-in to additional content.</p>
                                                        <p className="featured-text ">With supporting Link below as a natural lead-in to additional content.</p>
                                                        <p className="featured-text ">With supporting Link below as a natural lead-in to additional content.</p>
                                                        <p className="featured-text ">With supporting Link below as a natural lead-in to additional content.</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>


        );
}
}
class TWO extends React.Component {
        render() {
                return (

                        <div className=" w-100 h-100 container ">
                                <div className="row h-100">
                                        <div className="col-12 col-lg-6 my-auto text-light">
                                                <h5 className="d-inline">MS2Discovery</h5> serves as a platform for enhancing the research experience of faculty, students, post-doctoral fellows,
                                                and visiting scholars and for increasing the social awareness of the key role played by mathematical and
                                                statistical modelling in our society
                                        </div>
                                        <div className="col-12 col-lg-6  row m-0 my-auto  row justify-content-around  pb-5">
                                                <div className="col-12 text-center text-light py-2 iframe-holder text-left">
                                                        <div className="text-left row p-0 m-0">
                                                                <div className="icon-holder">
                                                                        <FaPaperPlane className="large-icon" />
                                                                </div>
                                                                <div className="col small-font-8 h-100 my-auto">
                                                                        <span className=""> ms2discovery@wlu.ca </span>
                                                                </div>
                                                        </div>
                                                        <div className="text-left row p-0 m-0">
                                                                <div className="icon-holder">
                                                                        <FaPhone className="large-icon" />
                                                                </div>
                                                                <div className="col small-font-8 h-100 my-auto">
                                                                        <span className="">519-884-1970 </span>
                                                                </div>
                                                        </div>
                                                        <div className="text-left row p-0 m-0">
                                                                <div className="icon-holder">
                                                                        <FaHotel className="large-icon" />
                                                                </div>
                                                                <div className="col small-font-8 h-100 my-auto">
                                                                        <span className="">Lazaridis Hall, room LH308 </span>
                                                                </div>
                                                        </div>
                                                        <div className="text-left row p-0 m-0">
                                                                <div className="icon-holder ">
                                                                        <FaMapMarkedAlt className="large-icon " /></div>
                                                                <div className="col small-font-8">
                                                                        75 University Avenue West, Waterloo,<br></br>
                                                                        Ontario, Canada, N2L 35C </div>
                                                        </div>

                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11581.
            747345275435!2d-80.5263399!3d43.4723532!3m2!1i1024!2i768!4f13.1!3m3!1m2!
            1s0x0%3A0xd224e64459372537!2sWilfrid%20Laurier%20University!5e0!3m2!1sen!
            2sca!4v1581377221914!5m2!1sen!2sca"
                                                                width="600" height="450" frameBorder="0" allowFullScreen="yes"></iframe></div>
                                        </div>
                                </div>
                        </div >
                )
        }
}
class ONE extends React.Component {

        render() {
                const Buttons = [
                        "Nanoscience", "Nanotechnology",
                        "Renewable Energy", "Sustainable Development",
                        "Life Sciences", "Biotechnology", "Bioinformatics",
                        "Mechanics", "Materials Science", "Complex Systems",
                        "Ecology", "Climate", "Environmental Science", "Operations", "Decision Science",
                        "Econometrics", "Human Interface Technology"];

                Buttons.sort((a, b) => a.length - b.length);
                var button_list = []
                for (let index = 0; index < Buttons.length; index++) {
                        button_list.push(
                                <button key={index} type="button" className="btn  m-1 btn-outline-light research-b">{Buttons[index]}</button>
                        );
                } 
                return (
                        <div className=" w-100 h-100 container ">
                                <div className="row h-100">
                                        <div className="col-12 my-auto overlay1-text">
                                                <h2 className="text-light ">MS2Discovery strives to create a dynamic and engaging environment that is highly conducive to interdisciplinary research, collaboration, and communication.</h2>
                                        </div>
                                        <div className="col-12  my-lg-auto  top-down-fade-parent pb-5">
                                                <div className="col-12 text-center d-none d-lg-block text-light py-2">Discover Our Research</div>
                                                {/* Discover Button that lists the button_list |/| Only can be seen on mobile (<992px) */}
                                                <div className="col-12 d-block d-lg-none text-center text-light py-2">
                                                        <button className="btn  btn-outline-light " type="button">
                                                                Discover</button>
                                                </div>

                                                <div className="h-50 w-100  row m-0 mb-auto d-none d-lg-flex justify-content-around btn-list-remove " id="">
                                                        {button_list}
                                                </div>
                                        </div>
                                </div>
                        </div>


                );
        }
}
export default [THREE, ONE, TWO];
