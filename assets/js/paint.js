function configureListeners() {
    let images = document.querySelectorAll('img')
    images.forEach(e => {
        e.addEventListener('mouseover', addOpacity)
        e.addEventListener('mouseout', removeOpacity)
    })
}

function addOpacity(event) {
    event.target.classList.add('dim')
    getProductInfo(event.target.id);
}

function removeOpacity(event) {
    event.target.classList.remove('dim')
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    switch (paintColor) {
        case 'pn1':           
            updatePrice('Lime Green', '$14.99')
            break;           
        case 'pn2':
            updatePrice('Medium Brown', '$11.14')
            break;            
        case 'pn3':
            updatePrice('Royal Blue', '$22.99')
            break;   
        case 'pn4':
            updatePrice('Solid Red', '$13.42')
            break;   
        case 'pn5':
            updatePrice('Solid White', '$21.98')
            break;   
        case 'pn6':
            updatePrice('Solid Black', '$4.99')
            break;   
        case 'pn7':
            updatePrice('Solid Cyan', '$8.22')
            break;   
        case 'pn8':
            updatePrice('Solid Purple', '$11.99')
            break;   
        case 'pn9':
            updatePrice('Solid Yellow', '$14.99')
            break;         
    }

    function updatePrice(colorName, price) {       
        let colorPrice = document.getElementById('color-price')
        colorPrice.textContent = price
        let color = document.getElementById('color-name')
        color.textContent = colorName
    }
    
}
