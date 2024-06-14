import { useContext } from "react"
import { Context } from "../../Context"
import Recipeitem from "../../Component/Recipeitem"

export default function Home() {
    const{recipes,loading}=useContext(Context)
    console.log("inside home");
    console.log(recipes && recipes.length>0);
    return(
        <div className="recipe-container">
        
       {recipes && recipes.length>0?recipes.map((item)=><Recipeitem item={item}/>):
       <h2>Please search a recipe</h2>}
        </div>
    )
}