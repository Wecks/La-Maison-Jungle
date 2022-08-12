function handleClick(scaleValue, careType) {
    
    let alertPlant = (quantity) => {
        careType === 'light' ? 
            alert(`Cette plante requiert ${quantity} de lumière`) :
            alert(`Cette plante requiert ${quantity} d'arrosage`)
    }
    
    switch(scaleValue){
        case 1 :
            alertPlant('peu')
            break
        case 2 :
            alertPlant('modérement')
            break
        case 3 :
            alertPlant('beaucoup')
            break
        default:
            alert('Problème de selection')
    }
}

function CareScale({ scaleValue, careType}){
    const range = [1,2,3]
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return(
        <div onClick={() => handleClick(scaleValue,careType)}>
            {range.map((rangeElem) => 
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>{scaleType}</span>
                ) : null
            
            )}
        </div>

    )
}

export default CareScale