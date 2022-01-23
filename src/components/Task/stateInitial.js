export const initialState = (passedData) => {
    return (
        {
            id: passedData ? passedData.id : '',
            label: passedData ? passedData.label : '',
            description: passedData ? passedData.description : '',
            time: passedData ? passedData.time: '',
            duration: passedData ? passedData.duration: '',
            priority: passedData ? passedData.priority: ''
        }
    )
};

export function reducer(_, newState) {
    const data = Object.assign({}, _);
    Object.keys(newState).map((key) => {
        data[key] = newState[key]
    })
    return data;
}
