import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { ActivityGraph } from "../components/activityGraph/ActivityGraph";
import style from "./test.module.scss"
import { AverageSessGraph } from "../components/averageSessGraph/AverageSessGraph";
import { PerformanceGraph } from "../components/performanceGraph/PerformanceGraph";
import { UserScoreGraph } from "../components/userScoreGraph/UserScoreGraph";
import { UserIdentity } from "../components/userIdentity/UserIdentity";

export const Test = () =>{
    return(
        <>
            <Header />
        <div className={style.container}>
            <Footer />
            <div className={style.graphContainer}>
                <UserIdentity />
                <ActivityGraph />
                <PerformanceGraph />
                <AverageSessGraph />
                <UserScoreGraph />

            </div>
            
        </div>
            
        </>
    )
}