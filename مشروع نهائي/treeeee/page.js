<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
type="text/javascript">
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawRightY);

function drawRightY() {
  var data = google.visualization.arrayToDataTable([
    ['City', '2010 Population', '2000 Population'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000]
  ]);

  var materialOptions = {
    chart: {
      title: 'Population of Largest U.S. Cities',
      subtitle: 'Based on most recent and previous census data'
    },
    hAxis: {
      title: 'Total Population',
      minValue: 0,
    },
    vAxis: {
      title: 'City'
    },
    bars: 'horizontal',
    axes: {
      y: {
        0: {side: 'right'}
      }
    }
  };
  var materialChart = new google.charts.Bar(document.getElementById('chart_div'));
  materialChart.draw(data, materialOptions);
}

// stop
google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }