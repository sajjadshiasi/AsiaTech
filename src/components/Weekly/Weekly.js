import React from "react";
import weatherApi from "../../utils/Weather";
// Get the weekly data, it creates a timeline per:
class WeeklyData extends React.Component {
    constructor(props) {
        super(props);
        this.getWeeklyData = this.getWeeklyData.bind(this);
    }

    getWeeklyData(forecastWeekly) {
        return weatherApi.getWeeklyData(forecastWeekly);
    }

    render() {
        const weeklyData = this.getWeeklyData(this.props.forecastWeekly);
        return (
            <div className="row rowWeeklyData justify-content-center">
                {weeklyData.map(forecast => {
                    return  <div className="col col-md-6 mt-5" key={forecast.weekday}>
                    <ul>

                           <li className="mx-2 text-center" >
                                {forecast.weekday}
                                <div className="forecast-icon">
                                    <img src={forecast.weather_icon} alt=""/>
                                </div>
                                <div className="temp-forecast">
                                    {forecast.max}° | {forecast.min}°
                                </div>
                            </li>

                    </ul>
                </div>
                })}
            </div>
        );
    }
}

export default WeeklyData;
