import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import CartContext from '../../context/CartContext'
import Payments from '../Payments'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.quantity * each.price
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>

            <div className="popup-bg-container">
              <Popup
                modal
                trigger={
                  <button className="checkout-button" type="button">
                    Checkout
                  </button>
                }
                position="top left"
              >
                {close => (
                  <>
                    <Payments />
                    <button
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      Close
                    </button>
                  </>
                )}
              </Popup>
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
