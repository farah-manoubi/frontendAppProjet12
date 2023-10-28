import style from "./userIdentity.module.scss"

export const UserIdentity = ({dataIdentity}) =>{
    
    return(
        <>
            {dataIdentity && (
                <div className={style.title}>
                    <h1>Bonjour <span style={{color: "#FF0101", marginLeft:"10px"}}>{dataIdentity.data.userInfos.firstName}</span></h1>
                    <p>Félicitation! Vous avez explosé vos objectif hier👏</p>
                </div>
            )}
        </>
    )
    
    } 