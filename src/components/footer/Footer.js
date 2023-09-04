import yoga from "../../assets/yoga.png";
import swim from "../../assets/swimming.png";
import bike from "../../assets/biking.png";
import alter from "../../assets/alter.png";
import style from "./footer.module.scss";



export const Footer = () =>{
    return (
        <>
            <div className={style.containerFooter}>
                <div className={style.containerIcon}>
                    <ul>
                        <li><img src={yoga} alt="person meditating" /></li>
                        <li><img src={swim} alt="person swimming" /></li>
                        <li><img src={bike} alt="person biking" /></li>
                        <li><img src={alter} alt="alter" /></li>
                    </ul>
                    <div className={style.texte}>
                        <p>Copyright, SportSee 2020</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}