import React from 'react'
import './Card.scss'
import axios from 'axios'

const Card = ({id,title,desc,price,author}) => {
  return (
    <div id='card'>
        <div className='card__img'>
        <img src="https://preview.colorlib.com/theme/course/images/course_1.jpg.webp" alt="" />
        </div>
        <div className='card__content'>
            <h2>{title}</h2>
            <p>{desc}</p>
            <button onClick={()=>{
              axios.delete(`http://localhost:8080/api/courses/${id}`)
            }}>Delete</button>
        </div>
        <div className='card__user'>
            <img src="https://preview.colorlib.com/theme/course/images/author.jpg.webp" alt="user" />
            <p>{author}, <span>Author</span></p>
            <div className='card__user__price'>
                ${price}
            </div>
        </div>
    </div>
  )
}

export default Card