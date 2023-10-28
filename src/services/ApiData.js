export const getUserIdentityData = async (userId) =>{
    try{
        const url = `http://localhost:3001/user/${userId}`;
        const response = await fetch(url);
        return await response.json();
    }catch(e){
        console.log(e)
    }
}

export const getActivityData = async (userId) =>{
    try{
        const url = `http://localhost:3001/user/${userId}/activity`;
        const response = await fetch(url);
        return await response.json();
    }catch(e){
        console.log(e)
    }
}

export const getAverageSessionData = async (userId) =>{
    try{
        const url = `http://localhost:3001/user/${userId}/average-sessions`;
        const response = await fetch(url);
        return await response.json();
    }catch(e){
        console.log(e)
    }
}

export const getPerformanceData = async (userId) =>{
    try{
        const url = `http://localhost:3001/user/${userId}/performance`;
        const response = await fetch(url);
        return await response.json();
    }catch(e){
        console.log(e)
    }
}

