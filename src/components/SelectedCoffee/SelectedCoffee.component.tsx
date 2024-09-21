import { useParams } from "react-router-dom";
import './SelectedCoffee.scss'
import { useNavigate } from "react-router-dom";
import Ingredients from "../Ingredients/Ingredients";
import { Coffee } from "../../models/CoffeeModel";

const SelectedCoffee = ({ coffees }: any) => {
    let { id } = useParams();
    const navigate = useNavigate();
    let Selected = (<></>)

    const coffee = coffees.filter((item: Coffee) => item.id === Number(id))[0]
    const handleBackButtonClick = () => {
        navigate("/")
    }

    if (coffees.length>0) {
        Selected = (<>
            <button onClick={handleBackButtonClick} className="mb-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Back</button>
            <figure className="mx-auto relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <a>
                    <img className="rounded-lg" src={coffee.image} alt="image description" />
                </a>
                <figcaption className="absolute px-4 text-lg text-white bottom-6">
                    <p className="font-poppins text-gray-600 bg-slate-50">{coffee.title}</p>
                    <p className="font-roboto">{coffee.description}</p>
                </figcaption>
            </figure>
            <div>
                <Ingredients ingredients={coffee.ingredients} />
            </div>
        </>
        )
    }
    return (
        <>{Selected}</>
    );
};

export default SelectedCoffee;
