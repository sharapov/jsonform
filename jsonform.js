            /**
            Рекурсивная функция для включения значений элеменов объекта
            в соответствующие элементы html. Имя элемента объекта должно
            быть равно идентификатору (id) элемента html.            
            **/
            function parseObjs(obj, parname) {
                for (var i in obj) {
                    if (obj[i] instanceof Array) {
                        if (obj instanceof Array)
                            parseObjs(obj[i], i);
                    } else if (obj[i] instanceof Object) {
                        if (obj instanceof Object && obj[i] instanceof Array)
                            parseObjs(obj[i], i);
                    } else if (obj.hasOwnProperty(i)) {
                        if (document.getElementById(i) !== null) {
                            $("#" + i).prop('value', obj[i]);
                        }
                    }
                }

            }

            /**
             * Содает из обычного массива индексированный
             * @param {type} formArray массив для индексации
             * @param {type} ifield поле по которому индексируем
             * @returns индексированный массив
             */
            function objectifyJson(formArray, ifield) {
                var returnArray = {};
                for (var i = 0; i < formArray.length; i++) {
                    if (formArray[i][ifield]) {
                        returnArray[formArray[i][ifield]] = formArray[i];
                    }
                }
                return returnArray;
            }

function inputsToObj(arr, obj){
var jsonForm={};
arr.each(function(index){
   jsonForm[$(this).attr("id")] = this.value;
   if(obj[$(this).attr("id")])obj[$(this).attr("id")]=this.value;
});
return jsonForm;
}

 function fillObjFromForm(obj, parname, arr) {
                for (var i in obj) {
                    if (obj[i] instanceof Array) {
                        if (obj instanceof Array)
                            fillObjFromForm(obj[i], i, arr);
                    } else if (obj[i] instanceof Object) {
                        if (obj instanceof Object && obj[i] instanceof Array)
			 for (var i1 in obj[i])fillObjFromForm(obj[i][i1], i1, arr);
			else fillObjFromForm(obj[i], i, arr);
                    } else if (obj.hasOwnProperty(i)) {
                        if (document.getElementById(i) !== null) {
				if(obj[i] !== undefined){
				if($("#" + i).prop('type') === 'checkbox')
					obj[i]=$("#" + i).is(':checked');
				else
					obj[i]=$("#" + i).prop('value');
				}
                        }
                    }
                }

return obj;            
}


