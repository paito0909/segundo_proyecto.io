//Crear un nuevo producto
document.getElementById("formulario").addEventListener("submit",crear);

//Función crear
function crear(e){
    nombre = document.getElementById("product_name").value
    precio = document.getElementById("product_price").value
    descripcion = document.getElementById("product_detail").value

    let producto = {
        nombre,
        precio,
        descripcion
    }

    if localStorage.getItem("Productos") === Null){
        let productos =[]
        productos.push(producto)
        localStorage.setItem("Productos",JSON.stringify(productos))
    }else{
        let productos = localStorage.getItem(JSON.parase("Productos"))
        productos.push(producto)
        localStorage.getItem("Productos",JSON.stringify(productos))
    }
    document.getElementById("form").reset();
    console.log("Producto crado correctamente")
    e.preventDefault();
}