import React from "react";

export default function Modal({ product }) {
  if (!product) {
    return null;
  }
  return (
    <div
      className="modal fade"
      id="product-item"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Chi tiết thông tin giày
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="card">
              <img
                src={product.image}
                alt={product.name}
                className="card-img"
                width="50%"
                height="50%"
              />
              <div className="card-body" style={{ textAlign: "left" }}>
                <table
                  className="table"
                  width="100%"
                  style={{ fontSize: "20px" }}
                >
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Tên giày</td>
                      <td>{product.name}</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Giá bán</td>
                      <td>${product.price}</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Description</td>
                      <td>{product.description}</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Shortdescription</td>
                      <td>{product.shortDescription}</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Số lượng</td>
                      <td>{product.quantity} (đôi)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
