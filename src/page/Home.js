import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { ActivityGraph } from "../components/activityGraph/ActivityGraph";
import style from "./home.module.scss"
import { AverageSessGraph } from "../components/averageSessGraph/AverageSessGraph";
import { PerformanceGraph } from "../components/performanceGraph/PerformanceGraph";
import { UserScoreGraph } from "../components/userScoreGraph/UserScoreGraph";
import { UserIdentity } from "../components/userIdentity/UserIdentity";
import { UserDataDisplay } from "../components/userDataDisplay/UserDataDisplay";
import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import { getUserIdentityMock, getActivityMock, getAverageSessionMock, getPerformanceMock} from "../services/MockData";
import { getActivityData, getAverageSessionData, getPerformanceData, getUserIdentityData} from "../services/ApiData";
import energy from "../assets/energy.png";
import chicken from "../assets/chicken.png";
import burger from "../assets/cheeseburger.png";
import apple from "../assets/apple.png";

export const Home = () =>{
    const {userId} = useParams();
    const [ userData , setUserData ] = useState(); 
    const [ userActivity , setUserActivity ] = useState();
    const [ userAverageSess , setUserAverageSess ] = useState();
    const [ userPerformance , setUserPerformance ] = useState();
    const [mockedData, setMockedData] = useState(true); 
    const [displayData, setDisplayData] = useState(false);

    useEffect (() =>{
        let userDataResult, userActivityResult, userAverageSessResult, userPerformanceResult;

        async function fetchData(){
            if(mockedData){
                userDataResult = await getUserIdentityMock(userId);
                userActivityResult = await getActivityMock(userId);
                userAverageSessResult = await getAverageSessionMock(userId);
                userPerformanceResult = await getPerformanceMock(userId);
            }else{
                userDataResult = await getUserIdentityData(userId);
                userActivityResult = await getActivityData(userId);
                userAverageSessResult = await getAverageSessionData(userId);
                userPerformanceResult = await getPerformanceData(userId);
            }
            
            if(userDataResult && userActivityResult && userAverageSessResult && userPerformanceResult){
                setUserData(userDataResult);
                setUserActivity(userActivityResult);
                setUserAverageSess(userAverageSessResult);
                setUserPerformance(userPerformanceResult);
                setDisplayData(true);
            }else{
                setUserData();
                setUserActivity();
                setUserAverageSess();
                setUserPerformance();
                setDisplayData(false);
            }
        }
        if(userId){
            fetchData()
        }
    
    }, [userId, mockedData])

    const switchDataSource = () =>{
        setDisplayData(false)
        setMockedData(!mockedData)
    }

    return(
        <>
            <Header />
            <div className={style.container}>
                <Footer />
                
                { !displayData ? (
                    <div className={style.errorMsg}>
                        <p>Erreur, impossible d'utiliser les données de l'API</p>
                        <button onClick={switchDataSource}>Utiliser les données du mock</button>
                    </div>
                ) : (
                    <>
                        <div className={style.graphContainer}>
                            <UserIdentity dataIdentity={userData} />
                            <ActivityGraph dataActivity={userActivity} />
                            <div className={style.graphs}>
                                <AverageSessGraph dataAverageSess={userAverageSess} />
                                <PerformanceGraph dataPerformance={userPerformance} />
                                <UserScoreGraph dataUserScore={userData}/>
                            </div>
                        </div>

                        <div className={style.infoUser}>

                            <button onClick={switchDataSource}>{mockedData ? "Données de l'API" : "Données du mock "}</button>

                            <UserDataDisplay
                                icone={energy}
                                number={[`${userData.data.keyData.calorieCount}`, 'kCal']}
                                description='Calories'
                                id={userData.data.userId}
                            />
                            <UserDataDisplay
                                icone={chicken}
                                number={[`${userData.data.keyData.proteinCount}`, 'g']}
                                description='Proteines'
                                id={userData.data.userId}
                            />
                            <UserDataDisplay
                                icone={burger}
                                number={[`${userData.data.keyData.carbohydrateCount}`, 'g']}
                                description='Glucides'
                                id={userData.data.userId}
                            />
                            <UserDataDisplay
                                icone={apple}
                                number={[`${userData.data.keyData.lipidCount}`, 'g']}
                                description='Lipides'
                                id={userData.data.userId}
                            />
                        </div> 
                    </> 
                )}  
            </div> 
        </>
    )
}