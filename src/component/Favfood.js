
function Favfood({ local, setLocal }) {
    function removeFromLocal(id) {
        const getFood = local.filter((cur) => cur.id !== id);
        setLocal(getFood);
    }
    return (
        <div className="container mt-4 mb-4">
            {
                local.length > 0 &&
                (<div className="row bg-dark text-white justify-content-md-center">
                    <p className="fs-4 mt-1 px-4 fw-bold">My Favourite Foods 🍟</p>
                    {
                        local.map((cur) => {
                            return (
                                <div className="mt-2 mb-1 mx-2 d-flex align-items-center flex-column h-auto position-relative" style={{ width: "120px" }} key={cur.id}>
                                    <div style={{ width: "70px", height: "50px" }}>
                                        <img className="w-100 h-100" style={{ borderRadius: "50%" }} src={cur.image} alt={cur.name} />
                                    </div>
                                    <p className="text-center fw-bold mb-5" style={{ fontSize: "14px" }}>{cur.name}</p>
                                    <button className="btn btn-sm btn-outline-danger shadow-none position-absolute bottom-0 mb-1" onClick={() => removeFromLocal(cur.id)}>Remove</button>
                                </div>
                            )
                        })
                    }
                </div>)
            }
        </div>
    )
};

export default Favfood;