import { color } from "@mui/system";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD, DELETE, REMOVE } from "../redux/actions/action";

const CardDetails = () => {
  const [data, setData] = useState([]);
  // console.log(data);

  // get id from url
  const { id } = useParams();
  // console.log(id);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  // get data that matches id
  const compare = () => {
    let compareData = getdata.filter((e) => {
      return e.id == id;
    });
    // console.log(compareData);
    setData(compareData);
  };

  // Add data
  const sendData = (e) => {
    // console.log(e);
    // send data to action
    dispatch(ADD(e));
  };

  // Delete from cart
  // get id from onClick and send to dispatch
  const del = (id) => {
    dispatch(DELETE(id));
    navigate("/");
  };

  // Remove one quantity from cart
  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  // Load whenever id changes
  useEffect(() => {
    compare();
  }, [id]);
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>

        <section className="container mt-3">
          <div className="itemsdetails d-flex">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.imgdata} alt="" />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant</strong> : {ele.rname}
                          </p>
                          <p>
                            <strong>Price</strong> : ₹{ele.price}
                          </p>
                          <p>
                            <strong>Dishes</strong> : {ele.address}
                          </p>
                          <p>
                            <strong>Total</strong> : ₹300
                          </p>

                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => remove(ele)}
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => sendData(ele)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating: </strong>
                            <span
                              style={{
                                background: "green",
                                color: "#FFF",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {ele.rating} ★
                            </span>
                          </p>
                          <p>
                            <strong>Order Review: </strong>
                            <span>{ele.somedata}</span>
                          </p>
                          <p>
                            <strong>Remove: </strong>
                            <span>
                              <i
                                className="fas fa-trash"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={() => del(ele.id)}
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
