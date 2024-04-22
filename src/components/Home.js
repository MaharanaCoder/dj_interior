import React from 'react'
import './Home.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer_page from './Footer_page';


const Home = () => {

  

  return (
    
    <div className="home-container" style={{ overflowX: 'hidden' }}>
      <Navbar/>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./images/TVUNIT.jpg" class="d-block w-100" alt="TV Unit" style={{ maxHeight: '600px', objectFit: 'cover' }}/>
            </div>
            <div class="carousel-item">
              <img src="./images/kitchen.jpg" class="d-block w-100" alt="Kitchen" style={{ maxHeight: '600px', objectFit: 'cover' }}/>
            </div>
            <div class="carousel-item">
              <img src="./images/bedroom-interior-furniture.jpg" class="d-block w-100" alt="Bedroom" style={{ maxHeight: '600px', objectFit: 'cover' }}/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
          </button>
          </div>  


          <div class="heading_main">
            <p class='heading_para'>ALL FURNITURE DESIGN AVAILABLE</p>
          </div>

        <div class="card_main">

        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
            <Link className="nav-link active" to="/contactus" style={{ fontSize: '22px' }}>
              <img src="./images/download.jpeg" class="card-img-top" alt="..."></img>
              </Link>
              <div class="card-body">
                <h5 class="card-title"><Link className="nav-link active" to="/contactus" style={{ fontSize: '22px' }}>TV UNIT DESIGN</Link></h5>
                <p class="card-text">Discover sleek sophistication with DJ Interior's TV unit designs. Elevate your entertainment space with modern elegance, blending form and function seamlessly. From minimalist styles to statement pieces, our designs redefine your viewing experience with sophistication and style.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
            <Link className="nav-link active" to="/contactus" style={{ fontSize: '22px' }}>
              <img src="./images/images.jpeg" class="card-img-top" alt="..."></img>
              </Link>
              <div class="card-body">
                <h5 class="card-title"><Link className="nav-link active" to="/contactus" style={{ fontSize: '22px' }}>TV UNIT DESIGN</Link></h5>
                <p class="card-text">Discover sleek sophistication with DJ Interior's TV unit designs. Elevate your entertainment space with modern elegance, blending form and function seamlessly. From minimalist styles to statement pieces, our designs redefine your viewing experience with sophistication and style.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
            <Link className="nav-link active" to="/contactus" style={{ fontSize: '22px' }}>
              <img src="./images/bedroom-interior-furniture.jpg" class="card-img-top" alt="..."></img>
              </Link>
              <div class="card-body">
                <h5 class="card-title"><Link className="nav-link active" to="/contactus" style={{ fontSize: '22px' }}>BEDROOM DESIGN</Link></h5>
                <p class="card-text">Elevate your bedroom with DJ Interior's stunning designs, marrying functionality with elegance for your personal sanctuary. From luxurious bed frames to chic bedside tables, we craft spaces that reflect your style and ensure peaceful rest.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
            <Link className="nav-link active" to="/contactus" style={{ fontSize: '22px' }}>
              <img src="./images/furniture.jpg" class="card-img-top" alt="..."></img>
              </Link>
              <div class="card-body">
                <h5 class="card-title"><Link className="nav-link active" to="/contactus" style={{ fontSize: '22px' }}>SOFA</Link></h5>
                <p class="card-text">Indulge in luxurious comfort with DJ Interior's exquisite sofa designs, where style meets relaxation in every stitch. Elevate your living space with our meticulously crafted pieces, blending timeless elegance with contemporary flair.</p>
              </div>
            </div>
          </div>
        </div>

        </div>

        <div class='card1_group'>
          <div class="card-group">
            <div class="card1">
            <Link className="nav-link active" to="/contactus" style={{ fontSize: '22px' }}>
              <img src="./images/sofa1.jpeg" alt="Sofa"></img></Link>
              <div class="card1-body">
              <Link className="nav-link active" to="/contactus" style={{ fontSize: '22px' }}>
                <h5 class="card1-title">SOFA</h5></Link>
                <p class="card1-text">Indulge in luxurious comfort with DJ Interior's exquisite sofa designs, where style meets relaxation in every stitch. Elevate your living space with our meticulously crafted pieces, blending timeless elegance with contemporary flair.</p>
              </div>
            </div>
            <div class="card1">
            <Link className="nav-link active" to="/contactus" style={{ fontSize: '22px' }}>
              <img src="./images/kitchen3.jpeg" alt="Kitchen"></img></Link>
              <div class="card1-body">
              <Link className="nav-link active" to="/contactus" style={{ fontSize: '22px' }}>
                <h5 class="card1-title">KITCHEN</h5></Link>
                <p class="card1-text">DJ Interior revolutionizes kitchen design, offering a fusion of functionality and aesthetics. Our bespoke solutions transform your kitchen into a culinary haven, where innovative designs meet timeless elegance. From sleek modern layouts to cozy traditional charm, we craft spaces that inspire culinary creativity and delight the senses.</p>
              </div>
            </div>
            <div class="card1">
            <Link className="nav-link active" to="/contactus" style={{ fontSize: '22px' }}>
              <img src="./images/counter1.jpeg" alt="Counter"></img></Link>
              <div class="card1-body">
              <Link className="nav-link active" to="/contactus" style={{ fontSize: '22px' }}>
                <h5 class="card1-title">COUNTER</h5></Link>
                <p class="card1-text">Transform your space with DJ Interior's counter table designs, seamlessly blending functionality and style. Elevate your environment with sleek, modern lines and impeccable craftsmanship, creating a focal point that exudes sophistication.</p>
              </div>
            </div>
          </div>

        </div > 

       <Footer_page/>
       
      </div>
  )
}

export default Home