import React from "react";
import "./USP.css";

function USP() {

    const points = [
        {
            title: "⭐High Quality",
            desc: "We deliver top quality services to our clients."
        },
        {
            title: "🚀Fast Delivery",
            desc: "Quick turnaround time with best results."
        },
        {
            title: "💼Expert Team",
            desc: "Experienced professionals at your service."
        }
    ];

    return (
        <section className="usp">

            <h2>Why Choose Us</h2>

            <div className="usp-container">
                {points.map((item, index) => (
                    <div className="usp-card" key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default USP;