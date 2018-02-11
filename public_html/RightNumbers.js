function onlyN() {
    var regexp = /[^0-9\и.-]/;
    document.getElementById('firstN').value = document.getElementById('firstN').value.replace(regexp, "");
    document.getElementById('secondN').value = document.getElementById('secondN').value.replace(regexp, "");
}
function count() {
            
    var result = [];
    var sel = document.getElementById("sing");
    var val = sel.options[sel.selectedIndex].value;
    if (val === "+") {
        var first = document.getElementById('firstN').value.split('и');
        var second = document.getElementById('secondN').value.split('и');
        if (first.length === second.length) {
            for (var f = 0; f < first.length; f++) {
                result.push(parseFloat(first[f]) + parseFloat(second[f]));
            }
        }


        if (first.length < second.length) {
            var delt1 = parseFloat(second.length) - parseFloat(first.length);
            for (var i = 0; i < delt1; i++) {
                first.push("0");
            }
            for (var b = 0; b < first.length; b++) {
                result.push(parseFloat(first[b]) + parseFloat(second[b]));
            }
        }
        if (first.length > second.length) {
            var delt2 = first.length - second.length;
            for (var e = 0; e < delt2; e++) {
                second.push("0");
            }
            for (var d = 0; d < first.length; d++) {
                result.push(parseFloat(first[d]) + parseFloat(second[d]));
            }

        }
    }

    if (val === "-") {
        var first = document.getElementById('firstN').value.split('и');
        var second = document.getElementById('secondN').value.split('и');
        if (first.length === second.length) {
            for (var f = 0; f < first.length; f++) {
                result.push(parseFloat(first[f]) - parseFloat(second[f]));
            }
        }


        if (first.length < second.length) {
            var delt1 = parseFloat(second.length) - parseFloat(first.length);
            for (var i = 0; i < delt1; i++) {
                first.push("0");
            }
            for (var b = 0; b < first.length; b++) {
                result.push(parseFloat(first[b]) - parseFloat(second[b]));
            }
        }
        if (first.length > second.length) {
            var delt2 = first.length - second.length;
            for (var e = 0; e < delt2; e++) {
                second.push("0");
            }
            for (var d = 0; d < first.length; d++) {
                result.push(parseFloat(first[d]) - parseFloat(second[d]));
            }

        }
    }
    if (val === "*") {
        var first = document.getElementById('firstN').value.split('и');
        var second = document.getElementById('secondN').value.split('и');

        if (first.length === second.length) {
            for (var f = 0; f < first.length; f++) {
                result.push(parseFloat(first[f]) * parseFloat(second[f]));
            }
        }


        if (first.length < second.length) {
            var delt1 = parseFloat(second.length) - parseFloat(first.length);
            for (var i = 0; i < delt1; i++) {
                first.push("0");
            }
            for (var b = 0; b < first.length; b++) {
                result.push(parseFloat(first[b]) * parseFloat(second[b]));
            }
        }
        if (first.length > second.length) {
            var delt2 = first.length - second.length;
            for (var e = 0; e < delt2; e++) {
                second.push("0");
            }
            for (var d = 0; d < first.length; d++) {
                result.push(parseFloat(first[d]) * parseFloat(second[d]));
            }
        }

    }
    if (val === "/") {
        var first = document.getElementById('firstN').value.split('и');
        var second = document.getElementById('secondN').value.split('и');
        if (first.length === second.length) {
            for (var f = 0; f < first.length; f++) {
                var res = parseFloat(first[f]) +val+ parseFloat(second[f]);
                result.push(eval(res));
                //result.push(parseFloat(first[f]) / parseFloat(second[f]));
            }
        }


        if (first.length < second.length) {
            var delt1 = parseFloat(second.length) - parseFloat(first.length);
            for (var i = 0; i < delt1; i++) {
                first.push("0");
            }
            for (var b = 0; b < first.length; b++) {
                result.push(parseFloat(first[b]) / parseFloat(second[b]));
            }
        }
        if (first.length > second.length) {
            var delt2 = first.length - second.length;
            for (var e = 0; e < delt2; e++) {
                second.push("0");
            }
            for (var d = 0; d < first.length; d++) {
                result.push(parseFloat(first[d]) / parseFloat(second[d]));
            }
        }
    }
    result = result.join('и');
    document.getElementById('result').value = result;
}
