import React from "react";
import Menu from "../Menu-item/Menu-item.component";
import { connect } from "react-redux";
import "./Directory.style.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map((section) => (
      <Menu
        title={section.title}
        img={section.imageUrl}
        key={section.id}
        size={section.size}
      />
    ))}
  </div>
);

const mapStatToProps = ({ directory: { sections } }) => ({
  sections,
});
export default connect(mapStatToProps)(Directory);
