import { useState } from "react";
import { useNavigate } from "react-router-dom";
import publicRoutes from "../../../routes";
import useCheckoutServices from "../../../services/checkout.services";
import useProductServices from "../../../services/product.services";
import useGetMyInvoices from "./hooks/useGetMyInvoices";

const Invoice = () => {
  const [myInvoices, setMyInvoices] = useState(null);
  const navigate = useNavigate();
  useGetMyInvoices(setMyInvoices);
  const { addSelectedToCheckoutItems, resetCheckout } = useCheckoutServices();
  const { getProductWithId } = useProductServices();

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Danh sách hóa đơn</h2>
      {myInvoices?.map((invoice) => (
        <div className="card mb-3" key={invoice.InvoiceID}>
          <div className="card-header bg-primary text-white">
            <h5>Hóa đơn #{invoice.InvoiceID}</h5>
          </div>
          <div className="card-body">
            <p>
              <strong>Ngày lập hóa đơn:</strong>{" "}
              {new Date(invoice.InvoiceDate).toLocaleString("vi-VN")}
            </p>
            <p>
              <strong>Phương thức thanh toán:</strong>{" "}
              {invoice.Paid_Method === 1 ? "VNPay" : "Khác"}
            </p>
            <p>
              <strong>Trạng thái:</strong>{" "}
              {invoice.IsPaid ? "Đã thanh toán" : "Chưa thanh toán"}
            </p>
            <p>
              <strong>Thông tin giao hàng:</strong> {invoice.ShippingInfo}
            </p>

            <h6>Chi tiết sản phẩm:</h6>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID Sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Đơn giá (VNĐ)</th>
                  <th>Giảm giá (%)</th>
                  <th>Thành tiền (VNĐ)</th>
                </tr>
              </thead>
              <tbody>
                {invoice.InvoiceDetails.map((detail, index) => {
                  const discountedPrice =
                    detail.UnitPrice * (1 - detail.SalePercent / 100);
                  const totalPrice = discountedPrice * detail.PaidNumber;
                  return (
                    <tr key={detail.InvoiceDetailID}>
                      <td>{index + 1}</td>
                      <td>
                        {detail.ProductID}
                        <button
                          onClick={() => {
                            resetCheckout();
                            (async () => {
                              const product = await getProductWithId(
                                detail.ProductID
                              );
                              addSelectedToCheckoutItems({
                                ...product,
                                quantitySelected: detail.PaidNumber,
                              });

                              navigate(publicRoutes.checkout.path);
                            })();
                          }}
                        >
                          Mua Lai
                        </button>
                      </td>
                      <td>{detail.PaidNumber}</td>
                      <td>{detail.UnitPrice.toLocaleString("vi-VN")}</td>
                      <td>{detail.SalePercent}</td>
                      <td>{totalPrice.toLocaleString("vi-VN")}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Invoice;
