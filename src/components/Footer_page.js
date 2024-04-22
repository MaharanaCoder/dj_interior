import React from "react";
import { Link } from "react-router-dom";


const Footer_page = () => {
    return(
        <div className="footer_main">
        <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#929fba', width:'100%' }}>
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3" >
                  <h6 className="text-uppercase mb-4 font-weight-bold" style={{fontSize:'30px', fontWeight:'bold', color:'red'}}><img src="./images/logodj.png" width="65" height="53"></img>DJ INTERIOR</h6>
                  <p>
                    Here you can purchase any material of furniture with you can give order for your home,office,lodge,counter,medical,shop for furniture decorate.
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold" style={{fontSize:'25px'}}>PRODUCTS</h6>
                  <p>
                    <a className="text-white">BEDROOM</a>
                  </p>
                  <p>
                    <a className="text-white">KITCHEN</a>
                  </p>
                  <p>
                    <a className="text-white">OFFICE</a>
                  </p>
                  <p>
                    <a className="text-white">SOFA</a>
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold" style={{fontSize:'25px'}}>CONTACT</h6>
                  <a href="https://www.google.com/maps/place/DJ+Interior/@19.6205519,84.9502011,15z/data=!4m6!3m5!1s0x3a18075b42655ad3:0x676289d64748a568!8m2!3d19.6205519!4d84.9502011!16s%2Fg%2F11vqlpqq15?entry=ttu"><p><img className="fas fa-home mr-3" src="./images/icons8-shop-64.png"></img>Kodala, near bali dhaba, ganjam, odisha, 761032</p></a>
                  <p><i className="fas fa-envelope mr-3"></i>nirakarmaharana988@gmail.com</p>
                  <p><i className="fas fa-phone mr-3"></i>+91 9537268107</p>
                  <p><i className="fas fa-print mr-3"></i>+91 8849055816</p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold" style={{fontSize:'25px'}}>Follow us</h6>
                  <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#056C41' }} href="https://wa.link/fkugi1" role="button"><img src="./images/icons8-whatsapp-48.png"></img></a>
                  <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="https://www.facebook.com/nirakar.maharana.52" role="button"><img src='./images/icons8-facebook-48.png'></img></a>
                  <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button"><i className="fab fa-google"></i></a>
                  <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button"><i className="fab fa-instagram"></i></a>
                  <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
                  <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333' }} href="#!" role="button"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </section>
          </div>
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
         <p style={{fontSize:'18px'}} >code by: Harihar Maharana(@maharana_coder) FOR cont: <a href="https://wa.link/z1im30" target="_blank"><img src='./images/icons8-whatsapp-48.png'></img></a></p> 
          </div>
        </footer>
      </div>
    
    )
}
export default Footer_page;