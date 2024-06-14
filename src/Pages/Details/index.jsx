import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Context } from "../../Context"

export default function Details() {
    const {id}=useParams()
    const{recipeList,setrecipeList,handlefavourite,favourites}=useContext(Context)
    async function fetchRecipe() {
        try {
            const response=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
            const Data=await response.json()
           // console.log(Data);
            setrecipeList(Data?.data?.recipe)
        } catch (error) {
            console.log(error);
        }
    }
useEffect(()=>{fetchRecipe()},[])

    return(
       
        <div className="container">
        {recipeList?
        <img src={recipeList?.image_url} width="150px" alt="recipe-img"/>
        :null}
        <div className="inside-container">
<div>
    <h3>{recipeList?.title}</h3>
    <span>{recipeList?.publisher}</span>
</div>

<div>
<span >
            Ingredients:
          </span>
          <ul >
            {recipeList?.ingredients.map((ingredient) => (
              <li>
                <span >
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span >
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
          </div>
          <button onClick={()=>{handlefavourite(recipeList)}}>
            {favourites && favourites.length>0  &&
            favourites.findIndex((item)=>item.id===recipeList?.id)!==-1?"remove from favourites"
            :"Add to favourites "

            }
          </button>
          </div>
        </div>
    )
}