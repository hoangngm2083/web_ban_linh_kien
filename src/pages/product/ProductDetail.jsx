import { useState } from "react";
import { useParams } from "react-router-dom";
import EditorCustom from "../../components/EditorCustom";
import PopUp from "../../components/PopUp";

const product = {
  id: 1,
  sku: "FAS-01",
  link: "/product/detail",
  name: "Great product name goes here",
  img: "https://bizweb.dktcdn.net/thumb/medium/100/190/540/products/camera-raspberry-pi-ov5647-5mp-160-do-jpeg.jpg?v=1664942814063",
  price: 180,
  originPrice: 200,
  discountPrice: 20,
  discountPercentage: 10,
  isNew: true,
  isHot: false,
  star: 4,
  isFreeShipping: true,
  description:
    "Nulla sodales sit amet orci eu vehicula. Curabitur metus velit, fermentum a velit ac, sodales egestas lacus. Etiam congue velit vel luctus dictum. Pellentesque at pellentesque sapien.",
};

const ProductDetail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [showPopup, setShowPopup] = useState(false);

  const handleShow = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-8">
          <div className="row mb-3">
            <div className="col-md-5 text-center">
              <img src={product.img} className="img-fluid mb-3" alt="" />
            </div>
            <div className="col-md-7">
              <h1 className="h5 d-inline me-2 bold">{product.name}</h1>

              <div className="my-2">
                <span className="fw-bold h5 me-2 text-primary">
                  ${product.price}
                </span>
                <del className="small text-muted me-2">
                  ${product.originPrice}
                </del>
                <span className="rounded p-1 bg-warning  me-2 small text-danger">
                  - ${product.discountPrice}
                </span>
              </div>
              <div>
                <p className="fw-bold mb-2 small">Product Highlights</p>
                <ul className="small">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>Etiam ullamcorper nibh eget faucibus dictum.</li>
                  <li>Cras consequat felis ut vulputate porttitor.</li>
                </ul>
                <button className="btn btn-primary" onClick={handleShow}>
                  Update
                </button>

                <PopUp
                  title="Update Product"
                  child={
                    <EditorCustom
                      initialValue={`<ul className="small">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>Etiam ullamcorper nibh eget faucibus dictum.</li>
                  <li>Cras consequat felis ut vulputate porttitor.</li>
                </ul>`}
                    />
                  }
                  show={showPopup}
                  handleClose={handleClose}
                />
              </div>
              <div className="mb-3">
                <div className="d-inline float-start me-2">
                  <div className="input-group input-group-sm mw-140">
                    <button
                      className="btn btn-primary text-white"
                      type="button"
                    >
                      <i className="bi bi-dash-lg"></i>
                    </button>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="1"
                    />
                    <button
                      className="btn btn-primary text-white"
                      type="button"
                    >
                      <i className="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-primary me-2"
                  title="Add to cart"
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
