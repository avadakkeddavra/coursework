//jQuery.fn.extend({
//    polynome : function(){  
//    
//    }
//});
function builtChart(dataY,dataX){
   //chart.series[0].data.length = 0;
    
     for(var i = 0; i < dataY.length; i++){
         
        chart.series[0].addPoint([
            dataY[i],
            dataX[i],
        ]);
         
    }

    console.log(chart.series[0].data);
}
function initData(dataY,dataX,dataY2,dataX2){
    init();
    var dataY = dataY;
    var dataX = dataX;
    console.log(chart);
    builtChart(dataY,dataX);
    buildPoints(dataY2,dataX2);

}
function buildPoints(dataX,dataY)
{
     for(var i = 0; i < dataY.length; i++){
         
        chart.series[1].addPoint([
            dataY[i],
            dataX[i],
        ]);
     }
}
function init(dataX,dataY)
{
        chart = Highcharts.chart('container', {
        chart:{
              type: 'line',  
        },
        yAxis:{
            tickInterval : 0.5,
        },
        xAxis : {
            tickLength : 20,
            minRange : 10,
            tickPixelInterval: 10
        },
         series :
        [{
             data: []
         },
            {
             data: []
         }],
    });

}
function max(dataX){
    var max = dataX[0];    
    for(var i = 0; i < dataX.length;i++)
        {
            if(dataX[i]>max)
                {
                    max = dataX[i]
                }
        }
    return max;
}
function divisionDataX(dataX,divisionNum)
{
    var max = dataX[0];
    var min = dataX[0];
    
    for(var i = 0; i < dataX.length;i++)
        {
            if(dataX[i]>max)
                {
                    max = dataX[i]
                }
        }
     for(var i = 0; i < dataX.length;i++)
        {
            if(dataX[i]<min)
                {
                    min = dataX[i]
                }
        }
    var step=(max-min)/divisionNum;
    var dataTemp = [];
    dataTemp[0] = min;
    var i = 0;
    while(dataTemp[i] < max)
    {       
        dataTemp[i+1]=dataTemp[i]+step; 
        i++;   
    }
  //console.log(dataTemp);
    return dataTemp;
    //console.log(step);
}



function divisionDataY(dataY,divisionNum)
{
    var max = dataY[0];
    var min = dataY[0];
    
    for(var i = 0; i < dataY.length;i++)
        {
            if(dataY[i]>max)
                {
                    max = dataY[i]
                }
        }
     for(var i = 0; i < dataY.length;i++)
        {
            if(dataY[i]<min)
                {
                    min = dataY[i]
                }
        }
    var step=(max-min)/divisionNum;
    var dataTemp = [];
    dataTemp[0] = min;
    var i = 0;
    while(dataTemp[i] < max)
    {   
       
        
        dataTemp[i+1]=dataTemp[i]+step;
        
        i++;
        
    }
//   console.log(dataTemp);
    return dataTemp;
    //console.log(step);
}
function lagrange(dataX,dataY,x)
{
    var sum = 0;
    for(var i = 0; i < dataY.length; i++)
    {
        var Lagrange = dataY[i]*basispolynome(dataX,x,i);
        sum = sum + Lagrange;
        console.log(Lagrange/x);
    }
    return sum;
}
function basispolynome(dataX,x,n)
{
    var res = 1;   
    for(var i = 0; i < dataX.length; i++)
    {
        var baseCh = x - dataX[i];
        var baseZN = dataX[n]-dataX[i];
        var arg = baseCh/baseZN;
        if(n==i){
            arg  = 1;
        }
        res = res*arg;
//        console.log(res);
    }
    
    return res;
}