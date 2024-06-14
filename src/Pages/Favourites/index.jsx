import { useContext } from "react"
import { Context } from "../../Context"
import Recipeitem from "../../Component/Recipeitem"
export default function Favourites() {
       const{favourites}=useContext(Context)
       /*console.log("favourites");
       if(favourites && favourites.length>0)favourites.map((item)=>console.log(item));*/
       return(
           <div className="recipe-container">
          {favourites && favourites.length>0?favourites.map((item)=><Recipeitem item={item}/>):
          <h2>No favourites item</h2>}
           </div>
       )
   }
