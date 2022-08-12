import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import { useState } from 'react'
// const plantList = ['monstera','ficus lyrata','pothos argenté','yucca','palmier']

function ShoppingList({cart, updateCart} ) {

    const [activeCategory, setActiveCat] = useState('')
    const categories = plantList.reduce(
        function(acc, plant){
            if(!acc.includes(plant.category))
            {
                acc.push(plant.category)
            }
            return acc
            //acc.includes(plant.category) ? acc : acc.concat(plant.category)
        }
        , []
    )

    function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

    return (
		<div className='lmj-shopping-list'>
			
			<Categories 
                categories={categories}
                setActiveCat={setActiveCat}  
                activeCategory={activeCategory} 
            />                
            {/* {categories.map((cat) => (
				<li key={cat}>{cat}</li>
			))} */}
			
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <PlantItem
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                price={price}
                            />
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>
                    ):null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList