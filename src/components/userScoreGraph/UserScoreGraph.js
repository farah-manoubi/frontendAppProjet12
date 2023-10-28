import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import style from "./userScroreGraph.module.scss"

export const UserScoreGraph = ({dataUserScore}) =>{
    const dataScore =[
        {
            name : "score",
            "uv" : ((dataUserScore.data.todayScore || dataUserScore.data.score) *100),
            fill : "#FF0101"
        }
    ]

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
            { dataUserScore && (      
                <div className={style.graphScore}>
                    <div className={style.title}><p>Score</p></div>
                
                <div className={style.round}></div>
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart cx="55%" cy="55%" innerRadius="80%" startAngle={90} endAngle={400} barSize={13} data={dataScore}>
                            <PolarAngleAxis type="number" domain={[0 , 100]} tick={false} />
                        <RadialBar
                            dataKey={"uv"}
                            cornerRadius={20} 
                        />
                        <Legend
                            layout="vertical"
                            verticalAlign="middle"
                            payload={dataScore}
                            content={<LegendCustom />}
                            fill='#FFFFFF'
                        />
                        </RadialBarChart>
                    </ResponsiveContainer>    
                </div>
            )}
        </>
    )
}