import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import style from "./averageSessGraph.module.scss";


export const AverageSessGraph = ({dataAverageSess}) =>{
    
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
            { dataAverageSess && (
                <div className={style.lineChartContainer}>
                    <div className={style.title}>
                        <p>Durée moyenne des sessions</p>
                    </div>
                    <ResponsiveContainer width="100%" height={193}>
                        <LineChart height={193} data={dataAverageSess.data.sessions}>
                            <XAxis dataKey={"day"} height={50} tickLine={false} axisLine={false} domain={[1,7]} stroke="#FFFFFF" style={{opacity: "50.4%", fontSize:"15px"}} padding={{left: 10, right: 10}} tickFormatter={formatXAxis} dy={10}/>
                            <YAxis hide={true}/>
                            <Tooltip content={<CustomTooltip />} cursor={{ strokeWidth: 110, stroke: "rgba(0, 0, 0, 0.1)"}} />
                            <Line type="monotone" dataKey={"sessionLength"} stroke="#FFFFFF" strokeWidth={2} style={{opacity: "50.4%"}} dot={false}/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            )}       
        </>
    )
}