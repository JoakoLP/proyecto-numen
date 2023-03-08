import React, { useState, useContext } from "react";
import { brandsIcons } from "./brandsIcon";
import { productList } from "../Cart/productList";
import * as stylesBrand from "./stylesBrand";

function Brands() {

  const filterBrand = () => {
    productList.filter(() => {
      return productList.item === productList.brand;
    }
    );
  };
  return (
    <div className="w-full bg-white h-28">
      <div className="flex flex-row items-center overflow-x-auto buttons">
        <div className="flex items-center m-auto shrink-0">
          <div className={stylesBrand.divBtn}>
            <button className={stylesBrand.btn} onClick={() => filterBrand("Samsung")}>
              <img
                className={stylesBrand.imgBrand}
                src="https://www.qloud.ar/SITES/MARCAS/samsung.jpg"
                alt="/"
              />
            </button>
          </div>
          <div className={stylesBrand.divBtn}>
            <button className={stylesBrand.btn} onClick={() => filterBrand("MSI")}>
              <img
                className={stylesBrand.imgBrand}
                src="https://www.qloud.ar/SITES/MARCAS/msi.jpg"
                alt="/"
              />
            </button>
          </div>
          <div className={stylesBrand.divBtn}>
            <button className={stylesBrand.btn} onClick={() => filterBrand("Lenovo")}>
              <img
                className={stylesBrand.imgBrand}
                src="https://www.qloud.ar/SITES/MARCAS/lenovo.jpg"
                alt="/"
              />
            </button>
          </div>
          <div className={stylesBrand.divBtn}>
            <button className={stylesBrand.btn} onClick={() => filterBrand("Kingston")}>
              <img
                className={stylesBrand.imgBrand}
                src="https://www.qloud.ar/SITES/MARCAS/kingston.jpg"
                alt="/"
              />
            </button>
          </div>
          <div className={stylesBrand.divBtn}>
            <button className={stylesBrand.btn} onClick={() => filterBrand("Intel")}>
              <img
                className={stylesBrand.imgBrand}
                src="https://www.qloud.ar/SITES/MARCAS/intel.jpg"
                alt="/"
              />
            </button>
          </div>
          <div className={stylesBrand.divBtn}>
            <button className={stylesBrand.btn} onClick={() => filterBrand("HP")}>
              <img
                className={stylesBrand.imgBrand}
                src="https://www.qloud.ar/SITES/IMG/mall-web-12-2021/241_17-10-2022-12-10-00-hp.jpg"
                alt="/"
              />
            </button>
          </div>
          <div className={stylesBrand.divBtn}>
            <button className={stylesBrand.btn} onClick={() => filterBrand("GIGABYTE")}>
              <img
                className={stylesBrand.imgBrand}
                src="https://www.qloud.ar/SITES/MARCAS/gigabyte.jpg"
                alt="/"
              />
            </button>
          </div>
          <div className={stylesBrand.divBtn}>
            <button className={stylesBrand.btn} onClick={() => filterBrand("AMD")}>
              <img
                className={stylesBrand.imgBrand}
                src="https://www.mexx.com.ar/uploads/tumb_06-09-2018-02-09-31-logo.png"
                alt="/"
              />
            </button>
          </div>
          <div className={stylesBrand.divBtn}>
            <button className={stylesBrand.btn} onClick={() => filterBrand("Asus")}>
              <img
                className={stylesBrand.imgBrand}
                src="https://www.qloud.ar/SITES/MARCAS/asus.jpg"
                alt="/"
              />
            </button>
          </div>
          <div className={stylesBrand.divBtn}>
            <button className={stylesBrand.btn} onClick={() => filterBrand("Hyper")}>
              <img
                className={stylesBrand.imgBrand}
                src="https://www.mexx.com.ar/uploads/tumb_28-08-2018-05-08-26-hyperx.png"
                alt="/"
              />
            </button>
          </div>
          <div className={stylesBrand.divBtn}>
            <button className={stylesBrand.btn} onClick={() => filterBrand("WD")}>
              <img
                className={stylesBrand.imgBrand}
                src="https://www.qloud.ar/SITES/IMG/mall-web-12-2021/241_19-10-2022-02-10-06-wd.png"
                alt="/"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Brands;
