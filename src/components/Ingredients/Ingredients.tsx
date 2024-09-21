const Ingredients = ({ ingredients }: any) => {
    if (!ingredients) ingredients = []
    return (
        <fieldset className="text-xl max-w-sm border-4 border-grey-500 rounded-lg p-2 m-auto">
            <legend className="px-2 text-xl font-semibold underline  decoration-2">Ingredients</legend>
            <div className="flex flex-col gap-2 px-2 text-md font-serif">
                {ingredients.map((ingredient: any, index: number) => {
                    return (
                        <>
                            <a key={index}>{ingredient} </a>
                            {(index===ingredients.length-1)?"":<hr />}
                        </>
                    )
                })}


            </div>

        </fieldset>
    )
}

export default Ingredients