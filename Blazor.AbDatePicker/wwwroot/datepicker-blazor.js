window.abDatepickerBlazor = {
    init: function (elementId, settings, date, next, previous, dotnetHelper) {
        var elem = document.getElementById(elementId);
        if (!elem) {
            throw new Error('No element with ID ' + elementId);
        }

        // in order to implement 'Linked Datepicker' (in other words date range picker)
        // it's required to populate fields 'Next' and 'Previous' which should contain ID of corresponding HTML element
        if (next) Object.assign(settings, { 'next': '#' + next });
        if (previous) Object.assign(settings, { 'previous': '#' + previous });

        //console.log('settings', settings);

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

            // solves issues with time zone shift
            var userTimezoneOffset;
            if (oldVal) {
                userTimezoneOffset = oldVal.getTimezoneOffset() * 60000;
                oldVal = new Date(oldVal.getTime() - userTimezoneOffset);
            }
            if (newVal) {
                userTimezoneOffset = newVal.getTimezoneOffset() * 60000;
                newVal = new Date(newVal.getTime() - userTimezoneOffset);
            }

            // send data to Blazor component
            dotnetHelper.invokeMethodAsync('OnChangeAsync',
                (oldVal) ? oldVal.toJSON() : null,
                (newVal) ? newVal.toJSON() : null
            );

            currDate = newVal;
        });
    },
    change: function (elementId, settings) {
        var elem = document.getElementById(elementId);
        if (!elem) {
            throw new Error('No element with ID ' + elementId);
        }

        var $elem = $(elem);
        $elem.datepicker('theme', settings.theme);
        $elem.datepicker('startview', settings.startView);
        $elem.datepicker('weekDayFormat', settings.weekDayFormat);
        $elem.datepicker('firstDayOfWeek', settings.firstDayOfWeek);
        $elem.datepicker('daysOfWeekDisabled', settings.disabledDayOfWeek);
        $elem.datepicker('outputFormat', settings.outputFormat);
        if (settings.minDate) {
            var min = /^\d{4}-\d{1,2}-\d{1,2}/.test(settings.minDate)
                ? $elem.datepicker('format', new Date(settings.minDate))
                : settings.minDate;
            $elem.datepicker('min', min);
        }
        if (settings.maxDate) {
            var max = /^\d{4}-\d{1,2}-\d{1,2}/.test(settings.maxDate)
                ? $elem.datepicker('format', new Date(settings.maxDate))
                : settings.maxDate;
            $elem.datepicker('max', max);
        }
        if (settings.modal) {
            $elem.datepicker('modal', settings.modal);
        }
        if (settings.inline) {
            $elem.datepicker('inline', settings.inline);
        } else {
            $elem.datepicker('inline', false);
        }
        if (settings.disable) {
            $elem.datepicker('disable', settings.disable);
        }

    }
}