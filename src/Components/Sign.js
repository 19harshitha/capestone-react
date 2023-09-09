import React from 'react'
import image13 from "../images/image13.png";
import Superapp from "../images/Superapp.png";
import styles from "./Image.module.css";
import "./Sign.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const Sign = ({ label }) => {

  const navigate = useNavigate();

  const [inpval, setInpval] = useState({
    Name: "",
    User: "",
    Email: "",
    Num: "",
    box: ""

  })


  const getdata = (e) => {
    setInpval({ ...inpval, [e.target.name]: e.target.value })

  }
  const [errors, setErrors] = useState({})
  const handleSub = (e) => {
    e.preventDefault()
    const validateErrors = {}

    if (!inpval.Name) {
      validateErrors.Name = "field is required"
    }
    if (!inpval.User) {
      validateErrors.User = "field is required"
    }

    if (!inpval.Email) {
      validateErrors.Email = "field is required"
    }
    if (!inpval.Num) {
      validateErrors.Num = "field is required"
    }
    if (!inpval.box) {
      validateErrors.box = "check this box if you want to proceed"
    }

    setErrors(validateErrors)
    if (Object.keys(validateErrors).length === 0) {
      window.localStorage.setItem("task", JSON.stringify(inpval));
      { navigate("/Page2") }
    }


  }



  return (
    <>

      <div className='register'>

        <article className={styles.article}>
          <img className={styles.image} src={image13} alt="image13" />
          <p className={styles.header}>Discover new things on</p>
          <p className={styles.footer}>Superapp</p>
        </article>


        <div className='right'>
          <form id='form' className='page1' onSubmit={handleSub}>
            <img src={Superapp} width={"239px"} height={"94px"} id='til' />
            <p id='l1'>create your new account</p>
            <input type='text' onChange={getdata} name='Name' placeholder='Name' id='r1' />
            {errors?.Name && <p style={{ color: "red" }}> {errors?.Name}</p>}
            <input type='text' onChange={getdata} name='User' placeholder='UserName' id='r1' />
            {errors?.User && <p style={{ color: "red" }}>{errors?.User}</p>}
            <input type='email' onChange={getdata} name='Email' placeholder='Email' id='r1' />
            {errors?.Email && <p style={{ color: "red" }}>{errors?.Email}</p>}
            <input type='number' onChange={getdata} name='Num' placeholder='Number' id='r1' />
            {errors?.Num && <p style={{ color: "red" }}>{errors?.Num}</p>}
            <div className='check'>
              <input type='checkbox' onChange={getdata} name='box' />
              <label className='lab'>share my registration data with Superapp
                {errors?.box && <p style={{ color: "red" }}>{errors?.box}</p>}
              </label>
            </div>
            <button className='btn'  >Sign Up </button>
            <p>By clicking on Sign up, you agree to Superapp <span>Terms and Conditions of Use</span></p>
            <br />
            <p> To learn more about how Superapp collects uses, shares and protects your personal data please read Superapp <span>Privacy Policy</span> </p>
          </form>
        </div>

      </div>
    </>
  )
}

export default Sign



