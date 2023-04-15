function Header({search,setSearch}){
    return(
        <div className="container p-0">
            <div className="row">
                <div className="col-5">
                         <input type="text" placeholder="Search Your Favourite Food" className="form-control shadow-none" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                </div>
            </div>
        </div>
    )
};

export default Header;