import { useState } from "react";
import "./general.css";
export default function Home() {
  return (
    <section id="sector1">
      <main className="home">
        <div className="home-text-block">
          <p className="home-line1">
            <span className="special-word">Hello!</span> my name is,{" "}
            <span className="name"></span>{" "}
          </p>
          <p className="home-line2">
            I'm a, <span className="prof"></span>
          </p>
          <article className="home-art">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            architecto optio consequuntur ut odit perspiciatis voluptatem,
            adipisci suscipit accusantium maiores nihil rerum molestias et
            labore magnam provident sit repudiandae excepturi.
          </article>
          <button className="home-btn" tel="09157301644">
            Let's Connect!
          </button>
        </div>
        <div className="home-img-block">
          <img
            className="home-img"
            src="src/img-components/view-3d-couple.png"
            alt=""
          />
        </div>
      </main>
    </section>
  );
}
