import React from "react";
import Step from "./Step/index";
import Shirt from "../../../../assets/Icon-1.svg";
import Bag from "../../../../assets/Icon-2.svg";
import Glass from "../../../../assets/Icon-3.svg";
import Recycle from "../../../../assets/Icon-4.svg";

export default function SimpleSteps() {
  return (
    <div className="steps">
      <Step
        icon={Shirt}
        alt="Shirt"
        title="Select things to donate"
        description="clothes, toys, equipment, etc."
      />
      <Step
        icon={Bag}
        alt="Bag"
        title="Pack them"
        description="Use ordinary garbage bags"
      />
      <Step
        icon={Glass}
        alt="Magnifying glass"
        title="Decide who to help"
        description="Choose trusted place"
      />
      <Step
        icon={Recycle}
        alt="Recycle sign"
        title="Order shipping"
        description="The courier will arrive at a convenient time"
      />
    </div>
  );
}
