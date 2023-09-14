import { useEffect, useState } from "react";
import style from "./userIdentity.module.scss"


export const UserIdentity = () =>{
    const [ data , setData ] = useState(null); 
    
    useEffect(() => {
        const url = "../mockUser12/userApi.json";
        const fetchData = async () => {
          
            const response = await fetch(url);
            const json = await response.json();
            setData(json);  
            
        };
        fetchData();
    }, []);
    

    return(
        <>
        
            {
                data && (
                    <div className={style.title}>
                        <h1>Bonjour <span style={{color: "#FF0101", marginLeft:"10px"}}>{data.data.userInfos.firstName}</span> </h1>
                        <p>Félicitation! Vous avez explosé vos objectif hier👏</p>
                    </div>
                )
            }

        </>
    )
    
    } 