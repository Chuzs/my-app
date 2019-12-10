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
export const updateStatusBtn = status => {
    return {
        type: 'STATUS',
        status
    }
}