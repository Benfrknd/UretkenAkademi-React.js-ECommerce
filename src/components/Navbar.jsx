import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ user, handleLogout, cartCount }) => {
  return (
    <>
      <div className="sticky-top shadow bg-dark text-white">
        <div className="container-fluid py-3">
          <div className="d-flex align-items-center w-100 gap-2">
            <div className="pe-5 my-auto" style={{ width: "7.9rem" }}>
              <Link className="navbar-brand p-0 w-25" to="/">
                <h3 className='m-0 ms-5'>eTicaret</h3>
              </Link>
            </div>
            <div className="my-auto" style={{ width: "77%" }}>
              
            </div>
            <div className=" p-2 float-end rounded gap-3">
              <div className="d-flex align-items-center float-end" style={{ width: "5rem" }} >
                <div className="my-auto text-center">
                </div>
                <div className="col px-0  text-center">
                  {
                    user ?
                      <Link className="navbar-brand p-0 w-25" onClick={handleLogout}>
                        <span style={{ fontSize: "14px" }}>Çıkış Yap</span>
                      </Link> :
                      <Link className="navbar-brand p-0 w-25" to="/login">
                        <i className="bi bi-person-fill fs-3 pe-2"></i>
                      </Link>
                  }
                </div>
                <div className="col px-3 text-center">
                  <Link className="navbar-brand p-0 w-25" to="/cart">
                    <i className="bi bi-basket2-fill fs-3"></i>
                    <span className="badge bg-danger">{cartCount}</span>
                  </Link>
                </div>
                {user ?
                  <div className='col px-1 text-center'>
                    <Link className="navbar-brand p-0 w-25" to="/favorites">
                      <i className="bi bi-heart-fill fs-5"></i>
                    </Link>
                  </div> : <></>
                }
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <NavLink className="nav-link" to="/">Anasayfa</NavLink>
                <NavLink className="nav-link" to="/products">Ürünler</NavLink>
                <NavLink className="nav-link" to="/about">Hakkımda</NavLink>
                <NavLink className="nav-link" to="/contact">İletişim</NavLink>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
