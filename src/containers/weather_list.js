import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart  from '../components/Chart';
import GoogleMap  from '../components/google_map';


class WeatherList extends Component {
    
    
    renderWeather(cityData){
            const temp =  cityData.list.map(w => w.main.temp);
            const humidity = cityData.list.map(w => w.main.humidity);
            const pressure = cityData.list.map(w => w.main.pressure);
            
            //const lon = cityData.city.coord.lon;
            //const lat = cityData.city.coord.lat;
            // ES6 refactoring the above code
            
            const {lon,lat} = cityData.city.coord;
               
            return ( 
                <tr key={cityData.city.name}>
                    <td><GoogleMap lon={lon} lat={lat} /></td>
                    <td><Chart data={temp} color="red" units="K"/> </td>
                    <td><Chart data={humidity} color="purple" units="hPa"/></td>
                    <td><Chart data={pressure} color="grey" units="%"/></td>
                 </tr>);           
    }
    
    render() {
        return (
          <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temprature (k)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%) </th>
                </tr>
            </thead>
            <tbody>
               {this.props.Weather.map(this.renderWeather)}
            </tbody>
          </table>
        );
    }
}


function mapStateToProps({Weather}) {
   
    return {Weather}; // {Weather} == {Weather:Weather}
}

export default connect(mapStateToProps)(WeatherList);