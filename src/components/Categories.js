import '../styles/Categories.css'

function Categories({activeCategory,categories, setActiveCat}) {
        
    return(
        <div className='lmj-categories'>
            <select 
                value={activeCategory} 
                onChange={(e) => setActiveCat(e.target.value)} 
                className='lmj-categories-select'
            >
                <option value=''>---</option>
                {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
            </select>
            <button onClick={() => setActiveCat('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories