import React from 'react'
import { useRef } from 'react'
import './Add.scss'
import axios from 'axios'

const Add = () => {

  const authorInp = useRef()
  const titleInp = useRef()
  const descInp = useRef()
  const priceInp = useRef()
  
  return (
    <div id='add'>
      <h1>Add Course</h1>
      <div className='add__form'>
        <input ref={authorInp} type="text" placeholder='Author name'/>
        <input ref={titleInp} type="text" placeholder='Card title'/>
        <input ref={descInp} type="text" placeholder='Description'/>
        <input ref={priceInp} type="number" placeholder='Price'/>
        <button onClick={()=>{
          axios.post("http://localhost:8080/api/courses",{
            title:titleInp.current.value,
            desc:descInp.current.value,
            price:priceInp.current.value,
            author:authorInp.current.value
          })
          titleInp.current.value =''
          descInp.current.value =''
          priceInp.current.value = ''
          authorInp.current.value = ''

        }}>Add</button>
      </div>
    </div>
  )
}

export default Add