export const uniqueVisitors: Highcharts.Options = {
  credits: {
    text: 'Mock Data'
  },
  title: {
    text: null

    // style: { fontWeight: 'bold', fontSize: '30px' }
  },
  yAxis: {
    title: {
      text: 'Visitors'
    }
  },
  xAxis: {
    categories: [
      '2AM',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      '10AM',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      '6PM'
    ]
  },
  series: [
    {
      type: 'line',
      name: 'Mobile',
      data: [
        1000, 2000, -300, 1000, 300, 400, 1000, 1000, 1000, 1000, 1000, 1000,
        1000, 1000, 1000, 1000
      ]
    },
    {
      type: 'line',
      name: 'Web',
      data: [
        20000, 20000, 21000, 20000, 21000, 20030, 20000, 20030, 20030, 20030,
        20030, 20030, 20030, 20030, 20030
      ]
    }
  ]
};
