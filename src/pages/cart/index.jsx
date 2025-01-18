import { Link } from "react-router-dom";
import useCartServices from "../../services/cart.services";
import useCheckoutServices from "../../services/checkout.services";
import Item from "./components/Item";
import TotalPriceCard from "./components/TotalPriceCard";

const Cart = () => {
  const { getCartItems } = useCartServices();
  const { getSelectedToCheckoutItems } = useCheckoutServices();
  const items = getCartItems();
  const selectedItems = getSelectedToCheckoutItems();

  return (
    <div>
      <div className="bg-secondary border-top p-4 text-white mb-3">
        <h1 className="display-6">Shopping Cart</h1>
      </div>
      <div className="container mb-3">
        <div className="row">
          <div className="col-md-9">
            <div className="card">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width={200}>
                        Quantity
                      </th>
                      <th scope="col" width={120}>
                        Price
                      </th>
                      <th scope="col" className="text-end" width={130}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <Item
                        key={index}
                        item={item}
                        setUpIsSelected={
                          !!selectedItems?.find(
                            (selectedItem) =>
                              selectedItem.productID == item.productID
                          )
                        }
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer">
                <Link to="/checkout" className="btn btn-primary float-end">
                  Make Purchase <i className="bi bi-chevron-right"></i>
                </Link>
                <Link to="/" className="btn btn-secondary">
                  <i className="bi bi-chevron-left"></i> Continue shopping
                </Link>
              </div>
            </div>
            <div className="alert alert-success mt-3">
              <p className="m-0">
                <i className="bi bi-truck"></i> Free Delivery within 1-2 weeks
              </p>
            </div>
          </div>
          <div className="col-md-3">
            {/* <TotalPriceCard items={selectedItems} total={total} /> */}
            <TotalPriceCard />
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h2 className="text-center mb-4">Payment and Refund Policy</h2>
        <div className="accordion" id="policyAccordion">
          {/* Payment Policy Section */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingPayment">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePayment"
                aria-expanded="true"
                aria-controls="collapsePayment"
              >
                Payment Policy
              </button>
            </h2>
            <div
              id="collapsePayment"
              className="accordion-collapse collapse show"
              aria-labelledby="headingPayment"
              data-bs-parent="#policyAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <strong>Accepted Payment Methods:</strong> VNPay
                  </li>
                  <li>
                    <strong>Payment Terms:</strong> Payments must be completed
                    before delivery unless specified otherwise.
                  </li>
                  <li>
                    <strong>Currency:</strong> Transactions are processed in
                    [Specify Currency].
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Refund Policy Section */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingRefund">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseRefund"
                aria-expanded="false"
                aria-controls="collapseRefund"
              >
                Refund Policy
              </button>
            </h2>
            <div
              id="collapseRefund"
              className="accordion-collapse collapse"
              aria-labelledby="headingRefund"
              data-bs-parent="#policyAccordion"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <strong>Eligibility:</strong> Refunds for defective products
                    or services not rendered as agreed.
                  </li>
                  <li>
                    <strong>Non-Refundable:</strong> Clearance items, accessed
                    digital products, fully rendered services.
                  </li>
                  <li>
                    <strong>Process:</strong> Contact us within 7 days. Refunds
                    are processed within 7-10 business days.
                  </li>
                  <li>
                    <strong>Mode:</strong> Refunds are issued to the original
                    payment method.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Contact Section */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingContact">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseContact"
                aria-expanded="false"
                aria-controls="collapseContact"
              >
                Contact Us
              </button>
            </h2>
            <div
              id="collapseContact"
              className="accordion-collapse collapse"
              aria-labelledby="headingContact"
              data-bs-parent="#policyAccordion"
            >
              <div className="accordion-body">
                <p>
                  <strong>Email:</strong> hoangminhng208@egmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +0889795780
                </p>
                <p>
                  <strong>Address:</strong> 41D Chu Van An, Hiep Phu, Thu Duc,
                  tp HCM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
