import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import formatMoney from "../../../helpers/formatMoney";
import useCartServices from "../../../services/cart.services";
import useCheckoutServices from "../../../services/checkout.services";
import QuantityForm from "../../product/forms/QuantityForm";

const Item = ({ item, setUpIsSelected }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [isSelected, setIsSelected] = useState(setUpIsSelected);

  const { addSelectedToCheckoutItems, removeSelectedToCheckoutItem } =
    useCheckoutServices();

  const quantityRef = useRef();
  const { increase, decrease, removeItem } = useCartServices();
  const handleIncrease = () => {
    if (Number(quantityRef.current?.value) >= item.quantity) {
      alert("Maximum of product quantity");
      return;
    }

    const quantityselected = Number(quantityRef.current?.value) + 1;

    increase({
      isSelected: isSelected,
      index: item?.index,
      quantitySelected: quantityselected,
      ...item,
    });

    if (isSelected) {
      removeSelectedToCheckoutItem({
        ...item,
        quantitySelected: quantityselected,
      });

      addSelectedToCheckoutItems({
        ...item,
        quantitySelected: quantityselected,
      });
    }
  };

  const handleDecrease = () => {
    const quantityselected = Number(quantityRef.current?.value) - 1;

    decrease({
      isSelected: isSelected,
      index: item?.index,
      quantitySelected: quantityselected,
      ...item,
    });

    if (isSelected) {
      removeSelectedToCheckoutItem({
        ...item,
        quantitySelected: quantityselected,
      });

      addSelectedToCheckoutItems({
        ...item,
        quantitySelected: quantityselected,
      });
    }
  };

  const handleRemoveItem = () => {
    removeItem(item);
  };
  const handleSelectedCheckout = () => {
    if (!isSelected) {
      addSelectedToCheckoutItems(item);
      setIsSelected((pre) => !pre);
      return;
    }

    removeSelectedToCheckoutItem(item);
    setIsSelected((pre) => !pre);
  };
  return (
    <tr>
      <td>
        <div className="row">
          <div className="col-3 d-none d-md-block">
            <img
              crossOrigin="anonymous"
              src={apiUrl + item?.image}
              width="80"
              alt="..."
            />
          </div>
          <div className="col">
            <Link
              to={"/products/" + item?.productID}
              className="text-decoration-none"
            >
              {item?.productName}
            </Link>
            <p className="small text-muted">
              {item?.productCatalog?.productCatalogName}
            </p>
          </div>
        </div>
      </td>
      <td>
        <QuantityForm
          quantityRef={quantityRef}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          initValue={item?.quantitySelected}
          maxValue={item.quantity}
        />

        <p>sl: {item?.quantity}</p>
      </td>
      <td>
        <var className="price">
          {formatMoney(
            item?.sale > 0
              ? ((item?.price * (100 - item?.sale)) / 100) *
                  item.quantitySelected
              : item?.price * item.quantitySelected
          )}
        </var>
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
export default Item;
