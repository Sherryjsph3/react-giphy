//controlled component
//Random Gif is holding the event for the button click 

const RandomGif = (props) => {
    return (
        <div>
            <button onClick={props.getGiphy}>Make Api Call Again</button>
        </div>
    )
}

// we must export the Component to use it in other files
export default RandomGif;