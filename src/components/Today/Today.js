import React from "react";
import WeeklyData from "../Weekly/Weekly";


// Get the information regarding the today's weather.
class TodayData extends React.Component {
  render() {
    return (
      <div className="container weatherData  border rounded pt-5 mt-5">
        <div className="row currentCity justify-content-center">
            <h5 className={"text-center text-white"}>
                {this.props.city}, {this.props.country}
            </h5>
        </div>
        <div className="row currentDay">
            <h5 className={"text-center text-white"}>
                {this.props.weekday} {this.props.time}
            </h5>
        </div>
        <div className="row currentDesc justify-content-center">
            <h5 className={"text-center text-white"}>
                {this.props.weatherDescription}
            </h5>
        </div>
        <div className="row currentTemp justify-content-center">
          <img src={this.props.weatherIcon} alt=""  />
            <h5 className={"text-center text-white"}>
                {this.props.temp}
                <span className="celsius">&#x2103;</span>
            </h5>
        </div>
          <div className="row currentTemp justify-content-center">
              <ul>
                  <li>
                      <h5 className={"text-center text-white"}>
                          {this.props.temp_max} <span className="celsius">&#x2103;</span>   :بیشینه دما
                      </h5>
                  </li>
                  <li>
                      <h5 className={"text-center text-white"}>
                          {this.props.temp_min} <span className="celsius">&#x2103;</span>  : کمینه دما
                      </h5>
                  </li>
                  <li>
                      <h5 className={"text-center text-white"}>
                          %{this.props.humidity}  : رطوبت
                      </h5>
                  </li>
                  <li>
                      <h5 className={"text-center text-white"}>
                         m/s{this.props.wind}  : سرعت باد
                      </h5>
                  </li>
              </ul>
          </div>
        <WeeklyData forecastWeekly={this.props.forecastWeekly} />
      </div>
    );
  }
}

export default TodayData;
