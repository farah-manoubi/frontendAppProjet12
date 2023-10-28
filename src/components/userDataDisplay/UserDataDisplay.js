import style from "./userDataDisplay.module.scss";

export const UserDataDisplay = ({icone, number, id, description}) =>{
    return(
        <>
            <div className={style.containerData}>
                <div className={style.bloc}>
                    <div className={style.imageCtn} key={id}><img src={icone} alt="icone" /></div>
                    <div className={style.infoContainer}>
                        <p className={style.number}>{number}</p>
                        <p className={style.description}>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}