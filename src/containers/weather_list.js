import React , { Component } from 'react'
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine} from 'react-sparklines'
import Graph from '../components/graph'
import GoogleMap from '../components/google_map'

class WeatherList extends Component{
  renderWeather(cityData){
      const temps = cityData.list.map(x=>x.main.temp);
      const pressure = cityData.list.map(x=>x.main.pressure);
      const humidity = cityData.list.map(x=>x.main.humidity);
      const lat = cityData.city.coord.lat;
      const lon = cityData.city.coord.lon;

//const {lon,lat} = cityData.city.coord;
      return (
        <tr key={cityData.city.name}>
            <td><GoogleMap lon={lon} lat={lat}/></td>
            <td>
                <Graph height={120} width={180} data={temps} color="red"/>
            </td>
            <td>
                <Graph height={120} width={180} data={pressure} color="blue"/>
            </td>
            <td>
                <Graph height={120} width={180} data={humidity} color="green"/>
            </td>
            
        </tr>
      );
  }
  
    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temp (c)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return { weather };
}
export default connect (mapStateToProps)(WeatherList);