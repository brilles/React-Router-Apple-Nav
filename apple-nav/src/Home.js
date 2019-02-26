import React from "react";
import styled from "styled-components";
import { Apple } from "styled-icons/boxicons-logos/Apple";

const AppleLogo = styled(Apple)`
  color: white;
`;

export default function Home(props) {
  return (
    <div className="navWrapper">
      <AppleLogo />
    </div>
  );
}
