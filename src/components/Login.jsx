import style from "./Login.module.css"
import { useState,useEffect} from "react";
export default function Login() {
    const [userData,setUserData]=useState({
        email:"",
        password:""
    })
    const [error,setError]=useState({
      email:"",
      password:""
    })
    const [isResgisterModalOpen,setIsRegisterModalOpen]=useState(false)
    const handleInputData=(e)=>{
      setError(prev=>({
        ...prev,
        email:"",
        password:""
      }))
      setUserData(prevValues=>({
        ...prevValues,
        [e.target.name]:e.target.value
      }))
    }
    const handleLogin=(e)=>{
      e.preventDefault()
      if (validateEmail(userData?.email)){
        if (passwordValidate(userData?.password)){
          setUserData(prev=>({
            ...prev,
            email:"",
            password:""
          }))
          return
        }
        else{
          setError(prev=>({
            ...prev,
            email:"",
            password:"password is not valid"
          }))
        }
      }
      else{
        setError(prev=>({
          ...prev,
          email:"Email is not valid",
          password:"Password is not valid"
        }))
      }
    }
    const resetButton=(e)=>{
      // e.preventDefault()
      setUserData({email:"",password:""})
      return
    }
    const validateEmail=(email)=>{
      const emailRegex = /^[a-zA-Z0-9]{3,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email)
    }
    const passwordValidate=(password)=>{
      const passwordRegex = /^\S{5,}$/;
      return passwordRegex.test(password)
    }
    const handleSignUp=()=>{
      setIsRegisterModalOpen(true)
    }
  return (
    <form className={style.form} onSubmit={handleLogin}>
      <h2>Login</h2>

      <div className={style.controlRow}>
        <div className={`${style.control} ${style.noMargin}`}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={handleInputData} value={userData?.email} />
          <p style={{color:"red",lineHeight:0}}>{error?.email}</p>
        </div>

        <div className={`${style.control} ${style.noMargin}`}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={handleInputData} value={userData?.password}/>
          <p style={{color:"red",lineHeight:0}}>{error?.password}</p>
        </div>
      </div>
      <div className={style.bottomForm}>
        <button className={`${style.button} ${style.signUpButton}`} type="button" onClick={handleSignUp}>Signup</button>
      <p className={style.formActions}>
        <button className={`${style.button} ${style.resetButton}`} onClick={resetButton} type="button">Reset</button>
        <button className={style.button} >Login</button>
      </p>
      </div>
    </form>
  );
}
 