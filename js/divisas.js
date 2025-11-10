class Convertidor {
    constructor(cantidad, origen, destino) {
        this.cantidad = cantidad;
        this.origen = origen;
        this.destino = destino;
    }

    convertir() {
        const tasas = {
            MXN: 1,
            USD: 18,
            EUR: 19.5,
            GBP: 24.27,
            JPY: 0.12
        };

        const enPesos = this.cantidad * tasas[this.origen];
        const resultado = enPesos / tasas[this.destino];

        return resultado.toFixed(2);
    }

    resumen() {
        const resultado = this.convertir();
        return `${this.cantidad} ${this.origen} = ${resultado} ${this.destino}`;
    }
}

document.getElementById('forma').addEventListener('submit', function(e) {
    e.preventDefault();

    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;

    if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById('resumen').innerText = "Por favor ingresa una cantidad válida.";
        return;
    }

    const conversor = new Convertidor(cantidad, origen, destino);

    document.getElementById('resumen').innerText = conversor.resumen();
});
