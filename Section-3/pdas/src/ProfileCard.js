
function ProfileCard({title, handle, image, description}) {
    //const {title, handle} = props;

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
        /*
            img src={image} alt="pda logo" height={200}/>
            <div>Title is: {title} </div>
            <div>Handle is: {handle} </div>
        */
    );
}

export default ProfileCard;