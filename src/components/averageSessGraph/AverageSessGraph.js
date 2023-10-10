import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./averageSessGraph.module.scss";


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

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className={style.tooltipCustom}>
              <p className={style.minute}>{`${payload[0].value}min`}</p>
            </div>
          );
        }
    }

    const formatXAxis = (day) =>{
        switch(day){
            default: return '';
            case 1: return "L";
            case 2: return "M";
            case 3: return "M";
            case 4: return "J";
            case 5: return "V";
            case 6: return "S";
            case 7: return "D";
        }

    }

    return(
        <>
        {
            data && (
                <div className={style.lineChartContainer}>
                    <div className={style.title}>
                        <p>Durée moyenne des sessions</p>
                    </div>

                        <LineChart width={280} height={260} data={data.data.sessions}>
                            <XAxis dataKey={"day"} height={50} tickLine={false} axisLine={false} domain={[1,7]} stroke="#FFFFFF" style={{opacity: "50.4%", fontSize:"15px"}} padding={{left: 10, right: 10}} tickFormatter={formatXAxis} dy={10}/>
                            <YAxis hide={true}/>
                            <Tooltip content={<CustomTooltip />} cursor={{ strokeWidth: 110, stroke: "rgba(0, 0, 0, 0.1)"}} />
                            
                            <Line type="monotone" dataKey={"sessionLength"} stroke="#FFFFFF" strokeWidth={2} style={{opacity: "50.4%"}}/>
                        </LineChart>
                </div>
            

            )
        }
        
       
        </>
    )
}