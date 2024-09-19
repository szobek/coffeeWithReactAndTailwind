import { useNavigate } from "react-router-dom";
import { Coffee } from "../../models/CoffeeModel";

type coffesType={
    coffees:Coffee[]
}

const CoffeeList = ({coffees}:coffesType) => {
   
    let coffeeHtml=null
    const navigate = useNavigate();
    
    

    function handleSelectCoffeeMethod(id: number|undefined): void {
        navigate(`/coffee/${id}`);
    }

    if (coffees.length > 0) {
        coffeeHtml=<div className='flex h-96 items-center'>
            <ul className='flex gap-2 flex-wrap'>
                {coffees.map((coffee:Coffee) => <li key={coffee.id}>
                    <button
                        className='text-grey-500 bg-indigo-100 rounded-xl py-2 px-2 mb-3'
                        onClick={() => handleSelectCoffeeMethod(coffee.id)}>
                        {coffee.title}
                    </button>
                </li>
                )}
            </ul>
            <hr />
        </div>
    }

    return (
        <>{coffeeHtml}</>
    )
}

export default CoffeeList