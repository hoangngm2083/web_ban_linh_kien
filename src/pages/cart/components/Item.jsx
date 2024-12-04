import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import formatMoney from "../../../helpers/formatMoney";
import useCartServices from "../../../services/cart.services";
import QuantityForm from "../../product/forms/QuantityForm";

const Item = ({ item, setUpIsSelected }) => {
  const [isSelected, setIsSelected] = useState(setUpIsSelected);
  const { addSelectedItem, removeSelectedItem } = useCartServices();
  const quantityRef = useRef(1);
  const { increase, decrease, removeItem } = useCartServices();
  const handleIncrease = () => {
    increase({
      index: item?.index,
      quantity: quantityRef.current.value,
    });
  };

  const handleDecrease = () => {
    decrease({
      index: item?.index,
      quantity: quantityRef.current.value,
    });
  };

  const handleRemoveItem = () => {
    removeItem(item);
  };
  const handleSelectedCheckout = () => {
    if (!isSelected) {
      addSelectedItem(item);
      setIsSelected((pre) => !pre);
      return;
    }

    removeSelectedItem(item);
    setIsSelected((pre) => !pre);
  };
  return (
    <tr>
      <td>
        <div className="row">
          <div className="col-3 d-none d-md-block">
            <img src={item?.img} width="80" alt="..." />
          </div>
          <div className="col">
            <Link to={"/products/" + item?.id} className="text-decoration-none">
              {item?.name}
            </Link>
            <p className="small text-muted">{item?.type}</p>
          </div>
        </div>
      </td>
      <td>
        <QuantityForm
          quantityRef={quantityRef}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          initValue={item?.quantity}
        />
      </td>
      <td>
        <var className="price">{formatMoney(item?.price * item.quantity)}</var>
        <small className="d-block text-muted">{formatMoney(item?.price)}</small>
      </td>
      <td className="text-end">
        <button
          onClick={handleSelectedCheckout}
          className="btn btn-sm btn-outline-secondary me-2"
        >
          {isSelected ? (
            <i className="bi bi-credit-card-fill"></i>
          ) : (
            <i className="bi bi-credit-card"></i>
          )}
        </button>

        <button
          onClick={handleRemoveItem}
          className="btn btn-sm btn-outline-danger"
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
};
export default React.memo(Item);
