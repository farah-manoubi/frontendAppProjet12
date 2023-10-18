import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart } from 'recharts';
import { useParams } from "react-router-dom";
import style from "./activityGraph.module.scss";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ActivityGraph = ({dataActivity}) =>{
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className={style.tooltipCustom}>
              <p className={style.kilo}>{`${payload[0].value}kg`}</p>
              <p className={style.calorie}>{`${payload[1].value}kcal`}</p>
            </div>
          );
        }
      
        return null;
      };
    
    const formatXaxis = (index, i) => {
	    return i + 1;
	}

    return(
        <>{ dataActivity && (

        <div className={style.barchart}>
            
            <div className={style.head}>
                <p>Activité quotidienne</p>
                <legend>
                    <p><FontAwesomeIcon icon={faCircle} style={{color:"#282D30", fontSize:"0.5em", marginRight:"10px"}}/>Poids (Kg)</p>
                    <p><FontAwesomeIcon icon={faCircle} style={{color:"#E60000", fontSize:"0.5em", marginRight:"10px"}}/>Calories (Kcal)</p>
                </legend>
            </div>
    
            <ResponsiveContainer width="100%" height={172}>
            <BarChart
                width={835}
                height={172}
                data={dataActivity.data.sessions}
                barGap={8}   
                margin={{left: 30, bottom: 10}}
            >
                
                <CartesianGrid vertical={false} strokeDasharray="2 2" />
                <XAxis dataKey={"day"} tickLine={false} stroke="#9B9EAC" scale='point' padding={{left: 11, right: 11}} tickFormatter={formatXaxis}/>
                <YAxis orientation="right" type="number" domain={[0, 'auto']} tickLine={false} axisLine={false} tickCount={3} stroke="#9B9EAC" tickMargin={15}/>
                <Tooltip content={<CustomTooltip />}/>
                <Bar dataKey={"kilogram"} fill="#282D30" radius={[20, 20, 0, 0]} barSize={7} />
                <Bar dataKey={"calories"} fill="#E60000" radius={[20, 20, 0, 0]} barSize={7} />
            </BarChart>
            </ResponsiveContainer>

        </div>
        )}
       
        </>
    )


    
}