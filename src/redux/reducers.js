let resText = ''
const updateText = (state = {}, action) => {
    switch (action.type) {
        case 'REQ':
            return Object.assign({}, state, {
                reqText: action.reqText
            })
        case 'RES':
            return Object.assign({}, state, {
                resText: appendRes(action.resText)
            })
        default:
            return state
    }
}

const appendRes = (value) => {
    return  resText = value === '' ? '' : resText + value
}



export default updateText;