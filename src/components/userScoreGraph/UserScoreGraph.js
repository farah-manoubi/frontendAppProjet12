import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const UserScoreGraph = () =>{
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

    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
      };

    return(
        <>
        {
            data && (
            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data.data}>
            <RadialBar
                minAngle={15}
                label={{ position: 'insideStart', fill: '#fff' }}
                background
                clockWise
                dataKey={"todayScore"}
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>

            )
        }
        
       
        </>
    )
}