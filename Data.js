var allLabels = ['Like', 'Dislike'];

var allValues = [
    [89,11],
    [75,25],
    [80,20],
    [93,7]
];

var ultimateColors = ['rgb(100, 220, 150)','rgb(205, 10, 36)',];

var data0 = [{
    values: allValues[0],
    labels: allLabels,
    type: 'pie',
    name: 'Starry Night',
    marker: {
        colors: ultimateColors
    },
    title:'iphone',
    domain: {
        row: 0,
        column: 0
    },
    hoverinfo: 'label+percent+name',
    textinfo: 'none'
},{
    values: allValues[1],
    labels: allLabels,
    type: 'pie',
    name: 'Sunflowers',
    title:'ipad',
    marker: {
        colors: ultimateColors
    },
    domain: {
        row: 1,
        column: 0
    },
    hoverinfo: 'label+percent+name',
    textinfo: 'none'
},{
    values: allValues[2],
    labels: allLabels,
    type: 'pie',
    name: 'Irises',
    title:'iWatch',
    marker: {
        colors: ultimateColors
    },
    domain: {
        row: 0,
        column: 1
    },
    hoverinfo: 'label+percent+name',
    textinfo: 'none'
},{
    values: allValues[3],
    labels: allLabels,
    type: 'pie',
    name: 'The Night Cafe',
    title:'Mac',
    marker: {
        colors: ultimateColors
    },
    domain: {
        x: [0.52,1],
        y: [0, 0.48]
    },
    hoverinfo: 'label+percent+name',
    textinfo: 'none'
}];

var layout0 = {
    // height: 400,
    // width: 500,
    title:'Satisfaction for each products',
    grid: {rows: 2, columns: 2}
};

Plotly.newPlot('myDiv0', data0, layout0);


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

// function newcomment(){

var username = localStorage.key(localStorage.length);
var comment = localStorage.getItem(username);
document.getElementById("name").innerHTML = username;
document.getElementById("feedback").innerHTML = comment;
// }

function turnforward(){
    var x;
    var r=confirm("Surprise! A coupon after game ")
    if (r == true ){
        window.location.href='reward1.html'
    }
}