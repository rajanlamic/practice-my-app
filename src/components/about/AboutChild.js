// @flow

import React from "react";

type Props = {
  myProp: number
};

const AboutChild = ({ myProp }: Props) => {
  return <div>{myProp}</div>;
};

export default AboutChild;
