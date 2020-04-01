import React from "react";
import Column from "./Column/index";
import "./style.scss";

export default function ThreeCols() {
  return (
    <div className="three_columns">
      <Column
        number="0"
        title="bags given"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit maximus urna, in aliquam nibh mattis sit amet. Proin iaculis purus. "
      />
      <Column
        number="0"
        title="supported organizations"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit maximus urna, in aliquam nibh mattis sit amet. Proin iaculis purus."
      />
      <Column
        number="0"
        title="organized collections"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit maximus urna, in aliquam nibh mattis sit amet. Proin iaculis purus."
      />
    </div>
  );
}
