import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Button,
  Image,
  Row,
  Col,
  NavbarBrand,
  Table,
} from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;

  return (
    // style={{backgroundColor: "#fdccbc"}}
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <p>
              <span className="h2">ตะกร้าสิน </span>
              <span className="h4">(รายการที่สั่ง)</span>
            </p>
            <div className="card mb-4">
              <div
                className="card-body p-4"
                style={{
                  border: "3px double transparent",
                  backgroundImage:
                    "linear-gradient(rgb(10, 7, 49), rgb(13, 14, 33)), radial-gradient(circle at left top, rgb(117, 255, 142), rgb(162, 119, 255))",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                  color: "#ffff",
                }}
              >
                <Table striped bordered hover>
                  <thead>
                    <tr className="small  mb-4 pb-2 text-center"
                        style={{ color: "#25cb22" }}>
                      <th></th>
                      <th>รูปภาพ</th>
                      <th>ชื่อสินค้า</th>
                      <th>จำนวนสินค้า</th>
                      <th>ราคาสินค้า</th>
                      <th>ราคารวมทั้งหมด</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.length === 0 ? (
                      ""
                    ) : (
                      cartItems.map((item, index) => (
                        <tr key={item.id} className="lead fw-normal mb-0 text-center align-middle">
                          <td className="text-white">{index + 1}</td>
                          <td>
                            <Image
                              src={item.image}
                              style={{ width: "60px" }}
                            />
                          </td>
                          <td className="text-white">{item.name}</td>
                          <td className="text-white"><FaPlus className="m-4"/>{item.qty}<FaMinus className="m-4"/></td>
                          <td className="text-white">{item.price}</td>
                          <td className="text-white">@mdo</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="card mb-5">
              <div
                className="card-body p-4"
                style={{
                  border: "3px double transparent",
                  backgroundImage:
                    "linear-gradient(rgb(10, 7, 49), rgb(13, 14, 33)), radial-gradient(circle at left top, rgb(117, 255, 142), rgb(162, 119, 255))",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                  color: "#ffff",
                }}
              >
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small  me-5" style={{ color: "#25cb22" }}>
                      ยอดสั้งซื้อทั้งหมด:
                    </span>{" "}
                    <span className="lead fw-normal">799 บาท</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <a className="btunav" type="SignIn" href="/product">
                กลับ
              </a>
              <a className="btunav">ตกลง</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
