import { useState } from "react";
import { useCustomHook } from "./ContextProvider";
import Favfood from "./Favfood";
import Header from "./Header";

function Menu(){
    const [state] = useCustomHook();
    const [local,setLocal] = useState(JSON.parse(localStorage.getItem("local")) || []);
    const [search,setSearch] = useState("");
    function addToFav(id){
        const selectedFood = state.data.filter((cur)=> cur.id === id)[0];
        const findPresentIDinLocal = local.filter((cur)=> cur.id === id)[0];
            if(selectedFood.id === findPresentIDinLocal?.id){
                return alert("recipe is already added in favourite list");
            }else{
                setLocal([...local,selectedFood]);
            }
        }
        localStorage.setItem("local",JSON.stringify(local));
    return(
        <div className="container my-4">
            <Header search={search} setSearch={setSearch} />
            <Favfood local={local} setLocal={setLocal} />
            <div className="row d-flex justify-content-center g-2">
                {
                    state.data.filter((cur)=>{
                        return search.toLowerCase() === "" ? cur : cur.name.toLowerCase().includes(search)
                    }).map((cur)=>{
                        return(
                            <div className="col-8 col-sm-8 col-md-6 col-lg-4 col-xl-3" key={cur.id}>
                            <div className="card border border-2">
                                <div style={{height:"140px"}}>
                                <img src={cur.image} alt={cur.name} className="card-img-top" style={{height:"100%"}}/>
                                </div>
                                <p className="mt-3 mb-1 px-3 fs-6"><b>Food Name :</b> {cur.name}</p>
                                <p className="px-3 mb-1 fs-6"><b>Price : </b>{cur.price}</p>
                                <div className="px-3 mb-3 fs-6">
                                    <b>Ingredients</b>
                                    <ul className="mt-1 mb-0" style={{height:"80px",overflowY:"auto"}}>
                                        {
                                            cur.ingredients.map((cur,idx)=>{
                                                return(
                                                        <li key={idx}>{cur}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div className="mt-2 fs-6"><span><b>Vegetarian:</b>{cur.vegetarian}</span> <span className="d-inline-block mx-3"><b>Spicy:</b>{cur.spicy}</span></div>
                                    <button className="btn btn-sm btn-outline-dark shadow-none mt-3" onClick={()=>addToFav(cur.id)}>Add to Favourite</button>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                {/* {
                  state.data.map((cur)=>{
                    return(
                        <div className="col-8 col-sm-8 col-md-6 col-lg-4 col-xl-3" key={cur.id}>
                        <div className="card border border-2">
                            <div style={{height:"140px"}}>
                            <img src={cur.image} alt={cur.name} className="card-img-top" style={{height:"100%"}}/>
                            </div>
                            <p className="mt-3 mb-1 px-3 fs-6"><b>Food Name :</b> {cur.name}</p>
                            <p className="px-3 mb-1 fs-6"><b>Price : </b>{cur.price}</p>
                            <div className="px-3 mb-3 fs-6">
                                <b>Ingredients</b>
                                <ul className="mt-1 mb-0" style={{height:"80px",overflowY:"auto"}}>
                                    {
                                        cur.ingredients.map((cur,idx)=>{
                                            return(
                                                    <li key={idx}>{cur}</li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="mt-2 fs-6"><span><b>Vegetarian:</b>{cur.vegetarian}</span> <span className="d-inline-block mx-3"><b>Spicy:</b>{cur.spicy}</span></div>
                                <button className="btn btn-sm btn-outline-dark shadow-none mt-3" onClick={()=>addToFav(cur.id)}>Add to Favourite</button>
                            </div>
                        </div>
                    </div>
                    )
                  })  
                } */}
            </div>
        </div>
    )
};

export default Menu;