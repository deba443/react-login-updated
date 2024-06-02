import style from "./Modal.module.css"
const Modal=({children,onClose})=>{
    return(
        <div className={style.modalOverLay}>
            <div className={style.modalContent}>
                {children}  
                <button onClick={onClose} className={style.modalCloseButton}>close</button>              
            </div>

        </div>
    )
}
export default Modal