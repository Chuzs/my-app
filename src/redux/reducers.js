let resText = ''
const initState = {
    waitNum: 0, 
    statusText: '未签人',
    time: '00:00:00',
    setStatusBtnClass: 'btn-volcano',
    setStatusBtnText: '示忙',
    restBtnText: '休息',
    otherworkBtnText: '整理',
    loginBtnText: '签入',
    loginBtnClass: 'btn-green'
}
const updateText = (state = initState, action) => {
    switch (action.type) {
        case 'REQ':
            return Object.assign({}, state, {
                reqText: action.reqText
            })
        case 'RES':
            return Object.assign({}, state, {
                resText: appendRes(action.resText)
            })
        case 'WAIT':
            return Object.assign({}, state, {
                waitNum: action.waitNum
            })
        case 'SET':
            return Object.assign({}, state, {
                setStatusBtnText: action.setStatusBtn.setStatusText,
                setStatusBtnClass: action.setStatusBtn.setStatusBtnClass
            })
        case 'LOGIN':
            return Object.assign({}, state, {
                loginBtnText: action.loginBtn.loginBtnText,
                loginBtnClass: action.loginBtn.loginBtnClass
            })
        case 'REST':
            return Object.assign({}, state, {
                restBtn: action.restBtn.restBtnText
            })
        case 'OTHER':
            return Object.assign({}, state, {
                otherworkBtnText: action.otherworkBtn.otherworkBtnText
            })
        case 'STATUS':
            return Object.assign({}, state, {
                statusText: action.statusBtn.statusText,
                statusBtnClass: action.statusBtn.statusBtnClass
            })
        case 'TIME':
            return Object.assign({}, state, {
                time: action.time,
            })
        default:
            return state
    }
}

const appendRes = value => {
    return resText = value === '' ? '' : resText + value
}

export default updateText;