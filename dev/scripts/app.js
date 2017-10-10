import React from 'react';
import ReactDOM from 'react-dom';
import ReactHighcharts from 'react-highcharts';

import GoogleMap from '../scripts/components/GoogleMap';
import Chart from '../scripts/components/Chart';

class App extends React.Component { 
  constructor() {
    super();
    this.state = ({
      data: {
        "71027218": {
          "meter_latitude": "49.1313",
          "threshold": "100",
          "meter_longitude": "-122.2222",
          "demand_ts": [{
            "timestamp": "2017-10-06 0:00",
            "demand_value": "102.60414"
          }, {
            "timestamp": "2017-10-06 0:05",
            "demand_value": "69.36022"
          }, {
            "timestamp": "2017-10-06 0:10",
            "demand_value": "67.71138"
          }, {
            "timestamp": "2017-10-06 0:15",
            "demand_value": "27.0555"
          }, {
            "timestamp": "2017-10-06 0:20",
            "demand_value": "25.00622"
          }, {
            "timestamp": "2017-10-06 0:25",
            "demand_value": "98.5998"
          }, {
            "timestamp": "2017-10-06 0:30",
            "demand_value": "88.54182"
          }, {
            "timestamp": "2017-10-06 0:35",
            "demand_value": "27.4481"
          }, {
            "timestamp": "2017-10-06 0:40",
            "demand_value": "22.054"
          }, {
            "timestamp": "2017-10-06 0:45",
            "demand_value": "22.44658"
          }, {
            "timestamp": "2017-10-06 0:50",
            "demand_value": "22.17178"
          }, {
            "timestamp": "2017-10-06 1:00",
            "demand_value": "42.67246"
          }, {
            "timestamp": "2017-10-06 1:05",
            "demand_value": "29.78002"
          }, {
            "timestamp": "2017-10-06 1:10",
            "demand_value": "26.24678"
          }, {
            "timestamp": "2017-10-06 1:15",
            "demand_value": "29.3639"
          }, {
            "timestamp": "2017-10-06 1:20",
            "demand_value": "26.28604"
          }, {
            "timestamp": "2017-10-06 1:25",
            "demand_value": "24.67646"
          }, {
            "timestamp": "2017-10-06 1:30",
            "demand_value": "24.38594"
          }, {
            "timestamp": "2017-10-06 1:35",
            "demand_value": "24.6686"
          }, {
            "timestamp": "2017-10-06 1:40",
            "demand_value": "24.6686"
          }, {
            "timestamp": "2017-10-06 1:45",
            "demand_value": "43.979745"
          }, {
            "timestamp": "2017-10-06 2:00",
            "demand_value": "63.29089"
          }, {
            "timestamp": "2017-10-06 2:15",
            "demand_value": "82.602035"
          }, {
            "timestamp": "2017-10-06 2:20",
            "demand_value": "101.91318"
          }, {
            "timestamp": "2017-10-06 2:25",
            "demand_value": "102.2037"
          }, {
            "timestamp": "2017-10-06 2:30",
            "demand_value": "102.814165"
          }, {
            "timestamp": "2017-10-06 2:45",
            "demand_value": "103.42463"
          }, {
            "timestamp": "2017-10-06 3:00",
            "demand_value": "104.035095"
          }, {
            "timestamp": "2017-10-06 3:10",
            "demand_value": "104.64556"
          }, {
            "timestamp": "2017-10-06 3:15",
            "demand_value": "104.015465"
          }, {
            "timestamp": "2017-10-06 3:20",
            "demand_value": "103.38537"
          }, {
            "timestamp": "2017-10-06 3:30",
            "demand_value": "102.755275"
          }, {
            "timestamp": "2017-10-06 3:35",
            "demand_value": "102.12518"
          }, {
            "timestamp": "2017-10-06 3:40",
            "demand_value": "85.80158"
          }, {
            "timestamp": "2017-10-06 3:45",
            "demand_value": "88.870008"
          }, {
            "timestamp": "2017-10-06 3:50",
            "demand_value": "91.938436"
          }, {
            "timestamp": "2017-10-06 4:00",
            "demand_value": "95.006864"
          }, {
            "timestamp": "2017-10-06 4:15",
            "demand_value": "98.075292"
          }, {
            "timestamp": "2017-10-06 4:25",
            "demand_value": "101.14372"
          }, {
            "timestamp": "2017-10-06 4:30",
            "demand_value": "25.05334"
          }, {
            "timestamp": "2017-10-06 4:45",
            "demand_value": "91.7924"
          }, {
            "timestamp": "2017-10-06 4:50",
            "demand_value": "35.25262"
          }, {
            "timestamp": "2017-10-06 5:00",
            "demand_value": "74.58158"
          }, {
            "timestamp": "2017-10-06 5:05",
            "demand_value": "53.70402"
          }, {
            "timestamp": "2017-10-06 5:10",
            "demand_value": "69.19534"
          }, {
            "timestamp": "2017-10-06 5:15",
            "demand_value": "84.68666"
          }, {
            "timestamp": "2017-10-06 5:25",
            "demand_value": "100.17798"
          }, {
            "timestamp": "2017-10-06 5:30",
            "demand_value": "103.93106"
          }, {
            "timestamp": "2017-10-06 5:35",
            "demand_value": "41.71454"
          }, {
            "timestamp": "2017-10-06 5:45",
            "demand_value": "30.91068"
          }, {
            "timestamp": "2017-10-06 5:50",
            "demand_value": "64.38228"
          }, {
            "timestamp": "2017-10-06 6:00",
            "demand_value": "54.80587333"
          }, {
            "timestamp": "2017-10-06 6:15",
            "demand_value": "45.22946667"
          }, {
            "timestamp": "2017-10-06 6:25",
            "demand_value": "35.65306"
          }, {
            "timestamp": "2017-10-06 6:30",
            "demand_value": "29.74862"
          }, {
            "timestamp": "2017-10-06 6:35",
            "demand_value": "46.99872"
          }, {
            "timestamp": "2017-10-06 6:40",
            "demand_value": "98.482"
          }, {
            "timestamp": "2017-10-06 6:45",
            "demand_value": "69.50156"
          }, {
            "timestamp": "2017-10-06 6:50",
            "demand_value": "21.40232"
          }, {
            "timestamp": "2017-10-06 6:55",
            "demand_value": "21.17462"
          }, {
            "timestamp": "2017-10-06 7:00",
            "demand_value": "49.73108"
          }, {
            "timestamp": "2017-10-06 7:05",
            "demand_value": "67.2874"
          }, {
            "timestamp": "2017-10-06 7:10",
            "demand_value": "24.35454"
          }, {
            "timestamp": "2017-10-06 7:15",
            "demand_value": "24.29172"
          }, {
            "timestamp": "2017-10-06 7:20",
            "demand_value": "24.04832"
          }, {
            "timestamp": "2017-10-06 7:25",
            "demand_value": "31.68798"
          }, {
            "timestamp": "2017-10-06 7:30",
            "demand_value": "88.7224"
          }, {
            "timestamp": "2017-10-06 7:35",
            "demand_value": "51.89814"
          }, {
            "timestamp": "2017-10-06 7:40",
            "demand_value": "24.40166"
          }, {
            "timestamp": "2017-10-06 7:45",
            "demand_value": "65.91334"
          }, {
            "timestamp": "2017-10-06 7:50",
            "demand_value": "88.80092"
          }, {
            "timestamp": "2017-10-06 7:55",
            "demand_value": "26.87492"
          }, {
            "timestamp": "2017-10-06 8:00",
            "demand_value": "23.53012"
          }, {
            "timestamp": "2017-10-06 8:05",
            "demand_value": "54.16728"
          }, {
            "timestamp": "2017-10-06 8:10",
            "demand_value": "92.38912"
          }, {
            "timestamp": "2017-10-06 8:15",
            "demand_value": "39.40616"
          }, {
            "timestamp": "2017-10-06 8:20",
            "demand_value": "25.32814"
          }, {
            "timestamp": "2017-10-06 8:25",
            "demand_value": "101.82682"
          }, {
            "timestamp": "2017-10-06 8:30",
            "demand_value": "102.4314"
          }, {
            "timestamp": "2017-10-06 8:35",
            "demand_value": "51.8746"
          }, {
            "timestamp": "2017-10-06 8:40",
            "demand_value": "25.124"
          }, {
            "timestamp": "2017-10-06 8:45",
            "demand_value": "60.56638"
          }, {
            "timestamp": "2017-10-06 8:50",
            "demand_value": "99.59694"
          }, {
            "timestamp": "2017-10-06 8:55",
            "demand_value": "58.39146"
          }, {
            "timestamp": "2017-10-06 9:00",
            "demand_value": "41.73026"
          }, {
            "timestamp": "2017-10-06 9:05",
            "demand_value": "102.19584"
          }, {
            "timestamp": "2017-10-06 9:10",
            "demand_value": "86.28054"
          }, {
            "timestamp": "2017-10-06 9:15",
            "demand_value": "25.68932"
          }, {
            "timestamp": "2017-10-06 9:20",
            "demand_value": "24.27602"
          }, {
            "timestamp": "2017-10-06 9:25",
            "demand_value": "35.11916"
          }, {
            "timestamp": "2017-10-06 9:30",
            "demand_value": "81.6088"
          }, {
            "timestamp": "2017-10-06 9:35",
            "demand_value": "38.43254"
          }, {
            "timestamp": "2017-10-06 9:40",
            "demand_value": "23.64004"
          }, {
            "timestamp": "2017-10-06 9:45",
            "demand_value": "30.63586"
          }, {
            "timestamp": "2017-10-06 9:50",
            "demand_value": "63.98968"
          }, {
            "timestamp": "2017-10-06 9:55",
            "demand_value": "84.11348"
          }, {
            "timestamp": "2017-10-06 10:00",
            "demand_value": "35.24478"
          }, {
            "timestamp": "2017-10-06 10:05",
            "demand_value": "20.90766"
          }, {
            "timestamp": "2017-10-06 10:10",
            "demand_value": "20.89196"
          }, {
            "timestamp": "2017-10-06 10:15",
            "demand_value": "25.50088"
          }, {
            "timestamp": "2017-10-06 10:20",
            "demand_value": "26.07406"
          }, {
            "timestamp": "2017-10-06 10:25",
            "demand_value": "25.72072"
          }, {
            "timestamp": "2017-10-06 10:30",
            "demand_value": "29.6387"
          }, {
            "timestamp": "2017-10-06 10:35",
            "demand_value": "97.08442"
          }, {
            "timestamp": "2017-10-06 10:40",
            "demand_value": "81.66378"
          }, {
            "timestamp": "2017-10-06 10:45",
            "demand_value": "25.83064"
          }, {
            "timestamp": "2017-10-06 10:50",
            "demand_value": "21.42588"
          }, {
            "timestamp": "2017-10-06 10:55",
            "demand_value": "21.10394"
          }, {
            "timestamp": "2017-10-06 11:00",
            "demand_value": "46.4805"
          }, {
            "timestamp": "2017-10-06 11:05",
            "demand_value": "64.39798"
          }, {
            "timestamp": "2017-10-06 11:10",
            "demand_value": "73.42738"
          }, {
            "timestamp": "2017-10-06 11:15",
            "demand_value": "27.19684"
          }, {
            "timestamp": "2017-10-06 11:20",
            "demand_value": "22.25814"
          }, {
            "timestamp": "2017-10-06 11:25",
            "demand_value": "21.91268"
          }, {
            "timestamp": "2017-10-06 11:30",
            "demand_value": "24.77068"
          }, {
            "timestamp": "2017-10-06 11:35",
            "demand_value": "24.66074"
          }, {
            "timestamp": "2017-10-06 11:40",
            "demand_value": "25.19466"
          }, {
            "timestamp": "2017-10-06 11:45",
            "demand_value": "54.63052"
          }, {
            "timestamp": "2017-10-06 11:50",
            "demand_value": "41.9501"
          }, {
            "timestamp": "2017-10-06 11:55",
            "demand_value": "25.52444"
          }]
        },
        "68613970": {
          "meter_latitude": "49.058079",
          "threshold": "4",
          "meter_longitude": "-122.449567",
          "demand_ts": [{
            "timestamp": "2017-10-06 0:00",
            "demand_value": "4.32317"
          }, {
            "timestamp": "2017-10-06 0:05",
            "demand_value": "2.53103"
          }, {
            "timestamp": "2017-10-06 0:10",
            "demand_value": "2.37595"
          }, {
            "timestamp": "2017-10-06 0:15",
            "demand_value": "0.5956"
          }, {
            "timestamp": "2017-10-06 0:20",
            "demand_value": "0.75656"
          }, {
            "timestamp": "2017-10-06 0:25",
            "demand_value": "4.24367"
          }, {
            "timestamp": "2017-10-06 0:30",
            "demand_value": "3.36431"
          }, {
            "timestamp": "2017-10-06 0:35",
            "demand_value": "0.56026"
          }, {
            "timestamp": "2017-10-06 0:40",
            "demand_value": "0.54947"
          }, {
            "timestamp": "2017-10-06 0:45",
            "demand_value": "0.53769"
          }, {
            "timestamp": "2017-10-06 0:50",
            "demand_value": "0.5063"
          }, {
            "timestamp": "2017-10-06 1:00",
            "demand_value": "1.36212"
          }, {
            "timestamp": "2017-10-06 1:05",
            "demand_value": "0.6486"
          }, {
            "timestamp": "2017-10-06 1:10",
            "demand_value": "0.53672"
          }, {
            "timestamp": "2017-10-06 1:15",
            "demand_value": "0.66822"
          }, {
            "timestamp": "2017-10-06 1:20",
            "demand_value": "0.53966"
          }, {
            "timestamp": "2017-10-06 1:25",
            "demand_value": "0.54849"
          }, {
            "timestamp": "2017-10-06 1:30",
            "demand_value": "0.53083"
          }, {
            "timestamp": "2017-10-06 1:35",
            "demand_value": "0.54849"
          }, {
            "timestamp": "2017-10-06 1:40",
            "demand_value": "0.54849"
          }, {
            "timestamp": "2017-10-06 1:45",
            "demand_value": "1.469585"
          }, {
            "timestamp": "2017-10-06 2:00",
            "demand_value": "2.39068"
          }, {
            "timestamp": "2017-10-06 2:15",
            "demand_value": "3.311775"
          }, {
            "timestamp": "2017-10-06 2:20",
            "demand_value": "4.23287"
          }, {
            "timestamp": "2017-10-06 2:25",
            "demand_value": "4.01696"
          }, {
            "timestamp": "2017-10-06 2:30",
            "demand_value": "4.08934"
          }, {
            "timestamp": "2017-10-06 2:45",
            "demand_value": "4.16172"
          }, {
            "timestamp": "2017-10-06 3:00",
            "demand_value": "4.2341"
          }, {
            "timestamp": "2017-10-06 3:10",
            "demand_value": "4.30648"
          }, {
            "timestamp": "2017-10-06 3:15",
            "demand_value": "4.29176"
          }, {
            "timestamp": "2017-10-06 3:20",
            "demand_value": "4.27704"
          }, {
            "timestamp": "2017-10-06 3:30",
            "demand_value": "4.26232"
          }, {
            "timestamp": "2017-10-06 3:35",
            "demand_value": "4.2476"
          }, {
            "timestamp": "2017-10-06 3:40",
            "demand_value": "2.78228"
          }, {
            "timestamp": "2017-10-06 3:45",
            "demand_value": "3.03962"
          }, {
            "timestamp": "2017-10-06 3:50",
            "demand_value": "3.29696"
          }, {
            "timestamp": "2017-10-06 4:00",
            "demand_value": "3.5543"
          }, {
            "timestamp": "2017-10-06 4:15",
            "demand_value": "3.81164"
          }, {
            "timestamp": "2017-10-06 4:25",
            "demand_value": "4.06898"
          }, {
            "timestamp": "2017-10-06 4:30",
            "demand_value": "0.60639"
          }, {
            "timestamp": "2017-10-06 4:45",
            "demand_value": "3.81381"
          }, {
            "timestamp": "2017-10-06 4:50",
            "demand_value": "0.66529"
          }, {
            "timestamp": "2017-10-06 5:00",
            "demand_value": "3.07477"
          }, {
            "timestamp": "2017-10-06 5:05",
            "demand_value": "3.3689575"
          }, {
            "timestamp": "2017-10-06 5:10",
            "demand_value": "3.663145"
          }, {
            "timestamp": "2017-10-06 5:15",
            "demand_value": "3.9573325"
          }, {
            "timestamp": "2017-10-06 5:25",
            "demand_value": "4.25152"
          }, {
            "timestamp": "2017-10-06 5:30",
            "demand_value": "4.30158"
          }, {
            "timestamp": "2017-10-06 5:35",
            "demand_value": "1.03333"
          }, {
            "timestamp": "2017-10-06 5:45",
            "demand_value": "1.23354"
          }, {
            "timestamp": "2017-10-06 5:50",
            "demand_value": "1.99025"
          }, {
            "timestamp": "2017-10-06 6:00",
            "demand_value": "1.77989"
          }, {
            "timestamp": "2017-10-06 6:15",
            "demand_value": "1.56953"
          }, {
            "timestamp": "2017-10-06 6:25",
            "demand_value": "1.35917"
          }, {
            "timestamp": "2017-10-06 6:30",
            "demand_value": "0.56224"
          }, {
            "timestamp": "2017-10-06 6:35",
            "demand_value": "1.94412"
          }, {
            "timestamp": "2017-10-06 6:40",
            "demand_value": "4.30649"
          }, {
            "timestamp": "2017-10-06 6:45",
            "demand_value": "2.04227"
          }, {
            "timestamp": "2017-10-06 6:50",
            "demand_value": "0.53966"
          }, {
            "timestamp": "2017-10-06 6:55",
            "demand_value": "0.54162"
          }, {
            "timestamp": "2017-10-06 7:00",
            "demand_value": "1.61141"
          }, {
            "timestamp": "2017-10-06 7:05",
            "demand_value": "2.15514"
          }, {
            "timestamp": "2017-10-06 7:10",
            "demand_value": "0.53964"
          }, {
            "timestamp": "2017-10-06 7:15",
            "demand_value": "0.54162"
          }, {
            "timestamp": "2017-10-06 7:20",
            "demand_value": "0.52395"
          }, {
            "timestamp": "2017-10-06 7:25",
            "demand_value": "0.9126"
          }, {
            "timestamp": "2017-10-06 7:30",
            "demand_value": "3.81871"
          }, {
            "timestamp": "2017-10-06 7:35",
            "demand_value": "1.36802"
          }, {
            "timestamp": "2017-10-06 7:40",
            "demand_value": "0.56811"
          }, {
            "timestamp": "2017-10-06 7:45",
            "demand_value": "2.92753"
          }, {
            "timestamp": "2017-10-06 7:50",
            "demand_value": "3.3427"
          }, {
            "timestamp": "2017-10-06 7:55",
            "demand_value": "0.56812"
          }, {
            "timestamp": "2017-10-06 8:00",
            "demand_value": "0.64467"
          }, {
            "timestamp": "2017-10-06 8:05",
            "demand_value": "1.80966"
          }, {
            "timestamp": "2017-10-06 8:10",
            "demand_value": "3.72548"
          }, {
            "timestamp": "2017-10-06 8:15",
            "demand_value": "0.88219"
          }, {
            "timestamp": "2017-10-06 8:20",
            "demand_value": "0.55045"
          }, {
            "timestamp": "2017-10-06 8:25",
            "demand_value": "4.28882"
          }, {
            "timestamp": "2017-10-06 8:30",
            "demand_value": "4.34476"
          }, {
            "timestamp": "2017-10-06 8:35",
            "demand_value": "1.527"
          }, {
            "timestamp": "2017-10-06 8:40",
            "demand_value": "0.54752"
          }, {
            "timestamp": "2017-10-06 8:45",
            "demand_value": "3.22985"
          }, {
            "timestamp": "2017-10-06 8:50",
            "demand_value": "4.34281"
          }, {
            "timestamp": "2017-10-06 8:55",
            "demand_value": "1.37979"
          }, {
            "timestamp": "2017-10-06 9:00",
            "demand_value": "1.31893"
          }, {
            "timestamp": "2017-10-06 9:05",
            "demand_value": "4.37911"
          }, {
            "timestamp": "2017-10-06 9:10",
            "demand_value": "2.89418"
          }, {
            "timestamp": "2017-10-06 9:15",
            "demand_value": "0.56519"
          }, {
            "timestamp": "2017-10-06 9:20",
            "demand_value": "0.53574"
          }, {
            "timestamp": "2017-10-06 9:25",
            "demand_value": "1.02547"
          }, {
            "timestamp": "2017-10-06 9:30",
            "demand_value": "3.1474"
          }, {
            "timestamp": "2017-10-06 9:35",
            "demand_value": "0.69179"
          }, {
            "timestamp": "2017-10-06 9:40",
            "demand_value": "0.52395"
          }, {
            "timestamp": "2017-10-06 9:45",
            "demand_value": "0.85668"
          }, {
            "timestamp": "2017-10-06 9:50",
            "demand_value": "2.3475"
          }, {
            "timestamp": "2017-10-06 9:55",
            "demand_value": "3.2946"
          }, {
            "timestamp": "2017-10-06 10:00",
            "demand_value": "0.64665"
          }, {
            "timestamp": "2017-10-06 10:05",
            "demand_value": "0.49158"
          }, {
            "timestamp": "2017-10-06 10:10",
            "demand_value": "0.51022"
          }, {
            "timestamp": "2017-10-06 10:15",
            "demand_value": "0.51904"
          }, {
            "timestamp": "2017-10-06 10:20",
            "demand_value": "0.52886"
          }, {
            "timestamp": "2017-10-06 10:25",
            "demand_value": "0.51904"
          }, {
            "timestamp": "2017-10-06 10:30",
            "demand_value": "0.7065"
          }, {
            "timestamp": "2017-10-06 10:35",
            "demand_value": "4.33594"
          }, {
            "timestamp": "2017-10-06 10:40",
            "demand_value": "2.68415"
          }, {
            "timestamp": "2017-10-06 10:45",
            "demand_value": "0.50629"
          }, {
            "timestamp": "2017-10-06 10:50",
            "demand_value": "0.5161"
          }, {
            "timestamp": "2017-10-06 10:55",
            "demand_value": "0.49746"
          }, {
            "timestamp": "2017-10-06 11:00",
            "demand_value": "1.64674"
          }, {
            "timestamp": "2017-10-06 11:05",
            "demand_value": "2.29451"
          }, {
            "timestamp": "2017-10-06 11:10",
            "demand_value": "2.42603"
          }, {
            "timestamp": "2017-10-06 11:15",
            "demand_value": "0.53375"
          }, {
            "timestamp": "2017-10-06 11:20",
            "demand_value": "0.5161"
          }, {
            "timestamp": "2017-10-06 11:25",
            "demand_value": "0.49548"
          }, {
            "timestamp": "2017-10-06 11:30",
            "demand_value": "0.52887"
          }, {
            "timestamp": "2017-10-06 11:35",
            "demand_value": "0.52592"
          }, {
            "timestamp": "2017-10-06 11:40",
            "demand_value": "0.54261"
          }, {
            "timestamp": "2017-10-06 11:45",
            "demand_value": "1.70661"
          }, {
            "timestamp": "2017-10-06 11:50",
            "demand_value": "0.98033"
          }, {
            "timestamp": "2017-10-06 11:55",
            "demand_value": "0.5269"
          }]
        },
        "69091872": {
          "meter_latitude": "49.05286",
          "threshold": "850",
          "meter_longitude": "-122.450578",
          "demand_ts": [{
            "timestamp": "2017-10-06 0:00",
            "demand_value": "548.2746"
          }, {
            "timestamp": "2017-10-06 0:05",
            "demand_value": "657.1771"
          }, {
            "timestamp": "2017-10-06 0:10",
            "demand_value": "733.4166"
          }, {
            "timestamp": "2017-10-06 0:15",
            "demand_value": "826.4194"
          }, {
            "timestamp": "2017-10-06 0:20",
            "demand_value": "832.1119"
          }, {
            "timestamp": "2017-10-06 0:25",
            "demand_value": "645.8314"
          }, {
            "timestamp": "2017-10-06 0:30",
            "demand_value": "648.3832"
          }, {
            "timestamp": "2017-10-06 0:35",
            "demand_value": "810.8732"
          }, {
            "timestamp": "2017-10-06 0:40",
            "demand_value": "831.523"
          }, {
            "timestamp": "2017-10-06 0:45",
            "demand_value": "851.8196"
          }, {
            "timestamp": "2017-10-06 0:50",
            "demand_value": "864.1467"
          }, {
            "timestamp": "2017-10-06 1:00",
            "demand_value": "797.8787"
          }, {
            "timestamp": "2017-10-06 1:05",
            "demand_value": "856.9624"
          }, {
            "timestamp": "2017-10-06 1:10",
            "demand_value": "882.5981"
          }, {
            "timestamp": "2017-10-06 1:15",
            "demand_value": "848.4041"
          }, {
            "timestamp": "2017-10-06 1:20",
            "demand_value": "852.5655"
          }, {
            "timestamp": "2017-10-06 1:25",
            "demand_value": "848.993"
          }, {
            "timestamp": "2017-10-06 1:30",
            "demand_value": "851.8981"
          }, {
            "timestamp": "2017-10-06 1:35",
            "demand_value": "853.4291"
          }, {
            "timestamp": "2017-10-06 1:40",
            "demand_value": "853.4291"
          }, {
            "timestamp": "2017-10-06 1:45",
            "demand_value": "736.665175"
          }, {
            "timestamp": "2017-10-06 2:00",
            "demand_value": "619.90125"
          }, {
            "timestamp": "2017-10-06 2:15",
            "demand_value": "503.137325"
          }, {
            "timestamp": "2017-10-06 2:20",
            "demand_value": "386.3734"
          }, {
            "timestamp": "2017-10-06 2:25",
            "demand_value": "547.2932"
          }, {
            "timestamp": "2017-10-06 2:30",
            "demand_value": "530.5397"
          }, {
            "timestamp": "2017-10-06 2:45",
            "demand_value": "513.7862"
          }, {
            "timestamp": "2017-10-06 3:00",
            "demand_value": "497.0327"
          }, {
            "timestamp": "2017-10-06 3:10",
            "demand_value": "480.2792"
          }, {
            "timestamp": "2017-10-06 3:15",
            "demand_value": "485.42205"
          }, {
            "timestamp": "2017-10-06 3:20",
            "demand_value": "490.5649"
          }, {
            "timestamp": "2017-10-06 3:30",
            "demand_value": "495.70775"
          }, {
            "timestamp": "2017-10-06 3:35",
            "demand_value": "500.8506"
          }, {
            "timestamp": "2017-10-06 3:40",
            "demand_value": "667.2664"
          }, {
            "timestamp": "2017-10-06 3:45",
            "demand_value": "648.91708"
          }, {
            "timestamp": "2017-10-06 3:50",
            "demand_value": "630.56776"
          }, {
            "timestamp": "2017-10-06 4:00",
            "demand_value": "612.21844"
          }, {
            "timestamp": "2017-10-06 4:15",
            "demand_value": "593.86912"
          }, {
            "timestamp": "2017-10-06 4:25",
            "demand_value": "575.5198"
          }, {
            "timestamp": "2017-10-06 4:30",
            "demand_value": "834.4674"
          }, {
            "timestamp": "2017-10-06 4:45",
            "demand_value": "746.5681"
          }, {
            "timestamp": "2017-10-06 4:50",
            "demand_value": "939.1693"
          }, {
            "timestamp": "2017-10-06 5:00",
            "demand_value": "840.0421"
          }, {
            "timestamp": "2017-10-06 5:05",
            "demand_value": "958.4058"
          }, {
            "timestamp": "2017-10-06 5:10",
            "demand_value": "774.8341"
          }, {
            "timestamp": "2017-10-06 5:15",
            "demand_value": "591.2624"
          }, {
            "timestamp": "2017-10-06 5:25",
            "demand_value": "407.6907"
          }, {
            "timestamp": "2017-10-06 5:30",
            "demand_value": "571.751"
          }, {
            "timestamp": "2017-10-06 5:35",
            "demand_value": "804.5919"
          }, {
            "timestamp": "2017-10-06 5:45",
            "demand_value": "830.8557"
          }, {
            "timestamp": "2017-10-06 5:50",
            "demand_value": "808.3607"
          }, {
            "timestamp": "2017-10-06 6:00",
            "demand_value": "837.2417"
          }, {
            "timestamp": "2017-10-06 6:15",
            "demand_value": "866.1227"
          }, {
            "timestamp": "2017-10-06 6:25",
            "demand_value": "895.0037"
          }, {
            "timestamp": "2017-10-06 6:30",
            "demand_value": "946.5106"
          }, {
            "timestamp": "2017-10-06 6:35",
            "demand_value": "798.3498"
          }, {
            "timestamp": "2017-10-06 6:40",
            "demand_value": "617.8403"
          }, {
            "timestamp": "2017-10-06 6:45",
            "demand_value": "728.3523"
          }, {
            "timestamp": "2017-10-06 6:50",
            "demand_value": "787.279"
          }, {
            "timestamp": "2017-10-06 6:55",
            "demand_value": "805.9659"
          }, {
            "timestamp": "2017-10-06 7:00",
            "demand_value": "746.7645"
          }, {
            "timestamp": "2017-10-06 7:05",
            "demand_value": "675.1966"
          }, {
            "timestamp": "2017-10-06 7:10",
            "demand_value": "762.35"
          }, {
            "timestamp": "2017-10-06 7:15",
            "demand_value": "766.7076"
          }, {
            "timestamp": "2017-10-06 7:20",
            "demand_value": "771.7327"
          }, {
            "timestamp": "2017-10-06 7:25",
            "demand_value": "741.7001"
          }, {
            "timestamp": "2017-10-06 7:30",
            "demand_value": "623.8075"
          }, {
            "timestamp": "2017-10-06 7:35",
            "demand_value": "665.8531"
          }, {
            "timestamp": "2017-10-06 7:40",
            "demand_value": "730.7471"
          }, {
            "timestamp": "2017-10-06 7:45",
            "demand_value": "620.8239"
          }, {
            "timestamp": "2017-10-06 7:50",
            "demand_value": "605.2776"
          }, {
            "timestamp": "2017-10-06 7:55",
            "demand_value": "720.5792"
          }, {
            "timestamp": "2017-10-06 8:00",
            "demand_value": "735.7721"
          }, {
            "timestamp": "2017-10-06 8:05",
            "demand_value": "692.5488"
          }, {
            "timestamp": "2017-10-06 8:10",
            "demand_value": "561.4261"
          }, {
            "timestamp": "2017-10-06 8:15",
            "demand_value": "725.879"
          }, {
            "timestamp": "2017-10-06 8:20",
            "demand_value": "751.7502"
          }, {
            "timestamp": "2017-10-06 8:25",
            "demand_value": "574.1851"
          }, {
            "timestamp": "2017-10-06 8:30",
            "demand_value": "563.546"
          }, {
            "timestamp": "2017-10-06 8:35",
            "demand_value": "688.1518"
          }, {
            "timestamp": "2017-10-06 8:40",
            "demand_value": "749.1984"
          }, {
            "timestamp": "2017-10-06 8:45",
            "demand_value": "620.5098"
          }, {
            "timestamp": "2017-10-06 8:50",
            "demand_value": "559.3847"
          }, {
            "timestamp": "2017-10-06 8:55",
            "demand_value": "691.8421"
          }, {
            "timestamp": "2017-10-06 9:00",
            "demand_value": "694.7473"
          }, {
            "timestamp": "2017-10-06 9:05",
            "demand_value": "573.3607"
          }, {
            "timestamp": "2017-10-06 9:10",
            "demand_value": "621.5698"
          }, {
            "timestamp": "2017-10-06 9:15",
            "demand_value": "748.4918"
          }, {
            "timestamp": "2017-10-06 9:20",
            "demand_value": "771.183"
          }, {
            "timestamp": "2017-10-06 9:25",
            "demand_value": "733.9662"
          }, {
            "timestamp": "2017-10-06 9:30",
            "demand_value": "657.6089"
          }, {
            "timestamp": "2017-10-06 9:35",
            "demand_value": "760.3085"
          }, {
            "timestamp": "2017-10-06 9:40",
            "demand_value": "772.989"
          }, {
            "timestamp": "2017-10-06 9:45",
            "demand_value": "762.4677"
          }, {
            "timestamp": "2017-10-06 9:50",
            "demand_value": "681.949"
          }, {
            "timestamp": "2017-10-06 9:55",
            "demand_value": "631.031"
          }, {
            "timestamp": "2017-10-06 10:00",
            "demand_value": "756.3434"
          }, {
            "timestamp": "2017-10-06 10:05",
            "demand_value": "765.1766"
          }, {
            "timestamp": "2017-10-06 10:10",
            "demand_value": "789.9878"
          }, {
            "timestamp": "2017-10-06 10:15",
            "demand_value": "802.2756"
          }, {
            "timestamp": "2017-10-06 10:20",
            "demand_value": "794.9343"
          }, {
            "timestamp": "2017-10-06 10:25",
            "demand_value": "798.7424"
          }, {
            "timestamp": "2017-10-06 10:30",
            "demand_value": "773.4208"
          }, {
            "timestamp": "2017-10-06 10:35",
            "demand_value": "558.8351"
          }, {
            "timestamp": "2017-10-06 10:40",
            "demand_value": "654.2327"
          }, {
            "timestamp": "2017-10-06 10:45",
            "demand_value": "772.3608"
          }, {
            "timestamp": "2017-10-06 10:50",
            "demand_value": "771.8112"
          }, {
            "timestamp": "2017-10-06 10:55",
            "demand_value": "797.8787"
          }, {
            "timestamp": "2017-10-06 11:00",
            "demand_value": "734.0055"
          }, {
            "timestamp": "2017-10-06 11:05",
            "demand_value": "681.1638"
          }, {
            "timestamp": "2017-10-06 11:10",
            "demand_value": "670.7997"
          }, {
            "timestamp": "2017-10-06 11:15",
            "demand_value": "775.0696"
          }, {
            "timestamp": "2017-10-06 11:20",
            "demand_value": "789.1633"
          }, {
            "timestamp": "2017-10-06 11:25",
            "demand_value": "804.1208"
          }, {
            "timestamp": "2017-10-06 11:30",
            "demand_value": "816.9582"
          }, {
            "timestamp": "2017-10-06 11:35",
            "demand_value": "805.4948"
          }, {
            "timestamp": "2017-10-06 11:40",
            "demand_value": "810.0095"
          }, {
            "timestamp": "2017-10-06 11:45",
            "demand_value": "745.0371"
          }, {
            "timestamp": "2017-10-06 11:50",
            "demand_value": "775.6193"
          }, {
            "timestamp": "2017-10-06 11:55",
            "demand_value": "793.9921"
          }]
        },
        "68613969": {
          "meter_latitude": "49.058078",
          "threshold": "2000",
          "meter_longitude": "-122.449741",
          "demand_ts": [{
            "timestamp": "2017-10-06 0:00",
            "demand_value": "1755.221"
          }, {
            "timestamp": "2017-10-06 0:05",
            "demand_value": "1715.178"
          }, {
            "timestamp": "2017-10-06 0:10",
            "demand_value": "1815.875"
          }, {
            "timestamp": "2017-10-06 0:15",
            "demand_value": "1585.724"
          }, {
            "timestamp": "2017-10-06 0:20",
            "demand_value": "1631.361"
          }, {
            "timestamp": "2017-10-06 0:25",
            "demand_value": "2157.815"
          }, {
            "timestamp": "2017-10-06 0:30",
            "demand_value": "1921.48"
          }, {
            "timestamp": "2017-10-06 0:35",
            "demand_value": "1497.392"
          }, {
            "timestamp": "2017-10-06 0:40",
            "demand_value": "1556.673"
          }, {
            "timestamp": "2017-10-06 0:45",
            "demand_value": "1602.212"
          }, {
            "timestamp": "2017-10-06 0:50",
            "demand_value": "1631.067"
          }, {
            "timestamp": "2017-10-06 1:00",
            "demand_value": "1734.512"
          }, {
            "timestamp": "2017-10-06 1:05",
            "demand_value": "1729.114"
          }, {
            "timestamp": "2017-10-06 1:10",
            "demand_value": "1614.578"
          }, {
            "timestamp": "2017-10-06 1:15",
            "demand_value": "1607.61"
          }, {
            "timestamp": "2017-10-06 1:20",
            "demand_value": "1578.657"
          }, {
            "timestamp": "2017-10-06 1:25",
            "demand_value": "1593.968"
          }, {
            "timestamp": "2017-10-06 1:30",
            "demand_value": "1602.212"
          }, {
            "timestamp": "2017-10-06 1:35",
            "demand_value": "1607.708"
          }, {
            "timestamp": "2017-10-06 1:40",
            "demand_value": "1607.708"
          }, {
            "timestamp": "2017-10-06 1:45",
            "demand_value": "1419.80815"
          }, {
            "timestamp": "2017-10-06 2:00",
            "demand_value": "1231.9083"
          }, {
            "timestamp": "2017-10-06 2:15",
            "demand_value": "1044.00845"
          }, {
            "timestamp": "2017-10-06 2:20",
            "demand_value": "856.1086"
          }, {
            "timestamp": "2017-10-06 2:25",
            "demand_value": "1586.411"
          }, {
            "timestamp": "2017-10-06 2:30",
            "demand_value": "1518.347"
          }, {
            "timestamp": "2017-10-06 2:45",
            "demand_value": "1450.283"
          }, {
            "timestamp": "2017-10-06 3:00",
            "demand_value": "1382.219"
          }, {
            "timestamp": "2017-10-06 3:10",
            "demand_value": "1314.155"
          }, {
            "timestamp": "2017-10-06 3:15",
            "demand_value": "1285.81525"
          }, {
            "timestamp": "2017-10-06 3:20",
            "demand_value": "1257.4755"
          }, {
            "timestamp": "2017-10-06 3:30",
            "demand_value": "1229.13575"
          }, {
            "timestamp": "2017-10-06 3:35",
            "demand_value": "1200.796"
          }, {
            "timestamp": "2017-10-06 3:40",
            "demand_value": "1705.265"
          }, {
            "timestamp": "2017-10-06 3:45",
            "demand_value": "1664.672"
          }, {
            "timestamp": "2017-10-06 3:50",
            "demand_value": "1624.079"
          }, {
            "timestamp": "2017-10-06 4:00",
            "demand_value": "1583.486"
          }, {
            "timestamp": "2017-10-06 4:15",
            "demand_value": "1542.893"
          }, {
            "timestamp": "2017-10-06 4:25",
            "demand_value": "1502.3"
          }, {
            "timestamp": "2017-10-06 4:30",
            "demand_value": "1522.027"
          }, {
            "timestamp": "2017-10-06 4:45",
            "demand_value": "2259.788"
          }, {
            "timestamp": "2017-10-06 4:50",
            "demand_value": "1760.815"
          }, {
            "timestamp": "2017-10-06 5:00",
            "demand_value": "2341.151"
          }, {
            "timestamp": "2017-10-06 5:05",
            "demand_value": "1828.242"
          }, {
            "timestamp": "2017-10-06 5:10",
            "demand_value": "1430.064833"
          }, {
            "timestamp": "2017-10-06 5:15",
            "demand_value": "1031.887667"
          }, {
            "timestamp": "2017-10-06 5:25",
            "demand_value": "633.7105"
          }, {
            "timestamp": "2017-10-06 5:30",
            "demand_value": "1781.23"
          }, {
            "timestamp": "2017-10-06 5:35",
            "demand_value": "1673.073"
          }, {
            "timestamp": "2017-10-06 5:45",
            "demand_value": "1793.694"
          }, {
            "timestamp": "2017-10-06 5:50",
            "demand_value": "2022.865"
          }, {
            "timestamp": "2017-10-06 6:00",
            "demand_value": "2010.727333"
          }, {
            "timestamp": "2017-10-06 6:15",
            "demand_value": "1998.589667"
          }, {
            "timestamp": "2017-10-06 6:25",
            "demand_value": "1986.452"
          }, {
            "timestamp": "2017-10-06 6:30",
            "demand_value": "1797.915"
          }, {
            "timestamp": "2017-10-06 6:35",
            "demand_value": "1934.141"
          }, {
            "timestamp": "2017-10-06 6:40",
            "demand_value": "2175.972"
          }, {
            "timestamp": "2017-10-06 6:45",
            "demand_value": "1765.232"
          }, {
            "timestamp": "2017-10-06 6:50",
            "demand_value": "1464.219"
          }, {
            "timestamp": "2017-10-06 6:55",
            "demand_value": "1531.645"
          }, {
            "timestamp": "2017-10-06 7:00",
            "demand_value": "1731.176"
          }, {
            "timestamp": "2017-10-06 7:05",
            "demand_value": "1774.261"
          }, {
            "timestamp": "2017-10-06 7:10",
            "demand_value": "1417.404"
          }, {
            "timestamp": "2017-10-06 7:15",
            "demand_value": "1440.762"
          }, {
            "timestamp": "2017-10-06 7:20",
            "demand_value": "1450.381"
          }, {
            "timestamp": "2017-10-06 7:25",
            "demand_value": "1498.472"
          }, {
            "timestamp": "2017-10-06 7:30",
            "demand_value": "1910.684"
          }, {
            "timestamp": "2017-10-06 7:35",
            "demand_value": "1472.856"
          }, {
            "timestamp": "2017-10-06 7:40",
            "demand_value": "1393.26"
          }, {
            "timestamp": "2017-10-06 7:45",
            "demand_value": "1816.562"
          }, {
            "timestamp": "2017-10-06 7:50",
            "demand_value": "1720.281"
          }, {
            "timestamp": "2017-10-06 7:55",
            "demand_value": "1353.904"
          }, {
            "timestamp": "2017-10-06 8:00",
            "demand_value": "1404.939"
          }, {
            "timestamp": "2017-10-06 8:05",
            "demand_value": "1696.236"
          }, {
            "timestamp": "2017-10-06 8:10",
            "demand_value": "1813.029"
          }, {
            "timestamp": "2017-10-06 8:15",
            "demand_value": "1449.007"
          }, {
            "timestamp": "2017-10-06 8:20",
            "demand_value": "1400.817"
          }, {
            "timestamp": "2017-10-06 8:25",
            "demand_value": "2034.642"
          }, {
            "timestamp": "2017-10-06 8:30",
            "demand_value": "1781.328"
          }, {
            "timestamp": "2017-10-06 8:35",
            "demand_value": "1549.802"
          }, {
            "timestamp": "2017-10-06 8:40",
            "demand_value": "1417.306"
          }, {
            "timestamp": "2017-10-06 8:45",
            "demand_value": "1844.239"
          }, {
            "timestamp": "2017-10-06 8:50",
            "demand_value": "1846.301"
          }, {
            "timestamp": "2017-10-06 8:55",
            "demand_value": "1511.624"
          }, {
            "timestamp": "2017-10-06 9:00",
            "demand_value": "1484.045"
          }, {
            "timestamp": "2017-10-06 9:05",
            "demand_value": "1859.943"
          }, {
            "timestamp": "2017-10-06 9:10",
            "demand_value": "1664.338"
          }, {
            "timestamp": "2017-10-06 9:15",
            "demand_value": "1450.577"
          }, {
            "timestamp": "2017-10-06 9:20",
            "demand_value": "1438.211"
          }, {
            "timestamp": "2017-10-06 9:25",
            "demand_value": "1513.979"
          }, {
            "timestamp": "2017-10-06 9:30",
            "demand_value": "1891.055"
          }, {
            "timestamp": "2017-10-06 9:35",
            "demand_value": "1478.156"
          }, {
            "timestamp": "2017-10-06 9:40",
            "demand_value": "1446.357"
          }, {
            "timestamp": "2017-10-06 9:45",
            "demand_value": "1522.027"
          }, {
            "timestamp": "2017-10-06 9:50",
            "demand_value": "1854.741"
          }, {
            "timestamp": "2017-10-06 9:55",
            "demand_value": "1842.276"
          }, {
            "timestamp": "2017-10-06 10:00",
            "demand_value": "1443.805"
          }, {
            "timestamp": "2017-10-06 10:05",
            "demand_value": "1429.966"
          }, {
            "timestamp": "2017-10-06 10:10",
            "demand_value": "1511.231"
          }, {
            "timestamp": "2017-10-06 10:15",
            "demand_value": "1553.924"
          }, {
            "timestamp": "2017-10-06 10:20",
            "demand_value": "1504.361"
          }, {
            "timestamp": "2017-10-06 10:25",
            "demand_value": "1486.4"
          }, {
            "timestamp": "2017-10-06 10:30",
            "demand_value": "1496.117"
          }, {
            "timestamp": "2017-10-06 10:35",
            "demand_value": "2000.684"
          }, {
            "timestamp": "2017-10-06 10:40",
            "demand_value": "1710.074"
          }, {
            "timestamp": "2017-10-06 10:45",
            "demand_value": "1416.226"
          }, {
            "timestamp": "2017-10-06 10:50",
            "demand_value": "1473.936"
          }, {
            "timestamp": "2017-10-06 10:55",
            "demand_value": "1527.818"
          }, {
            "timestamp": "2017-10-06 11:00",
            "demand_value": "1682.201"
          }, {
            "timestamp": "2017-10-06 11:05",
            "demand_value": "1800.859"
          }, {
            "timestamp": "2017-10-06 11:10",
            "demand_value": "1773.869"
          }, {
            "timestamp": "2017-10-06 11:15",
            "demand_value": "1434.089"
          }, {
            "timestamp": "2017-10-06 11:20",
            "demand_value": "1496.117"
          }, {
            "timestamp": "2017-10-06 11:25",
            "demand_value": "1533.216"
          }, {
            "timestamp": "2017-10-06 11:30",
            "demand_value": "1555.298"
          }, {
            "timestamp": "2017-10-06 11:35",
            "demand_value": "1529.192"
          }, {
            "timestamp": "2017-10-06 11:40",
            "demand_value": "1526.247"
          }, {
            "timestamp": "2017-10-06 11:45",
            "demand_value": "1746.879"
          }, {
            "timestamp": "2017-10-06 11:50",
            "demand_value": "1634.011"
          }, {
            "timestamp": "2017-10-06 11:55",
            "demand_value": "1471.188"
          }]
        }
      }
    });
  }
  // tried using API call technique but failed 
  // going to hardcode data 
  // componentDidMount(){
  //   this.fetchData();
  // }
  // fetchData() {
  //     console.log('hello')
  //     let  data = [];
  //     return fetch("https://lilcortexbucket.blob.core.windows.net/public/meters.json")
  //     .then(json => {
  //         json.data.map((item, i) => {
  //             data.push(item)
  //     })
  //       this.setState({ 
  //           data: data
  //       });
  //     });
  //   }
    render() {
      return (
        <div className ="home">
          <header>
            <h1 className="companyTitle">Emagin</h1>
            <ul>
              {/* Would be wrapper in React Router */}
              <a><li>Home</li></a>
              <a><li>Solution</li></a>
              <a><li>Applications</li></a>
              <a><li>Company</li></a>
            </ul>
          </header>
          <GoogleMap 
            Location1 = {this.state.data[0]}
            Location2 = {this.state.data[1]}
            Location3 = {this.state.data[2]}
            Location4 = {this.state.data[3]}
          /> 
          <Chart />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));