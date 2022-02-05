
const chatStateStructure = {
    messages: [],
    editModal: false,
    preloader: true,
    chatName: false,
    participantsNumber: 0,
}

export const fetchMessages = (state=chatStateStructure, action) => {
    switch(action.type){
        case 'FETCH_MESSAGES': {
            const updatedState = {
                messages: [],
                editModal: false,
                preloader: false,
                chatName: false,
                participantsNumber: 0,
            }

            fetch("http://127.0.0.1:8000/")
                .then(response => response.json())
                .then(data => {
                    for (let key in data){
                        updatedState.messages.push(
                            Set(data[key])
                        )
                    }
                }
            );
            
            console.log("Fetched messages: ", updatedState);
        }   
        default:
            return state;
    }
}