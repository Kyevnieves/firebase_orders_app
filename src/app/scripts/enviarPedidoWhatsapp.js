btn_enviar_pedido.addEventListener('click', ()=>{
	if (productsInCart.length === 1) {
		let total = document.getElementById('cart-total-value').innerHTML;
		let nombreP1 = productsInCart['filter', 0].name;
		let nombre2P1 = productsInCart['filter', 0].name2;
		let precioP1 = productsInCart['filter', 0].price;
		let cantidadP1 = productsInCart['filter', 0].cantidad;
		window.open(`https://wa.me/584128517398?text=Pedido%20Online%3A%0A%2AProducto%3A%2A%20${nombreP1}%0A%2APrecio%3A%2A%20${precioP1}%0A%2ACantidad%3A%2A%20${cantidadP1}%0A%0A%2ATotal%20de%20pedido%3A%2A%20${total}$%0A`)
		nombreP1 = 0;
		precioP1 = 0;
		cantidadP1 = 0;
		productsInCart = [];
		updateShoppingCartHTML();
	}
	if (productsInCart.length === 2) {
		let total = document.getElementById('cart-total-value').innerHTML;
		let nombreP1 = productsInCart['filter', 0].name;
		let nombre2P1 = productsInCart['filter', 0].name2;
		let precioP1 = productsInCart['filter', 0].price;
		let cantidadP1 = productsInCart['filter', 0].cantidad;	
		let nombreP2 = productsInCart['filter', 1].name;
		let nombre2P2 = productsInCart['filter', 1].name2;
		let precioP2 = productsInCart['filter', 1].price;
		let cantidadP2 = productsInCart['filter', 1].cantidad;
		window.open(`https://wa.me/584128517398?text=Pedido%20Online%3A%0A%2AProducto%3A%2A%20${nombreP1}%0A%2APrecio%3A%2A%20${precioP1}%0A%2ACantidad%3A%2A%20${cantidadP1}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP2}%0A%2APrecio%3A%2A%20${precioP2}%0A%2ACantidad%3A%2A%20${cantidadP2}%0A%0A%2ATotal%20de%20pedido%3A%2A%20${total}$%0A`)
		nombreP1 = 0;
		precioP1 = 0;
		cantidadP1 = 0;
		nombreP2 = 0;
		precioP2 = 0;
		cantidadP2 = 0;
		productsInCart = [];
		updateShoppingCartHTML();
	}
	if (productsInCart.length === 3) {
		let total = document.getElementById('cart-total-value').innerHTML;
		let nombreP1 = productsInCart['filter', 0].name;
		let nombre2P1 = productsInCart['filter', 0].name2;
		let precioP1 = productsInCart['filter', 0].price;
		let cantidadP1 = productsInCart['filter', 0].cantidad;
		let nombreP2 = productsInCart['filter', 1].name;
		let nombre2P2 = productsInCart['filter', 1].name2;
		let precioP2 = productsInCart['filter', 1].price;
		let cantidadP2 = productsInCart['filter', 1].cantidad;
		let nombreP3 = productsInCart['filter', 2].name;
		let nombre2P3 = productsInCart['filter', 2].name2;
		let precioP3 = productsInCart['filter', 2].price;
		let cantidadP3 = productsInCart['filter', 2].cantidad;
		window.open(`https://wa.me/584128517398?text=Pedido%20Online%3A%0A%2AProducto%3A%2A%20${nombreP1}%0A%2APrecio%3A%2A%20${precioP1}%0A%2ACantidad%3A%2A%20${cantidadP1}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP2}%0A%2APrecio%3A%2A%20${precioP2}%0A%2ACantidad%3A%2A%20${cantidadP2}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP3}%0A%2APrecio%3A%2A%20${precioP3}%0A%2ACantidad%3A%2A%20${cantidadP3}%0A%0A%2ATotal%20de%20pedido%3A%2A%20${total}$%0A`)
		nombreP1 = 0;
		precioP1 = 0;
		cantidadP1 = 0;
		nombreP2 = 0;
		precioP2 = 0;
		cantidadP2 = 0;
		nombreP3 = 0;
		precioP3 = 0;
		cantidadP3 = 0;
		productsInCart = [];
		updateShoppingCartHTML();
	}
	if (productsInCart.length === 4) {
		let total = document.getElementById('cart-total-value').innerHTML;
		let nombreP1 = productsInCart['filter', 0].name;
		let nombre2P1 = productsInCart['filter', 0].name2;
		let precioP1 = productsInCart['filter', 0].price;
		let cantidadP1 = productsInCart['filter', 0].cantidad;
		let nombreP2 = productsInCart['filter', 1].name;
		let nombre2P2 = productsInCart['filter', 1].name2;
		let precioP2 = productsInCart['filter', 1].price;
		let cantidadP2 = productsInCart['filter', 1].cantidad;
		let nombreP3 = productsInCart['filter', 2].name;
		let nombre2P3 = productsInCart['filter', 2].name2;
		let precioP3 = productsInCart['filter', 2].price;
		let cantidadP3 = productsInCart['filter', 2].cantidad;
		let nombreP4 = productsInCart['filter', 3].name;
		let nombre2P4 = productsInCart['filter', 3].name2;
		let precioP4 = productsInCart['filter', 3].price;
		let cantidadP4 = productsInCart['filter', 3].cantidad;
		window.open(`https://wa.me/584128517398?text=Pedido%20Online%3A%0A%2AProducto%3A%2A%20${nombreP1}%0A%2APrecio%3A%2A%20${precioP1}%0A%2ACantidad%3A%2A%20${cantidadP1}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP2}%0A%2APrecio%3A%2A%20${precioP2}%0A%2ACantidad%3A%2A%20${cantidadP2}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP3}%0A%2APrecio%3A%2A%20${precioP3}%0A%2ACantidad%3A%2A%20${cantidadP3}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP4}%0A%2APrecio%3A%2A%20${precioP4}%0A%2ACantidad%3A%2A%20${cantidadP4}%0A%0A%2ATotal%20de%20pedido%3A%2A%20${total}$%0A`)
		nombreP1 = 0;
		precioP1 = 0;
		cantidadP1 = 0;
		nombreP2 = 0;
		precioP2 = 0;
		cantidadP2 = 0;
		nombreP3 = 0;
		precioP3 = 0;
		cantidadP3 = 0;
		nombreP4 = 0;
		precioP4 = 0;
		cantidadP4 = 0;
		productsInCart = [];
		updateShoppingCartHTML();
	}
	if (productsInCart.length === 5) {
		let total = document.getElementById('cart-total-value').innerHTML;
		let nombreP1 = productsInCart['filter', 0].name;
		let nombre2P1 = productsInCart['filter', 0].name2;
		let precioP1 = productsInCart['filter', 0].price;
		let cantidadP1 = productsInCart['filter', 0].cantidad;
		let nombreP2 = productsInCart['filter', 1].name;
		let nombre2P2 = productsInCart['filter', 1].name2;
		let precioP2 = productsInCart['filter', 1].price;
		let cantidadP2 = productsInCart['filter', 1].cantidad;
		let nombreP3 = productsInCart['filter', 2].name;
		let nombre2P3 = productsInCart['filter', 2].name2;
		let precioP3 = productsInCart['filter', 2].price;
		let cantidadP3 = productsInCart['filter', 2].cantidad;
		let nombreP4 = productsInCart['filter', 3].name;
		let nombre2P4 = productsInCart['filter', 3].name2;
		let precioP4 = productsInCart['filter', 3].price;
		let cantidadP4 = productsInCart['filter', 3].cantidad;
		let nombreP5 = productsInCart['filter', 4].name;
		let nombre2P5 = productsInCart['filter', 4].name2;
		let precioP5 = productsInCart['filter', 4].price;
		let cantidadP5 = productsInCart['filter', 4].cantidad;
		window.open(`https://wa.me/584128517398?text=Pedido%20Online%3A%0A%2AProducto%3A%2A%20${nombreP1}%0A%2APrecio%3A%2A%20${precioP1}%0A%2ACantidad%3A%2A%20${cantidadP1}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP2}%0A%2APrecio%3A%2A%20${precioP2}%0A%2ACantidad%3A%2A%20${cantidadP2}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP3}%0A%2APrecio%3A%2A%20${precioP3}%0A%2ACantidad%3A%2A%20${cantidadP3}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP4}%0A%2APrecio%3A%2A%20${precioP4}%0A%2ACantidad%3A%2A%20${cantidadP4}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP5}%0A%2APrecio%3A%2A%20${precioP5}%0A%2ACantidad%3A%2A%20${cantidadP5}%0A%0A%2ATotal%20de%20pedido%3A%2A%20${total}$%0A`)
		nombreP1 = 0;
		precioP1 = 0;
		cantidadP1 = 0;
		nombreP2 = 0;
		precioP2 = 0;
		cantidadP2 = 0;
		nombreP3 = 0;
		precioP3 = 0;
		cantidadP3 = 0;
		nombreP4 = 0;
		precioP4 = 0;
		cantidadP4 = 0;
		nombreP5 = 0;
		precioP5 = 0;
		cantidadP5 = 0;
		productsInCart = [];
		updateShoppingCartHTML();
	}
	if (productsInCart.length === 6) {
		let total = document.getElementById('cart-total-value').innerHTML;
		let nombreP1 = productsInCart['filter', 0].name;
		let nombre2P1 = productsInCart['filter', 0].name2;
		let precioP1 = productsInCart['filter', 0].price;
		let cantidadP1 = productsInCart['filter', 0].cantidad;
		let nombreP2 = productsInCart['filter', 1].name;
		let nombre2P2 = productsInCart['filter', 1].name2;
		let precioP2 = productsInCart['filter', 1].price;
		let cantidadP2 = productsInCart['filter', 1].cantidad;
		let nombreP3 = productsInCart['filter', 2].name;
		let nombre2P3 = productsInCart['filter', 2].name2;
		let precioP3 = productsInCart['filter', 2].price;
		let cantidadP3 = productsInCart['filter', 2].cantidad;
		let nombreP4 = productsInCart['filter', 3].name;
		let nombre2P4 = productsInCart['filter', 3].name2;
		let precioP4 = productsInCart['filter', 3].price;
		let cantidadP4 = productsInCart['filter', 3].cantidad;
		let nombreP5 = productsInCart['filter', 4].name;
		let nombre2P5 = productsInCart['filter', 4].name2;
		let precioP5 = productsInCart['filter', 4].price;
		let cantidadP5 = productsInCart['filter', 4].cantidad;
		let nombreP6 = productsInCart['filter', 5].name;
		let nombre2P6 = productsInCart['filter', 5].name2;
		let precioP6 = productsInCart['filter', 5].price;
		let cantidadP6 = productsInCart['filter', 5].cantidad;
		window.open(`https://wa.me/584128517398?text=Pedido%20Online%3A%0A%2AProducto%3A%2A%20${nombreP1}%0A%2APrecio%3A%2A%20${precioP1}%0A%2ACantidad%3A%2A%20${cantidadP1}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP2}%0A%2APrecio%3A%2A%20${precioP2}%0A%2ACantidad%3A%2A%20${cantidadP2}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP3}%0A%2APrecio%3A%2A%20${precioP3}%0A%2ACantidad%3A%2A%20${cantidadP3}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP4}%0A%2APrecio%3A%2A%20${precioP4}%0A%2ACantidad%3A%2A%20${cantidadP4}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP5}%0A%2APrecio%3A%2A%20${precioP5}%0A%2ACantidad%3A%2A%20${cantidadP5}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP6}%0A%2APrecio%3A%2A%20${precioP6}%0A%2ACantidad%3A%2A%20${cantidadP6}%0A%0A%2ATotal%20de%20pedido%3A%2A%20${total}$%0A`)
		nombreP1 = 0;
		precioP1 = 0;
		cantidadP1 = 0;
		nombreP2 = 0;
		precioP2 = 0;
		cantidadP2 = 0;
		nombreP3 = 0;
		precioP3 = 0;
		cantidadP3 = 0;
		nombreP4 = 0;
		precioP4 = 0;
		cantidadP4 = 0;
		nombreP5 = 0;
		precioP5 = 0;
		cantidadP5 = 0;
		nombreP6 = 0;
		precioP6 = 0;
		cantidadP6 = 0;
		productsInCart = [];
		updateShoppingCartHTML();
	}
	if (productsInCart.length === 7) {
		let total = document.getElementById('cart-total-value').innerHTML;
		let nombreP1 = productsInCart['filter', 0].name;
		let nombre2P1 = productsInCart['filter', 0].name2;
		let precioP1 = productsInCart['filter', 0].price;
		let cantidadP1 = productsInCart['filter', 0].cantidad;
		let nombreP2 = productsInCart['filter', 1].name;
		let nombre2P2 = productsInCart['filter', 1].name2;
		let precioP2 = productsInCart['filter', 1].price;
		let cantidadP2 = productsInCart['filter', 1].cantidad;
		let nombreP3 = productsInCart['filter', 2].name;
		let nombre2P3 = productsInCart['filter', 2].name2;
		let precioP3 = productsInCart['filter', 2].price;
		let cantidadP3 = productsInCart['filter', 2].cantidad;
		let nombreP4 = productsInCart['filter', 3].name;
		let nombre2P4 = productsInCart['filter', 3].name2;
		let precioP4 = productsInCart['filter', 3].price;
		let cantidadP4 = productsInCart['filter', 3].cantidad;
		let nombreP5 = productsInCart['filter', 4].name;
		let nombre2P5 = productsInCart['filter', 4].name2;
		let precioP5 = productsInCart['filter', 4].price;
		let cantidadP5 = productsInCart['filter', 4].cantidad;
		let nombreP6 = productsInCart['filter', 5].name;
		let nombre2P6 = productsInCart['filter', 5].name2;
		let precioP6 = productsInCart['filter', 5].price;
		let cantidadP6 = productsInCart['filter', 5].cantidad;
		let nombreP7 = productsInCart['filter', 6].name;
		let nombre2P7 = productsInCart['filter', 6].name2;
		let precioP7 = productsInCart['filter', 6].price;
		let cantidadP7 = productsInCart['filter', 6].cantidad;
		window.open(`https://wa.me/584128517398?text=Pedido%20Online%3A%0A%2AProducto%3A%2A%20${nombreP1}%0A%2APrecio%3A%2A%20${precioP1}%0A%2ACantidad%3A%2A%20${cantidadP1}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP2}%0A%2APrecio%3A%2A%20${precioP2}%0A%2ACantidad%3A%2A%20${cantidadP2}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP3}%0A%2APrecio%3A%2A%20${precioP3}%0A%2ACantidad%3A%2A%20${cantidadP3}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP4}%0A%2APrecio%3A%2A%20${precioP4}%0A%2ACantidad%3A%2A%20${cantidadP4}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP5}%0A%2APrecio%3A%2A%20${precioP5}%0A%2ACantidad%3A%2A%20${cantidadP5}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP6}%0A%2APrecio%3A%2A%20${precioP6}%0A%2ACantidad%3A%2A%20${cantidadP6}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP7}%0A%2APrecio%3A%2A%20${precioP7}%0A%2ACantidad%3A%2A%20${cantidadP7}%0A%0A%2ATotal%20de%20pedido%3A%2A%20${total}$%0A`)
		nombreP1 = 0;
		precioP1 = 0;
		cantidadP1 = 0;
		nombreP2 = 0;
		precioP2 = 0;
		cantidadP2 = 0;
		nombreP3 = 0;
		precioP3 = 0;
		cantidadP3 = 0;
		nombreP4 = 0;
		precioP4 = 0;
		cantidadP4 = 0;
		nombreP5 = 0;
		precioP5 = 0;
		cantidadP5 = 0;
		nombreP6 = 0;
		precioP6 = 0;
		cantidadP6 = 0;
		nombreP7 = 0;
		precioP7 = 0;
		cantidadP7 = 0;
		productsInCart = [];
		updateShoppingCartHTML();
	}
	if (productsInCart.length === 8) {
		let total = document.getElementById('cart-total-value').innerHTML;
		let nombreP1 = productsInCart['filter', 0].name;
		let nombre2P1 = productsInCart['filter', 0].name2;
		let precioP1 = productsInCart['filter', 0].price;
		let cantidadP1 = productsInCart['filter', 0].cantidad;
		let nombreP2 = productsInCart['filter', 1].name;
		let nombre2P2 = productsInCart['filter', 1].name2;
		let precioP2 = productsInCart['filter', 1].price;
		let cantidadP2 = productsInCart['filter', 1].cantidad;
		let nombreP3 = productsInCart['filter', 2].name;
		let nombre2P3 = productsInCart['filter', 2].name2;
		let precioP3 = productsInCart['filter', 2].price;
		let cantidadP3 = productsInCart['filter', 2].cantidad;
		let nombreP4 = productsInCart['filter', 3].name;
		let nombre2P4 = productsInCart['filter', 3].name2;
		let precioP4 = productsInCart['filter', 3].price;
		let cantidadP4 = productsInCart['filter', 3].cantidad;
		let nombreP5 = productsInCart['filter', 4].name;
		let nombre2P5 = productsInCart['filter', 4].name2;
		let precioP5 = productsInCart['filter', 4].price;
		let cantidadP5 = productsInCart['filter', 4].cantidad;
		let nombreP6 = productsInCart['filter', 5].name;
		let precioP6 = productsInCart['filter', 5].price;
		let nombre2P6 = productsInCart['filter', 5].name2;
		let cantidadP6 = productsInCart['filter', 5].cantidad;
		let nombreP7 = productsInCart['filter', 6].name;
		let nombre2P7 = productsInCart['filter', 6].name2;
		let precioP7 = productsInCart['filter', 6].price;
		let cantidadP7 = productsInCart['filter', 6].cantidad;
		let nombreP8 = productsInCart['filter', 7].name;
		let nombre2P8 = productsInCart['filter', 7].name2;
		let precioP8 = productsInCart['filter', 7].price;
		let cantidadP8 = productsInCart['filter', 7].cantidad;
		window.open(`https://wa.me/584128517398?text=Pedido%20Online%3A%0A%2AProducto%3A%2A%20${nombreP1}%0A%2APrecio%3A%2A%20${precioP1}%0A%2ACantidad%3A%2A%20${cantidadP1}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP2}%0A%2APrecio%3A%2A%20${precioP2}%0A%2ACantidad%3A%2A%20${cantidadP2}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP3}%0A%2APrecio%3A%2A%20${precioP3}%0A%2ACantidad%3A%2A%20${cantidadP3}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP4}%0A%2APrecio%3A%2A%20${precioP4}%0A%2ACantidad%3A%2A%20${cantidadP4}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP5}%0A%2APrecio%3A%2A%20${precioP5}%0A%2ACantidad%3A%2A%20${cantidadP5}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP6}%0A%2APrecio%3A%2A%20${precioP6}%0A%2ACantidad%3A%2A%20${cantidadP6}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP7}%0A%2APrecio%3A%2A%20${precioP7}%0A%2ACantidad%3A%2A%20${cantidadP7}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP8}%0A%2APrecio%3A%2A%20${precioP8}%0A%2ACantidad%3A%2A%20${cantidadP8}%0A%0A%2ATotal%20de%20pedido%3A%2A%20${total}$%0A`)
		nombreP1 = 0;
		precioP1 = 0;
		cantidadP1 = 0;
		nombreP2 = 0;
		precioP2 = 0;
		cantidadP2 = 0;
		nombreP3 = 0;
		precioP3 = 0;
		cantidadP3 = 0;
		nombreP4 = 0;
		precioP4 = 0;
		cantidadP4 = 0;
		nombreP5 = 0;
		precioP5 = 0;
		cantidadP5 = 0;
		nombreP6 = 0;
		precioP6 = 0;
		cantidadP6 = 0;
		nombreP7 = 0;
		precioP7 = 0;
		cantidadP7 = 0;
		nombreP8 = 0;
		precioP8 = 0;
		cantidadP8 = 0;
		productsInCart = [];
		updateShoppingCartHTML();
	}
	if (productsInCart.length === 9) {
		let total = document.getElementById('cart-total-value').innerHTML;
		let nombreP1 = productsInCart['filter', 0].name;
		let nombre2P1 = productsInCart['filter', 0].name2;
		let precioP1 = productsInCart['filter', 0].price;
		let cantidadP1 = productsInCart['filter', 0].cantidad;
		let nombreP2 = productsInCart['filter', 1].name;
		let nombre2P2 = productsInCart['filter', 1].name2;
		let precioP2 = productsInCart['filter', 1].price;
		let cantidadP2 = productsInCart['filter', 1].cantidad;
		let nombreP3 = productsInCart['filter', 2].name;
		let nombre2P3 = productsInCart['filter', 2].name2;
		let precioP3 = productsInCart['filter', 2].price;
		let cantidadP3 = productsInCart['filter', 2].cantidad;
		let nombreP4 = productsInCart['filter', 3].name;
		let nombre2P4 = productsInCart['filter', 3].name2;
		let precioP4 = productsInCart['filter', 3].price;
		let cantidadP4 = productsInCart['filter', 3].cantidad;
		let nombreP5 = productsInCart['filter', 4].name;
		let nombre2P5 = productsInCart['filter', 4].name2;
		let precioP5 = productsInCart['filter', 4].price;
		let cantidadP5 = productsInCart['filter', 4].cantidad;
		let nombreP6 = productsInCart['filter', 5].name;
		let nombre2P6 = productsInCart['filter', 5].name2;
		let precioP6 = productsInCart['filter', 5].price;
		let cantidadP6 = productsInCart['filter', 5].cantidad;
		let nombreP7 = productsInCart['filter', 6].name;
		let nombre2P7 = productsInCart['filter', 6].name2;
		let precioP7 = productsInCart['filter', 6].price;
		let cantidadP7 = productsInCart['filter', 6].cantidad;
		let nombreP8 = productsInCart['filter', 7].name;
		let nombre2P8 = productsInCart['filter', 7].name2;
		let precioP8 = productsInCart['filter', 7].price;
		let cantidadP8 = productsInCart['filter', 7].cantidad;
		let nombreP9 = productsInCart['filter', 8].name;
		let nombre2P9 = productsInCart['filter', 8].name2;
		let precioP9 = productsInCart['filter', 8].price;
		let cantidadP9 = productsInCart['filter', 8].cantidad;
		window.open(`https://wa.me/584128517398?text=Pedido%20Online%3A%0A%2AProducto%3A%2A%20${nombreP1}%0A%2APrecio%3A%2A%20${precioP1}%0A%2ACantidad%3A%2A%20${cantidadP1}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP2}%0A%2APrecio%3A%2A%20${precioP2}%0A%2ACantidad%3A%2A%20${cantidadP2}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP3}%0A%2APrecio%3A%2A%20${precioP3}%0A%2ACantidad%3A%2A%20${cantidadP3}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP4}%0A%2APrecio%3A%2A%20${precioP4}%0A%2ACantidad%3A%2A%20${cantidadP4}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP5}%0A%2APrecio%3A%2A%20${precioP5}%0A%2ACantidad%3A%2A%20${cantidadP5}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP6}%0A%2APrecio%3A%2A%20${precioP6}%0A%2ACantidad%3A%2A%20${cantidadP6}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP7}%0A%2APrecio%3A%2A%20${precioP7}%0A%2ACantidad%3A%2A%20${cantidadP7}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP8}%0A%2APrecio%3A%2A%20${precioP8}%0A%2ACantidad%3A%2A%20${cantidadP8}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP9}%0A%2APrecio%3A%2A%20${precioP9}%0A%2ACantidad%3A%2A%20${cantidadP9}%0A%0A%2ATotal%20de%20pedido%3A%2A%20${total}$%0A`)
		nombreP1 = 0;
		precioP1 = 0;
		cantidadP1 = 0;
		nombreP2 = 0;
		precioP2 = 0;
		cantidadP2 = 0;
		nombreP3 = 0;
		precioP3 = 0;
		cantidadP3 = 0;
		nombreP4 = 0;
		precioP4 = 0;
		cantidadP4 = 0;
		nombreP5 = 0;
		precioP5 = 0;
		cantidadP5 = 0;
		nombreP6 = 0;
		precioP6 = 0;
		cantidadP6 = 0;
		nombreP7 = 0;
		precioP7 = 0;
		cantidadP7 = 0;
		nombreP8 = 0;
		precioP8 = 0;
		cantidadP8 = 0;
		nombreP9 = 0;
		precioP9 = 0;
		cantidadP9 = 0;
		productsInCart = [];
		updateShoppingCartHTML();
	}
	if (productsInCart.length === 10) {
		let total = document.getElementById('cart-total-value').innerHTML;
		let nombreP1 = productsInCart['filter', 0].name;
		let nombre2P1 = productsInCart['filter', 0].name2;
		let precioP1 = productsInCart['filter', 0].price;
		let cantidadP1 = productsInCart['filter', 0].cantidad;
		let nombreP2 = productsInCart['filter', 1].name;
		let nombre2P2 = productsInCart['filter', 1].name2;
		let precioP2 = productsInCart['filter', 1].price;
		let cantidadP2 = productsInCart['filter', 1].cantidad;
		let nombreP3 = productsInCart['filter', 2].name;
		let nombre2P3 = productsInCart['filter', 2].name2;
		let precioP3 = productsInCart['filter', 2].price;
		let cantidadP3 = productsInCart['filter', 2].cantidad;
		let nombreP4 = productsInCart['filter', 3].name;
		let nombre2P4 = productsInCart['filter', 3].name2;
		let precioP4 = productsInCart['filter', 3].price;
		let cantidadP4 = productsInCart['filter', 3].cantidad;
		let nombreP5 = productsInCart['filter', 4].name;
		let nombre2P5 = productsInCart['filter', 4].name2;
		let precioP5 = productsInCart['filter', 4].price;
		let cantidadP5 = productsInCart['filter', 4].cantidad;
		let nombreP6 = productsInCart['filter', 5].name;
		let nombre2P6 = productsInCart['filter', 5].name2;
		let precioP6 = productsInCart['filter', 5].price;
		let cantidadP6 = productsInCart['filter', 5].cantidad;
		let nombreP7 = productsInCart['filter', 6].name;
		let nombre2P7 = productsInCart['filter', 6].name2;
		let precioP7 = productsInCart['filter', 6].price;
		let cantidadP7 = productsInCart['filter', 6].cantidad;
		let nombreP8 = productsInCart['filter', 7].name;
		let nombre2P8 = productsInCart['filter', 7].name2;
		let precioP8 = productsInCart['filter', 7].price;
		let cantidadP8 = productsInCart['filter', 7].cantidad;
		let nombreP9 = productsInCart['filter', 8].name;
		let nombre2P9 = productsInCart['filter', 8].name2;
		let precioP9 = productsInCart['filter', 8].price;
		let cantidadP9 = productsInCart['filter', 8].cantidad;
		let nombreP10 = productsInCart['filter', 9].name;
		let nombre2P10 = productsInCart['filter', 9].name2;
		let precioP10= productsInCart['filter', 9].price;
		let cantidadP10 = productsInCart['filter', 9].cantidad;
		window.open(`https://wa.me/584128517398?text=Pedido%20Online%3A%0A%2AProducto%3A%2A%20${nombreP1}%0A%2APrecio%3A%2A%20${precioP1}%0A%2ACantidad%3A%2A%20${cantidadP1}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP2}%0A%2APrecio%3A%2A%20${precioP2}%0A%2ACantidad%3A%2A%20${cantidadP2}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP3}%0A%2APrecio%3A%2A%20${precioP3}%0A%2ACantidad%3A%2A%20${cantidadP3}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP4}%0A%2APrecio%3A%2A%20${precioP4}%0A%2ACantidad%3A%2A%20${cantidadP4}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP5}%0A%2APrecio%3A%2A%20${precioP5}%0A%2ACantidad%3A%2A%20${cantidadP5}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP6}%0A%2APrecio%3A%2A%20${precioP6}%0A%2ACantidad%3A%2A%20${cantidadP6}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP7}%0A%2APrecio%3A%2A%20${precioP7}%0A%2ACantidad%3A%2A%20${cantidadP7}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP8}%0A%2APrecio%3A%2A%20${precioP8}%0A%2ACantidad%3A%2A%20${cantidadP8}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP9}%0A%2APrecio%3A%2A%20${precioP9}%0A%2ACantidad%3A%2A%20${cantidadP9}%0A----------------------%0A%2AProducto%3A%2A%20${nombreP10}%0A%2APrecio%3A%2A%20${precioP10}%0A%2ACantidad%3A%2A%20${cantidadP10}%0A`)
		nombreP1 = 0;
		precioP1 = 0;
		cantidadP1 = 0;
		nombreP2 = 0;
		precioP2 = 0;
		cantidadP2 = 0;
		nombreP3 = 0;
		precioP3 = 0;
		cantidadP3 = 0;
		nombreP4 = 0;
		precioP4 = 0;
		cantidadP4 = 0;
		nombreP5 = 0;
		precioP5 = 0;
		cantidadP5 = 0;
		nombreP6 = 0;
		precioP6 = 0;
		cantidadP6 = 0;
		nombreP7 = 0;
		precioP7 = 0;
		cantidadP7 = 0;
		nombreP8 = 0;
		precioP8 = 0;
		cantidadP8 = 0;
		nombreP9 = 0;
		precioP9 = 0;
		cantidadP9 = 0;
		nombreP10 = 0;
		precioP10 = 0;
		cantidadP10 = 0;
		productsInCart = [];
		updateShoppingCartHTML();
	}
})