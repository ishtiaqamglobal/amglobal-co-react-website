import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { getAllJobsCall } from "../../apis/job-posting/repo";
import { SUCCESS } from "../../utils/constants";
import MultiRangeSlider from "multi-range-slider-react";
import dayjs from "dayjs";

const min = 10000;
const max = 9999999;

function Section_1() {
  let [state, setState] = useState({
    jobsList: [],
    datePostedValue: 1,
    keywordSearch: "",
    jobTitleSearch: "",
    locationSearch: "",
    startDate: "",
    endDate: "",
  });
  const [visibleCards, setVisibleCards] = useState(5);
  let [minSalaryValue, setMinSalaryValue] = useState(min);
  let [maxSalaryValue, setMaxSalaryValue] = useState(max);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      delay: 100,
    });
  }, []);

  useEffect(() => {
    getJobs();
  }, []);

  useEffect(() => {
    if (state.datePostedValue != 1) {
      let startDate = "";
      let endDate = new Date();

      if (state.datePostedValue == 2) {
        startDate = new Date(endDate.getTime() - 24 * 60 * 60 * 1000);
      } else if (state.datePostedValue == 3) {
        startDate = new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      } else if (state.datePostedValue == 4) {
        startDate = new Date(endDate.getTime() - 14 * 24 * 60 * 60 * 1000);
      } else if (state.datePostedValue == 5) {
        startDate = new Date(endDate.getTime() - 30 * 24 * 60 * 60 * 1000);
      }

      setState((prevState) => ({ ...prevState, startDate: startDate, endDate: endDate }));
    } else setState((prevState) => ({ ...prevState, startDate: "", endDate: "" }));
  }, [state.datePostedValue]);

  function getJobs() {
    getAllJobsCall(
      state.keywordSearch,
      state.jobTitleSearch,
      state.locationSearch,
      state.startDate ? dayjs(state.startDate).format("YYYY-MM-DD 00:00:00") : "",
      state.endDate ? dayjs(state.endDate).format("YYYY-MM-DD 23:59:59") : "",
      minSalaryValue,
      maxSalaryValue,
      1,
      100
    )
      .then(({ data }) => {
        if (data.error_code == SUCCESS) {
          setState((prevState) => ({ ...prevState, jobsList: data.data }));
        } else {
          setState((prevState) => ({ ...prevState, jobsList: [] }));
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  const handleSeeMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 5); // Increment by 5 when "See more" is clicked
  };

  return (
    <div>
      <div className="mainSection">
        <div data-aos="zoom-in" className="sectionFilter py-5">
          <div className="sectionInnerFilter">
            <div className="filter_header_distance">
              <div className="filterHeader">
                <h1 className="filter_text text-xl font-semibold text-white">Filter</h1>
                <div className="flex flex-row gap-2">
                  <button
                    className="filterButton"
                    onClick={(e) => {
                      e.preventDefault();
                      getJobs();
                    }}
                  >
                    Apply
                  </button>
                  <button
                    className="filterButton"
                    onClick={(e) => {
                      e.preventDefault();
                      setState((prevState) => ({
                        ...prevState,
                        keywordSearch: (state.keywordSearch = ""),
                        jobTitleSearch: (state.jobTitleSearch = ""),
                        locationSearch: (state.locationSearch = ""),
                        datePostedValue: (state.datePostedValue = 1),
                        startDate: (state.startDate = ""),
                        endDate: (state.endDate = ""),
                      }));
                      setMinSalaryValue((minSalaryValue = min));
                      setMaxSalaryValue((maxSalaryValue = max));
                      getJobs();
                    }}
                  >
                    Remove All
                  </button>
                </div>
              </div>
              <div className="filterDistance">
                <p className="distance_text text-white">Search By Keyword</p>
                <input
                  type="text"
                  placeholder="Search By Keyword"
                  value={state.keywordSearch}
                  onChange={(e) =>
                    setState((prevState) => ({ ...prevState, keywordSearch: e.target.value }))
                  }
                />
              </div>

              <div className="filterDistance">
                <p className="distance_text text-white">Search By Job Title</p>
                <input
                  type="text"
                  placeholder="Search By Job Title"
                  value={state.jobTitleSearch}
                  onChange={(e) =>
                    setState((prevState) => ({ ...prevState, jobTitleSearch: e.target.value }))
                  }
                />
              </div>

              <div className="filterDistance">
                <p className="distance_text text-white">Location</p>
                <input
                  type="text"
                  placeholder="Location"
                  value={state.locationSearch}
                  onChange={(e) =>
                    setState((prevState) => ({ ...prevState, locationSearch: e.target.value }))
                  }
                />
              </div>

              <div className="filter__date__posted">
                <p className="distance_text text-white">Date Posted</p>
                <div className="flex flex-col justify-start items-start gap-5">
                  <div className="flex flex-row gap-2 items-center">
                    <input
                      type="radio"
                      className="rounded-full w-5 h-5"
                      value={1}
                      checked={state.datePostedValue == 1 ? true : false}
                      onClick={(e) => {
                        setState((prevState) => ({
                          ...prevState,
                          datePostedValue: e.target.value,
                        }));
                      }}
                    />
                    <div className="text-white">All</div>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <input
                      type="radio"
                      className="rounded-full w-5 h-5"
                      value={2}
                      checked={state.datePostedValue == 2 ? true : false}
                      onClick={(e) => {
                        setState((prevState) => ({
                          ...prevState,
                          datePostedValue: e.target.value,
                        }));
                      }}
                    />
                    <div className="text-white">Last 24 Hours</div>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <input
                      type="radio"
                      className="rounded-full w-5 h-5"
                      value={3}
                      checked={state.datePostedValue == 3 ? true : false}
                      onClick={(e) => {
                        setState((prevState) => ({
                          ...prevState,
                          datePostedValue: e.target.value,
                        }));
                      }}
                    />
                    <div className="text-white">Last 7 Days</div>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <input
                      type="radio"
                      className="rounded-full w-5 h-5"
                      value={4}
                      checked={state.datePostedValue == 4 ? true : false}
                      onClick={(e) => {
                        setState((prevState) => ({
                          ...prevState,
                          datePostedValue: e.target.value,
                        }));
                      }}
                    />
                    <div className="text-white">Last 14 Days</div>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <input
                      type="radio"
                      className="rounded-full w-5 h-5"
                      value={5}
                      checked={state.datePostedValue == 5 ? true : false}
                      onClick={(e) => {
                        setState((prevState) => ({
                          ...prevState,
                          datePostedValue: e.target.value,
                        }));
                      }}
                    />
                    <div className="text-white">Last 30 Days</div>
                  </div>
                </div>
              </div>

              <div className="filterDistance">
                <p className="distance_text text-white">Salary</p>
                <MultiRangeSlider
                  ruler={false}
                  min={min}
                  max={max}
                  step={1000}
                  minValue={minSalaryValue}
                  maxValue={maxSalaryValue}
                  onInput={(e) => {
                    console.log("e", e);
                    setMinSalaryValue(e.minValue);
                    setMaxSalaryValue(e.maxValue);
                    // handleInput(e);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sectionCard">
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "20px",
                marginTop: "5px",
                fontSize: "20px",
              }}
            >
              <div className="results text-[#B8A147]" style={{ fontWeight: "bolder" }}>
                {state.jobsList.length} Results
              </div>
            </div>
            <div className="px-[10px]">
              {/* Display cards based on visibleCards state */}
              {state.jobsList.slice(0, visibleCards).map((item) => (
                <Card
                  item={item}
                  key={item._id}
                  name={item.job_title}
                  location={item.address}
                  job_type={item.job_type}
                  min_salary={item.min_salary}
                  max_salary={item.max_salary}
                  experience={item.experience}
                />
              ))}
              {/* See more button */}
              {state.jobsList.length > visibleCards && (
                <button className="text-white font-semibold" onClick={handleSeeMore}>
                  See more
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_1;
