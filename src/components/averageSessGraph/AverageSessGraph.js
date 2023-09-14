import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const AverageSessGraph = () =>{
    const [ data , setData ] = useState(null); 
    
    useEffect(() => {
        const url = "../mockUser12/averageSessApi.json";
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
            <LineChart width={300} height={260} data={data.data.sessions}>
                <XAxis dataKey={"day"} height={60} tickLine={false} axisLine={false} />
                <Line type="monotone" dataKey={"sessionLength"} stroke="#8884d8" strokeWidth={2} />
            </LineChart>

            )
        }
        
       
        </>
    )
}