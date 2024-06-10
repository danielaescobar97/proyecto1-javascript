// Declaración de variables y constantes
const inventario = [];

function agregarProducto() {
    const nombre = prompt("Ingrese el nombre del producto:");
    const cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));

    if (nombre && !isNaN(cantidad) && !isNaN(precio)) {
        const producto = {
            nombre,
            cantidad,
            precio
        };
        inventario.push(producto);
        console.log("Producto agregado:", producto);
    } else {
        console.log("Datos inválidos. Por favor, intente de nuevo.");
    }
}

function listarProductos() {
    if (inventario.length === 0) {
        alert("No hay productos en el inventario.");
    } else {
        alert("Productos en el inventario:");
        inventario.forEach((producto, index) => {
            alert(`${index + 1}. ${producto.nombre} - Cantidad: ${producto.cantidad}, Precio: $${producto.precio.toFixed(2)}`);
        });
    }
}

function venderProducto() {
    const nombre = prompt("Ingrese el nombre del producto a vender:");
    const producto = inventario.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

    if (producto) {
        const cantidad = parseInt(prompt(`Ingrese la cantidad a vender (disponible: ${producto.cantidad}):`));

        if (!isNaN(cantidad) && cantidad > 0 && cantidad <= producto.cantidad) {
            producto.cantidad -= cantidad;
            console.log(`Venta realizada: ${cantidad} unidades de ${producto.nombre}. Restante: ${producto.cantidad}`);
        } else {
            console.log("Cantidad inválida. Por favor, intente de nuevo.");
        }
    } else {
        console.log("Producto no encontrado.");
    }
}

function main() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Agregar producto\n2. Listar productos\n3. Vender producto\n4. Salir");
        switch(opcion) {
            case '1':
                agregarProducto();
                break;
            case '2':
                listarProductos();
                break;
            case '3':
                venderProducto();
                break;
            case '4':
                console.log("Saliendo del programa.");
                break;
            default:
                console.log("Opción inválida. Por favor, intente de nuevo.");
                break;
        }
    } while (opcion !== '4');
}

main();
