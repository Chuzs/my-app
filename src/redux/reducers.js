let resText = ''
const initState = {
    waitNum: 0,
    statusBtn: { text: '未签人', className: ''},
    time: '00:00:00',
    setStatusBtn: { text: '示忙', className: 'btn-volcano' },
    restBtnText: '休息',
    otherworkBtnText: '整理',
    loginBtn: { text: '签入', className: 'btn-green' },
    restVisible: false,
    reKey: 'req',
    skillNameList: [],
    skillListVisible: false
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
                setStatusBtn: action.setStatusBtn
            })
        case 'LOGIN':
            return Object.assign({}, state, {
                loginBtn: action.loginBtn
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
                statusBtn: action.statusBtn
            })
        case 'TIME':
            return Object.assign({}, state, {
                time: action.time,
            })
        case 'RESTVISIBLE':
            return Object.assign({}, state, {
                restVisible: action.restVisible
            })
        case 'REKEY':
            return Object.assign({}, state, {
                reKey: action.reKey
            })
        case 'SKILLNAMELIST':
            return Object.assign({}, state, {
                skillNameList: action.skillNameList
            })
        case 'SKILLLISTVISIBLE':
            return Object.assign({}, state, {
                skillListVisible: action.skillListVisible
            })
        default:
            return state
    }
}

const appendRes = value => {
    return resText = value === '' ? '' : resText + value
}

export default updateText;