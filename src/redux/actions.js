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