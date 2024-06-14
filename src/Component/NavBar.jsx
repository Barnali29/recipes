import { NavLink } from "react-router-dom";
import Home from "../Pages/Home";
import Favourites from "../Pages/Favourites";
import { useContext } from "react";
import { Context } from "../Context";

export default function NavBar({props}) {
    const{search,setSearch,handleSubmit}=useContext(Context)
    const{theme,settheme}=props;
    const handletheme=(e)=>{
e.preventDefault();
settheme(theme==='light'?'dark':'light');
console.log(theme);
    }
    return (
        <nav>
            <div style={{ display: "flex", flexDirection: "row", }}>   <h2 style={{ marginTop: "15px", paddingRight: "9px" }}>Food Recipes</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="input" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                </form>
                <div className="navlink">
                    <NavLink to='/' element={<Home />} className="nav">Home</NavLink>
                    <NavLink to='/favourites' element={<Favourites />} className="nav">Favourites</NavLink>
                    <button className="btn" onClick={handletheme} >change theme</button>
                </div>
            </div>
        </nav>
    )
}