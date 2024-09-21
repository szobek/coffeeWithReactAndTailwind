const Ingredients = ({ ingredients }: any) => {
    if (!ingredients) ingredients = []
    return (
        <fieldset className="text-xl max-w-sm border-4 border-green-500 rounded-lg p-2 m-auto">
            <legend className="px-2 text-xl font-semibold underline decoration-green-500/60 decoration-2">Ingredients</legend>
            <div className="flex flex-col gap-2 px-2 text-md font-serif">
                {ingredients.map((ingredient: any, index: number) => {
                    return (
                        <>
                            <a key={index}>{ingredient} {ingredients.length}{index}</a>
                            {(index===ingredients.length-1)?"":<hr />}
                        </>
                    )
                })}


            </div>

        </fieldset>
    )
}

export default Ingredients