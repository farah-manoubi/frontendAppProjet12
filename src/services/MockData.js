export const getUserIdentityMock = async (userId) =>{
    const url = `../../${userId}/userApi.json`;
    const response = await fetch(url);
    console.log(response)
    return await response.json();
}

export const getActivityMock = async (userId) =>{
    const url = `../../${userId}/activityApi.json`;
    const response = await fetch(url);
    return await response.json();
}

export const getAverageSessionMock = async (userId) =>{
    const url = `../../${userId}/averageSessApi.json`;
    const response = await fetch(url);
    return await response.json();
}

export const getPerformanceMock = async (userId) =>{
    const url = `../../${userId}/performanceApi.json`;
    const response = await fetch(url);
    return await response.json();
}