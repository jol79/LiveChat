
export const fetchMessages = (state=[], action) => {
    switch(action.type){
        case 'FETCH_MESSAGES':
            const fetchedMessages = fetch("https://edikdolynskyi.github.io/react_sources/messages.json")
                .then(response => response.json())
                .then(data => data);
            return fetchedMessages;
        default:
            return state;
    }
}