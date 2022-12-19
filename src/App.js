import { useEffect, useState } from 'react';
import './App.css';
import { getOrders } from './services/api/getOrders';

function App() {
  
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders()
    .then(res => setOrders(res))
    .catch(err => console.log('err',err))
  },[])
  
  return (
    <div className="App">
      <div className='container'>
        <h1>Active Orders</h1>
        <table>
          <thead>
            <th># Order</th>
            <th>Items</th>
            <th>Total Price</th>
            <th>Currency</th>
          </thead>
          <tbody>
            {orders?.map((order, i) => {
              return <tr>
                <td>{i}</td>
                <td>{order.items.map((item) => {
                  return <p>Item: {item?.name} | Quantity: {item?.quantity} - Price: {item?.price}</p>
                })}</td>
                <td>{order?.totalPrice}</td>
                <td>{order?.currency}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
