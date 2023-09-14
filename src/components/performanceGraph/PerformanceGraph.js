import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


export const PerformanceGraph = () =>{
    const [ data , setData ] = useState(null); 
    
    useEffect(() => {
        const url = "../mockUser12/performanceApi.json";
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
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.data.data} width={500} height={200}>
                <PolarGrid />
                <PolarAngleAxis dataKey={"kind"} />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey={"value"} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>

            )
        }
        
       
        </>
    )
}