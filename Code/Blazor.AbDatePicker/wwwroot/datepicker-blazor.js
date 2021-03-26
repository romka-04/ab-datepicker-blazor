window.abDatepickerBlazor = {
    init: function (elementId, settings, date, dotnetHelper) {
        var elem = document.getElementById(elementId);
        if (!elem) {
            throw new Error('No element with ID ' + elementId);
        }
        console.log('settings-init', settings);

        var $elem = $(elem);
        $elem.datepicker(settings);
        if (date) {
            // set date if initial date is provided
            var dateObject = new Date(date);
            $elem.datepicker('setDate', dateObject);
        }
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