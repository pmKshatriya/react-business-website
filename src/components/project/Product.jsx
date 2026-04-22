import React from "react";
import "./Product.css";

function Product() {

  const product = [
    {
      title: "Web Development",
      desc: "Modern and responsive websites",
      img: "/img/service1.png"
    },
    {
      title: "App Development",
      desc: "Android & iOS apps",
      img: "/img/service2.png"
    },
    {
      title: "Digital Marketing",
      desc: "Grow your business online",
      img: "/img/service3.png"
    }
  ];

  return (
    <section className="product" id="services">

      <h2>Our Services</h2>

      <div className="product-container">
        {product.map((item, index) => (
          <div className="card" key={index}>
            
            <img src={item.img} alt={item.title} />

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Product;