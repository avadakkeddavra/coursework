//jQuery.fn.extend({
//    polynome : function(){  
//    
//    }
//});

function initData(dataY,dataX){
    init();
    var dataY = dataY;
    var dataX = dataX;
    console.log(chart);
    builtChart(dataY,dataX);

}
function init()
{
        chart = Highcharts.chart('container', {
        chart:{
              type: 'line',  
        },
         yAxis: {
             tickInterval : 0.1,
         },
         xAxis: {
             tickInterval : 0.1,
         },
         series :[{
             data: [],
         }]
    });
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
   console.log(dataTemp);
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
   console.log(dataTemp);
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
        //console.log(dataY[i]);
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
        console.log(res);
    }
    
    return res;
}