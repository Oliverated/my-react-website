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
Welcome to my website, my little personal static website, i could make one for you for absolulely <b className="free">free</b>, but it maybe not be as good as this, lolzz, just kidding!! It will obviously be far better than this.
<p><b className="free">Free</b> Website no catch, no forzz, no extra payment, well... maybe a cup of cofee 🍵 if you want 😊</p>
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
