import React from "react";
import { SocialButton } from "./socialbutton";
import "./user.css";

export function User({ name, title, imageUrl, company, facebookUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} style={{ width: "100%" }} />
      <h1>{name}</h1>
      <p className="title">{title}</p>
      <p>{company}</p>

      <SocialButton type="dribbble" />
      <SocialButton type="twitter" />
      <SocialButton type="linkedin" />
      <SocialButton type="facebook" />

      {/*{facebookUrl && (*/}
      {/*	<SocialButton type="facebook" />*/}
      {/*)}*/}
      <p>
        <button>Contact</button>
      </p>
    </div>
  );
}
