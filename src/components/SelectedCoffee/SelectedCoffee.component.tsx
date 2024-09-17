import { COFFEES } from "../../data";
import { useParams } from "react-router-dom";
import './SelectedCoffee.scss'
import { useNavigate } from "react-router-dom";
import Ingredients from "../Ingredients/Ingredients";

const SelectedCoffee = () => {
    let { id } = useParams();
    const navigate = useNavigate();

    const coffee = COFFEES.filter(item => item.id === Number(id))[0]
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

/*
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
*/