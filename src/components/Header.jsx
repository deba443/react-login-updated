import HeaderImg from "../assests/logo.jpg"
import style from "./Header.module.css"
const Header=()=>{
    return(
        <header>
                <img src={HeaderImg} alt="Header Image" className={style.image} />
                <h1 className={style.textStyling}>react form</h1>
        </header>
    )
}
export default Header