let totalVendido = 0;
let totalFiados = 0;
let totalAbonado = 0;

const ventaForm = document.getElementById('ventaForm');
const fiadoForm = document.getElementById('fiadoForm');
const abonoForm = document.getElementById('abonoForm');
const listaVentas = document.getElementById('listaVentas');
const listaFiados = document.getElementById('listaFiados');
const listaAbonos = document.getElementById('listaAbonos');
const totalVendidoElement = document.getElementById('totalVendido');
const totalVendidoInput = document.getElementById('totalVendidoInput');
const totalFiadosElement = document.getElementById('totalFiados');
const totalAbonadoElement = document.getElementById('totalAbonado');

let ventas = [];
let fiados = [];
let abonos = [];

ventaForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const producto = document.getElementById('productoVenta').value;
    const monto = parseFloat(document.getElementById('montoVenta').value);
    const fechaVenta = document.getElementById('fechaVenta').value;

    const venta = { producto, monto, fechaVenta };
    ventas.push(venta);

    const li = document.createElement('li');
    li.textContent = `Vendiste ${producto} por $${monto.toFixed(2)} el ${fechaVenta}`;
    listaVentas.appendChild(li);

    // Actualizar el total de ventas
    totalVendido += monto;
    totalVendidoElement.textContent = totalVendido.toFixed(2);
    totalVendidoInput.value = totalVendido.toFixed(2); // Actualizar el campo de texto con el total

    ventaForm.reset();
});

fiadoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombreCliente = document.getElementById('nombreCliente').value;
    const montoFiado = parseFloat(document.getElementById('montoFiado').value);
    const fechaFiado = document.getElementById('fechaFiado').value;

    // Crear el registro de fiado
    const fiado = { nombreCliente, montoFiado, fechaFiado, pagado: false, fechaPago: '' };
    fiados.push(fiado);

    const li = document.createElement('li');
    li.textContent = `${nombreCliente} fiado por $${montoFiado.toFixed(2)} el ${fechaFiado}`;

    // Crear el botón de "Cancelar Deuda"
    const cancelarButton = document.createElement('button');
    cancelarButton.textContent = "Cancelar Deuda";
    
    // Crear el campo de fecha de pago (inicialmente oculto)
    const fechaPagoInput = document.createElement('input');
    fechaPagoInput.type = "date";
    fechaPagoInput.style.display = "none";

    cancelarButton.addEventListener('click', function() {
        // Mostrar el campo de fecha de pago
        fechaPagoInput.style.display = "inline-block";

        // Agregar un evento para cuando se seleccione una fecha
        fechaPagoInput.addEventListener('change', function() {
            // Obtener la fecha seleccionada y marcar el fiado como pagado
            const fechaPago = fechaPagoInput.value;
            fiado.pagado = true;
            fiado.fechaPago = fechaPago;

            // Actualizar la visualización
            li.textContent = `${nombreCliente} ha cancelado la deuda de $${montoFiado.toFixed(2)} el ${fechaPago}.`;

            // Actualizar el total de fiados
            totalFiados -= montoFiado;
            totalFiadosElement.textContent = totalFiados.toFixed(2);

            // Deshabilitar el botón de "Cancelar Deuda"
            cancelarButton.disabled = true;

            // Ocultar el campo de fecha de pago después de seleccionar la fecha
            fechaPagoInput.style.display = "none";
            
            alert(`La deuda de ${nombreCliente} ha sido cancelada el ${fechaPago}.`);
        });
    });

    li.appendChild(cancelarButton);
    li.appendChild(fechaPagoInput);
    listaFiados.appendChild(li);

    totalFiados += montoFiado;
    totalFiadosElement.textContent = totalFiados.toFixed(2);

    fiadoForm.reset();
});

abonoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const clienteAbono = document.getElementById('clienteAbono').value;
    const montoAbono = parseFloat(document.getElementById('montoAbono').value);
    const fechaAbono = document.getElementById('fechaAbono').value;
    const restantePorPagar = parseFloat(document.getElementById('restantePorPagar').value);

    // Crear el registro de abono
    const abono = { clienteAbono, montoAbono, fechaAbono, restantePorPagar, pagado: false, fechaPago: '' };
    abonos.push(abono);

    const li = document.createElement('li');
    li.textContent = `${clienteAbono} abonó $${montoAbono.toFixed(2)} el ${fechaAbono}. Restante por pagar: $${restantePorPagar.toFixed(2)}`;

    // Crear el botón de "Marcar como Pago Completo"
    const pagarButton = document.createElement('button');
    pagarButton.textContent = "Marcar como Pago Completo";
    
    // Crear el campo de fecha de pago (inicialmente oculto)
    const fechaPagoInput = document.createElement('input');
    fechaPagoInput.type = "date";
    fechaPagoInput.style.display = "none";
    
    pagarButton.addEventListener('click', function() {
        // Mostrar el campo de fecha de pago
        fechaPagoInput.style.display = "inline-block";

        // Agregar un evento para cuando se seleccione una fecha
        fechaPagoInput.addEventListener('change', function() {
            // Obtener la fecha seleccionada y marcar el pago como completo
            const fechaPago = fechaPagoInput.value;
            abono.pagado = true;
            abono.restantePorPagar = 0;

            // Actualizar la visualización
            li.textContent = `${clienteAbono} ha pagado todo. Pago completado el ${fechaPago}.`;

            // Actualizar el total abonado
            totalAbonado += montoAbono;
            totalAbonadoElement.textContent = totalAbonado.toFixed(2);

            // Deshabilitar el botón de "Marcar como Pago Completo"
            pagarButton.disabled = true;

            // Ocultar el campo de fecha de pago después de seleccionar la fecha
            fechaPagoInput.style.display = "none";
            
            alert(`El pago completo de ${clienteAbono} ha sido registrado con fecha ${fechaPago}.`);
        });
    });

    li.appendChild(pagarButton);
    li.appendChild(fechaPagoInput);
    listaAbonos.appendChild(li);

    totalAbonado += montoAbono;
    totalAbonadoElement.textContent = totalAbonado.toFixed(2);

    abonoForm.reset();
});
