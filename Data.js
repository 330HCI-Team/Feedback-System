var data = [{
    values: [29,35,20,8,4,4],
    labels: ['10-20', '20-30', '30-40','40-50','50-60','Above 60'],
    type: 'pie',
    title:'Products',
    domain: {
        column: 0
    },
},{
    values: [35,37,10,9,5,4],
    labels: ['10-20', '20-30', '30-40','40-50','50-60','Above 60'],
    type: 'pie',
    title:'Website',
    domain: {
        column: 1
    }
}
];

var layout = {
    title:'The age of people giving feedbacks (Current month)',
    grid: {rows: 1, columns: 2}
};

Plotly.newPlot('myDiv', data, layout);

var data1 = [
    {
        x: ['Physical Damage', 'Battery & Charging', 'Purchases', 'System performance', 'App & Features', 'Connectivity'],
        y: [456, 620, 304, 123, 76, 59],
        type: 'bar'
    }
];
var layout1 = {
    title:'The number of all feedback fields (Current month)',
};

Plotly.newPlot('myDiv2', data1,layout1);

var data2 = [{
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    y: [1002, 1340, 1240, 1567, 1234, 1670, 1403, 2603, 3005, 1598, 1783,1638],
    type: 'scatter'
}];
var layout2 = {
    title:'The feedback number of each month',
};
Plotly.newPlot('myDiv3', data2, layout2);