let boton = document.getElementById("agregarCarrito");

boton.addEventListener("click",function(){
    let imagen = document.getElementById("imagenProducto").src;
    let precio = document.getElementById("precioProducto").innerHTML;
    let cantidad = document.getElementById("cantidadProducto").value;
    let productoNuevo = {
        imagen: imagen,
        precio: precio,
        cantidad: cantidad
    }
    let productos = JSON.parse(localStorage.getItem("carrito"));
    if(productos == undefined || productos == null){
        productos =[];   
    }
    productos.push(productoNuevo);
    localStorage.setItem("carrito", JSON.stringify(productos))
    alert("El producto se ha agregado al carrito")
    
})