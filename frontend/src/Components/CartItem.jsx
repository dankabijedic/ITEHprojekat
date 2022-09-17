import React from "react";

function CartItem({ course }) {
  return (
    <div className="card " style={{ margin: 10, borderStyle: "solid" }}>
      <img className="card-img-top" src={course.image} alt="Neka slika" />
      <div className="card-body">
        <h3 className="card-title">{course.title}</h3>
        <p className="card-text">Sastojci: {course.description}</p>
        <h5 className="price">Cena: {course.price}</h5>
        {/* <a className="btn" onClick={() => onIncrease(item.id)}>
        <button className="btn" style={{ size: 10 }}>
          <ImPlus />
        </button>
      </a> */}
        <h5 className="amount">{course.amount}</h5>
        {/* <a className="btn" onClick={() => onDecrease(item.id)}>
        <button className="btn" style={{ size: 10 }}>
          <ImMinus />
        </button>
      </a> */}
      </div>
    </div>
  );
}

export default CartItem;
