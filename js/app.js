// Gestión de Inventario Local con tus productos originales
export const InventoryDB = {
    key: 'cafeteria_inv',
    get() {
        const data = localStorage.getItem(this.key);
        return data ? JSON.parse(data) : [
            {id: 1, name: "Bebida Caliente - Café Americano", price: 45.00, stock: 20},
            {id: 2, name: "Bebida Caliente - Capuchino", price: 55.00, stock: 15},
            {id: 3, name: "Frappé - Nutella", price: 60.00, stock: 12},
            {id: 4, name: "Postres - Pay de Queso", price: 50.00, stock: 30}
        ];
    },
    save(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    },
    updateStock(id, newStock) {
        const inv = this.get();
        const index = inv.findIndex(p => p.id == id);
        if (index !== -1) {
            inv[index].stock = newStock;
            this.save(inv);
        }
    }
};

// Reloj en tiempo real
function updateClock() {
    const elTime = document.getElementById('time');
    const elDate = document.getElementById('dateText');
    if (elTime) elTime.textContent = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
    if (elDate) elDate.textContent = new Date().toLocaleDateString();
}
setInterval(updateClock, 1000);

// Gestión de Ventas Local
export const SalesDB = {
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
            ...sale 
        });
        localStorage.setItem(this.key, JSON.stringify(history));
    }
};