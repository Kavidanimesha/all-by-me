import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { Grid, Typography } from '@mui/material';

function MyChart({heartRates}) {
  useEffect(() => {
    const chart = echarts.init(document.getElementById('BP'));

    const options = {
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLabel: {
          color: 'black'
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: 'black'
        }
      },
      series: [{
        data: [110, 102, 98, 104, 83, 80,112, 100, 99, 88, 119, 105],
        type: 'line',
        color: '#FF0000'
      }]
    };

    chart.setOption(options);
  }, []);

  useEffect(() => {
    const chart = echarts.init(document.getElementById('HR'));

    const options = {
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLabel: {
          color: 'black'
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: 'black'
        }
      },
      series: [{
        data: heartRates.map((rate) => rate.heartRate),
        type: 'line',
        color: '#060047'
      }]
    };

    chart.setOption(options);
  }, [heartRates]);

  useEffect(() => {
    const chart = echarts.init(document.getElementById('RR'));

    const options = {
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLabel: {
          color: 'black'
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: 'black'
        }
      },
      series: [{
        data: [6, 8, 6, 10, 11, 7,12, 8, 6, 9, 12, 11],
        type: 'line',
        color: '#46C2CB'
      }]
    };

    chart.setOption(options);
  }, []);

  useEffect(() => {
    const chart = echarts.init(document.getElementById('temp'));

    const options = {
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLabel: {
          color: 'black'
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: 'black'
        }
      },
      series: [{
        data: [96, 98, 96, 100, 131, 97,92, 98, 96, 99, 102, 101],
        type: 'line',
        color: '#F2CD5C'
      }]
    };

    chart.setOption(options);
  }, []);

  
  return (
    <>
    <Grid container>
        <Grid item xs={6} align='center' marginBottom={4}> <Typography variant='h6'> Blood Pressure  </Typography> </Grid>
        <Grid item xs={6} align='center' marginBottom={4}> <Typography variant='h6'> Heart Rate </Typography> </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={6} id="BP" style={{ width: '100%', height: 300 }}></Grid>
      <Grid item xs={6} id="HR" style={{ width: '100%', height: 300 }}></Grid>
    </Grid>

    <Grid container>
        <Grid item xs={6} align='center' marginBottom={4}> <Typography variant='h6'> Respiratory Rate  </Typography> </Grid>
        <Grid item xs={6} align='center' marginBottom={4}> <Typography variant='h6'> Temperature </Typography> </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={6} id="RR" style={{ width: '100%', height: 300 }}></Grid>
      <Grid item xs={6} id="temp" style={{ width: '100%', height: 300 }}></Grid>
    </Grid>

    
    </>
  );
}

export default MyChart;

export async function getStaticProps() {
  const res = await fetch("http://localhost:5050/records/heart-rate" , {
      method: "GET",
      options: {
          "Access-Control-Allow-Credentials": "*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT"
        
}})
  const heartRates = await res.json()
  return {
    props: {
      heartRates,
    },
  }
}