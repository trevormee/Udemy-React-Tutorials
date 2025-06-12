
import ImageShow from './ImageShow';

function ImageList( { images } ) {
    
    // new variable for rendered images
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