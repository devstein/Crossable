//block call
(function () {

    //create all crossable bonds by cusip chart
    function crossable_top_by_cusip_hg_chart() {
        //var to catch any issues while getting data 
    //    var jqxhr_crossable_top_by_cusip_hg = $.get('../../datafiles/widget_data/hg_topbonds_crossed_by_cusip.csv', function (data) {
        var jqxhr_crossable_top_by_cusip_hg = $.get('hg_topbonds_crossed_by_cusip.csv', function (data) {
            var options = {
                //chart options 
                chart: {
                    //set type of graph, where it renders
                    type: 'line',
                    renderTo: 'crossable_top_by_cusip_hg_container'
                },
                //set title of graph
                title: {
                    text: 'TRACE High Grade Crossable Activity by Liquidity and CUSIPs',
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
                        text: 'TRACE HG Crossable Activity ( % )',
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
                    filename: 'MarketAxess_TRACE_crossable_top_by_cusips_hg',
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
            var names = ['Overall by CUSIPs', 'Overall Moving Average by CUSIPs', 
                        'Top by CUSIPs', 'Top Moving Average by CUSIPs', 'Out by CUSIPs', 'Out Moving Average by CUSIPs'];     

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
                    $('#crossable_top_by_vol_hg_container').toggle(true);

                    //switch buttons
                    $('.by_cusip_buttons').toggle(false)
                    $('.by_vol_buttons').toggle(true)
                }).add();


        })
            //catch and display any errors 
            .fail(function (jqxhr_crossable_top_by_cusip_hg, exception) {
                ajaxError(jqxhr_crossable_top_by_cusip_hg, exception, '#crossable_top_by_cusip_hg_container');
        });

    }

    //create all crossable bonds by cusip chart
    function crossable_top_by_vol_hg_chart() {
        //var to catch any issues while getting data 
    //    var jqxhr_crossable_top_by_cusip_hg = $.get('../../datafiles/widget_data/hg_topbonds_crossed_by_vol.csv', function (data) {
        var jqxhr_crossable_top_by_cusip_hg = $.get('hg_topbonds_crossed_by_vol.csv', function (data) {
            var options = {
                //chart options 
                chart: {
                    //set type of graph, where it renders
                    type: 'line',
                    renderTo: 'crossable_top_by_vol_hg_container'
                },
                //set title of graph
                title: {
                    text: 'TRACE High Grade Crossable Activity by Liquidity and Volume',
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
                        text: 'TRACE HG Crossable Activity ( % )',
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
                    filename: 'MarketAxess_TRACE_crossable_top_by_vol_hg',
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
            var names = ['Overall by Volume', 'Overall Moving Average by Volume', 
                        'Top by Volume', 'Top Moving Average by Volume', 'Out by Volume', 'Out Moving Average by Volume'];         
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
                    $('#crossable_top_by_cusip_hg_container').toggle(true);

                    //switch buttons
                    $('.by_vol_buttons').toggle(false)
                    $('.by_cusip_buttons').toggle(true)
                }).add();

        })
            //catch and display any errors 
            .fail(function (jqxhr_crossable_top_by_cusip_hg, exception) {
                ajaxError(jqxhr_crossable_top_by_cusip_hg, exception, '#crossable_top_by_vol_hg_container');
        });

    }


    //set high level chart options for all charts
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });

    $('.chart_container').toggle(false);
    crossable_top_by_cusip_hg_chart();
    $('#crossable_top_by_cusip_hg_container').toggle(true);
    crossable_top_by_vol_hg_chart();
    auto_assign_toggle_chart_buttons();

    $('.by_vol_buttons').toggle(false)
    $('.by_cusip_buttons').toggle(true)
})();
