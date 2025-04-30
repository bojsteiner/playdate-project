import "./LocationCard.css"

const LocationCard = ({location}) => {

    return (
        <div className="card mb-3 card-content">
            <div className="row g-0">
                <div className="col-md-3">
                <img src={location.imageUrl} className="img-fluid rounded-start" alt=".../" />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{location.name}</h5>
                    <p className="card-text">{`Address: ${location.address}`}</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default LocationCard
