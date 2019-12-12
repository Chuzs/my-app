let resText = ''
const updateText = (state = { waitNum: 0, statusText: '未签人', time: '00:00:00' }, action) => {
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

const appendRes = (value) => {
    return resText = value === '' ? '' : resText + value
}

export default updateText;