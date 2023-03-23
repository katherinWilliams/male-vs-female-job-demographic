document.addEventListener('DOMContentLoaded', function () {
  const chart = Highcharts.chart('container', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Male and Female Labor Force Statistics from the Current Population Survey',
    },
    subtitle: {
      text: 'Source: <a href="https://www.bls.gov/cps/cpsaat11.htm" target="_blank">Bureau of Labor Statistics</a',
    },
    xAxis: {
      categories: [
        'Management',
        'Business/Financial Operations',
        'Computer/Mathematics',
        'Architecture/Engineering',
        'Life/Physical/Social Sciences',
        'Community/Social Services',
        'Legal',
        'Education/Training/Library',
        'Arts/Design/Entertainment/Sports/Media',
        'Healthcare Practioners/Technical',
        'Heathcare support',
        'Protective services',
        'Food prep and Serving',
        'Farming/Fishing/Forestry',
        'Construction/Installation/Maintenance/Repair',
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Percentage of',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Male',
        data: [
          59.5, 45.5, 73.3, 83.9, 51.8, 32.8, 47.4, 26.7, 51.2, 24.3, 15.4,
          76.8, 46.7, 73.8, 95.8,
        ],
      },
      {
        name: 'Female',
        data: [
          40.5, 54.5, 26.7, 16.1, 48.2, 67.2, 52.6, 73.3, 48.8, 75.7, 84.6,
          23.2, 53.3, 26.2, 4.2,
        ],
      },
    ],
  })
})
