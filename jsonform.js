function parseObjs(obj){
                            for(var i in obj){//alert(typeof obj[i]+' '+i+'='+obj[i]);
                            if(typeof obj[i] == 'object'){
                                parseObjs(obj[i]);
                            }
                            else if(obj.hasOwnProperty(i)){
                                //console.log('obj[' + i + '] = ' + xmldata[i]);                              
                                //alert(document.getElementById(i));
                                if(document.getElementById(i) != null){ // && $("'#"+i+"'").value)
                                            $("#"+i).prop('value', obj[i]);
                            }
                        }
                    }

}
