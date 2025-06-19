import ImageShow from './ImageShow';

// ImageList component that takes in the array/list of images as a param that
// were fetched after a user makes submits a request in the search bar.
// Returns and displays the rendered images to the browser
function ImageList( { images } ) {
    
    // new variable for rendered images that maps over the images
    // array/list, and displays the images by passing them to the
    // ImageShow component
    const renderedImages = images.map((image, index) => {
        return <ImageShow image={image} key={index} />
    })
    
    return (
        <div>
            {renderedImages}
        </div>
    );
}

export default ImageList;