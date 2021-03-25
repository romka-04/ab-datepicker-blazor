(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Selectați data ...",
		        "buttonLabel": "Faceți clic sau apăsați tasta Enter sau bara de spațiu pentru a deschide calendarul",
		        "prevButtonLabel": "Du-te la luna precedentă",
		        "nextButtonLabel": "Du-te la luna viitoare",
		        "closeButtonTitle": "Aproape",
		        "closeButtonLabel": "Închideți calendarul",
		        "prevMonthButtonLabel": "Du-te la anul precedent",
		        "prevYearButtonLabel": "Du-te la cei douăzeci de ani precedenți",
		        "nextMonthButtonLabel": "Du-te la anul viitor",
		        "nextYearButtonLabel": "Du-te la următorii douăzeci de ani",
		        "changeMonthButtonLabel": "Faceți clic sau apăsați tasta Enter sau bara de spațiu pentru a schimba luna",
		        "changeYearButtonLabel": "Faceți clic sau apăsați tasta Enter sau bara de spațiu pentru a schimba anul",
		        "changeRangeButtonLabel": "Faceți clic sau apăsați tasta sau bara de spațiu Enter pentru a merge la următorii douăzeci de ani",
		        "calendarHelp": "- Săgeată sus și Săgeată jos - merge la aceeași zi a săptămânii în săptămâna anterioară sau următoare, respectiv. Dacă se ajunge la sfârșitul lunii, continuă în luna următoare sau anterioară, după caz.\r\n- Săgeată stânga și Săgeată dreapta - avansează o zi la alta, de asemenea, într-un continuum. Accentul vizual este mutat de la o zi la alta și de la wraps rând la rând în grila de zile.\r\n- Control + Page Up - Mută ​​la aceeași dată, în anul precedent.\r\n- Control + Page Down - Mută ​​la aceeași dată în anul următor.\r\n- Acasă - se deplasează în prima zi a lunii curente.\r\n- End - Mută ​​la ultima zi a lunii curente.\r\n- Page Up - Mută ​​la aceeași dată în luna precedentă.\r\n- Page Down - Mută ​​la aceeași dată, în luna următoare.\r\n- Introduceți sau Espace - închide calendarul, iar data selectată este afișată în caseta de text asociat.\r\n- Escape - închide calendarul fără nici o acțiune."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "ianuarie",
		        "februarie",
		        "martie",
		        "aprilie",
		        "mai",
		        "iunie",
		        "iulie",
		        "august",
		        "septembrie",
		        "octombrie",
		        "noiembrie",
		        "decembrie"
		    ],
		    "month_names_abbreviated": [
		        "ian.",
		        "feb.",
		        "mar.",
		        "apr.",
		        "mai",
		        "iun.",
		        "iul.",
		        "aug.",
		        "sept.",
		        "oct.",
		        "nov.",
		        "dec."
		    ],
		    "month_names_narrow": [
		        "I",
		        "F",
		        "M",
		        "A",
		        "M",
		        "I",
		        "I",
		        "A",
		        "S",
		        "O",
		        "N",
		        "D"
		    ],
		    "day_names": [
		        "duminică",
		        "luni",
		        "marți",
		        "miercuri",
		        "joi",
		        "vineri",
		        "sâmbătă"
		    ],
		    "day_names_abbreviated": [
		        "Dum",
		        "Lun",
		        "Mar",
		        "Mie",
		        "Joi",
		        "Vin",
		        "Sâm"
		    ],
		    "day_names_short": [
		        "Du",
		        "Lu",
		        "Ma",
		        "Mi",
		        "Jo",
		        "Vi",
		        "Sâ"
		    ],
		    "day_names_narrow": [
		        "D",
		        "L",
		        "M",
		        "M",
		        "J",
		        "V",
		        "S"
		    ],
		    "day_periods": {
		        "am": "a.m.",
		        "noon": "la prânz",
		        "pm": "p.m."
		    },
		    "day_periods_abbreviated": {
		        "am": "a.m.",
		        "noon": "la prânz",
		        "pm": "p.m."
		    },
		    "day_periods_narrow": {
		        "am": "a.m.",
		        "noon": "prânz",
		        "pm": "p.m."
		    },
		    "quarter_names": [
		        "trimestrul I",
		        "trimestrul al II-lea",
		        "trimestrul al III-lea",
		        "trimestrul al IV-lea"
		    ],
		    "quarter_names_abbreviated": [
		        "trim. I",
		        "trim. II",
		        "trim. III",
		        "trim. IV"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "înainte de Hristos",
		        "după Hristos"
		    ],
		    "era_names_abbreviated": [
		        "î.Hr.",
		        "d.Hr."
		    ],
		    "era_names_narrow": [
		        "î.Hr.",
		        "d.Hr."
		    ],
		    "full_format": "EEEE, d MMMM y",
		    "long_format": "d MMMM y",
		    "medium_format": "d MMM y",
		    "short_format": "dd.MM.y",
		    "firstday_of_week": 1
		};
	}
})();