import logo from "../../assets/logo.png";
import style from "./header.module.scss";

export const Header = () =>{
    return (
        <>
            <div className={style.containerHeader}>
                <div className={style.logo}>
                    <img src={logo} alt="logo du site web"/>
                </div>

                <nav>
                    <ul>
                        <li>Accueil</li>
                        <li>Profil</li>
                        <li>Réglage</li>
                        <li>Communauté</li>
                    </ul>   
                </nav>
            </div>
        </>
    )
}