import { COFFEES } from '../../data';
import { useNavigate } from "react-router-dom";

const CoffeeList = () => {
    const navigate = useNavigate();

    function handleSelectCoffeeMethod(id: number): void {
        navigate(`/coffee/${id}`);
    }

    return (
        <div className='flex h-96 items-center'>
            <ul className='flex gap-2'>
                {COFFEES.map((coffee) => <li key={coffee.id}>
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
    )
}

export default CoffeeList