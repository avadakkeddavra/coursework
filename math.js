//jQuery.fn.extend({
//    polynome : function(){  
//    
//    }
//});
function builtChart(dataY,dataX){
    
     for(var i = 0; i < 5; i++){
         
        chart.series[0].addPoint([
            dataY[i],
            dataX[i],
        ]);
    }
}
$(document).ready(function(){
    var dataY = [-14.1014,-0.931596,0,0.931596,14.104];
    var dataX = [-1.5,-0.75,0,0.75,0.75,1.5];
    
    builtChart(dataY,dataX);
})
