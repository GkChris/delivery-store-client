import axios from 'axios';

function getOrders(){
    
    return new Promise((resolve, reject) => {

        axios.get('http://localhost:9000/orders/getActiveOrders')
        .then(res => resolve(res?.data))
        .catch(err => resolve(false))

    })
}

export {getOrders}