// ===========================|| DASHBOARD - BAJAJ AREA CHART ||=========================== //

const chartData = {
    type: 'area',
    height: 175,
    options: {
        chart: {
            id: 'support-chart',
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            colors: ['#60BA62'],
            curve: 'straight',
            width: 1
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: 'Ticket '
            },
            marker: {
                show: false
            }
        },
        fill: {
            colors: ['#60BA62'],
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 1,
                stops: [0, 60]
            }
        }
    },
    series: [
        {
            data: [0, 15, 10, 50, 30, 40, 25, 15, 10, 50, 30, 40, 25, 15, 10, 50, 30, 40, 25
                , 15, 10, 50, 30, 40, 25, 15, 10, 50, 30, 40, 25, 15, 10, 50, 30, 40, 25, 15, 10, 50, 30, 40, 25
            ]
        }
    ],
    colors: ['#60BA62']
};

export default chartData;
