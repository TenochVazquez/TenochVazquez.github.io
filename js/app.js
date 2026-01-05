const InventoryDB = {
    key: 'cafeteria_inv',
    get() {
        const data = localStorage.getItem(this.key);
        return data ? JSON.parse(data) : [
            {id: 1, name: "Café Americano", price: 30.00, stock: 20},
            {id: 2, name: "Capuchino", price: 38.00, stock: 15},
            {id: 3, name: "Té Chai", price: 28.00, stock: 12},
            {id: 4, name: "Pan Dulce", price: 14.00, stock: 30}
        ];
    },
    save(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    }
};

function updateClock() {
    const elTime = document.getElementById('time');
    const elDate = document.getElementById('date');
    if (elTime) elTime.textContent = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
    if (elDate) elDate.textContent = new Date().toLocaleDateString();
}
if (document.getElementById('time')) {
    updateClock();
    setInterval(updateClock, 1000);
}
const SalesDB = {
    key: 'cafeteria_sales',
    get() {
        const data = localStorage.getItem(this.key);
        return data ? JSON.parse(data) : [];
    },
    save(sale) {
        const history = this.get();
        history.push({
            id: Date.now(),
            date: new Date().toLocaleString(),
            ...sale // Aquí se incluirán subtotal, iva y total
        });
        localStorage.setItem(this.key, JSON.stringify(history));
    }
};