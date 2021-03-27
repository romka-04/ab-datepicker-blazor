window.dropdown = {
    custom_select: function (id, values, multiple) {

        if (values != undefined) {
            if (multiple) {
                if (Array.isArray(values)) {
                    var selectValues = values;
                }
                else {
                    var selectValues = values.split(',');
                }

                var selector = '#' + id + ' option';

                /* Iterate options of select element */
                for (const option of document.querySelectorAll(selector)) {
                    /* Parse value to integer */
                    const value = option.value;

                    /* If option value contained in values, set selected attribute */
                    if (selectValues.indexOf(value) !== -1) {
                        option.setAttribute('selected', 'selected');
                    }
                    /* Otherwise ensure no selected attribute on option */
                    else {
                        option.removeAttribute('selected');
                    }

                    //option.addEventListener("click", function () {
                    //    dropdown.onOptionSelect(option);
                    //});

                }
            }
            else {
                document.getElementById(id).value = values;
            }
        }
    },
    getSelectValues: function (select) {
        var result = [];
        var options = select && select.options;
        var opt;

        for (var i = 0, iLen = options.length; i < iLen; i++) {
            opt = options[i];

            if (opt.selected) {
                result.push(opt.value || opt.text);
            }
        }
        return result;
    },
    onOptionSelect: function (dotNetObject, selectId) {
        var values = dropdown.getSelectValues(document.getElementById(selectId));
        dotNetObject.invokeMethodAsync('OnOptionSelect', selectId, values);
    },
}
