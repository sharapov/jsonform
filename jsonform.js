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

