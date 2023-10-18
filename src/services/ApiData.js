export const getActivityData = async (userId) =>{
    const url = `http://localhost:3000/user/${userId}/activity`;
    const response = await fetch(url);
    return await response.json();
}

export const getAverageSessionData = async (userId) =>{
    const url = `http://localhost:3000/user/${userId}/average-sessions`;
    const response = await fetch(url);
    return await response.json();
}

export const getPerformanceData = async (userId) =>{
    const url = `http://localhost:3000/user/${userId}/performance`;
    const response = await fetch(url);
    return await response.json();
}

export const getUserIdentityData = async (userId) =>{
    const url = `http://localhost:3000/user/${userId}`;
    const response = await fetch(url);
    return await response.json();
}