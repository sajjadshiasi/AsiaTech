import React, {Component} from "react";
import weatherApi from "../../utils/Weather";
import SearchBar from "../Search/Search";
import TodayData from "../Today/Today";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstTime: true,
            city: "",
            weekday: "",
            temp: "",
            weatherDescription: "",
            weatherIcon: "",
            country: "",
            timezone: "",
            time: "",
            temp_max: "",
            temp_min: "",
            humidity: "",
            wind: "",
            forecast3hrs: [],
            forecastWeekly: [],
            backgroundStyle: {
                backgroundImage: undefined,
                backgroundColor: 'black',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }
        };
        this.search = this.search.bind(this);
    }

    //Update today data as sync mode
    updateTodayState = data => {
        this.setState(
            {
                firstTime: false,
                temp: data.temp,
                weatherDescription: data.weatherDescription,
                weatherIcon: data.weatherIcon,
                country: data.country,
                timezone: data.timezone,
                dateTime: data.dateTime,
                time: data.time,
                wind: data.wind,
                weekday: data.weekday,
                humidity: data.humidity,
                city: data.city,
                temp_max: data.temp_max,
                temp_min: data.temp_min,
            },

            () => {
            }
        );
    };
    //Update weekly data as sync mode
    updateWeeklyState = data => {
        this.setState(
            {
                forecastWeekly: data,
                forecast3hrs: data.slice(0, 8)
            },
            () => {
            }
        );
    };

    //Search the weather based on the city
    search(term) {
        //Get today data
        weatherApi.getTodayData(term).then(data => this.updateTodayState(data));
        //Show the forecast for the next 24 hours, each 3 hours
        weatherApi.get3HoursData(term).then(data => this.updateWeeklyState(data));
    }

    warningBanner() {
        if (this.state.firstTime) {
            return null;
        }

        return (
            <div className="warningBanner">
               <h2 className="text-white text-center pt-lg-3 pt-5 ">
                   نام شهر وارد شده صحیح نمی باشد.
               </h2>
            </div>
        );
    }

    //Identify if there is data to display
    displayResult() {
        if ((typeof this.state.city === "undefined") | (this.state.city === "")) {
            return false;
        } else {
            return true;
        }
    }


    render() {

        return (
            <div className={(typeof this.state.weatherDescription != "undefined") ?
                ((this.state.weatherDescription ===  'کمی ابری') ? 'main cloudy' :
                    ((this.state.weatherDescription === "آسمان صاف") ? 'main sunny' :
                        ((this.state.weatherDescription === "مه آلود") ? 'main rainy' :
                            ((this.state.weatherDescription === "برفی") ? 'main snowy' :
                                    ((this.state.weatherDescription === "ریز گرد") ? 'main windy' : "main")
                            )))) :
                "main"
            }>
                <main>
                <div className="navbar-main">
                    <h1 className="text-center mt-lg-5 mt-4 pt-5 text-white mb-lg-5"> پیش بینی <span>آب و هوا</span></h1>
                </div>
                <SearchBar onSearch={this.search} updateTerm={this.updateTerm}/>
                {this.displayResult() ? (
                    <TodayData
                        city={this.state.city}
                        country={this.state.country}
                        temp={this.state.temp}
                        time={this.state.time}
                        wind={this.state.wind}
                        temp_max={this.state.temp_max}
                        temp_min={this.state.temp_min}
                        humidity={this.state.humidity}
                        weekday={this.state.weekday}
                        weatherDescription={this.state.weatherDescription}
                        weatherIcon={this.state.weatherIcon}
                        forecast3hrs={this.state.forecast3hrs}
                        forecastWeekly={this.state.forecastWeekly}
                    />
                ) : (
                    this.warningBanner()
                )}
                </main>
            </div>
        );
    }
}

export default Main;
