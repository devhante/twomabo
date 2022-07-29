import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterState, toggle } from "../slices/filterSlice";
import "./Filter.css";

export default function Filter() {
  const filterState: filterState = useSelector((state: any) => state.filter);
  const dispatch = useDispatch();

  function handleClickHeart() {
    dispatch(toggle({ name: "heart" }));
  }

  function handleClickFire() {
    dispatch(toggle({ name: "fire" }));
  }

  function handleClickWater() {
    dispatch(toggle({ name: "water" }));
  }

  function handleClickThunder() {
    dispatch(toggle({ name: "thunder" }));
  }

  function handleClickWind() {
    dispatch(toggle({ name: "wind" }));
  }

  function handleClickLight() {
    dispatch(toggle({ name: "light" }));
  }

  function handleClickDark() {
    dispatch(toggle({ name: "dark" }));
  }

  function handleClickStar5() {
    dispatch(toggle({ name: "star5" }));
  }

  function handleClickStar4() {
    dispatch(toggle({ name: "star4" }));
  }

  function handleClickStar3() {
    dispatch(toggle({ name: "star3" }));
  }

  return (
    <div className="Filter">
      <div className="filter-wrap">
        <div className="icons-wrap">
          <div
            className={`icon-wrap ${filterState.fire ? "selected" : ""}`}
            onClick={handleClickFire}
          >
            <img
              className="icon"
              src={`${process.env.PUBLIC_URL}/others/element_fire.png`}
            />
          </div>
          <div
            className={`icon-wrap ${filterState.water ? "selected" : ""}`}
            onClick={handleClickWater}
          >
            <img
              className="icon"
              src={`${process.env.PUBLIC_URL}/others/element_water.png`}
            />
          </div>
          <div
            className={`icon-wrap ${filterState.thunder ? "selected" : ""}`}
            onClick={handleClickThunder}
          >
            <img
              className="icon"
              src={`${process.env.PUBLIC_URL}/others/element_thunder.png`}
            />
          </div>
          <div
            className={`icon-wrap ${filterState.wind ? "selected" : ""}`}
            onClick={handleClickWind}
          >
            <img
              className="icon"
              src={`${process.env.PUBLIC_URL}/others/element_wind.png`}
            />
          </div>
          <div
            className={`icon-wrap ${filterState.light ? "selected" : ""}`}
            onClick={handleClickLight}
          >
            <img
              className="icon"
              src={`${process.env.PUBLIC_URL}/others/element_light.png`}
            />
          </div>
          <div
            className={`icon-wrap ${filterState.dark ? "selected" : ""}`}
            onClick={handleClickDark}
          >
            <img
              className="icon"
              src={`${process.env.PUBLIC_URL}/others/element_dark.png`}
            />
          </div>
          <div
            className={`icon-wrap-star ${filterState.star5 ? "selected" : ""}`}
            onClick={handleClickStar5}
          >
            <img
              className="icon-star"
              src={`${process.env.PUBLIC_URL}/others/star_5.png`}
            />
          </div>
          <div
            className={`icon-wrap-star ${filterState.star4 ? "selected" : ""}`}
            onClick={handleClickStar4}
          >
            <img
              className="icon-star"
              src={`${process.env.PUBLIC_URL}/others/star_4.png`}
            />
          </div>
          <div
            className={`icon-wrap-star ${filterState.star3 ? "selected" : ""}`}
            onClick={handleClickStar3}
          >
            <img
              className="icon-star"
              src={`${process.env.PUBLIC_URL}/others/star_3.png`}
            />
          </div>
          <div
            className={`icon-wrap ${filterState.heart ? "selected" : ""}`}
            onClick={handleClickHeart}
          >
            <img
              className="icon"
              src={`${process.env.PUBLIC_URL}/others/heart_filled.png`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
