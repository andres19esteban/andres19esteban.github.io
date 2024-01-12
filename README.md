# andres19esteban.github.io
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La vonada</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
            color: #333;
        }

        header {
            background-color: #3498db;
            color: #fff;
            text-align: center;
            padding: 1em 0;
        }

        nav {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1em 0;
        }

        nav a {
            color: #fff;
            text-decoration: none;
            padding: 0 1em;
        }

        section {
            padding: 2em;
            background-color: #fff;
            margin: 1em;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        form {
            max-width: 400px;
            margin: 0 auto;
        }

        label {
            display: block;
            margin-bottom: 0.5em;
            color: #333;
        }

        input {
            width: 100%;
            padding: 0.5em;
            margin-bottom: 1em;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        select {
            width: 100%;
            padding: 0.5em;
            margin-bottom: 1em;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        button {
            background-color: #3498db;
            color: #fff;
            padding: 0.7em 1em;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #2980b9;
        }

        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1em 0;
            position: absolute;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>

    <header>
        <h1>La Huevonada</h1>
    </header>

    <nav>
        <a href="#productos">Productos</a>
        <a href="#informacion">Información</a>
        <a href="#contacto">Contacto</a>
    </nav>

    <section id="productos">
        <h2>PRODUCTOS</h2>
        En nuestra empresa, nos enorgullece ofrecer una variedad de huevos frescos y nutritivos, provenientes de gallinas criadas con los más altos estándares de bienestar animal. <p>Nuestra selección incluye:</p>
        <h1>HUEVOS PEQUEÑOS (-62 g)</h1>


            <label for="huevos pequeños">(CANASTA) $18.000</label>
            <img src="!!.jpg">
            

 <h1>HUEVOS GRANDES (+63 g)</h1>
            
            <label for="huevos grandes">(CANASTA) $20.000</label>
            <img src="gta2.jpg">
           
            

            <title>Calculadora de Precios</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f8f8f8;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1em 0;
        }

        section {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
        }

        input,
        select,
        button {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            box-sizing: border-box;
        }

        button {
            background-color: #333;
            color: #fff;
            border: none;
            cursor: pointer;
        }

        button:hover {
            background-color: #555;
        }

        #resultado {
            font-size: 1.2em;
            font-weight: bold;
            color: #333;
        }

        footer {
            text-align: center;
            margin-top: 20px;
            padding: 10px;
            background-color: #333;
            color: #fff;
        }
    </style>
</head>
<body>

    <header>
        <h1>PEDIDO</h1>
    </header>

    <section>
        <label for="producto">Producto:</label>
        <select id="producto" onchange="calcularPrecio()">
            <option value="producto1">canasta huevo pequeño</option>
            <option value="producto2">canasta huevo grande</option>
            
        </select>

        <label for="cantidad">Cantidad:</label>
        <input type="number" id="cantidad" min="1" value="1" onchange="calcularPrecio()">

        <label for="precio-unitario">Precio Unitario:</label>
        <input type="number" id="precio-unitario" step="0.01" min="0.01" value="18000" readonly>

        <p id="resultado">Total: $18,000.00</p>

        <!-- No es necesario un botón para calcular, ya se realiza automáticamente -->
    </section>

    <script>
        function calcularPrecio() {
            var cantidadInput = document.getElementById('cantidad');
            var precioUnitarioInput = document.getElementById('precio-unitario');
            var resultadoElement = document.getElementById('resultado');

            var cantidad = parseFloat(cantidadInput.value) || 0;
            var precioUnitario = parseFloat(precioUnitarioInput.value) || 0;

            var total = cantidad * precioUnitario;
            resultadoElement.innerText = 'Total: $' + total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        // Se carga automáticamente el precio unitario cuando cambia el producto
        document.getElementById('producto').addEventListener('change', function () {
            cargarPrecioUnitario();
            calcularPrecio();
        });

        // Función para cargar el precio unitario según el producto seleccionado
        function cargarPrecioUnitario() {
            var productoSelect = document.getElementById('producto');
            var precioUnitarioInput = document.getElementById('precio-unitario');

            var precios = {
                producto1: 18000,
                producto2: 20000,
                
            };

            var precioSeleccionado = precios[productoSelect.value] || 0;
            precioUnitarioInput.value = precioSeleccionado.toFixed(2);
        }
    </script>

     <br> <button type="submit">Enviar Datos</button>


    
       


  <section id="informacion">
        <h2>INFORMACION DE LA EMPRESA</h2>
        Somos una empresa dedicada a la producción de huevos frescos y saludables, desde huevos de 40 gramos a 70 gramos, provenientes de nuestras gallinas criadas con cuidado,atención y un color que es irresistible de no comer . Nuestra granja se encuentra en un entorno natural, donde nuestras gallinas disfrutan de condiciones óptimas para su bienestar.</p>
        <p>Nuestro compromiso con la calidad se refleja en cada huevo que producimos. Utilizamos prácticas sostenibles y alimentamos a nuestras gallinas con una dieta balanceada para garantizar la excelencia nutricional de nuestros productos.</p>
        <p>En nuestra granja, nos enorgullece cuidar de nuestras gallinas y ofrecer a nuestros clientes huevos frescos y deliciosos. Valoramos la transparencia y la calidad, y estamos comprometidos con proporcionar productos que cumplan con los más altos estándares de seguridad alimentaria.</p>
        
    </section>

    <section id="contacto">
        <h2>CONTACTO</h2>
        <p>Puedes ponerte en contacto con nosotros a través de los siguientes medios:</p>
        <ul>
            <li>Email: info@empresa-de-huevos.com</li>
            <li>Teléfono:  <a href="https://wa.me/+573228062165" target="_blank">+57 322 8062165</a> </li>
            <li>Dirección: BETANIA, EL CARMEN DE VIBORAL</li>
        </ul>
    </section>
     <p>&copy; 2024 Empresa de Huevos G&A</p>

    

</body>
</html>


