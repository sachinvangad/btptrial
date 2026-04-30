const cds = require('@sap/cds');
module.exports = cds.service.impl(async function(srv) {
    srv.on('printhelloworld', req => {
        console.log(req.data.input)
        return '$(req.data.input) World'
    })
    
    srv.on('addition', req => {
        let result = req.data.num1 + req.data.num2;
        return result
    })

    srv.on('myfunction', req => {
        let result = {}
        if(req.data.category ==1) {
            result.product = 'TATA',
            result.price = '1200000',
            result.location = 'Mumbai'
        } else {
            result.product = 'Suzuki',
            result.stock = 120,
            result.pricearray = {
                    "Price": 6000000,
                    "Discount": "20 %"
            }
        }
        console.log(result);
        return result;
    })

})