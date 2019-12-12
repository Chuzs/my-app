export const updateReqText = reqText => {
    return {
        type: 'REQ',
        reqText
    }
}
export const updateResText = resText => {
    return {
        type: 'RES',
        resText
    }
}
export const updateWaitNum = waitNum => {
    return {
        type: 'WAIT',
        waitNum
    }
}
export const updateStatusBtn = statusBtn => {
    return {
        type: 'STATUS',
        statusBtn
    }
}
export const updateTime = time => {
    return {
        type: 'TIME',
        time
    }
}