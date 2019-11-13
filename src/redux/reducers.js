const onChange = (state = {}, action) => {
    switch (action.type) {
        case 'REQ':
            return action.reqText
        case 'RES':
            return action.resText
        default: 
            return state
    }
}

export default onChange;