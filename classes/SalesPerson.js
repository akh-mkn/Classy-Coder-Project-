const {Employee} = require('./Employee')

class SalesPerson extends Employee{
    #totalSales
    constructor(name,position,salary){
        super(name,position,salary)
        this.clients = []
        this.#totalSales = 0
    }
getSalesNumbers(){
    return this.#totalSales
}
makeSale(amount){
    this.#totalSales += amount
}

    
}

module.exports = {
    SalesPerson,
}