import { useEffect, useState } from "react";
import style from "./userDataDisplay.module.scss";
import energy from "../../assets/energy.png"

export const UserDataDisplay = () =>{
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
                    <div className={style.containerData}>
                        <div className={style.bloc}>
                            <div className={style.imageCtn}><img src={energy} alt="icone" /></div>
                            <div className={style.infoContainer}>
                                <p className={style.number}>1.2569kCal</p>
                                <p className={style.description}>Calories</p>
                            </div>
                        </div>
                    </div>

                )
            }
        </>
    )
}