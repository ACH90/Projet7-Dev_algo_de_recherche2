import styles from "/src/components/Filter/filter.module.css";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between py-3 filter">
          {/* Dropdowns */}
          <div className="d-flex gap-5">
            <div className="btn-group">
              <button
                type="button"
                className="btn bg-white dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ingrédients
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            {/* Appareils */}
            <div className="btn-group">
              <button
                type="button"
                className="btn bg-white dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Appareils
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            {/* Ustensiles */}
            <div className="btn-group">
              <button
                type="button"
                className="btn bg-white dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ustensiles
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Total Recettes */}
          <div className="text-center">
            <p className="fs-5 mb-0">Total Recettes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
