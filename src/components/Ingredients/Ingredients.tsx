const Ingredients = ({ingredients}:any)=>{
    if(!ingredients) ingredients=[]
    return(
        <ul>
            {ingredients.map((ingredient:any,index:number)=>{
                return(<li key={index}>{ingredient}</li>)
            })}
        </ul>
    )
}

export default Ingredients