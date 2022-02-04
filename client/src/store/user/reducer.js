export const isLogged = (state=false, action) => {
    switch(action.type){
        case 'SIGN_IN': 
            return true;
        case 'SIGN_OUT':
            return false;
        default:
            return state;
    }
}

export const isAdmin = (state=false, action) => {
    switch(action.type){
        case 'SET_ADMIN': 
            return true;
        case 'UNSET_ADMIN':
            return false;
        default:
            return state;
    }
}

export const isOwner = (state=false, action) => {
    switch(action.type){
        case 'SET_OWNER':
            return true;
        case 'UNSET_ONWER':
            return false;
        default:
            return state;
    }
}
