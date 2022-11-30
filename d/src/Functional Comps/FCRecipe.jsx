
export default function FCRecipe(props) {


    const btnAddPreperDish = () => {
        props.sendRecipeId(props.id);
    }


    if (props.type === 0) {//recipe
        return (
            <div className="card col-12 col-md-6 col-lg-3" >
                <img className="card-img-top"  src={props.img} alt="Card image" />
                <div className="card-body d-flex flex-column">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">{props.body}</p>
                    <button onClick={btnAddPreperDish} className="btn btn-outline-primary mt-auto">Preper dish !</button>
                </div>
            </div>
        );
    }
    else {//ready to eat
        return (
            <div className="card col-12 col-md-6 col-lg-3">
                <img className="card-img-top" src={props.img} alt="Card image" />
                <div className="card-body d-flex flex-column">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">{props.body}</p>
                    <button onClick={btnAddPreperDish} className="btn btn-outline-danger mt-auto">eat !</button>
                </div>
            </div>
        );
    }
}