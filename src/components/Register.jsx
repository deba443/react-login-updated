import { useState } from "react";
import style from "./Register.module.css";
import Modal from "./Modal";
const Register = ({ show, setShow ,onClose}) => {
  if (!show) {
    return null;
  }
  // const onClose=()=>{
  //     setShow(false)
  // }

  return (
    <Modal onClose={onClose}>
      <h2 className={style.upperFont}>Welcome on board!</h2>
      <h3 className={style.upperFont}>We just need little bit of data to get started</h3>
      <form >
        <div>
          <label htmlFor="email">email</label>
          <input type="email" name="email"/>
        </div>
        <div className={style.passwordContainer}>
          <div>
        <label htmlFor="current-password">Password</label>
        <input type="password" name="current-password"/>
        </div>
        <div>
        <label htmlFor="confirm-password">confirm-password</label>
        <input type="password" name="confirm-password"/>
        </div>
        </div>
        <input type="text"/>
        <input type="text"/>
        <select name="role" id="role">
          <option value="student">Student</option>
          <option value="employee">Employee</option>
        </select>
        <textarea></textarea>
        <input type="checkbox" name="agree"/>
        <label htmlFor="agree">i agree to the terms and conditions</label>
        <button type="button">Reset</button>
        <button >Signup</button>
      </form>
    </Modal>
  );
};
export default Register;
