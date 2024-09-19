import { useParams } from "react-router-dom";
import './SelectedCoffee.scss'
import { useNavigate } from "react-router-dom";
import Ingredients from "../Ingredients/Ingredients";
import { Coffee } from "../../models/CoffeeModel";

const SelectedCoffee = ({coffees}:any) => {
    let { id } = useParams();
    const navigate = useNavigate();

    const coffee = coffees.filter((item:Coffee) => item.id === Number(id))[0]
    const handleBackButtonClick = () => {
        navigate("/")
    }
    return (<>
        <button onClick={handleBackButtonClick} className="mb-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Back</button>
        <figure className="mx-auto relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
                <img className="rounded-lg" src={coffee.image} alt="image description" />
            </a>
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <p className="text-black bg-slate-50">{coffee.title}</p>
                <p>{coffee.description}</p>
            </figcaption>
        </figure>
        <div>
            <p className="underline">Ingredients</p>
            <Ingredients ingredients={coffee.ingredients} />
        </div>
    </>
    );
};

export default SelectedCoffee;
