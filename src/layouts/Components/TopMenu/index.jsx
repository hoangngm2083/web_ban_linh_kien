import { Link } from "react-router-dom";
import publicRoutes from "../../../routes";

const TopMenu = () => {
  const productCats = [
    {
      name: "Raspberry pi",
      path: "/raspberry",
    },
    {
      name: "Robot",
      path: "/raspberry",
    },
    {
      name: "Arduino",
      path: "/raspberry",
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
      <div className="container-sm">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle fw-bold"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                Products
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {productCats.map((pCat, index) => {
                  return (
                    <li key={index}>
                      <Link className="dropdown-item" to={pCat.path}>
                        {pCat.name.toUpperCase()}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={publicRoutes.blog.path}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={publicRoutes.introduce.path}>
                Introduce
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={publicRoutes.contact.path}>
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
