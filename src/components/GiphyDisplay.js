const GiphyDisplay = ({gif}) => {
    const loaded = () => { 
        return (
        <>
          <h1> Giphy</h1>
          <img className="gify" src={gif.data.images.preview_gif.url} alt="gif"/>
          <h2>{gif.data.user.display_name}</h2>
        </>
    )

}

const loading = () => {
    return (
    <h1>No Giphy to Display</h1>
    )
}

return  gif ? loaded() : loading();
};

export default GiphyDisplay;