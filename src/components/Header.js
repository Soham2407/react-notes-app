import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <section className="container">
          <a class="navbar-brand" href="#">
            {title}
          </a>
        </section>
      </nav>
    </header>
  );
};

export default Header;
