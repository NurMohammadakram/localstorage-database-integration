const addToCart = (id) =>  {
    let shoppingCart = {};
    
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }


    const quantity = shoppingCart[id];
    if(quantity) {
        shoppingCart[id] = quantity + 1;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));


    /* const quantity = localStorage.getItem(id);
    if (quantity) {
        localStorage.setItem(id, JSON.parse(quantity) + 1)
    }
    else {
        localStorage.setItem(id, 1);
    }
    */
};

export {addToCart}