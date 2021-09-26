import * as React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavItem,
  Navbar,
  Container,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { INavRoute } from "../lib/types";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const NavigationTemplate: React.FC = ({ children }) => {
  const routes: Array<INavRoute> = [
    {
      to: "/home",
      navContent: "Home",
      className: "nav-link",
    },
    {
      to: "/list",
      navContent: "List",
      className: "nav-link",
    },
    {
      to: "/contact",
      navContent: "Contact",
      className: "nav-link",
    },
  ];

  const GETUSERQUERY = gql`
    {
      user {
        name
      }
    }
  `;

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { loading, data } = useQuery(GETUSERQUERY, {});

  return (
    <>
      <Navbar expand="md" dark color="dark">
        <Container>
          <Link className="navbar-brand" to="/home">
            Suspended Animation -&gt; {!loading && data.user.name}
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse navbar isOpen={isOpen}>
            <Nav navbar>
              {routes.map(({ navContent, ...rest }, index) => (
                <NavItem
                  key={index + 1}
                  active={window.location.pathname === rest.to}
                >
                  <Link {...rest}>{navContent}</Link>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  );
};

export default NavigationTemplate;
