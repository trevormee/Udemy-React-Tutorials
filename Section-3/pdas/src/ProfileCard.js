/*
    ProfileCard component to structure our cards
*/

//                   Pass in our various props
function ProfileCard({title, handle, image, description}) {
    // For each card, display the card image and card content (title,
    // handle, and description)
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pda logo"/>
                </figure>
            </div>

            <div className="card-content">
                 <div className="media-left">
                    <p className="title is-4">{title} </p>
                    <p className="subtitle is-6">{handle} </p>
                </div>
                <div className="content">{description}</div>
            </div>

        </div>
    );
}

export default ProfileCard;