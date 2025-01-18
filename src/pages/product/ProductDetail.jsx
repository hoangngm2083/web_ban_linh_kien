import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import formatMoney from "../../helpers/formatMoney";
import useCartServices from "../../services/cart.services";
import { default as useProductServices } from "../../services/product.services";
import QuantityForm from "./forms/QuantityForm";
const apiUrl = import.meta.env.VITE_API_URL;
const ProductDetail = () => {
  const { id } = useParams(); // Lấy id từ URL

  const [product, setProduct] = useState(null);
  const { addItem } = useCartServices();
  const { getProductFromDb } = useProductServices();
  const quantityRef = useRef(1);
  const handleAddItemToCart = async () => {
    await addItem({
      ...product,
      quantitySelected: Number(quantityRef?.current?.value),
    });
  };
  // Hàm tăng số lượng
  const handleIncrease = () => {
    if (quantityRef) {
      quantityRef.current.value = Number(quantityRef.current.value) + 1;
    }
  };

  // Hàm giảm số lượng
  const handleDecrease = () => {
    // Đảm bảo số lượng không nhỏ hơn 1

    if (quantityRef) {
      if (quantityRef.current.value > 1) {
        quantityRef.current.value = Number(quantityRef.current.value) - 1;
      }
    }
  };

  useEffect(() => {
    try {
      (async () => {
        const res = await getProductFromDb(id);
        setProduct(res);
      })();
    } catch (error) {
      console.log(error?.message);
    }
  }, [id]);

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-8">
          <div className="row mb-3">
            <div className="col-md-5 text-center">
              <img
                crossOrigin="anonymous"
                src={apiUrl + product?.image}
                className="img-fluid mb-3"
                alt=""
              />
            </div>
            <div className="col-md-7">
              <h1 className="h5 d-inline me-2 bold">{product?.productName}</h1>

              <div className="my-2">
                <span className="fw-bold h5 me-2 text-primary">
                  ${formatMoney((product?.price * (100 - product?.sale)) / 100)}
                </span>
                {product?.sale > 0 && (
                  <>
                    <del className="small text-muted me-2">
                      ${formatMoney(product?.price)}
                    </del>
                    <span className="rounded p-1 bg-warning  me-2 small text-danger">
                      - ${formatMoney(product?.sale)}
                    </span>
                  </>
                )}
              </div>
              <div>
                <p
                  className=" mb-2 small"
                  style={{
                    fontSize: "13px",
                  }}
                >
                  {product?.productInformation}
                </p>
              </div>
              <div className="mb-3">
                <QuantityForm
                  quantityRef={quantityRef}
                  initValue={1}
                  handleIncrease={handleIncrease}
                  handleDecrease={handleDecrease}
                />
                <button
                  type="button"
                  className="btn btn-sm btn-primary me-2"
                  title="Add to cart"
                  onClick={handleAddItemToCart}
                >
                  <i className="bi bi-cart-plus me-1"></i>Add to cart
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-warning me-2"
                  title="Buy now"
                >
                  <i className="bi bi-cart3 me-1"></i>Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
