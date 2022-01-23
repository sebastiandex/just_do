export const priorityColorChange = (priority) => {
    let color;
        switch (priority)
        {
        case "Urgently":
            color = '#F24A3C';
            break;
        case "Important":
            color = '#F7C920';
            break;
        case "Neutral":
            color = '#BBBBC7';
            break;
        case "Normal":
            color = 'blue';
            break;
        default:
            color = 'green';
        }
        return (
            <div style={{
                width: '12px',
                height: '12px',
                background: `${color} 0% 0% no-repeat padding-box`,
                borderRadius: '8px',
                marginTop: '5px',
                marginRight: '10px'
            }}
            />
        )
}
