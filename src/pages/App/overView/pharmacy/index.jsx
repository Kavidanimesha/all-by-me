import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { Grid, Typography } from '@mui/material';

function MyChart() {
  useEffect(() => {
    const chart = echarts.init(document.getElementById('brand'));

    const options = {
      xAxis: {
        type: 'category',
        data: ['Johnsons', 'Pizer', 'Mellow', 'Vic', 'THC', 'FCRE'],
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
        data: [150, 230, 224, 218, 135, 147],
        type: 'bar',
        color: '#D989B5'
      }]
    };

    chart.setOption(options);
  }, []);

  useEffect(() => {
    const chart = echarts.init(document.getElementById('drug'));

    const options = {
      xAxis: {
        type: 'category',
        data: ['Antibiotics', 'Antiemetics', 'Anesthetics', 'Antacids', 'Antipsychotics', 'Analgesics'],
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
        data: [50, 23, 24, 28, 35, 47],
        type: 'bar',
        color: '#6D67E4'
      }]
    };

    chart.setOption(options);
  }, []);


  
  return (
    <>
    <Grid container>
      <Grid item xs={12} align='center'> <Typography variant='h5'> Most Famaous Brands </Typography> </Grid>
      <Grid item xs={12} id="brand" style={{ width: '100%', height: 300 }}></Grid>
    </Grid>

    <Grid container>
      <Grid item xs={12} align='center'> <Typography variant='h5'> Most Famaous Drugs </Typography> </Grid>
      <Grid item xs={12} id="drug" style={{ width: '100%', height: 300 }}></Grid>
    </Grid>
    </>
  );
}

export default MyChart;
