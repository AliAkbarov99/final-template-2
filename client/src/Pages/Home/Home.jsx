import React from 'react';
import './Home.scss'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from '../../Components/Card/Card';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'


const Home = () => {
  const[data,setData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/api/courses").then(res=>{
    setData(res.data)
    })
  },[])


  return (
    <>
      <div id='intro'>
        <Carousel showThumbs={false} infiniteLoop={true} showIndicators={false} >
          <div>
            <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" />
            <h1>Get your <div>Education</div>today</h1>
          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" />
            <h1>Get your <div>Education</div>today</h1>
          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" />
            <h1>Get your <div>Education</div>today</h1>
          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" />
            <h1>Get your <div>Education</div>today</h1>
          </div>
        </Carousel>
        <div className='veiw__more'>
          <div className='veiw__more__item'>
            <div>
              <i class="fa-solid fa-earth-americas"></i>
            </div>
            <div className='veiw__more__item__text'>
              <p>
                Online Courses
              </p>
              <span>VEIW MORE</span>
            </div>
          </div>
          <div className='veiw__more__item'>
            <div>
              <i class="fa-solid fa-earth-americas"></i>
            </div>
            <div className='veiw__more__item__text'>
              <p>
                Online Courses
              </p>
              <span>VEIW MORE</span>
            </div>
          </div>
          <div className='veiw__more__item'>
            <div>
              <i class="fa-solid fa-earth-americas"></i>

            </div>
            <div className='veiw__more__item__text'>
              <p>
                Online Courses
              </p>
              <span>VEIW MORE</span>
            </div>
          </div>
        </div>
      </div>

      <div id='search'>
        <div className='search__left'>
          <h1>Register now and get a discount <span>50%</span> discount until 1 January</h1>
          <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
          <div><button>REGISTER NOW</button></div>
        </div>
        <div className='search__right'>
          <div className='search__right__overlay'></div>
          <div className='search__right__text'>
          <h1>Search for your course</h1>
          <div className='search__right__text__form'>
          <input type="text" placeholder='Course Name'/>
          <input type="text" placeholder='Category'/>
          <input type="text" placeholder='Degree'/>
          <button>SEARCH COURSE</button>
          </div>
          </div>
        </div>
      </div>

      <div id='courses'>
        <h1>Popular Courses <span className='service__line'></span></h1>
        <div className='container'>
          {data && data.map(course=>{
            return <Card key={course.id} id={course.id} title={course.title} desc={course.desc} price={course.price} author={course.author}/>
          })}
          
        </div>
      </div>

      <div id='services'>
        <h1>Our Services <span className='service-line'></span></h1>
        <div className="container">
            <div>
            <i class="fa-solid fa-earth-americas"></i>
            <h3>Our Courses</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>

            <div>
            <i class="fa-solid fa-earth-americas"></i>
            <h3>Our Courses</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>

            <div>
            <i class="fa-solid fa-earth-americas"></i>
            <h3>Our Courses</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>

            <div>
            <i class="fa-solid fa-earth-americas"></i>
            <h3>Our Courses</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>

            <div>
            <i class="fa-solid fa-earth-americas"></i>
            <h3>Our Courses</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>

            <div>
            <i class="fa-solid fa-earth-americas"></i>
            <h3>Our Courses</h3>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</p>
            </div>
        </div>
      </div>

      <div id='events'>
      <h1>Upcoming Events <span className='service-line'></span></h1>
        <div className="container">
          <div className='events__item'>
            <div className='events__item__left'>
              <div>07</div>
              <p>January</p>
            </div>
            <div className='events__item__middle'>
              <h3>Student Festival</h3>
              <h6>Grand Central Park</h6>
              <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
            </div>
            <div className='events__item__right'>
              <img src="https://preview.colorlib.com/theme/course/images/event_1.jpg.webp" alt="image" />
            </div>
          </div>
          <div className='events__item'>
            <div className='events__item__left'>
              <div>07</div>
              <p>January</p>
            </div>
            <div className='events__item__middle'>
              <h3>Student Festival</h3>
              <h6>Grand Central Park</h6>
              <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
            </div>
            <div className='events__item__right'>
              <img src="https://preview.colorlib.com/theme/course/images/event_2.jpg.webp" alt="image" />
            </div>
          </div>
          <div className='events__item'>
            <div className='events__item__left'>
              <div>07</div>
              <p>January</p>
            </div>
            <div className='events__item__middle'>
              <h3>Student Festival</h3>
              <h6>Grand Central Park</h6>
              <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
            </div>
            <div className='events__item__right'>
              <img src="https://preview.colorlib.com/theme/course/images/event_3.jpg.webp" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home