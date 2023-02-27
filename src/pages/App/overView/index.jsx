import React, { useEffect } from 'react';
import * as echarts from 'echarts';

function MyChart() {
  useEffect(() => {
    const chart = echarts.init(document.getElementById('my-chart'));

    const options = {
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [150, 230, 224, 218, 135, 147],
        type: 'line',
        // set the color of the line
        color: 'red'
      }]
    };

    chart.setOption(options);
  }, []);

  return (
    <div>
      <div id="my-chart" style={{ width: '100%', height: 300 }}></div>
    </div>
  );
}

export default MyChart;
