import React from 'react';
import ReactDOM from 'react-dom';
import ReactHighcharts from 'react-highcharts';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Chart extends React.Component { 
    constructor(){
    super();
    this.state = {
        data: {
            71027218: {
                meter_latitude: "49.1313",
                threshold: "100",
                meter_longitude: "-122.2222",
                demand_ts: [{
                    timestamp: "2017-10-06 0:00",
                    demand_value: "102.60414"
                }, {
                    timestamp: "2017-10-06 0:05",
                    demand_value: "69.36022"
                }, {
                    timestamp: "2017-10-06 0:10",
                    demand_value: "67.71138"
                }, {
                    timestamp: "2017-10-06 0:15",
                    demand_value: "27.0555"
                }, {
                    timestamp: "2017-10-06 0:20",
                    demand_value: "25.00622"
                }, {
                    timestamp: "2017-10-06 0:25",
                    demand_value: "98.5998"
                }, {
                    timestamp: "2017-10-06 0:30",
                    demand_value: "88.54182"
                }, {
                    timestamp: "2017-10-06 0:35",
                    demand_value: "27.4481"
                }, {
                    timestamp: "2017-10-06 0:40",
                    demand_value: "22.054"
                }, {
                    timestamp: "2017-10-06 0:45",
                    demand_value: "22.44658"
                }, {
                    timestamp: "2017-10-06 0:50",
                    demand_value: "22.17178"
                }, {
                    timestamp: "2017-10-06 1:00",
                    demand_value: "42.67246"
                }, {
                    timestamp: "2017-10-06 1:05",
                    demand_value: "29.78002"
                }, {
                    timestamp: "2017-10-06 1:10",
                    demand_value: "26.24678"
                }, {
                    timestamp: "2017-10-06 1:15",
                    demand_value: "29.3639"
                }, {
                    timestamp: "2017-10-06 1:20",
                    demand_value: "26.28604"
                }, {
                    timestamp: "2017-10-06 1:25",
                    demand_value: "24.67646"
                }, {
                    timestamp: "2017-10-06 1:30",
                    demand_value: "24.38594"
                }, {
                    timestamp: "2017-10-06 1:35",
                    demand_value: "24.6686"
                }, {
                    timestamp: "2017-10-06 1:40",
                    demand_value: "24.6686"
                }, {
                    timestamp: "2017-10-06 1:45",
                    demand_value: "43.979745"
                }, {
                    timestamp: "2017-10-06 2:00",
                    demand_value: "63.29089"
                }, {
                    timestamp: "2017-10-06 2:15",
                    demand_value: "82.602035"
                }, {
                    timestamp: "2017-10-06 2:20",
                    demand_value: "101.91318"
                }, {
                    timestamp: "2017-10-06 2:25",
                    demand_value: "102.2037"
                }, {
                    timestamp: "2017-10-06 2:30",
                    demand_value: "102.814165"
                }, {
                    timestamp: "2017-10-06 2:45",
                    demand_value: "103.42463"
                }, {
                    timestamp: "2017-10-06 3:00",
                    demand_value: "104.035095"
                }, {
                    timestamp: "2017-10-06 3:10",
                    demand_value: "104.64556"
                }, {
                    timestamp: "2017-10-06 3:15",
                    demand_value: "104.015465"
                }, {
                    timestamp: "2017-10-06 3:20",
                    demand_value: "103.38537"
                }, {
                    timestamp: "2017-10-06 3:30",
                    demand_value: "102.755275"
                }, {
                    timestamp: "2017-10-06 3:35",
                    demand_value: "102.12518"
                }, {
                    timestamp: "2017-10-06 3:40",
                    demand_value: "85.80158"
                }, {
                    timestamp: "2017-10-06 3:45",
                    demand_value: "88.870008"
                }, {
                    timestamp: "2017-10-06 3:50",
                    demand_value: "91.938436"
                }, {
                    timestamp: "2017-10-06 4:00",
                    demand_value: "95.006864"
                }, {
                    timestamp: "2017-10-06 4:15",
                    demand_value: "98.075292"
                }, {
                    timestamp: "2017-10-06 4:25",
                    demand_value: "101.14372"
                }, {
                    timestamp: "2017-10-06 4:30",
                    demand_value: "25.05334"
                }, {
                    timestamp: "2017-10-06 4:45",
                    demand_value: "91.7924"
                }, {
                    timestamp: "2017-10-06 4:50",
                    demand_value: "35.25262"
                }, {
                    timestamp: "2017-10-06 5:00",
                    demand_value: "74.58158"
                }, {
                    timestamp: "2017-10-06 5:05",
                    demand_value: "53.70402"
                }, {
                    timestamp: "2017-10-06 5:10",
                    demand_value: "69.19534"
                }, {
                    timestamp: "2017-10-06 5:15",
                    demand_value: "84.68666"
                }, {
                    timestamp: "2017-10-06 5:25",
                    demand_value: "100.17798"
                }, {
                    timestamp: "2017-10-06 5:30",
                    demand_value: "103.93106"
                }, {
                    timestamp: "2017-10-06 5:35",
                    demand_value: "41.71454"
                }, {
                    timestamp: "2017-10-06 5:45",
                    demand_value: "30.91068"
                }, {
                    timestamp: "2017-10-06 5:50",
                    demand_value: "64.38228"
                }, {
                    timestamp: "2017-10-06 6:00",
                    demand_value: "54.80587333"
                }, {
                    timestamp: "2017-10-06 6:15",
                    demand_value: "45.22946667"
                }, {
                    timestamp: "2017-10-06 6:25",
                    demand_value: "35.65306"
                }, {
                    timestamp: "2017-10-06 6:30",
                    demand_value: "29.74862"
                }, {
                    timestamp: "2017-10-06 6:35",
                    demand_value: "46.99872"
                }, {
                    timestamp: "2017-10-06 6:40",
                    demand_value: "98.482"
                }, {
                    timestamp: "2017-10-06 6:45",
                    demand_value: "69.50156"
                }, {
                    timestamp: "2017-10-06 6:50",
                    demand_value: "21.40232"
                }, {
                    timestamp: "2017-10-06 6:55",
                    demand_value: "21.17462"
                }, {
                    timestamp: "2017-10-06 7:00",
                    demand_value: "49.73108"
                }, {
                    timestamp: "2017-10-06 7:05",
                    demand_value: "67.2874"
                }, {
                    timestamp: "2017-10-06 7:10",
                    demand_value: "24.35454"
                }, {
                    timestamp: "2017-10-06 7:15",
                    demand_value: "24.29172"
                }, {
                    timestamp: "2017-10-06 7:20",
                    demand_value: "24.04832"
                }, {
                    timestamp: "2017-10-06 7:25",
                    demand_value: "31.68798"
                }, {
                    timestamp: "2017-10-06 7:30",
                    demand_value: "88.7224"
                }, {
                    timestamp: "2017-10-06 7:35",
                    demand_value: "51.89814"
                }, {
                    timestamp: "2017-10-06 7:40",
                    demand_value: "24.40166"
                }, {
                    timestamp: "2017-10-06 7:45",
                    demand_value: "65.91334"
                }, {
                    timestamp: "2017-10-06 7:50",
                    demand_value: "88.80092"
                }, {
                    timestamp: "2017-10-06 7:55",
                    demand_value: "26.87492"
                }, {
                    timestamp: "2017-10-06 8:00",
                    demand_value: "23.53012"
                }, {
                    timestamp: "2017-10-06 8:05",
                    demand_value: "54.16728"
                }, {
                    timestamp: "2017-10-06 8:10",
                    demand_value: "92.38912"
                }, {
                    timestamp: "2017-10-06 8:15",
                    demand_value: "39.40616"
                }, {
                    timestamp: "2017-10-06 8:20",
                    demand_value: "25.32814"
                }, {
                    timestamp: "2017-10-06 8:25",
                    demand_value: "101.82682"
                }, {
                    timestamp: "2017-10-06 8:30",
                    demand_value: "102.4314"
                }, {
                    timestamp: "2017-10-06 8:35",
                    demand_value: "51.8746"
                }, {
                    timestamp: "2017-10-06 8:40",
                    demand_value: "25.124"
                }, {
                    timestamp: "2017-10-06 8:45",
                    demand_value: "60.56638"
                }, {
                    timestamp: "2017-10-06 8:50",
                    demand_value: "99.59694"
                }, {
                    timestamp: "2017-10-06 8:55",
                    demand_value: "58.39146"
                }, {
                    timestamp: "2017-10-06 9:00",
                    demand_value: "41.73026"
                }, {
                    timestamp: "2017-10-06 9:05",
                    demand_value: "102.19584"
                }, {
                    timestamp: "2017-10-06 9:10",
                    demand_value: "86.28054"
                }, {
                    timestamp: "2017-10-06 9:15",
                    demand_value: "25.68932"
                }, {
                    timestamp: "2017-10-06 9:20",
                    demand_value: "24.27602"
                }, {
                    timestamp: "2017-10-06 9:25",
                    demand_value: "35.11916"
                }, {
                    timestamp: "2017-10-06 9:30",
                    demand_value: "81.6088"
                }, {
                    timestamp: "2017-10-06 9:35",
                    demand_value: "38.43254"
                }, {
                    timestamp: "2017-10-06 9:40",
                    demand_value: "23.64004"
                }, {
                    timestamp: "2017-10-06 9:45",
                    demand_value: "30.63586"
                }, {
                    timestamp: "2017-10-06 9:50",
                    demand_value: "63.98968"
                }, {
                    timestamp: "2017-10-06 9:55",
                    demand_value: "84.11348"
                }, {
                    timestamp: "2017-10-06 10:00",
                    demand_value: "35.24478"
                }, {
                    timestamp: "2017-10-06 10:05",
                    demand_value: "20.90766"
                }, {
                    timestamp: "2017-10-06 10:10",
                    demand_value: "20.89196"
                }, {
                    timestamp: "2017-10-06 10:15",
                    demand_value: "25.50088"
                }, {
                    timestamp: "2017-10-06 10:20",
                    demand_value: "26.07406"
                }, {
                    timestamp: "2017-10-06 10:25",
                    demand_value: "25.72072"
                }, {
                    timestamp: "2017-10-06 10:30",
                    demand_value: "29.6387"
                }, {
                    timestamp: "2017-10-06 10:35",
                    demand_value: "97.08442"
                }, {
                    timestamp: "2017-10-06 10:40",
                    demand_value: "81.66378"
                }, {
                    timestamp: "2017-10-06 10:45",
                    demand_value: "25.83064"
                }, {
                    timestamp: "2017-10-06 10:50",
                    demand_value: "21.42588"
                }, {
                    timestamp: "2017-10-06 10:55",
                    demand_value: "21.10394"
                }, {
                    timestamp: "2017-10-06 11:00",
                    demand_value: "46.4805"
                }, {
                    timestamp: "2017-10-06 11:05",
                    demand_value: "64.39798"
                }, {
                    timestamp: "2017-10-06 11:10",
                    demand_value: "73.42738"
                }, {
                    timestamp: "2017-10-06 11:15",
                    demand_value: "27.19684"
                }, {
                    timestamp: "2017-10-06 11:20",
                    demand_value: "22.25814"
                }, {
                    timestamp: "2017-10-06 11:25",
                    demand_value: "21.91268"
                }, {
                    timestamp: "2017-10-06 11:30",
                    demand_value: "24.77068"
                }, {
                    timestamp: "2017-10-06 11:35",
                    demand_value: "24.66074"
                }, {
                    timestamp: "2017-10-06 11:40",
                    demand_value: "25.19466"
                }, {
                    timestamp: "2017-10-06 11:45",
                    demand_value: "54.63052"
                }, {
                    timestamp: "2017-10-06 11:50",
                    demand_value: "41.9501"
                }, {
                    timestamp: "2017-10-06 11:55",
                    demand_value: "25.52444"
                }]
            }
        },
        config: {
            series: [
                {
                    name: "Location 1",
                    data: [200, 745, 333, 450],
                    color: '#A9E2FF'
                },
                {
                    name: "Location 2",
                    data: [200, 745, 333, 450],
                    color: '#c42525'             
                }
            ],
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    hour: '%H:%M',
                }
            },
            chart: {
                type: 'line'
            },
            yAxis: {
                title: {
                text: 'Exchange Rate'
                }
            },
            title: {
                text: "#METER ID - DEMAND"
            }
            }
        }
    }
    render() {
        return (
            <ReactHighcharts config={this.state.config} ref="chart"></ReactHighcharts>
        )
    }
}

export default Chart;