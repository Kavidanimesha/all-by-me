import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { Grid, Typography } from '@mui/material';

function MyChart() {
  useEffect(() => {
    const chart = echarts.init(document.getElementById('most-diagnosed-disease'));

    const options = {
       
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '100%',
            data: [
              { value: 5, name: 'Cancer' },
              { value: 20, name: 'Heart Disease' },
              { value: 40, name: 'Diabetes' },
              { value: 12, name: "Alzheimer's" },
              { value: 60, name: 'Flu' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

    chart.setOption(options);
  }, []);

  useEffect(() => {
    const chart = echarts.init(document.getElementById('specialTests'));

    const options = {
      xAxis: {
        type: 'category',
        data: ['Immuno', 'Culture', 'HIV', 'ALT', 'THC', 'Bil'],
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
        data: [20, 18, 10, 30, 49, 35],
        type: 'bar',
        color: '#3B98B9'
      }]
    };

    chart.setOption(options);
  }, []);

  useEffect(() => {
    const chart = echarts.init(document.getElementById('vaccines'));

    const options = {
      xAxis: {
        type: 'category',
        data: ['Hib ', 'Hepatitis B', 'HPV ', 'DTaP ', 'Shingles', 'Polio'],
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
        data: [4, 3, 1, 7, 2, 9],
        type: 'bar',
        color: '#443C68'
      }]
    };

    chart.setOption(options);
  }, []);

  useEffect(() => {
    const chart = echarts.init(document.getElementById('specialTreatments'));

    const options = {
      xAxis: {
        type: 'category',
        data: ['Radiation ', 'Immunotherapy', 'Surgery', 'Dialysis', 'Stem ', 'Gene '],
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
        data: [15, 23, 22, 21, 13, 14],
        type: 'bar',
        color: '#A7727D'
      }]
    };

    chart.setOption(options);
  }, []);

  return (
    <>
    <Grid container>
        <Grid item xs={6} align='center' marginBottom={4}> <Typography variant='h6'> Most Diagnosed Diseases </Typography> </Grid>
        <Grid item xs={6} align='center' marginBottom={4}> <Typography variant='h6'> Special Tests </Typography> </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={6} id="most-diagnosed-disease" style={{ width: '100%', height: 300 }}></Grid>
      <Grid item xs={6} id="specialTests" style={{ width: '100%', height: 300 }}></Grid>
    </Grid>

    <Grid container>
        <Grid item xs={6} align='center' marginTop={4} > <Typography variant='h6'> Most Used Vaccines </Typography> </Grid>
        <Grid item xs={6} align='center' marginTop={4} > <Typography variant='h6'> Special Treatments </Typography> </Grid>
    </Grid>
    <Grid container>
        <Grid item xs={6} id="vaccines" style={{ width: '100%', height: 300 }}></Grid>
        <Grid item xs={6} id="specialTreatments" style={{ width: '100%', height: 300 }}></Grid>
    </Grid>
    </>
  );
}

export default MyChart;
