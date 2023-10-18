import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import style from "./performanceGraph.module.scss";


export const PerformanceGraph = ({dataPerformance}) =>{
    const valueKind = (day) =>{
        switch(day){
            default: return '';
            case 1: return "cardio";
            case 2: return "energy";
            case 3: return "endurance";
            case 4: return "strength";
            case 5: return "speed";
            case 6: return "intensity";
        }
    }

    return(
        <>{ dataPerformance && (
            <div className={style.containerGraph}>
                <RadarChart cx="50%" cy="50%" outerRadius="65%" data={dataPerformance.data.data} width={280} height={315}>
                    <PolarGrid gridType="polygon" radialLines={false} />
                    <PolarAngleAxis dataKey={"kind"} tickFormatter={valueKind} tick={{ fill: "white", fontSize: 12 }} className="recharts-polar-angle-axis-tick-value"/>
                    <Radar name="Mike" dataKey={"value"} stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
                </RadarChart>
            </div>
            )}   
        </>
    )
}