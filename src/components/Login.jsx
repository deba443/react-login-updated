import style from "./Login.module.css"
import { useState,useEffect} from "react";
export default function Login() {
    const [userData,setUserData]=useState({
        email:"",
        password:""
    })
  return (
    <form className={style.form}>
      <h2>Login</h2>

      <div className={style.controlRow}>
        <div className={`${style.control} ${style.noMargin}`}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div className={`${style.control} ${style.noMargin}`}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>
      </div>

      <p className={style.formActions}>
        <button className={`${style.button} ${style.resetButton}`}>Reset</button>
        <button className={style.button}>Login</button>
      </p>
    </form>
  );
}
