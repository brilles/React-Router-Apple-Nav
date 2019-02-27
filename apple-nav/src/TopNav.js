import React from "react";
import styled from "styled-components";
import { Apple } from "styled-icons/boxicons-logos/Apple";
import { Search } from "styled-icons/boxicons-regular/Search";
import { NavLink } from "react-router-dom";
import { ShoppingBag } from "styled-icons/boxicons-solid/ShoppingBag";

const AppleLogo = styled(Apple)`
  color: #ffffff;
`;

const SearchIcon = styled(Search)`
  color: #ffffff;
`;

const Bag = styled(ShoppingBag)`
  color: #ffffff;
`;

export default function TopNav(props) {
  return (
    <div className="navWrapper">
      <NavLink exact to="/">
        <AppleLogo size="34" />
      </NavLink>
      <NavLink exact to="/mac" activeClassName="activeNavButton">
        Mac
      </NavLink>
      <NavLink to="/ipad" activeClassName="activeNavButton">
        iPad
      </NavLink>
      <NavLink to="/iphone" activeClassName="activeNavButton">
        iPhone
      </NavLink>
      <NavLink to="/watch" activeClassName="activeNavButton">
        Watch
      </NavLink>
      <NavLink to="/tv" activeClassName="activeNavButton">
        TV
      </NavLink>
      <NavLink to="/music" activeClassName="activeNavButton">
        Music
      </NavLink>
      <NavLink to="/support" activeClassName="activeNavButton">
        Support
      </NavLink>
      <NavLink to="/search" activeClassName="activeNavButton">
        <SearchIcon size="26" />
      </NavLink>
      <NavLink to="/bag" activeClassName="activeNavButton">
        <Bag size="26" />
      </NavLink>
    </div>
  );
}
