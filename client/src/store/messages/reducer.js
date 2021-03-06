
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
                participants: 0,
            }

            fetch("http://127.0.0.1:8000/")
                .then(response => response.json())
                .then(data => {
                    updatedState.chatName = data.chat_name;
                    updatedState.messages = [...data.messages];
                    updatedState.participants = data.participants;
                }
            );
            
            console.log("Fetched messages: ", updatedState);
            return updatedState;
        }   
        default:
            return state;
    }
}