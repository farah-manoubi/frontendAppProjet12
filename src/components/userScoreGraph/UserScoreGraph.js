import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./userScroreGraph.module.scss"


export const UserScoreGraph = () =>{
    const [ data , setData ] = useState(null); 
    
    useEffect(() => {
        const url = "../mockUser12/userApi.json";
        const fetchData = async () => {
          
            const response = await fetch(url);
            const json = await response.json();
            console.log(json.data)
            //setData(json);
            setData([{
                name : "score",
                "uv" : (json.data.todayScore *100),
                fill : "#FF0101"
            }])
            
            
        };
        fetchData();
    }, []);


    const LegendCustom = ({ payload }) => {
        if (payload && payload.length) {
            return (
                <div className={style.legendContainer}>
                    <p className={style.score}>{payload[0].uv + "%"}</p>
                    <p className={style.text}>de votre</p>
                    <p className={style.text}>objectif</p>
                </div>
            )
        }
    }
    

    return(
        <>
    
        {
            
            data && (
                
            <div className={style.graphScore}>
             
             <div className={style.round}></div>
            <ResponsiveContainer width="100%" height="100%">
                
                <RadialBarChart cx="55%" cy="55%" innerRadius="80%" startAngle={90} endAngle={400} barSize={13} data={data}>
                    <PolarAngleAxis type="number" domain={[0 , 100]} tick={false} />
                <RadialBar
                    dataKey={"uv"}
                    cornerRadius={20}
                    
                />
                <Legend
                    layout="vertical"
                    verticalAlign="middle"
                    payload={data}
                    content={<LegendCustom />}
                    fill='#FFFFFF'
				/>
                </RadialBarChart>
            </ResponsiveContainer>
                
            </div>

            )
        }
        
       
        </>
    )
}