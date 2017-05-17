    $(document).ready(function(){
        $('#breakPoints').on('focusout',function(){
            
            var numberOfBreakpoints = $(this).val();
            $('.xAxis').empty();
            $('.yAxis').empty();
            
            for (var i = 0; i < numberOfBreakpoints; i++)
            {
                $('.xAxis').append('<input type="number" name="X'+i+'" placeholder="x' + i + '">'); 
                $('.yAxis').append('<input type="number" name="Y'+i+'" placeholder="y' + i + '">'); 
            }
//            console.log(numberOfBreakpoints);
            $('.xAxis, .yAxis').slideDown();

          
        })
    });
        $(document).ready(function(){
            $('button[name="submit"]').click(function(e){
                e.preventDefault();
                var numberOfBreakpoints = $('#breakPoints').val();
                dataX = [];
                dataY =[];
                for(var i = 0; i < numberOfBreakpoints; i++)
                {
                    dataX[i] = Number($('.xAxis').children('input[name=X'+i+']').val());
                    dataY[i] = Number($('.yAxis').children('input[name=Y'+i+']').val());
                    
                }

                init();
                dataX2 = divisionDataX(dataX,25);
                       
                var Y = [];
                //console.log(dataX,dataY,dataX2);
                
                setTimeout(function(){
                    
                for(var i = 0; i < dataX2.length; i++)
                {
                     Y[i] = lagrange(dataX,dataY,dataX2[i]);
                     
                }
                console.log(Y); 
                },1000)
               
                setTimeout(function(){
                    initData(dataX2,Y);
                },1000);
            })
        })
        
$(document).ready(function(){
    $('button[name="submitInPoint"]').on('click',function(e){
        e.preventDefault();
        var PointValue = $('input[name="valueInPoint"]').val();
        PointValue = Number(PointValue);
        //console.log(PointValue);
        $('.answerPoint > .point').html(PointValue);
          var numberOfBreakpoints = $('#breakPoints').val();
                dataX = [];
                dataY =[];
                for(var i = 0; i < numberOfBreakpoints; i++)
                {
                    dataX[i] = Number($('.xAxis').children('input[name=X'+i+']').val());
                    dataY[i] = Number($('.yAxis').children('input[name=Y'+i+']').val());
                    
                }
        var Value = lagrange(dataX,dataY,PointValue);
        //console.log(Value);
        $('.answerPoint > .value').html(Value);
    })
})