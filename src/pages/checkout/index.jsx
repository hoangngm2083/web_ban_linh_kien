import useCheckoutServices from "../../services/checkout.services";
import MiniInvoice from "./components/MiniInvoice";
import ShippingForm from "./components/ShippingForm";

const Checkout = () => {
  const { getSelectedToCheckoutItems, getTotal } = useCheckoutServices();

  const items = getSelectedToCheckoutItems();

  const total = getTotal();
  const totalPrice = total?.totalPrice;
  const quantity = total?.quantity;

  return (
    <div>
      <div className="bg-secondary border-top p-4 text-white mb-3">
        <h1 className="display-6">Checkout</h1>
      </div>
      <div className="container mb-3">
        <div className="row">
          <div className="col-md-8">
            <ShippingForm items={items} totalPrice={totalPrice} />
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <i className="bi bi-cart3"></i> Order
                <span className="badge bg-secondary float-end">{quantity}</span>
              </div>
              <MiniInvoice items={items} totalPrice={totalPrice} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
