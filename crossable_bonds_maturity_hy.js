//block call
(function () {

    //create all crossable bonds by cusip chart
    function crossable_maturity_by_cusip_hy_chart() {
        //var to catch any issues while getting data 
    //    var jqxhr_crossable_maturity_by_cusip_hy = $.get('../../datafiles/widget_data/hy_maturity_crossed_by_cusip.csv', function (data) {
        var jqxhr_crossable_maturity_by_cusip_hy = $.get('hy_maturity_crossed_by_cusip.csv', function (data) {
            var options = {
                //chart options 
                chart: {
                    //set type of graph, where it renders
                    type: 'line',
                    renderTo: 'crossable_maturity_by_cusip_hy_container'
                },
                //set title of graph
                title: {
                    text: 'TRACE High Yield Crossable Activity by Maturity and CUSIPs',
                    style: {
                        color: '#4D759E'
                    },
                    align: 'center'
                },
                //set xAxis title
                xAxis: {
                    title: {
                        text: 'Date',
                        style: {
                            color: '#4D759E',
                            fontWeight: 'bold'
                        }
                    }
                },
                //set yAxis info 
                yAxis: {
                    title: {
                        text: 'TRACE HY Crossable Activity ( % )',
                        style: {
                            color: '#4D759E',
                            fontWeight: 'bold'
                        }
                    },
                    //make y-axis labels %s
                    labels: {
                        formatter: function () {
                            return this.value + '%';
                        }
                    },
                    //set y-axis to the left side
                    opposite: false,
                    //set background grid line width
                    gridLineWidth: 1
                },
                //stylize the tooltip 
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
                    valueSuffix: '%',
                    valueDecimals: 2
                },
                //enable and stylize the legend
                legend: {
                    enabled: true,
                    layout: 'horizontal',
                    align: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    itemDistance: 20,
                    reversed: false
                },
                //set the starting range. 0-5. 5="All", 4="1yr", etc
                rangeSelector: {
                    selected: 4,
                    allButtonsEnabled: true
                },
                //set general plot options 
                plotOptions: {                
                //make the number of points allowed uncapped
                    series: {
                        turboThreshold: 0
                    }
                },
                //disable credits
                credits: {
                    enabled: false
                },
                //make download as csv format correctly
                navigator: {
                    series: {
                        includeInCSVExport: false
                    }
                },
                //set name of chart downloads
                exporting: {
                    filename: 'MarketAxess_TRACE_crossable_maturity_by_cusips_hy',
                    //enable download icon
                    enabled: true,
                    //add image to download
                    chartOptions: {
                        chart: {
                            events: {
                                load: function () {
                                    this.renderer.image('http://www.marketaxess.com/images/marketaxess_logo2.gif', 90, 75, 300, 48).attr({
                                        opacity: 0.1
                                        }).add();
                                }
                            }
                        },
                        //remove scrollbar and navigator from downloaded image
                        scrollbar: {
                            enabled: false
                        },
                        navigator:{
                            enabled: false
                        }
                    },
                    //make download as csv format correctly
                    csv: {
                        dateFormat: '%Y-%m-%d'
                    }
                },
                //set graph colors
                colors: ['#002244', '#99BBDD', '#DBBB33', '#FFEE66', '#83B354', '#55AA00', '#8254B0', '#5500AA'],
                //series to be filled by data 
                series: []
            };
            //names of labels in order of series. make sure they are the same as series header in data file
            var names = ['Overall by CUSIP', 'Overall Moving Average by CUSIP', 'Short by CUSIP',
                         'Short Moving Average by CUSIP', '5 Year by CUSIP', '5 Year Moving Average by CUSIP', '10 Year by CUSIP',
                         '10 Year Moving Average by CUSIP', 'Long by CUSIP', 'Long Moving Average by CUSIP'];            
            //get csv file, multiply by 100 (divide by .01) and populate chart
            readCSV(options, data, 0.01, names);

            //make moving average line appear behind
            for (var i = 0; i < options.series.length; i++){
                if (i % 2 === 0) options.series[i].zIndex = 2; 
                else             options.series[i].zIndex = 1;
            } 

            var chart = new Highcharts.StockChart(options);

            //make switch button
            chart.renderer.button('View by Volume',687, 83, function() {},
                {
                    //normal state (keep static to stop toggle dispay bug)
                     zIndex: 3,
                     width: 100,
                     height: 17,
                     'font-weight': 'bolder',
                     'font-style': 'oblique',
                     fill: '#99BBDD'
                }, 
                {//hover state
                }
                ).on('click', function () {                         
                    $('.chart_container').toggle(false);
                    $('#crossable_maturity_by_vol_hy_container').toggle(true);

                    //switch buttons
                    $('.by_cusip_buttons').toggle(false)
                    $('.by_vol_buttons').toggle(true)
                }).add();


        })
            //catch and display any errors 
            .fail(function (jqxhr_crossable_maturity_by_cusip_hy, exception) {
                ajaxError(jqxhr_crossable_maturity_by_cusip_hy, exception, '#crossable_maturity_by_cusip_hy_container');
        });

    }

    //create all crossable bonds by cusip chart
    function crossable_maturity_by_vol_hy_chart() {
        //var to catch any issues while getting data 
    //    var jqxhr_crossable_maturity_by_cusip_hy = $.get('../../datafiles/widget_data/hy_maturity_crossed_by_vol.csv', function (data) {
        var jqxhr_crossable_maturity_by_cusip_hy = $.get('hy_maturity_crossed_by_vol.csv', function (data) {
            var options = {
                //chart options 
                chart: {
                    //set type of graph, where it renders
                    type: 'line',
                    renderTo: 'crossable_maturity_by_vol_hy_container'
                },
                //set title of graph
                title: {
                    text: 'TRACE High Yield Crossable Activity by Maturity and Volume',
                    style: {
                        color: '#4D759E'
                    },
                    align: 'center'
                },
                //set xAxis title
                xAxis: {
                    title: {
                        text: 'Date',
                        style: {
                            color: '#4D759E',
                            fontWeight: 'bold'
                        }
                    }
                },
                //set yAxis info 
                yAxis: {
                    title: {
                        text: 'TRACE HY Crossable Activity ( % )',
                        style: {
                            color: '#4D759E',
                            fontWeight: 'bold'
                        }
                    },
                    //make y-axis labels %s
                    labels: {
                        formatter: function () {
                            return this.value + '%';
                        }
                    },
                    //set y-axis to the left side
                    opposite: false,
                    //set background grid line width
                    gridLineWidth: 1
                },
                //stylize the tooltip 
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
                    valueSuffix: '%',
                    valueDecimals: 2
                },
                //enable and stylize the legend
                legend: {
                    enabled: true,
                    layout: 'horizontal',
                    align: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    itemDistance: 20,
                    reversed: false
                },
                //set the starting range. 0-5. 5="All", 4="1yr", etc
                rangeSelector: {
                    selected: 4,
                    allButtonsEnabled: true
                },
                //set general plot options 
                plotOptions: {                
                //make the number of points allowed uncapped
                    series: {
                        turboThreshold: 0
                    }
                },
                //disable credits
                credits: {
                    enabled: false
                },
                //make download as csv format correctly
                navigator: {
                    series: {
                        includeInCSVExport: false
                    }
                },
                //set name of chart downloads
                exporting: {
                    filename: 'MarketAxess_TRACE_crossable_maturity_by_vol_hy',
                    //enable download icon
                    enabled: true,
                    //add image to download
                    chartOptions: {
                        chart: {
                            events: {
                                load: function () {
                                    this.renderer.image('http://www.marketaxess.com/images/marketaxess_logo2.gif', 90, 75, 300, 48).attr({
                                        opacity: 0.1
                                        }).add();
                                }
                            }
                        },
                        //remove scrollbar and navigator from downloaded image
                        scrollbar: {
                            enabled: false
                        },
                        navigator:{
                            enabled: false
                        }
                    },
                    //make download as csv format correctly
                    csv: {
                        dateFormat: '%Y-%m-%d'
                    }
                },
                //set graph colors
                colors: ['#002244', '#99BBDD', '#DBBB33', '#FFEE66','#83B354', '#55AA00', '#8254B0', '#5500AA'],
                //series to be filled by data 
                series: []
            };
            //names of labels in order of series. make sure they are the same as series header in data file
            var names = ['Overall by Volume', 'Overall Moving Average by Volume', 'Short by Volume',
                         'Short Moving Average by Volume', '5 Year by Volume', '5 Year Moving Average by Volume', '10 Year by Volume',
                         '10 Year Moving Average by Volume', 'Long by Volume', 'Long Moving Average by Volume'];            
            //get csv file, multiply by 100 (divide by .01) and populate chart
            readCSV(options, data, 0.01, names);

            //make moving average line appear behind
            for (var i = 0; i < options.series.length; i++){
                if (i % 2 === 0) options.series[i].zIndex = 2; 
                else             options.series[i].zIndex = 1;
            } 

            var chart = new Highcharts.StockChart(options); 

            //make switch button
            chart.renderer.button('View by CUSIPs',687, 83, function() {},
                {
                    //normal state (keep static to stop toggle dispay bug)
                     zIndex: 3,
                     width: 100,
                     height: 17,
                     'font-weight': 'bolder',
                     'font-style': 'oblique',
                     fill: '#99BBDD'
                }, 
                {//hover state
                }
                ).on('click', function () {                         
                    $('.chart_container').toggle(false);
                    $('#crossable_maturity_by_cusip_hy_container').toggle(true);

                    //switch buttons
                    $('.by_vol_buttons').toggle(false)
                    $('.by_cusip_buttons').toggle(true)
                }).add();

        })
            //catch and display any errors 
            .fail(function (jqxhr_crossable_maturity_by_cusip_hy, exception) {
                ajaxError(jqxhr_crossable_maturity_by_cusip_hy, exception, '#crossable_maturity_by_vol_hy_container');
        });

    }


    //set high level chart options for all charts
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });

    $('.chart_container').toggle(false);
    crossable_maturity_by_cusip_hy_chart();
    $('#crossable_maturity_by_cusip_hy_container').toggle(true);
    crossable_maturity_by_vol_hy_chart();
    auto_assign_toggle_chart_buttons();

    $('.by_vol_buttons').toggle(false)
    $('.by_cusip_buttons').toggle(true)
})();