window.abDatepickerBlazor = {
    init: function (elementId, settings, dotnetHelper) {
        var elem = document.getElementById(elementId);
        if (!elem) {
            throw new Error('No element with ID ' + elementId);
        }
        console.log('settings', settings);

        $(elem).datepicker(settings);
    }
}