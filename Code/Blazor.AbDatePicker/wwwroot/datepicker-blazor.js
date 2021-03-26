window.abDatepickerBlazor = {
    init: function (elementId, settings, date, dotnetHelper) {
        var elem = document.getElementById(elementId);
        if (!elem) {
            throw new Error('No element with ID ' + elementId);
        }
        console.log('settings-init', settings);

        var $elem = $(elem);
        $elem.datepicker(settings);

        var currDate = null;
        if (date) {
            // set date if initial date is provided
            currDate = new Date(date);
            $elem.datepicker('setDate', currDate);
        }
        $elem.on('change', function () {
            var oldVal = currDate;
            var newVal = $elem.datepicker('getDate');

            // solve issues with time zone shift
            var userTimezoneOffset = oldVal.getTimezoneOffset() * 60000;
            oldVal = new Date(oldVal.getTime() - userTimezoneOffset);

            userTimezoneOffset = newVal.getTimezoneOffset() * 60000;
            newVal = new Date(newVal.getTime() - userTimezoneOffset);

            // send data to Blazor component
            dotnetHelper.invokeMethodAsync('OnChangeAsync',
                oldVal.toJSON(),
                newVal.toJSON()
            );

            currDate = newVal;
        });
    },
    change: function (elementId, settings) {
        var elem = document.getElementById(elementId);
        if (!elem) {
            throw new Error('No element with ID ' + elementId);
        }
        console.log('settings-change', settings);

        $(elem).datepicker('theme', settings.theme);
    }
}