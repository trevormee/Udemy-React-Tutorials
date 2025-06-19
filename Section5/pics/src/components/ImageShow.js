
// ImageShow component that returns & displays an image fetched from the unsplash api
function ImageShow({image}) {
    return (
        <div>
            <img src={image.urls.small} alt={image.alt_description} />
        </div>
    );
}

export default ImageShow;