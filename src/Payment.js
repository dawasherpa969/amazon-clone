import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();


  return (
      <div className='payment'>
                    
          <div className='payment__container'>
              <h1>
                  Checkout (<Link to='/checkout'> {basket?.lenght} items </Link>)
              </h1>

              {/* Payment Section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title' >
                        <h3>Delivery address</h3>

                    </div>
                    <div className='payment__address' >
                        <p> {user?.email} </p>
                        <p> 123 React lane </p>
                        <p> Los Angeles, CA </p>

                    </div>

                </div>

                {/* Payment Section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title' >
                        <h3>Review item and delivery</h3>

                    </div>
                  <div className='payment__items'>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                  </div>

                </div>
                {/* Payment Section - Payment method */}
                <div className='payment__section'>
                    <div className='payment__title' >
                            <h3>Payment Method</h3>

                  </div>
                  <div className='payment__details'>
                      {/* stripe magic will go */}

                  </div>
                </div>

          </div>
      </div>
  )
}

export default Payment;