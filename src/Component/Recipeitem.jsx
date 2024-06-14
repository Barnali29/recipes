import React from "react";
import { Link } from "react-router-dom";
import Details from "../Pages/Details";
export default function Recipeitem({ item }) {

    return (
        <>
            <div className="recipe-item">
                <img src={item?.image_url} alt="recipe-img" width="100px" />
                <div className="content">
                <h3>  {item?.title}</h3>
                <span>{item?.publisher}</span>
                <Link to={`/recipe-item/${item?.id}`} element={<Details/>} className="details">
                Details
                </Link>
            </div>
            </div>

        </>
    )
}