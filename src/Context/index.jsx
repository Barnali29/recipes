
import { createContext, useState } from "react";

export const Context = createContext();

export default function Contextprovide({ children }) {
    const [search, setSearch] = useState('')
    const [recipes, setrecipes] = useState([])
    const [loading, setloading] = useState(false)
    const [recipeList, setrecipeList] = useState(null)
    const [favourites, setfavourites] = useState([])
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setloading(true);
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`);
            const data = await response.json();
            //console.log(data);  
            if (data?.data?.recipes) setrecipes(data.data.recipes);
            console.log(recipes);
            setloading(false)
            setSearch('')

        } catch (error) {
            console.log(error);
            setloading(false)
            setSearch('')
        }
    }
    const handlefavourite = (getCurrentItem ) => {
        console.log(getCurrentItem);
    let cpyFavoritesList = [...favourites];
    const index = cpyFavoritesList.findIndex(item=> item.id === getCurrentItem.id)

    if(index === -1) {
      cpyFavoritesList.push(getCurrentItem)
    } else {
      cpyFavoritesList.splice(index)
    }

    setfavourites(cpyFavoritesList)
  }

    
    return (
        <>
            <Context.Provider value={{ search, setSearch, handleSubmit, recipes, loading, recipeList, setrecipeList,handlefavourite,favourites }}>
                {children}
            </Context.Provider>
        </>
    )
}
