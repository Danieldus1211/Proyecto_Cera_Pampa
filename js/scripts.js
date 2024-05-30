$(document).ready(function () {
    $('select').not('.noselectmenu').each(function (index, value) { if ($("#" + $(value).attr("id") + "-button").size() == 0) $(value).selectmenu({ style: 'dropdown', maxHeight: 170 }); }); setWindowHeight(); setMenuPosition(); $(window).resize(function () { setWindowHeight(); setMenuPosition(); }); $("#companySelect-button").attr('class', 'proyecto'); $("#companySelect-button").width($("#companySelect-menu").width());
    var t = null;
    $(".header2 .header-datos").mouseover(function () { ShowHideCompanies(true); if (t) clearTimeout(t); }); $(".header2 .header-datos").mouseout(function () { t = setTimeout("ShowHideCompanies(false);", 600); });
    $('textarea').keyup(checkmaxlength);
    var d = document;
    var safari = (navigator.userAgent.toLowerCase().indexOf('safari') != -1) ? true : false;
    var gebtn = function (parEl, child) { return parEl.getElementsByTagName(child); };
    var body = gebtn(d, 'body')[0];
    body.className = body.className && body.className != '' ? body.className + ' has-js' : 'has-js';
    if (typeof $.fancybox != "undefined") {
        $('.fancybox\\.ajax').fancybox({ scrolling: 'auto', closeBtn: false, beforeLoad: function () { $("body").css("overflow", "hidden"); }, beforeClose: function () { $.validity.clear(); }, afterClose: function () { $("body").css("overflow", "auto"); }, padding: '0px 0px 0px 0px', helpers: { overlay: { closeClick: false }, title: null } });
    }
});

$(document).ajaxError(function myErrorHandler(event, xhr, ajaxOptions, thrownError) {
    $("[waiting='1']").waiting('remove');
    if (xhr.status != '0') {
        if (window.CurrentCulture == 'es') {
            Alert("Se ha producido un error. Por favor reintenta más tarde.<br /> Si el error persiste, por favor contáctate con info@intiza.com<br/>Gracias<br/><br/>" + thrownError);
        }
        else {
            Alert("There was an error. Please retry later.<br /> If the error continue, please contact to info@intiza.com<br/>Thanks<br/><br/>" + thrownError);
        }
    }
});

function ShowLogOn()
{
    if (window.logondisplayed != true)
    {
        $.ajaxSetup({ cache: false });
        $.fancybox({
                topRatio: 0.05,
                type: 'ajax',
                href: '/' + window.CurrentCulture + '/accounttimeout/_logon',
                closeBtn: false,
                padding: '0px 0px 0px 0px',
                helpers: { overlay: { closeClick: false }, title: null },
                keys : { close  : null  }
            });
    }
    clearTimeout(sessionTimer);
}

function rePage(page, pageVar) {
    if (page >= 0) {
        $("#" + pageVar).val(page);
        rePaged(pageVar);
    }
}

function showIODetails(ioid, ro) {
    $.ajaxSetup({ cache: false });
    $.fancybox({
        topRatio: 0.05,
        type: 'ajax',
        href: '/' + window.CurrentCulture + '/io/_details?ioid=' + ioid + '&ro=' + ro,
        closeBtn: false,
        padding: '0px 0px 0px 0px',
        helpers: { overlay: { closeClick: false }, title: null },
        beforeClose: function () { fancyClosed(); }
    });
}

function checkmaxlength(obj) {
    if ($(this).attr('maxlength') != '') {
        var mx = parseInt($(this).attr('maxlength'));
        var qty = $(this).val().length;
        $('span#span' + $(this).attr('id')).html(qty + ' / ' + mx);
        if (qty > mx)
        {
            $(this).val($(this).val().substring(0, mx));
        }
    }
}

function gotoClient(id, first, last, e, navigate, from, filtered, next, prev) {
    try {
        if (e != null) e.stopPropagation();
    } catch (e) {

    }
    
    var filter = '';
    var text = '';
    if (typeof getFilter != 'undefined') {
        filter = encodeURIComponent(getFilter());
    }
    else if (typeof (filtersegmentid) != 'undefined') {
        data = 'selFields=-7&selList=' + filtersegmentid;
        filter += encodeURIComponent('filter0' + '=' + encodeURIComponent(data));
    }
    if ($('#buscador').length > 0) {
        text = encodeURIComponent($('#buscador').val())
    }

    var url = '/' + window.CurrentCulture + '/client/details?personid=' + id + '&filter=' + filter + '&text=' + text
        + '&page=' + $('#page').val() + '&sorted=' + $('#sortedField').val() + '&descending=' + $('#sortedDescending').val() + '&first=' + first + '&last=' + last + '&navigate=' + navigate + '&from=' + from + '&filtered=' + filtered + '&next=' + next + '&prev=' + prev;
    location = url;
}

function gotoCustomerPage(baseurl, t, c, id, obj) {
    if (t != '' && c != '') {
        window.open(baseurl + '?t=' + t + '&c=' + c, '_blank');
    }
    else {
        obj.waiting({ position: 'right' });
        $.ajax({
            url: '/' + window.CurrentCulture + '/client/gettoken?personid=' + id + '&d=' + new Date().getTime().toString(),
            dataType: "json",
            type: "POST",
            data: $('#formrvt').serialize(),
            success: function (data) {
                obj.waiting('remove');
                window.open(baseurl + '?t=' + data.token + '&c=' + data.check, '_blank');
            }
        });
    }
}

function ShowHideCompanies(show) { $(".tooltip-menu-datos").css("visibility", (show ? "visible" : "hidden")); } function supportClick() { addModal("supportContainer", "/home/_support", "Help", null, null); }
function setWindowHeight() { var windowHeight = $(window).height() - $("#header").height() - $("#footer").height() - 56; if ($(".fin-periodo").size() > 0) { windowHeight -= $(".fin-periodo").first().height(); } $("#bodyWrapper").css("min-height", windowHeight); $('.tooltip-menu-datos ul#companies').css('max-height', $(window).height() - 200); } function noPerm() { alert('@Html.Raw(ViewRes.Shared.NoPermission)'); } function setMenuPosition() { var left = 0; if ($(".proyecto .icon").offset() != null) left = $(".proyecto .icon").offset().left - 72; $(".tooltip-menu-datos").offset({ left: left }); };
switch (window.CurrentCulture) {
    case 'en':
        window.validDate = /^((0?\d)|(1[012]))[\/-]([012]?\d|30|31)[\/-]\d{1,4}$/;
        break;
    case 'es':
        window.validDate = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
        break;
}

function closeContactMe() {
    document.cookie = "contactme=0;expires=" + new Date(2030, 1, 1).toGMTString() + ';path=/';
    location.reload();
}

$.fn.setPersonSearch = function (options) {
    var defaults = {
        hiddenid: '#personid',
        group: 'group'
    };
    var optExtend = $.extend(defaults, options);
    $.ajaxSetup({
        // Disable caching of AJAX responses
        cache: false
    });
    $(this).each(function () {
        var base = $(this);
        base.setDefaultLabels();
        base.autocomplete('dispose');
        base.autocomplete({ serviceUrl: '/' + window.CurrentCulture + '/client/_getlist', onSelect: function (value, data) { $('[id="' + optExtend.hiddenid.replace('#','')  + '"]').val(value.data); $(optExtend.hiddenid).change(); $('#' + optExtend.group).enableGroupSelect({ personid: value.data, groupid: optExtend.group + 'id' }); } });
        base.keydown(function () { $(optExtend.hiddenid).val(''); $('#' + optExtend.group).val(''); $('#' + optExtend.group).attr('disabled', 'disabled'); });
    });
};

$.fn.enableGroupSelect = function (options) {
    var defaults = {
        groupid: 'groupid'
    };
    var optExtend = $.extend(defaults, options);
    $(this).each(function () {
        var base = $(this);
        base.setDefaultLabels();
        base.removeAttr('disabled');
        if (optExtend.groupid != '') {
            base.autocomplete('dispose');
            base.autocomplete({ serviceUrl: '/' + window.CurrentCulture + '/group/_getlist?personid=' + optExtend.personid, onSelect: function (value, data) { $('#' + optExtend.groupid).val(value.data); } });
            base.keydown(function (e) { if (!e.ctrlKey) $('#' + optExtend.groupid).val(''); });
        }
        else {
            base.autocomplete('dispose');
            base.autocomplete({ serviceUrl: '/' + window.CurrentCulture + '/group/_getlist?personid=' + optExtend.personid });
        }
    });
}

$.fn.clearForm = function () {
    return this.each(function () {
        var type = this.type, tag = this.tagName.toLowerCase();
        if (tag == 'form' || tag == 'div' || tag == 'table')
            return $(':input', this).clearForm();
        if (type == 'text' || type == 'password' || tag == 'textarea')
            this.value = '';
        else if (type == 'checkbox' || type == 'radio')
            this.checked = false;
        else if (tag == 'select')
            this.selectedIndex = 0;
        return false;
    });
};

$.fn.hasScrollBar = function() {
    return this.get(0).scrollHeight > this.height();
};

$.fn.addNumericTypeEvents = function(options) {
    var defaults = {
        allowNegative: false,
        allowDecimal: false,
        paddingRight: '0'
    };
    var opExtend = $.extend(defaults, options);

    this.keypress(function (event) {
        if (!isNumber(event, this, opExtend.allowNegative, opExtend.allowDecimal)) {
            event.preventDefault();
        }
        else {
            
            if (typeof opExtend.max != 'undefined') {
                var val = parseInt($(this).val() + event.char);
                if (val > opExtend.max)
                    event.preventDefault();
            }
        }
    });
    $(this).css("text-align", "right");
    $(this).css("padding-right", opExtend.paddingRight);
};

$.fn.addCheckBoxClass = function(options) {
    var defaults = {
        checked: false,
        checkedClass: "c_on",
        nonCheckedClass: "c_off"
    };
    var opExtend = $.extend(defaults, options);
    var base = $(this);
    return base.each(function(index, obj) {
        if (opExtend.checked)
            $(obj).addClass(opExtend.checkedClass);
        else
            $(obj).addClass(opExtend.nonCheckedClass);
        $(obj).find(":checkbox").attr("checked", opExtend.checked);
        $(obj).find(":checkbox").click(function() {
            $(obj).toggleClass(opExtend.checkedClass);
            $(obj).toggleClass(opExtend.nonCheckedClass);
        });
    });
};

$.fn.addCurrencyTypeEvents = function(options) {
    var defaults = {
        currencySymbol: '',
        onBlurFunction: null,
        allowNegative: true,
        decimals: 2,
        allowNull: false
    };
    var opExtend = $.extend(defaults, options);
    return this.each(function() {
        $(this).focus(function () {
            if (opExtend.currencySymbol != '')
                $(this).val($(this).val().replace(opExtend.currencySymbol, ""));
            this.select();
        });
        $(this).keypress(function (event) {
            if (!isNumber(event, this, opExtend.allowNegative)) {
                event.preventDefault();
            }
        });

        $(this).blur(function () {
            $(this).val($(this).val().replace(opExtend.currencySymbol, ""));
            if ($(this).val() != '' || opExtend.allowNull != true)
            {
                $(this).val(opExtend.currencySymbol + formatNumber($(this).val(), opExtend.decimals));
            }
            if (opExtend.onBlurFunction != null)
                window[opExtend.onBlurFunction].call(this);
        });

        $(this).css("text-align", "right");
    });
};

$.fn.removeCurrencyTypeEvents = function() {
    return this.each(function() {
        $(this).off('focus');
        $(this).off('keypress');
        $(this).off('blur');
    });
};

$.fn.generateAutoComplete = function (options) {
    var defaults = {
        url: null,
        idToUpdate: null,
        notFoundFunc: null,
        foundFunc: null,
        allowNonSelection: "false"
    };
    var opExtend = $.extend(defaults, options);

    if (opExtend.url == null)
        throw "url cannot be Null";

    this.autocomplete({
        source: function (request, response) {

            $.ajax({
                url: opExtend.url + '&d=' + new Date().getTime().toString(),
                data: request + '&' + $('#formrvt').serialize(),
                dataType: "json",
                type: "POST",
                success: function (data) {
                    response($.map(data, function (item) {
                        return { label: item.name, value: item.name, id: item.RowKey };
                    }));
                }
            });
        },
        minLength: 2,
        select: function (event, ui) {
            if (ui.item.id == "00000000-0000-0000-0000-000000000000") {
                if (opExtend.notFoundFunc != null) {
                    var person = [];
                    person.Selector = this;
                    person.IdToUpdate = opExtend.idToUpdate;
                    person.Name = ui.item.value;
                    window[opExtend.notFoundFunc].call(this, person);
                }
                $(this).val("");
                if (opExtend.idToUpdate != null)
                    $("#" + opExtend.idToUpdate).val("");
            } else {
                if (opExtend.idToUpdate != null) {
                    $("#" + opExtend.idToUpdate).val(ui.item.id);
                    $("#" + opExtend.idToUpdate).change();
                }
                if (opExtend.foundFunc != null)
                    window[opExtend.foundFunc].call(this, ui.item.id);
            }
        },
        focus: function (event, ui) {
            ui.item.value = ui.item.value.replace(" (Agregar)", "");
        }
    }).bind("change", function () {
        if ($(this).data("autocomplete").selectedItem == null && opExtend.allowNonSelection == "false") {
            $(this).val("");
            if (opExtend.idToUpdate != null)
                $("#" + opExtend.idToUpdate).val("");
        }
    });
};

if (window.CurrentCulture == "es") {
    Date.CultureInfo = { name: "es", englishName: "Spanish (Spain)", nativeName: "Spanish (Spain)", dateFormat: "dd/mm/yy", dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"], abbreviatedDayNames: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"], shortestDayNames: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], firstLetterDayNames: ["D", "L", "M", "M", "J", "V", "S"], monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], abbreviatedMonthNames: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"], amDesignator: "AM", pmDesignator: "PM", firstDayOfWeek: 0, twoDigitYearMax: 2029, dateElementOrder: "dmy", formatPatterns: { shortDate: "d/M/yyyy", longDate: "dddd, MMMM dd, yyyy", shortTime: "h:mm tt", longTime: "h:mm:ss tt", fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt", sortableDateTime: "yyyy-MM-ddTHH:mm:ss", universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ", rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT", monthDay: "MMMM dd", yearMonth: "MMMM, yyyy" }, regexPatterns: { jan: /^jan(uary)?/i, feb: /^feb(ruary)?/i, mar: /^mar(ch)?/i, apr: /^apr(il)?/i, may: /^may/i, jun: /^jun(e)?/i, jul: /^jul(y)?/i, aug: /^aug(ust)?/i, sep: /^sep(t(ember)?)?/i, oct: /^oct(ober)?/i, nov: /^nov(ember)?/i, dec: /^dec(ember)?/i, sun: /^su(n(day)?)?/i, mon: /^mo(n(day)?)?/i, tue: /^tu(e(s(day)?)?)?/i, wed: /^we(d(nesday)?)?/i, thu: /^th(u(r(s(day)?)?)?)?/i, fri: /^fr(i(day)?)?/i, sat: /^sa(t(urday)?)?/i, future: /^next/i, past: /^last|past|prev(ious)?/i, add: /^(\+|after|from)/i, subtract: /^(\-|before|ago)/i, yesterday: /^yesterday/i, today: /^t(oday)?/i, tomorrow: /^tomorrow/i, now: /^n(ow)?/i, millisecond: /^ms|milli(second)?s?/i, second: /^sec(ond)?s?/i, minute: /^min(ute)?s?/i, hour: /^h(ou)?rs?/i, week: /^w(ee)?k/i, month: /^m(o(nth)?s?)?/i, day: /^d(ays?)?/i, year: /^y((ea)?rs?)?/i, shortMeridian: /^(a|p)/i, longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i, timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i, ordinalSuffix: /^\s*(st|nd|rd|th)/i, timeContext: /^\s*(\:|a|p)/i }, abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" }, abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" } };
}
else {
    Date.CultureInfo = { name: "en", englishName: "English (US)", nativeName: "English (US)", dateFormat: "mm/dd/yy", dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"], monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"], amDesignator: "AM", pmDesignator: "PM", firstDayOfWeek: 0, twoDigitYearMax: 2029, dateElementOrder: "mdy", formatPatterns: { shortDate: "M/d/yyyy", longDate: "MMMM dd, dddd, yyyy", shortTime: "h:mm tt", longTime: "h:mm:ss tt", fullDateTime: "MMMM dd, dddd, yyyy h:mm:ss tt", sortableDateTime: "yyyy-MM-ddTHH:mm:ss", universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ", rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT", monthDay: "MMMM dd", yearMonth: "MMMM, yyyy" }, regexPatterns: { jan: /^jan(uary)?/i, feb: /^feb(ruary)?/i, mar: /^mar(ch)?/i, apr: /^apr(il)?/i, may: /^may/i, jun: /^jun(e)?/i, jul: /^jul(y)?/i, aug: /^aug(ust)?/i, sep: /^sep(t(ember)?)?/i, oct: /^oct(ober)?/i, nov: /^nov(ember)?/i, dec: /^dec(ember)?/i, sun: /^su(n(day)?)?/i, mon: /^mo(n(day)?)?/i, tue: /^tu(e(s(day)?)?)?/i, wed: /^we(d(nesday)?)?/i, thu: /^th(u(r(s(day)?)?)?)?/i, fri: /^fr(i(day)?)?/i, sat: /^sa(t(urday)?)?/i, future: /^next/i, past: /^last|past|prev(ious)?/i, add: /^(\+|after|from)/i, subtract: /^(\-|before|ago)/i, yesterday: /^yesterday/i, today: /^t(oday)?/i, tomorrow: /^tomorrow/i, now: /^n(ow)?/i, millisecond: /^ms|milli(second)?s?/i, second: /^sec(ond)?s?/i, minute: /^min(ute)?s?/i, hour: /^h(ou)?rs?/i, week: /^w(ee)?k/i, month: /^m(o(nth)?s?)?/i, day: /^d(ays?)?/i, year: /^y((ea)?rs?)?/i, shortMeridian: /^(a|p)/i, longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i, timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i, ordinalSuffix: /^\s*(st|nd|rd|th)/i, timeContext: /^\s*(\:|a|p)/i }, abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" }, abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" } };
}

$.fn.addDatePicker = function(options) {
    var defaults = {
        dateFormat: "dd/mm/yy",
        buttonImage: "/Content/img/calendar.gif",
        buttonImageOnly: true,
        showAnim: "show",
        minDate: null,
        maxDate: null,
        dateFormat: Date.CultureInfo.dateFormat,
        dayNames: Date.CultureInfo.dayNames,
        dayNamesMin: Date.CultureInfo.abbreviatedDayNames,
        dayNamesShort: Date.CultureInfo.firstLetterDayNames,
        monthNames: Date.CultureInfo.monthNames,
        monthNamesShort: Date.CultureInfo.abbreviatedMonthNames
    };
    var opExtend = $.extend(defaults, options);
    //this.attr('readonly', true);
    this.datepicker(opExtend);

    //this.datepicker({
    //    buttonImage: opExtend.buttonImage,
    //    buttonImageOnly: opExtend.buttonImageOnly,
    //    showAnim: opExtend.showAnim,
    //    minDate: opExtend.minDate,
    //    maxDate: opExtend.maxDate,
    //    dateFormat: Date.CultureInfo.dateFormat,
    //    dayNames: Date.CultureInfo.dayNames,
    //    dayNamesMin: Date.CultureInfo.abbreviatedDayNames,
    //    dayNamesShort: Date.CultureInfo.firstLetterDayNames,
    //    monthNames: Date.CultureInfo.monthNames,
    //    monthNamesShort: Date.CultureInfo.abbreviatedMonthNames,
    //    showOptions: opExtend.showOptions
    //});
};

$.ui.plugin.add("resizable", "alsoResizeReverse", {
    start: function (event, ui) {

        var self = $(this).data("resizable"), o = self.options;

        var _store = function (exp) {
            $(exp).each(function () {
                $(this).data("resizable-alsoresize-reverse", {
                    width: parseInt($(this).width(), 10), height: parseInt($(this).height(), 10),
                    left: parseInt($(this).css('left'), 10), top: parseInt($(this).css('top'), 10)
                });
            });
        };

        if (typeof (o.alsoResizeReverse) == 'object' && !o.alsoResizeReverse.parentNode) {
            if (o.alsoResizeReverse.length) { o.alsoResize = o.alsoResizeReverse[0]; _store(o.alsoResizeReverse); }
            else { $.each(o.alsoResizeReverse, function (exp, c) { _store(exp); }); }
        } else {
            _store(o.alsoResizeReverse);
        }
    },

    resize: function (event, ui) {
        var self = $(this).data("resizable"), o = self.options, os = self.originalSize, op = self.originalPosition;

        var delta = {
            height: (self.size.height - os.height) || 0, width: (self.size.width - os.width) || 0,
            top: (self.position.top - op.top) || 0, left: (self.position.left - op.left) || 0
        },

        _alsoResizeReverse = function (exp, c) {
            $(exp).each(function () {
                var el = $(this), start = $(this).data("resizable-alsoresize-reverse"), style = {}, css = c && c.length ? c : ['width', 'height', 'top', 'left'];

                $.each(css || ['width', 'height', 'top', 'left'], function (i, prop) {
                    var sum = (start[prop] || 0) - (delta[prop] || 0); // subtracting instead of adding
                    if (sum && sum >= 0)
                        style[prop] = sum || null;
                });

                //Opera fixing relative position
                if (/relative/.test(el.css('position')) && $.browser.opera) {
                    self._revertToRelativePosition = true;
                    el.css({ position: 'absolute', top: 'auto', left: 'auto' });
                }

                el.css(style);
            });
        };

        if (typeof (o.alsoResizeReverse) == 'object' && !o.alsoResizeReverse.nodeType) {
            $.each(o.alsoResizeReverse, function (exp, c) { _alsoResizeReverse(exp, c); });
        } else {
            _alsoResizeReverse(o.alsoResizeReverse);
        }
    },

    stop: function (event, ui) {
        var self = $(this).data("resizable");
        if (self._revertToRelativePosition && $.browser.opera) {
            self._revertToRelativePosition = false;
            el.css({ position: 'relative' });
        }

        $(this).removeData("resizable-alsoresize-reverse");
    }
});

var processing = 'procesando';
if (window.CurrentCulture == 'en') processing = 'processing';
var waitingMethods = {
    init: function (options) {
        var defaults = {
            position: "left",
            'class': "",
            src: "/content/img/waiting.gif",
            alt: processing + "...",
            zIndex: 99999,
            remove: false,
            replaceText: false
        };
        var opExtend = $.extend(defaults, options);
        return this.each(function () {
            var base = $(this);
            base.attr('waiting', '1');
            var data = base.data('waiting');
            var imgId = "imgWaitingDynamic_" + (base.attr("id") || base.attr("name") || "");
            base.data('waiting', {
                target: base,
                imgId: imgId,
                text: base.text(),
                replaceText: opExtend.replaceText
            });
            $imgWaiting = $("<img/>", { id: imgId, src: opExtend.src, alt: opExtend.alt });
            var baseOffSet = base.offset();
            var baseHeight = base.height();
            var baseWidth = base.width();
            if (base.is('a'))
            {
                if (base.attr('onclick') != null)
                {
                    base.attr('_onclick', base.attr('onclick'));
                    base.attr('onclick', 'javascript:void(0)');
                }
                if (base.attr('href') != null) {
                    base.attr('_href', base.attr('href'));
                    base.attr('href', 'javascript:void(0)');
                }
            }
            base.attr("disabled", "disabled");

            $("body").append($imgWaiting);
            var css = {
                "position": "absolute",
                "z-index": opExtend.zIndex,
                "top": baseOffSet.top,
                "left": baseOffSet.left,
                "paddingright": base.css('padding-right').replace('px', '')
            }
            switch (opExtend.position) {
                case "left":
                    css.top = css.top + baseHeight / 2 - 8;
                    css.left = css.left - 25;
                    break;
                case "center":
                    css.top = css.top + baseHeight / 2 - 8;
                    css.left = css.left + baseWidth / 2;
                    break;
                case "right":
                    css.top = css.top + baseHeight / 2 - 8;
                    css.left = css.left + baseWidth + 10 + parseInt(css.paddingright);
            }
            if (opExtend.replaceText) {
                base.text("");
            }
            $imgWaiting.css(css);
        });
    },
    remove: function () {
        return this.each(function () {
            var base = $(this);
            base.removeAttr('waiting');
            var data = base.data("waiting");
            if (data) {

                $("#" + data.imgId).remove();
                if (data.replaceText) {
                    base.text(data.text);
                }
            }
            if (base.is('a')) {
                if (base.attr('_onclick') != null) {
                    base.attr('onclick', base.attr('_onclick'));
                    base.removeAttr('_onclick');
                }
                if (base.attr('_href') != null) {
                    base.attr('href', base.attr('_href'));
                    base.removeAttr('_href');
                }
            }

            base.attr("disabled", null);
        });
    }
};

$.fn.waiting = function(method) {
    if (waitingMethods[method]) {
        return waitingMethods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
        return waitingMethods.init.apply(this, arguments);
    } else {
        $.error('Method ' + method + ' does not exist on jQuery.tooltip');
    }
    return false;
};

function userExceeded(ownAccount)
{
    //trialEnded();
    var url = "/" + window.CurrentCulture + "/account/_userexceeded";
    if (ownAccount == 1) url += "?ownaccount=1";
    addModal("popupContainer", url, "Test", 720, 350, null, null);
}

function trialEnded() {
    var url = "/" + window.CurrentCulture + "/account/_trialended";
    addModal("popupContainer", url, "Test", 680, 350, null, null);
}

function planEnded() {
    var url = "/" + window.CurrentCulture + "/account/_planexpired";
    addModal("popupContainer", url, "Test", 680, 350, null, null);
}

function canDo(force, selector) {
    return true;
}

function formatCurrency(num, currencySymbol, cents) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num)) num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10) cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
        num = num.substring(0, num.length - (4 * i + 3)) + window.thousandSeparator + num.substring(num.length - (4 * i + 3));
    if (cents != false)
        return (((sign) ? '' : '-') + currencySymbol + num + window.decimalSeparator + cents);
    else
        return (((sign) ? '' : '-') + currencySymbol + num);
}

function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
var negativeChar = '-';

function isNumber(e, obj, allowNegative, allowDecimal) {
    if (allowDecimal != false)
        allowDecimal = true;
    var sKey = -1;
    var bResult = true;
    var bPunto = (obj.value.indexOf(window.decimalSeparator) != -1);
    var bNegative = !allowNegative ? true : (obj.value.indexOf(negativeChar) != -1);
    var lCantChars = obj.value.length;
    var separatorKey = window.decimalSeparator.charCodeAt();
    var negativeKey = 45;
    if (window.event) {
        sKey = e.keyCode;
    }
    else if (e.which) {
        sKey = e.which;
    }

    if (sKey > 10) {
        if (((sKey < 48 || sKey > 57) && ((sKey != separatorKey || bPunto) || !allowDecimal) && (sKey != negativeKey || bNegative))) {
            bResult = false;
        }
    }
    return bResult;
}

function getNumber(value, symbolToRemove) {
    value = value.toString();
    if (value != undefined && value != "") {
        if (symbolToRemove != undefined && value.replace != undefined) {
            value = value.replace(symbolToRemove, '');
        }
        if (value.replace != undefined) {
            while (value.toString().indexOf(window.thousandSeparator) != -1)
                value = value.replace(window.thousandSeparator, '');
        }
        if (window.decimalSeparator != '.') value = value.replace(window.decimalSeparator, '.');
        var nanToCheck = parseFloat(value);
        return nanToCheck;
    }
    else
        return 0;
}

function formatNumber(value, decimals, symbolToRemove) {
    if (typeof (value) != 'number')
        var nanToCheck = getNumber(value, symbolToRemove);
    else
        var nanToCheck = value;
    if (isNaN(nanToCheck))
        nanToCheck = 0;
    var finalValue;
    if (decimals != undefined && nanToCheck != 0)
        finalValue = nanToCheck.toFixed(decimals);
    else
        finalValue = nanToCheck.toFixed(0);
    if (finalValue.indexOf(window.thousandSeparator) != -1) {
        finalValue = finalValue.replace(window.thousandSeparator, window.decimalSeparator);
    }
    return FormatNumber3(finalValue);

}

function FormatNumber3(num) {
    sep = window.thousandSeparator;
    decpoint = window.decimalSeparator;
    num = num.toString();
    a = num.split(decpoint);
    var x;
    x = a[0];
    y = a[1];
    var z;
    z = "";
    if (typeof (x) != "undefined") {
        for (var i = x.length - 1; i >= 0; i--)
            z += x.charAt(i);
        z = z.replace(/(\d{3})/g, "$1" + sep);
        if (z.slice(-sep.length) == sep)
            z = z.slice(0, -sep.length);
        if (z.slice(-sep.length - 1) == sep + "-")
            z = z.slice(0, -sep.length - 1) + "-";
        x = "";
        for (i = z.length - 1; i >= 0; i--)
            x += z.charAt(i);
        if (typeof (y) != "undefined" && y.length > 0)
            x += decpoint + y;
    }
    return x;
}

function addPerson(person) {
    $.ajax({
        type: "POST",
        data: "personName=" + person.Name + '&' + $('#formrvt').serialize(),
        url: '/' + window.CurrentCulture + '/person/save',
        dataType: "json",
        success: function (data) {
            if (data.Response == "Ok") {
                $(person.Selector).val(person.Name);
                $("#" + person.IdToUpdate).val(data.guid);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            handleAjaxException(XMLHttpRequest, textStatus, errorThrown);
        }
    });
}

function addModal(id, url, title, width, height, closeOnEscape, selector) {
    $.fancybox({
        topRatio: 0.05,
        type: 'ajax',
        href: url,
        closeBtn: false,
        padding: '0px 0px 0px 0px',
        helpers: { overlay: { closeClick: false }, title: null }
    });
}

function closeModal(id) {
    $("#" + id).remove();
    $("#imgWaiting").remove();
    $(".validity-modal-msg").remove();
}

function Save(containerId, postURL, asyncCallBack, selector, asyncCallBackError, msj, position) {
    
    if (selector instanceof $) {
        if (position == null)
            selector.waiting();
        else
            selector.waiting({position: position });
    }

    var data = $("#" + containerId).find(":input[type=hidden]").serialize();
    data += "&" + $("#" + containerId).find(":input[type!=hidden]").serialize();

    $.ajax({
        type: "POST",
        data: data + '&' + $('#formrvt').serialize(),
        url: postURL,
        dataType: "json",
        success: function (data) {
            if (selector instanceof $) selector.waiting("remove");
            if (data.Response == "Ok") {
                if (asyncCallBack != undefined)
                    window[asyncCallBack].call(this, data);
                if ($("#" + containerId).dialog("isOpen") == true)
                    closeModal(containerId);
                if (msj != null && msj != undefined && msj != "")
                    ShowNotification(msj);
            }
            else {
                if (selector instanceof $) selector.waiting("remove");
                if (asyncCallBackError != undefined)
                    window[asyncCallBackError].call(this, data);
                else {
                    Alert(data.Response);
                }
            }
            $(selector).attr("disabled", null);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            if (selector instanceof $) selector.waiting("remove");
            handleAjaxException(XMLHttpRequest, textStatus, errorThrown);
        }
    });
}

function Reload() {
    window.location = window.location.href.split('?')[0];
}

function Redirect(data) {
    window.location = encodeURI(data.redirectUrl);
}

function submitNext() {
    $("#page").val(parseFloat($("#page").val()) + 1);
    $("#pages").submit();
}

function submitPrev() {
    $("#page").val(parseFloat($("#page").val()) - 1);
    $("#pages").submit();
}

function querystring(inkey) {
    var query = window.location.search.substring(1);
    var parms = query.split('&');
    for (var i = 0; i < parms.length; i++) {
        var pos = parms[i].indexOf('=');
        if (pos > 0) {
            var key = parms[i].substring(0, pos);
            var val = parms[i].substring(pos + 1);
            if (inkey.toLowerCase() == key.toLowerCase()) return val;
        }
    }
    return '';
}

function showToolTip(obj) {
    var tooltip_holder = $('<div id="toolTipHolder"></div>');
    var tooltip_content = $('<div id="toolTip_content"></div>');
    $("body").append(tooltip_holder.html(tooltip_content));
    $("#chartType").hide();
    $("html").click(function () {
        $("#toolTipHolder").remove();
        $("#chartType").show();
        $("html").unbind('click');
    });

    tooltip_holder.click(function (event) {
        event.stopPropagation();
    });

    $.ajaxSetup({
        // Disable caching of AJAX responses
        cache: false
    })
    tooltip_content.load("/account/_userdata");
    tooltip_content.css({ "position": "absolute", "width" : "300px" });

    var objThis_top = parseInt($(obj).offset()['top']);
    var objThis_left = parseInt($(obj).offset()['left'] - 50);
    var objThis_width = parseInt($(obj).outerWidth());
    var objThis_height = parseInt($(obj).outerHeight());
    var top = objThis_top + objThis_height;
    var left = objThis_left - 115 + objThis_width / 2;
    tooltip_content.css({ "top": top + "px", "left": left + "px" });
}

function ShowNotification(msj, container) {
    if (msj == undefined) msj = decodeURIComponent(querystring('msj'));
    var $flashMsg = $("<div>", { id: "flash_msg" });
    var $flashMsgImg = $("<div>", { id: "flash_msg_img" }).append($("<img/>", { width: "17px", height: "16px", src: "/content/img/icono_flashmessage.png" }));
    var $flashMsgTxt = $("<div>", { id: "flash_msg_txt" }).text(msj);
    var $close = $("<div>", { id: "close" });
    $flashMsg.append($flashMsgImg).append($flashMsgTxt).append($close);
    if (container == null)
        container = $('body'); // $("#bodyWrapper > .contenedor");
    $flashMsg.hide();
    container.prepend($flashMsg);
    $flashMsg.slideDown();
    $flashMsg.css("margin-left", "-" + $flashMsg.width() / 2 + "px");
    setTimeout("$('#flash_msg').slideUp();", 5500);
    setTimeout("$('#flash_msg').remove();", 10000);
}

function changeCompany(selectedCompanyId, errorCallback) {

    $(".proyecto .name").waiting();
    switch (selectedCompanyId) {
        case "@EDIT":
            location = '/' + CurrentCulture + '/company/edit';
            break;
        case "@NEW":
            location = '/' + CurrentCulture + '/start';
            break;
        default:
            $.ajax({
                cache: false,
                headers: { "cache-control": "no-cache" },
                url: '/' + CurrentCulture + '/company/ChangeCompany?ix=' + selectedCompanyId,
                dataType: "json",
                type: "POST",
                data:  $('#formrvt').serialize(),
                success: function (data) {
                    if (data.Response == "Ok") {
                        if (typeof (canreload) == "undefined") {
                            window.location = '/' + CurrentCulture + '/company';
                        }
                        else {
                            location.reload();
                        }
                    }
                    else if (data.Response == "Fail-Permission") {
                        if (errorCallback != undefined) {
                            window[errorCallback].call(this, data);
                            $(".proyecto .name").waiting('remove');
                        }
                    }
                },
                error: function (data) {
                    but.waiting('remove');
                }
            });
    }
}

function Alert(content) {
    $.msgBox({
        title: '',
        content: content,
        type: "info"
    });
}

function Warn(content, callback) {
    $.msgBox({
        title: '',
        content: content,
        afterClose: callback
    });
}

function Error(content) {
    $.msgBox({
        title: '',
        content: content,
        type: "error"
    });
}
function Confirm(title, content, callbackFunction, verb)
{
    if (verb == null) verb == 'Si';
    $.msgBox({
        title: title,
        content: content,
        type: "confirm",
        buttons: [{ value: verb }, { value: "No" }, { value: "Cancelar" }],
        success: function (result) {
            if (result == verb) {
                if (callbackFunction != undefined) {
                    window[callbackFunction].call(this, data);
                }
            }
        }
    });
}

$.fn.chosenautocomplete = function (options) {
    var defaults = {
        url: "",
        blurColor: "#656565",
        attrSelector: "title"
    };
    var optExtend = $.extend(defaults, options);
    $(this).each(function () {
        var base = $(this);

        base.ajaxChosen({
            type: 'GET',
            url:  optExtend.url,
            dataType: 'json'
        }, function (data) {
            var results = [];
            $.each(data.data, function (i, val) {
                results.push({ value: val.value, text: val.text });
            });
            return results;
        });

    });
};

function post_to_url(path, params, method) {
    method = method || "post";

    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }
    var tk = $('#formrvt input').first().clone()[0];
    form.appendChild(tk);

    document.body.appendChild(form);

    form.submit();
}

function showSupport() {
    $.fancybox({
        topRatio: 0.05,
        type: 'ajax',
        href: '/home/_contact/?t=support',
        closeBtn: false,
        padding: '0px 0px 0px 0px',
        helpers: { overlay: { closeClick: false }, title: null },
        beforeLoad: function () { $("body").css("overflow", "hidden"); },
        afterClose: function () { $("body").css("overflow", "auto"); }
    });
}


function contactMe(signup) {
    $.fancybox({
        topRatio: 0.05,
        type: 'ajax',
        href: '/account/_contactme?signup=' + signup,
        closeBtn: false,
        padding: '0px 0px 0px 0px',
        helpers: { overlay: { closeClick: false }, title: null },
        beforeLoad: function () { $("body").css("overflow", "hidden"); },
        afterClose: function () { $("body").css("overflow", "auto"); }
    });
}

function editUser(userid) {
    $.fancybox({
        topRatio: 0,
        type: 'ajax',
        href: '/user/_edit?userid=' + userid + '&r=' + new Date().getMilliseconds(),
        closeBtn: false,
        padding: '0px 0px 0px 0px',
        helpers: { overlay: { closeClick: false }, title: null },
        beforeLoad: function () { $("body").css("overflow", "hidden"); },
        beforeClose: function () { $.validity.clear(); },
        afterClose: function () { $("body").css("overflow", "auto"); }
    });
}

if (window.CurrentCulture == 'en') {
    default_multiple_text = "Select options";
    default_single_text = "Select an option";
    default_no_result_text = "Can't find";
    default_create_option_text = "Create tag"
}
else {
    default_multiple_text = "Elije opciones";
    default_single_text = "Elija una opción";
    default_no_result_text = "No se encuentra";
    default_create_option_text = "Agregar"
}
(function () { var e; e = function () { function e() { this.options_index = 0, this.parsed = [] } return e.prototype.add_node = function (e) { return e.nodeName.toUpperCase() === "OPTGROUP" ? this.add_group(e) : this.add_option(e) }, e.prototype.add_group = function (e) { var t, n, r, i, s, o; t = this.parsed.length, this.parsed.push({ array_index: t, group: !0, label: e.label, children: 0, disabled: e.disabled }), s = e.childNodes, o = []; for (r = 0, i = s.length; r < i; r++) n = s[r], o.push(this.add_option(n, t, e.disabled)); return o }, e.prototype.add_option = function (e, t, n) { if (e.nodeName.toUpperCase() === "OPTION") return e.text !== "" ? (t != null && (this.parsed[t].children += 1), this.parsed.push({ array_index: this.parsed.length, options_index: this.options_index, value: e.value, text: e.text, html: e.innerHTML, selected: e.selected, disabled: n === !0 ? n : e.disabled, group_array_index: t, classes: e.className, style: e.style.cssText })) : this.parsed.push({ array_index: this.parsed.length, options_index: this.options_index, empty: !0 }), this.options_index += 1 }, e }(), e.select_to_array = function (t) { var n, r, i, s, o; r = new e, o = t.childNodes; for (i = 0, s = o.length; i < s; i++) n = o[i], r.add_node(n); return r.parsed }, this.SelectParser = e }).call(this), function () { var e, t; t = this, e = function () { function e(t, n) { this.form_field = t, this.options = n != null ? n : {}; if (!e.browser_is_supported()) return; this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.finish_setup() } return e.prototype.set_default_values = function () { var e = this; return this.click_test_action = function (t) { return e.test_active_click(t) }, this.activate_action = function (t) { return e.activate_field(t) }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.result_single_selected = null, this.allow_single_deselect = this.options.allow_single_deselect != null && this.form_field.options[0] != null && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : !0, this.search_contains = this.options.search_contains || !1, this.choices = 0, this.single_backstroke_delete = this.options.single_backstroke_delete || !1, this.max_selected_options = this.options.max_selected_options || Infinity, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.create_option = this.options.create_option || !1, this.persistent_create_option = this.options.persistent_create_option || !1, this.skip_no_results = this.options.skip_no_results || !1 }, e.prototype.set_default_text = function () { return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || e.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || e.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || e.default_no_result_text, this.create_option_text = this.form_field.getAttribute("data-create_option_text") || this.options.create_option_text || e.default_create_option_text }, e.prototype.mouse_enter = function () { return this.mouse_on_container = !0 }, e.prototype.mouse_leave = function () { return this.mouse_on_container = !1 }, e.prototype.input_focus = function (e) { var t = this; if (this.is_multiple) { if (!this.active_field) return setTimeout(function () { return t.container_mousedown() }, 50) } else if (!this.active_field) return this.activate_field() }, e.prototype.input_blur = function (e) { var t = this; if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function () { return t.blur_test() }, 100) }, e.prototype.result_add_option = function (e) { var t, n; return e.disabled ? "" : (e.dom_id = this.container_id + "_o_" + e.array_index, t = e.selected && this.is_multiple ? [] : ["active-result"], e.selected && t.push("result-selected"), e.group_array_index != null && t.push("group-option"), e.classes !== "" && t.push(e.classes), n = e.style.cssText !== "" ? ' style="' + e.style + '"' : "", '<li id="' + e.dom_id + '" class="' + t.join(" ") + '"' + n + ">" + e.html + "</li>") }, e.prototype.append_option = function (e) { return this.select_append_option(e) }, e.prototype.results_update_field = function () { return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.result_single_selected = null, this.results_build() }, e.prototype.results_toggle = function () { return this.results_showing ? this.results_hide() : this.results_show() }, e.prototype.results_search = function (e) { return this.results_showing ? this.winnow_results() : this.results_show() }, e.prototype.choices_click = function (e) { e.preventDefault(); if (!this.results_showing) return this.results_show() }, e.prototype.keyup_checker = function (e) { var t, n; t = (n = e.which) != null ? n : e.keyCode, this.search_field_scale(); switch (t) { case 8: if (this.is_multiple && this.backstroke_length < 1 && this.choices > 0) return this.keydown_backstroke(); if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search(); break; case 13: e.preventDefault(); if (this.results_showing) return this.result_select(e); break; case 27: return this.results_showing && this.results_hide(), !0; case 9: case 38: case 40: case 16: case 91: case 17: break; default: return this.results_search() } }, e.prototype.generate_field_id = function () { var e; return e = this.generate_random_id(), this.form_field.id = e, e }, e.prototype.generate_random_char = function () { var e, t, n; return e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", n = Math.floor(Math.random() * e.length), t = e.substring(n, n + 1) }, e.prototype.container_width = function () { var e; return this.options.width != null ? this.options.width : (e = window.getComputedStyle != null ? parseFloat(window.getComputedStyle(this.form_field).getPropertyValue("width")) : typeof jQuery != "undefined" && jQuery !== null && this.form_field_jq != null ? this.form_field_jq.outerWidth() : this.form_field.getWidth(), e + "px") }, e.browser_is_supported = function () { var e; return window.navigator.appName === "Microsoft Internet Explorer" ? null !== (e = document.documentMode) && e >= 8 : !0 }, e.default_multiple_text = default_multiple_text, e.default_single_text = default_single_text, e.default_no_result_text = default_no_result_text, e.default_create_option_text = default_create_option_text, e }(), t.AbstractChosen = e }.call(this), function () { var e, t, n, r = {}.hasOwnProperty, i = function (e, t) { function i() { this.constructor = e } for (var n in t) r.call(t, n) && (e[n] = t[n]); return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e }; n = this, e = jQuery, e.fn.extend({ chosen: function (n) { return AbstractChosen.browser_is_supported() ? this.each(function (r) { var i; i = e(this); if (!i.hasClass("chzn-done")) return i.data("chosen", new t(this, n)) }) : this } }), t = function (t) { function r() { return r.__super__.constructor.apply(this, arguments) } return i(r, t), r.prototype.setup = function () { return this.form_field_jq = e(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chzn-rtl") }, r.prototype.finish_setup = function () { return this.form_field_jq.addClass("chzn-done") }, r.prototype.set_up_html = function () { var t, n; return this.container_id = this.form_field.id.length ? this.form_field.id.replace(/[^\w]/g, "_") : this.generate_field_id(), this.container_id += "_chzn", t = ["chzn-container"], t.push("chzn-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && t.push(this.form_field.className), this.is_rtl && t.push("chzn-rtl"), n = { id: this.container_id, "class": t.join(" "), style: "width: " + this.container_width() + ";", title: this.form_field.title }, this.container = e("<div />", n), this.is_multiple ? this.container.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop"><ul class="chzn-results"></ul></div>') : this.container.html('<a href="javascript:void(0)" class="chzn-single chzn-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chzn-drop"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chzn-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chzn-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chzn-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chzn-search").first(), this.selected_item = this.container.find(".chzn-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("liszt:ready", { chosen: this }) }, r.prototype.register_observers = function () { var e = this; return this.container.mousedown(function (t) { e.container_mousedown(t) }), this.container.mouseup(function (t) { e.container_mouseup(t) }), this.container.mouseenter(function (t) { e.mouse_enter(t) }), this.container.mouseleave(function (t) { e.mouse_leave(t) }), this.search_results.mouseup(function (t) { e.search_results_mouseup(t) }), this.search_results.mouseover(function (t) { e.search_results_mouseover(t) }), this.search_results.mouseout(function (t) { e.search_results_mouseout(t) }), this.search_results.bind("mousewheel DOMMouseScroll", function (t) { e.search_results_mousewheel(t) }), this.form_field_jq.bind("liszt:updated", function (t) { e.results_update_field(t) }), this.form_field_jq.bind("liszt:activate", function (t) { e.activate_field(t) }), this.form_field_jq.bind("liszt:open", function (t) { e.container_mousedown(t) }), this.search_field.blur(function (t) { e.input_blur(t) }), this.search_field.keyup(function (t) { e.keyup_checker(t) }), this.search_field.keydown(function (t) { e.keydown_checker(t) }), this.search_field.focus(function (t) { e.input_focus(t) }), this.is_multiple ? this.search_choices.click(function (t) { e.choices_click(t) }) : this.container.click(function (e) { e.preventDefault() }) }, r.prototype.search_field_disabled = function () { this.is_disabled = this.form_field_jq[0].disabled; if (this.is_disabled) return this.container.addClass("chzn-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus", this.activate_action), this.close_field(); this.container.removeClass("chzn-disabled"), this.search_field[0].disabled = !1; if (!this.is_multiple) return this.selected_item.bind("focus", this.activate_action) }, r.prototype.container_mousedown = function (t) { if (!this.is_disabled) { t && t.type === "mousedown" && !this.results_showing && t.preventDefault(); if (t == null || !e(t.target).hasClass("search-choice-close")) return this.active_field ? !this.is_multiple && t && (e(t.target)[0] === this.selected_item[0] || e(t.target).parents("a.chzn-single").length) && (t.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), e(document).click(this.click_test_action), this.results_show()), this.activate_field() } }, r.prototype.container_mouseup = function (e) { if (e.target.nodeName === "ABBR" && !this.is_disabled) return this.results_reset(e) }, r.prototype.search_results_mousewheel = function (e) { var t, n, r; t = -((n = e.originalEvent) != null ? n.wheelDelta : void 0) || ((r = e.originialEvent) != null ? r.detail : void 0); if (t != null) return e.preventDefault(), e.type === "DOMMouseScroll" && (t *= 40), this.search_results.scrollTop(t + this.search_results.scrollTop()) }, r.prototype.blur_test = function (e) { if (!this.active_field && this.container.hasClass("chzn-container-active")) return this.close_field() }, r.prototype.close_field = function () { return e(document).unbind("click", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chzn-container-active"), this.winnow_results_clear(), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale() }, r.prototype.activate_field = function () { return this.container.addClass("chzn-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus() }, r.prototype.test_active_click = function (t) { return e(t.target).parents("#" + this.container_id).length ? this.active_field = !0 : this.close_field() }, r.prototype.results_build = function () { var e, t, r, i, s; this.parsing = !0, this.results_data = n.SelectParser.select_to_array(this.form_field), this.is_multiple && this.choices > 0 ? (this.search_choices.find("li.search-choice").remove(), this.choices = 0) : this.is_multiple || (this.selected_item.addClass("chzn-default").find("span").text(this.default_text), this.create_option && !this.disable_search ? this.container.removeClass("chzn-container-single-nosearch") : (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) && this.container.addClass("chzn-container-single-nosearch")), e = "", s = this.results_data; for (r = 0, i = s.length; r < i; r++) t = s[r], t.group ? e += this.result_add_group(t) : t.empty || (e += this.result_add_option(t), t.selected && this.is_multiple ? this.choice_build(t) : t.selected && !this.is_multiple && (this.selected_item.removeClass("chzn-default").find("span").text(t.text), this.allow_single_deselect && this.single_deselect_control_build())); return this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.search_results.html(e), this.parsing = !1 }, r.prototype.result_add_group = function (t) { return t.disabled ? "" : (t.dom_id = this.container_id + "_g_" + t.array_index, '<li id="' + t.dom_id + '" class="group-result">' + e("<div />").text(t.label).html() + "</li>") }, r.prototype.result_do_highlight = function (e) { var t, n, r, i, s; if (e.length) { this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted"), r = parseInt(this.search_results.css("maxHeight"), 10), s = this.search_results.scrollTop(), i = r + s, n = this.result_highlight.position().top + this.search_results.scrollTop(), t = n + this.result_highlight.outerHeight(); if (t >= i) return this.search_results.scrollTop(t - r > 0 ? t - r : 0); if (n < s) return this.search_results.scrollTop(n) } }, r.prototype.result_clear_highlight = function () { return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null }, r.prototype.results_show = function () { if (this.result_single_selected != null) this.result_do_highlight(this.result_single_selected); else if (this.is_multiple && this.max_selected_options <= this.choices) return this.form_field_jq.trigger("liszt:maxselected", { chosen: this }), !1; return this.container.addClass("chzn-with-drop"), this.form_field_jq.trigger("liszt:showing_dropdown", { chosen: this }), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results() }, r.prototype.results_hide = function () { return this.result_clear_highlight(), this.container.removeClass("chzn-with-drop"), this.form_field_jq.trigger("liszt:hiding_dropdown", { chosen: this }), this.results_showing = !1 }, r.prototype.set_tab_index = function (e) { var t; if (this.form_field_jq.attr("tabindex")) return t = this.form_field_jq.attr("tabindex"), this.form_field_jq.attr("tabindex", -1), this.search_field.attr("tabindex", t) }, r.prototype.set_label_behavior = function () { var t = this; this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = e("label[for=" + this.form_field.id + "]")); if (this.form_field_label.length > 0) return this.form_field_label.click(function (e) { return t.is_multiple ? t.container_mousedown(e) : t.activate_field() }) }, r.prototype.show_search_field_default = function () { return this.is_multiple && this.choices < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default")) }, r.prototype.search_results_mouseup = function (t) { var n; n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first(); if (n.length) return this.result_highlight = n, this.result_select(t), this.search_field.focus() }, r.prototype.search_results_mouseover = function (t) { var n; n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first(); if (n) return this.result_do_highlight(n) }, r.prototype.search_results_mouseout = function (t) { if (e(t.target).hasClass("active-result")) return this.result_clear_highlight() }, r.prototype.choice_build = function (t) { var n, r, i, s = this; return this.is_multiple && this.max_selected_options <= this.choices ? (this.form_field_jq.trigger("liszt:maxselected", { chosen: this }), !1) : (n = this.container_id + "_c_" + t.array_index, this.choices += 1, t.disabled ? r = '<li class="search-choice search-choice-disabled" id="' + n + '"><span>' + t.html + "</span></li>" : r = '<li class="search-choice" id="' + n + '"><span>' + t.html + '</span><a href="javascript:void(0)" class="search-choice-close" rel="' + t.array_index + '"></a></li>', this.search_container.before(r), i = e("#" + n).find("a").first(), i.click(function (e) { return s.choice_destroy_link_click(e) })) }, r.prototype.choice_destroy_link_click = function (t) { t.preventDefault(), t.stopPropagation(); if (!this.is_disabled) return this.choice_destroy(e(t.target)) }, r.prototype.choice_destroy = function (e) { if (this.result_deselect(e.attr("rel"))) return this.choices -= 1, this.show_search_field_default(), this.is_multiple && this.choices > 0 && this.search_field.val().length < 1 && this.results_hide(), e.parents("li").first().remove(), this.search_field_scale() }, r.prototype.results_reset = function () { this.form_field.options[0].selected = !0, this.selected_item.find("span").text(this.default_text), this.is_multiple || this.selected_item.addClass("chzn-default"), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"); if (this.active_field) return this.results_hide() }, r.prototype.results_reset_cleanup = function () { return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove() }, r.prototype.result_select = function (e) { var t, n, r, i; if (this.result_highlight) return t = this.result_highlight, t.hasClass("create-option") ? (this.select_create_option(this.search_field.val()), this.results_hide()) : (n = t.attr("id"), this.result_clear_highlight(), this.is_multiple ? this.result_deactivate(t) : (this.search_results.find(".result-selected").removeClass("result-selected"), this.result_single_selected = t, this.selected_item.removeClass("chzn-default")), t.addClass("result-selected"), i = n.substr(n.lastIndexOf("_") + 1), r = this.results_data[i], r.selected = !0, this.form_field.options[r.options_index].selected = !0, this.is_multiple ? this.choice_build(r) : (this.selected_item.find("span").first().text(r.text), this.allow_single_deselect && this.single_deselect_control_build()), (!e.metaKey && !e.ctrlKey || !this.is_multiple) && this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", { selected: this.form_field.options[r.options_index].value }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale()) }, r.prototype.result_activate = function (e) { return e.addClass("active-result") }, r.prototype.result_deactivate = function (e) { return e.removeClass("active-result") }, r.prototype.result_deselect = function (t) { var n, r; return r = this.results_data[t], this.form_field.options[r.options_index].disabled ? !1 : (r.selected = !1, this.form_field.options[r.options_index].selected = !1, n = e("#" + this.container_id + "_o_" + t), n.removeClass("result-selected").addClass("active-result").show(), this.result_clear_highlight(), this.winnow_results(), this.form_field_jq.trigger("change", { deselected: this.form_field.options[r.options_index].value }), this.search_field_scale(), !0) }, r.prototype.single_deselect_control_build = function () { if (this.allow_single_deselect && this.selected_item.find("abbr").length < 1) return this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>') }, r.prototype.winnow_results = function () { var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w; this.no_results_clear(), this.create_option_clear(), c = 0, n = !1, h = this.search_field.val() === this.default_text ? "" : e("<div/>").text(e.trim(this.search_field.val())).html(), a = this.search_contains ? "" : "^", u = new RegExp(a + h.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i"), v = new RegExp(h.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i"), t = new RegExp("^" + h.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") + "$", "i"), w = this.results_data; for (m = 0, y = w.length; m < y; m++) { i = w[m]; if (!i.disabled && !i.empty) if (i.group) e("#" + i.dom_id).css("display", "none"); else if (!this.is_multiple || !i.selected) { r = !1, l = i.dom_id, f = e("#" + l); if (u.test(i.html)) r = !0, c += 1, t.test(i.html) && (n = !0); else if (this.enable_split_word_search && (i.html.indexOf(" ") >= 0 || i.html.indexOf("[") === 0)) { o = i.html.replace(/\[|\]/g, "").split(" "); if (o.length) for (g = 0, b = o.length; g < b; g++) s = o[g], u.test(s) && (r = !0, c += 1) } r ? (h.length ? (p = i.html.search(v), d = i.html.substr(0, p + h.length) + "</em>" + i.html.substr(p + h.length), d = d.substr(0, p) + "<em>" + d.substr(p)) : d = i.html, f.html(d), this.result_activate(f), i.group_array_index != null && e("#" + this.results_data[i.group_array_index].dom_id).css("display", "list-item")) : (this.result_highlight && l === this.result_highlight.attr("id") && this.result_clear_highlight(), this.result_deactivate(f)) } } c < 1 && h.length ? (!this.create_option || !this.skip_no_results) && this.no_results(h) : this.winnow_results_set_highlight(); if (this.create_option && (c < 1 || !n && this.persistent_create_option) && h.length) return this.show_create_option(h) }, r.prototype.winnow_results_clear = function () { var t, n, r, i, s; this.search_field.val(""), n = this.search_results.find("li"), s = []; for (r = 0, i = n.length; r < i; r++) t = n[r], t = e(t), t.hasClass("group-result") ? s.push(t.css("display", "auto")) : !this.is_multiple || !t.hasClass("result-selected") ? s.push(this.result_activate(t)) : s.push(void 0); return s }, r.prototype.winnow_results_set_highlight = function () { var e, t; if (!this.result_highlight) { t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), e = t.length ? t.first() : this.search_results.find(".active-result").first(); if (e != null) return this.result_do_highlight(e) } }, r.prototype.no_results = function (t) { var n; return n = e('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), n.find("span").first().html(t), this.search_results.append(n) }, r.prototype.show_create_option = function (t) { var n; return n = e('<li class="create-option active-result"><a href="javascript:void(0);">' + this.create_option_text + '</a>: "' + t + '"</li>'), this.search_results.append(n) }, r.prototype.create_option_clear = function () { return this.search_results.find(".create-option").remove() }, r.prototype.select_create_option = function (t) { return e.isFunction(this.create_option) ? this.create_option.call(this, t) : this.select_append_option({ value: t, text: t }) }, r.prototype.select_append_option = function (t) { var n, r; return n = e("<option />", t).attr("selected", "selected"), this.form_field_jq.append(n), r = this.search_field.val(), this.form_field_jq.trigger("liszt:updated"), this.search_field.trigger("focus") }, r.prototype.no_results_clear = function () { return this.search_results.find(".no-results").remove() }, r.prototype.keydown_arrow = function () { var t, n; this.result_highlight ? this.results_showing && (n = this.result_highlight.nextAll("li.active-result").first(), n && this.result_do_highlight(n)) : (t = this.search_results.find("li.active-result").first(), t && this.result_do_highlight(e(t))); if (!this.results_showing) return this.results_show() }, r.prototype.keyup_arrow = function () { var e; if (!this.results_showing && !this.is_multiple) return this.results_show(); if (this.result_highlight) return e = this.result_highlight.prevAll("li.active-result"), e.length ? this.result_do_highlight(e.first()) : (this.choices > 0 && this.results_hide(), this.result_clear_highlight()) }, r.prototype.keydown_backstroke = function () { var e; if (this.pending_backstroke) return this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke(); e = this.search_container.siblings("li.search-choice").last(); if (e.length && !e.hasClass("search-choice-disabled")) return this.pending_backstroke = e, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus") }, r.prototype.clear_backstroke = function () { return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null }, r.prototype.keydown_checker = function (e) { var t, n; t = (n = e.which) != null ? n : e.keyCode, this.search_field_scale(), t !== 8 && this.pending_backstroke && this.clear_backstroke(); switch (t) { case 8: this.backstroke_length = this.search_field.val().length; break; case 9: this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !1; break; case 13: e.preventDefault(); break; case 38: e.preventDefault(), this.keyup_arrow(); break; case 40: this.keydown_arrow() } }, r.prototype.search_field_scale = function () { var t, n, r, i, s, o, u, a; if (this.is_multiple) { n = 0, o = 0, i = "position:absolute; left: -1000px; top: -1000px; display:none;", s = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"]; for (u = 0, a = s.length; u < a; u++) r = s[u], i += r + ":" + this.search_field.css(r) + ";"; return t = e("<div />", { style: i }), t.text(this.search_field.val()), e("body").append(t), o = t.width() + 25, t.remove(), this.f_width || (this.f_width = this.container.outerWidth()), o > this.f_width - 10 && (o = this.f_width - 10), this.search_field.css({ width: o + "px" }) } }, r.prototype.generate_random_id = function () { var t; t = "sel" + this.generate_random_char() + this.generate_random_char() + this.generate_random_char(); while (e("#" + t).length > 0) t += this.generate_random_char(); return t }, r }(AbstractChosen), n.Chosen = t }.call(this);
//Validity
(function($,undefined){var
defaults={outputMode:"tooltip",scrollTo:false,modalErrorsClickable:true,defaultFieldName:"This field",elementSupport:":text, :password, textarea, select, :radio, :checkbox",argToString:function(val){return val.getDate?(val.getMonth()+1)+"/"+val.getDate()+"/"+val.getFullYear():val;},debugPrivates:false},__private;$.validity={settings:$.extend(defaults,{}),patterns:{integer:/^\d+$/,date:/^((0?\d)|(1[012]))\/([012]?\d|30|31)\/\d{1,4}$/,email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,usd:/^\$?((\d{1,3}(,\d{3})*)|\d+)(\.(\d{2})?)?$/,url:/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,number:/^[+-]?(\d+(\.\d*)?|\.\d+)([Ee]-?\d+)?$/,zip:/^\d{5}(-\d{4})?$/,phone:/^[2-9]\d{2}-\d{3}-\d{4}$/,guid:/^(\{?([0-9a-fA-F]){8}-(([0-9a-fA-F]){4}-){3}([0-9a-fA-F]){12}\}?)$/,time12:/^((0?\d)|(1[12])):[0-5]\d?\s?[aApP]\.?[mM]\.?$/,time24:/^(20|21|22|23|[01]\d|\d)(([:][0-5]\d){1,2})$/,nonHtml:/^[^<>]*$/},messages:{require:"#{field} is required.",match:"#{field} is in an invalid format.",integer:"#{field} must be a positive, whole number.",date:"#{field} must be formatted as a date. (mm/dd/yyyy)",email:"#{field} must be formatted as an email.",usd:"#{field} must be formatted as a US Dollar amount.",url:"#{field} must be formatted as a URL.",number:"#{field} must be formatted as a number.",zip:"#{field} must be formatted as a zipcode ##### or #####-####.",phone:"#{field} must be formatted as a phone number ###-###-####.",guid:"#{field} must be formatted as a guid like {3F2504E0-4F89-11D3-9A0C-0305E82C3301}.",time24:"#{field} must be formatted as a 24 hour time: 23:00.",time12:"#{field} must be formatted as a 12 hour time: 12:00 AM/PM",lessThan:"#{field} must be less than #{max}.",lessThanOrEqualTo:"#{field} must be less than or equal to #{max}.",greaterThan:"#{field} must be greater than #{min}.",greaterThanOrEqualTo:"#{field} must be greater than or equal to #{min}.",range:"#{field} must be between #{min} and #{max}.",tooLong:"#{field} cannot be longer than #{max} characters.",tooShort:"#{field} cannot be shorter than #{min} characters.",nonHtml:"#{field} cannot contain HTML characters.",alphabet:"#{field} contains disallowed characters.",minCharClass:"#{field} cannot have more than #{min} #{charClass} characters.",maxCharClass:"#{field} cannot have less than #{min} #{charClass} characters.",equal:"Values don't match.",distinct:"A value was repeated.",sum:"Values don't add to #{sum}.",sumMax:"The sum of the values must be less than #{max}.",sumMin:"The sum of the values must be greater than #{min}.",radioChecked:"The selected value is not valid.",generic:"Invalid."},out:{start:function(){this.defer("start");},end:function(results){this.defer("end",results);},raise:function($obj,msg){this.defer("raise",$obj,msg);},raiseAggregate:function($obj,msg){this.defer("raiseAggregate",$obj,msg);},defer:function(name){var
v=$.validity,o=v.outputs[v.settings.outputMode];o[name].apply(o,Array.prototype.slice.call(arguments,1));}},charClasses:{alphabetical:/\w/g,numeric:/\d/g,alphanumeric:/[A-Za-z0-9]/g,symbol:/[^A-Za-z0-9]/g},outputs:{},__private:undefined,setup:function(options){this.settings=$.extend(this.settings,options);if(this.settings.debugPrivates){this.__private=__private;}
else{this.__private=undefined;}},report:null,isValidating:function(){return!!this.report;},start:function(){this.out.start();this.report={errors:0,valid:true};},end:function(){var results=this.report||{errors:0,valid:true};this.report=null;this.out.end(results);return results;},clear:function(){this.start();this.end();}};$.fn.extend({validity:function(arg){return this.each(function(){if(this.tagName.toLowerCase()=="form"){var f=null;if(typeof(arg)=="string"){f=function(){$(arg).require();};}
else if($.isFunction(arg)){f=arg;}
if(arg){$(this).bind("submit",function(){$.validity.start();f();return $.validity.end().valid;});}}});},require:function(msg){return validate(this,function(obj){var val=$(obj).val();var res=val.length;return res;},msg||$.validity.messages.require);},match:function(rule,msg){if(!msg){msg=$.validity.messages.match;if(typeof(rule)==="string"&&$.validity.messages[rule]){msg=$.validity.messages[rule];}}
if(typeof(rule)=="string"){rule=$.validity.patterns[rule];}
return validate(this,$.isFunction(rule)?function(obj){return!obj.value.length||rule(obj.value);}:function(obj){if(rule.global){rule.lastIndex=0;}
return!obj.value.length||rule.test(obj.value);},msg);},range:function(min,max,msg){return validate(this,min.getTime&&max.getTime?function(obj){var d=new Date(obj.value);return d>=new Date(min)&&d<=new Date(max);}:min.substring&&max.substring&&Big?function(obj){var n=new Big(obj.value);return(n.greaterThanOrEqualTo(new Big(min))&&n.lessThanOrEqualTo(new Big(max)));}:function(obj){var f=parseFloat(obj.value);return f>=min&&f<=max;},msg||format($.validity.messages.range,{min:$.validity.settings.argToString(min),max:$.validity.settings.argToString(max)}));},greaterThan:function(min,msg){return validate(this,min.getTime?function(obj){return new Date(obj.value)>min;}:min.substring&&Big?function(obj){return new Big(obj.value).greaterThan(new Big(min));}:function(obj){return parseFloat(obj.value)>min;},msg||format($.validity.messages.greaterThan,{min:$.validity.settings.argToString(min)}));},greaterThanOrEqualTo:function(min,msg){return validate(this,min.getTime?function(obj){return new Date(obj.value)>=min;}:min.substring&&Big?function(obj){return new Big(obj.value).greaterThanOrEqualTo(new Big(min));}:function(obj){return parseFloat(obj.value)>=min;},msg||format($.validity.messages.greaterThanOrEqualTo,{min:$.validity.settings.argToString(min)}));},lessThan:function(max,msg){return validate(this,max.getTime?function(obj){return new Date(obj.value)<max;}:max.substring&&Big?function(obj){return new Big(obj.value).lessThan(new Big(max));}:function(obj){return parseFloat(obj.value)<max;},msg||format($.validity.messages.lessThan,{max:$.validity.settings.argToString(max)}));},lessThanOrEqualTo:function(max,msg){return validate(this,max.getTime?function(obj){return new Date(obj.value)<=max;}:max.substring&&Big?function(obj){return new Big(obj.value).lessThanOrEqualTo(new Big(max));}:function(obj){return parseFloat(obj.value)<=max;},msg||format($.validity.messages.lessThanOrEqualTo,{max:$.validity.settings.argToString(max)}));},maxLength:function(max,msg){return validate(this,function(obj){return obj.value.length<=max;},msg||format($.validity.messages.tooLong,{max:max}));},minLength:function(min,msg){return validate(this,function(obj){return obj.value.length>=min;},msg||format($.validity.messages.tooShort,{min:min}));},alphabet:function(alpha,msg){var chars=[];return validate(this,function(obj){for(var idx=0;idx<obj.value.length;++idx){if(alpha.indexOf(obj.value.charAt(idx))==-1){chars.push(obj.value.charAt(idx));return false;}}
return true;},msg||format($.validity.messages.alphabet,{chars:chars.join(", ")}));},minCharClass:function(charClass,min,msg){if(typeof(charClass)=="string"){charClass=charClass.toLowerCase();if($.validity.charClasses[charClass]){charClass=$.validity.charClasses[charClass];}}
return validate(this,function(obj){return(obj.value.match(charClass)||[]).length>=min;},msg||format($.validity.messages.minCharClass,{min:min,charClass:charClass}));},maxCharClass:function(charClass,max,msg){if(typeof(charClass)=="string"){charClass=charClass.toLowerCase();if($.validity.charClasses[charClass]){charClass=$.validity.charClasses[charClass];}}
return validate(this,function(obj){return(obj.value.match(charClass)||[]).length<=max;},msg||format($.validity.messages.maxCharClass,{max:max,charClass:charClass}));},nonHtml:function(msg){return validate(this,function(obj){return $.validity.patterns.nonHtml.test(obj.value);},msg||$.validity.messages.nonHtml);},equal:function(arg0,arg1){var
$reduction=(this.reduction||this).filter($.validity.settings.elementSupport),transform=function(val){return val;},msg=$.validity.messages.equal;if($reduction.length){if($.isFunction(arg0)){transform=arg0;if(typeof(arg1)=="string"){msg=arg1;}}
else if(typeof(arg0)=="string"){msg=arg0;}
var
map=$.map($reduction,function(obj){return transform(obj.value);}),first=map[0],valid=true;for(var i in map){if(map[i]!=first){valid=false;}}
if(!valid){raiseAggregateError($reduction,msg);this.reduction=$([]);}}
return this;},distinct:function(arg0,arg1){var
$reduction=(this.reduction||this).filter($.validity.settings.elementSupport),transform=function(val){return val;},msg=$.validity.messages.distinct,subMap=[],valid=true;if($reduction.length){if($.isFunction(arg0)){transform=arg0;if(typeof(arg1)=="string"){msg=arg1;}}
else if(typeof(arg0)=="string"){msg=arg0;}
var map=$.map($reduction,function(obj){return transform(obj.value);});for(var i1=0;i1<map.length;++i1){if(map[i1].length){for(var i2=0;i2<subMap.length;++i2){if(subMap[i2]==map[i1]){valid=false;}}
subMap.push(map[i1]);}}
if(!valid){raiseAggregateError($reduction,msg);this.reduction=$([]);}}
return this;},sum:function(sum,msg){var $reduction=(this.reduction||this).filter($.validity.settings.elementSupport);if($reduction.length&&sum!=numericSum($reduction)){raiseAggregateError($reduction,msg||format($.validity.messages.sum,{sum:sum}));this.reduction=$([]);}
return this;},sumMax:function(max,msg){var $reduction=(this.reduction||this).filter($.validity.settings.elementSupport);if($reduction.length&&max<numericSum($reduction)){raiseAggregateError($reduction,msg||format($.validity.messages.sumMax,{max:max}));this.reduction=$([]);}
return this;},sumMin:function(min,msg){var $reduction=(this.reduction||this).filter($.validity.settings.elementSupport);if($reduction.length&&min<numericSum($reduction)){raiseAggregateError($reduction,msg||format($.validity.messages.sumMin,{min:min}));this.reduction=$([]);}
return this;},radioChecked:function(val,msg){var $reduction=(this.reduction||this).filter($.validity.settings.elementSupport);if($reduction.is(":radio")&&$reduction.find(":checked").val()!=val){raiseAggregateError($reduction,msg||$.validity.messages.radioChecked);}},radioNotChecked:function(val,msg){var $reduction=(this.reduction||this).filter($.validity.settings.elementSupport);if($reduction.is(":radio")&&$reduction.filter(":checked").val()==val){raiseAggregateError($reduction,msg||$.validity.messages.radioChecked);}},checkboxChecked:function(msg){var $reduction=(this.reduction||this).filter($.validity.settings.elementSupport);if($reduction.is(":checkbox")&&!$reduction.is(":checked")){raiseAggregateError($reduction,msg||$.validity.messages.radioChecked);}},assert:function(expression,msg){var $reduction=this.reduction||this;if($reduction.length){if($.isFunction(expression)){return validate(this,expression,msg||$.validity.messages.generic);}
else if(!expression){raiseAggregateError($reduction,msg||$.validity.messages.generic);this.reduction=$([]);}}
return this;},fail:function(msg){return this.assert(false,msg);}});function validate($obj,regimen,message){var
$reduction=($obj.reduction||$obj).filter($.validity.settings.elementSupport),elements=[];$reduction.each(function(){if(regimen(this)){elements.push(this);}
else{raiseError(this,format(message,{field:infer(this)}));}});$obj.reduction=$(elements);return $obj;}
function addToReport(){if($.validity.isValidating()){$.validity.report.errors++;$.validity.report.valid=false;}}
function raiseError(obj,msg){addToReport();$.validity.out.raise($(obj),msg);}
function raiseAggregateError($obj,msg){addToReport();$.validity.out.raiseAggregate($obj,msg);}
function numericSum(obj){var accumulator=0;obj.each(function(){var n=parseFloat(this.value);accumulator+=isNaN(n)?0:n;});return accumulator;}
function format(str,obj){for(var p in obj){if(obj.hasOwnProperty(p)){str=str.replace(new RegExp("#\\{"+p+"\\}","g"),obj[p]);}}
return capitalize(str);}
function infer(field){var
$f=$(field),id=$f.prop("id"),ret=$.validity.settings.defaultFieldName;if(/^([A-Z0-9][a-z]*)+$/.test(id)){ret=id.replace(/([A-Z0-9])[a-z]*/g," $&");}
else if(/^[a-z0-9]+(_[a-z0-9]+)*$/.test(id)){var arr=id.split("_");for(var i=0;i<arr.length;++i){arr[i]=capitalize(arr[i]);}
ret=arr.join(" ");}
return $.trim(ret);}
function capitalize(sz){return sz.substring?sz.substring(0,1).toUpperCase()+sz.substring(1,sz.length):sz;}
__private={validate:validate,addToReport:addToReport,raiseError:raiseError,raiseAggregateError:raiseAggregateError,numericSum:numericSum,format:format,infer:infer,capitalize:capitalize};})(jQuery);(function($){$.validity.outputs.tooltip={tooltipClass:"validity-tooltip",start:function(){$("."+$.validity.outputs.tooltip.tooltipClass).remove();},end:function(results){},raise:function($obj,msg){var pos=$obj.offset();pos.left+=$obj.width()+18;pos.top+=8;$("<div class=\"validity-tooltip\">"+msg+"<div class=\"validity-tooltip-outer\">"+"<div class=\"validity-tooltip-inner\"></div>"+"</div>"+"</div>").click(function(){$obj.focus();$(this).fadeOut();}).css(pos).hide().appendTo("body").fadeIn();},raiseAggregate:function($obj,msg){if($obj.length){this.raise($obj.filter(":last"),msg);}}};})(jQuery);(function($){function getIdentifier($obj){return $obj.attr('id').length?$obj.attr('id'):$obj.attr('name');}
$.validity.outputs.label={cssClass:"error",start:function(){$("."+$.validity.settings.cssClass).remove();},end:function(results){if(!results.valid&&$.validity.settings.scrollTo){location.hash=$("."+$.validity.outputs.label.cssClass+":eq(0)").attr('for');}},raise:function($obj,msg){var
labelSelector="."+$.validity.outputs.label.cssClass+"[for='"+getIdentifier($obj)+"']";if($(labelSelector).length){$(labelSelector).text(msg);}
else{$("<label/>").attr("for",getIdentifier($obj)).addClass($.validity.outputs.label.cssClass).text(msg).click(function(){if($obj.length){$obj[0].select();}}).insertAfter($obj);}},raiseAggregate:function($obj,msg){if($obj.length){this.raise($($obj.get($obj.length-1)),msg);}}};})(jQuery);(function($){var
errorClass="validity-modal-msg",container="body";$.validity.outputs.modal={start:function(){$("."+errorClass).remove();},end:function(results){if(!results.valid&&$.validity.settings.scrollTo){location.hash=$("."+errorClass+":eq(0)").attr('id');}},raise:function($obj,msg){if($obj.length){if($obj.css("display")=="none"&&$obj.get(0).tagName=="SELECT")
$obj=$("#"+$obj.attr("id")+"-button");var
off=$obj.offset(),obj=$obj.get(0),errorStyle={left:parseInt(off.left+$obj.width()+4,10)+"px",top:parseInt(off.top-10,10)+"px"};$modalError=$("<div/>").attr("id",obj.name+"_"+obj.id+"_validatorMsg").addClass(errorClass).addClass("customModalValidator").css(errorStyle).text(msg).click($.validity.settings.modalErrorsClickable?function(){$(this).remove();}:null).prepend($("<img/>",{src:"/content/img/flechita.png"}).css({"position":"relative","left":"-16px","top":"3px"}));$modalError.appendTo(container);$(obj).click(function(){$("#"+obj.name+"_"+obj.id+"_validatorMsg").remove();});}},raiseAggregate:function($obj,msg){if($obj.length){this.raise($($obj.get($obj.length-1)),msg);}}};})(jQuery);(function($){var
container=".validity-summary-container",erroneous="validity-erroneous",errors="."+erroneous,wrapper="<li/>",buffer=[];$.validity.outputs.summary={start:function(){$(errors).removeClass(erroneous);buffer=[];},end:function(results){$(container).hide().find("ul").html('');if(buffer.length){for(var i=0;i<buffer.length;++i){$(wrapper).text(buffer[i]).appendTo(container+" ul");}
    $(container).show(); if ($.validity.settings.scrollTo) { location.hash = $(errors + ":eq(0)").attr("id"); }
}
}, raise: function ($obj, msg) { buffer.push(msg); $obj.addClass(erroneous); }, raiseAggregate: function ($obj, msg) { this.raise($obj, msg); }, container: function () { document.write("<div class=\"validity-summary-container\">" + "The form didn't submit for the following reason(s):" + "<ul></ul>" + "</div>"); }
};
})(jQuery); $.extend($.validity.messages, { require: "#{field} obligatorio.", date: "#{field} debe tener formato de fecha. (dia/mes/año, 04/05/2006)", email: "#{field} debe tener formato de email.", number: "#{field} el valor debe ser numerico.", generic: "Error." }); $.validity.setup({ defaultFieldName: "campo" }); $.extend($.validity.patterns, { date: window.validDate });
//Validity--

//selectMenu
(function ($) {
$.widget("ui.selectmenu", { _init: function () {
var self = this, o = this.options; this.ids = [this.element.attr('id') + '-' + 'button', this.element.attr('id') + '-' + 'menu']; this._safemouseup = true; this.newelement = $('<a class="' + this.widgetBaseClass + ' ui-state-default ui-corner-all" id="' + this.ids[0] + '" role="button" href="#" aria-haspopup="true" aria-owns="' + this.ids[1] + '"></a>').insertAfter(this.element); var tabindex = this.element.attr('tabindex'); if (tabindex) { this.newelement.attr('tabindex', tabindex); }
this.newelement.data('selectelement', this.element); this.selectmenuIcon = $('<span class="' + this.widgetBaseClass + '-icon ui-icon"></span>').prependTo(this.newelement).addClass((o.style == "popup") ? 'ui-icon-triangle-2-n-s' : 'ui-icon-triangle-1-s'); $('label[for=' + this.element.attr('id') + ']').attr('for', this.ids[0]).bind('click', function () { self.newelement[0].focus(); return false; }); this.newelement.bind('mousedown', function (event) {
self._toggle(event); if (o.style == "popup") { self._safemouseup = false; setTimeout(function () { self._safemouseup = true; }, 300); }
return false;
}).bind('click', function () { return false; }).keydown(function (event) {
var ret = true; switch (event.keyCode) { case $.ui.keyCode.ENTER: ret = true; break; case $.ui.keyCode.SPACE: ret = false; self._toggle(event); break; case $.ui.keyCode.UP: case $.ui.keyCode.LEFT: ret = false; self._moveSelection(-1); break; case $.ui.keyCode.DOWN: case $.ui.keyCode.RIGHT: ret = false; self._moveSelection(1); break; case $.ui.keyCode.TAB: ret = true; break; default: ret = false; self._typeAhead(event.keyCode, 'mouseup'); break; }
return ret;
}).bind('mouseover focus', function () { $(this).addClass(self.widgetBaseClass + '-focus ui-state-hover'); }).bind('mouseout blur', function () { $(this).removeClass(self.widgetBaseClass + '-focus ui-state-hover'); }); $(document).mousedown(function (event) { self.close(event); }); this.element.click(function () { this._refreshValue(); }).focus(function () { this.newelement[0].focus(); }); var cornerClass = (o.style == "dropdown") ? " ui-corner-bottom" : " ui-corner-all"
this.list = $('<ul class="' + self.widgetBaseClass + '-menu ui-widget-content' + cornerClass + '" aria-hidden="true" role="listbox" aria-labelledby="' + this.ids[0] + '" id="' + this.ids[1] + '"></ul>').appendTo('body'); var selectOptionData = []; this.element.find('option').each(function () { selectOptionData.push({ value: $(this).attr('value'), text: self._formatText(jQuery(this).text()), selected: $(this).attr('selected'), classes: $(this).attr('class'), parentOptGroup: $(this).parent('optgroup').attr('label') }); }); var activeClass = (self.options.style == "popup") ? " ui-state-active" : ""; for (var i in selectOptionData) {
var thisLi = $('<li role="presentation"><a href="#" tabindex="-1" role="option" aria-selected="false">' + selectOptionData[i].text + '</a></li>').data('index', i).addClass(selectOptionData[i].classes).data('optionClasses', selectOptionData[i].classes || '').mouseup(function (event) {
if (self._safemouseup) {
var changed = $(this).data('index') != self._selectedIndex(); self.value($(this).data('index')); self.select(event); if (changed) { self.change(event); }
self.close(event, true);
}
return false;
}).click(function () { return false; }).bind('mouseover focus', function () { self._selectedOptionLi().addClass(activeClass); self._focusedOptionLi().removeClass(self.widgetBaseClass + '-item-focus ui-state-hover'); $(this).removeClass('ui-state-active').addClass(self.widgetBaseClass + '-item-focus ui-state-hover'); }).bind('mouseout blur', function () {
if ($(this).is(self._selectedOptionLi())) { $(this).addClass(activeClass); }
$(this).removeClass(self.widgetBaseClass + '-item-focus ui-state-hover');
}); if (selectOptionData[i].parentOptGroup) {
var optGroupName = self.widgetBaseClass + '-group-' + selectOptionData[i].parentOptGroup; if (this.list.find('li.' + optGroupName).size()) { this.list.find('li.' + optGroupName + ':last ul').append(thisLi); }
else { $('<li role="presentation" class="' + self.widgetBaseClass + '-group ' + optGroupName + '"><span class="' + self.widgetBaseClass + '-group-label">' + selectOptionData[i].parentOptGroup + '</span><ul></ul></li>').appendTo(this.list).find('ul').append(thisLi); } 
}
else { thisLi.appendTo(this.list); }
this.list.bind('mousedown mouseup', function () { return false; }); if (o.icons) { for (var j in o.icons) { if (thisLi.is(o.icons[j].find)) { thisLi.data('optionClasses', selectOptionData[i].classes + ' ' + self.widgetBaseClass + '-hasIcon').addClass(self.widgetBaseClass + '-hasIcon'); var iconClass = o.icons[j].icon || ""; thisLi.find('a:eq(0)').prepend('<span class="' + self.widgetBaseClass + '-item-icon ui-icon ' + iconClass + '"></span>'); } } } 
}
this.list.find('li:last').addClass("ui-corner-bottom"); if (o.style == 'popup') { this.list.find('li:first').addClass("ui-corner-top"); }
if (o.transferClasses) { var transferClasses = this.element.attr('class') || ''; this.newelement.add(this.list).addClass(transferClasses); }
var selectWidth = this.element.width() - 1; this.newelement.width((o.width) ? o.width : selectWidth); if (o.style == 'dropdown') { this.list.width((o.menuWidth) ? o.menuWidth : ((o.width) ? o.width : selectWidth)); }
else { this.list.width((o.menuWidth) ? o.menuWidth : ((o.width) ? o.width - o.handleWidth : selectWidth - o.handleWidth)); }
if (o.maxHeight && o.maxHeight < this.list.height()) { this.list.height(o.maxHeight); }
this._optionLis = this.list.find('li:not(.' + self.widgetBaseClass + '-group)'); this.list.keydown(function (event) {
var ret = true; switch (event.keyCode) { case $.ui.keyCode.UP: case $.ui.keyCode.LEFT: ret = false; self._moveFocus(-1); break; case $.ui.keyCode.DOWN: case $.ui.keyCode.RIGHT: ret = false; self._moveFocus(1); break; case $.ui.keyCode.HOME: ret = false; self._moveFocus(':first'); break; case $.ui.keyCode.PAGE_UP: ret = false; self._scrollPage('up'); break; case $.ui.keyCode.PAGE_DOWN: ret = false; self._scrollPage('down'); break; case $.ui.keyCode.END: ret = false; self._moveFocus(':last'); break; case $.ui.keyCode.ENTER: case $.ui.keyCode.SPACE: ret = false; self.close(event, true); $(event.target).parents('li:eq(0)').trigger('mouseup'); break; case $.ui.keyCode.TAB: ret = true; self.close(event, true); break; case $.ui.keyCode.ESCAPE: ret = false; self.close(event, true); break; default: ret = false; self._typeAhead(event.keyCode, 'focus'); break; }
return ret;
}); if (o.style == 'dropdown') { this.newelement.addClass(self.widgetBaseClass + "-dropdown"); this.list.addClass(self.widgetBaseClass + "-menu-dropdown"); }
else { this.newelement.addClass(self.widgetBaseClass + "-popup"); this.list.addClass(self.widgetBaseClass + "-menu-popup"); }
this.newelement.prepend('<span class="' + self.widgetBaseClass + '-status">' + selectOptionData[this._selectedIndex()].text + '</span>'); this.element.hide(); if (this.element.attr('disabled') == true) { this.disable(); }
this.value(this._selectedIndex());
}, destroy: function () { this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass + '-disabled' + ' ' + this.namespace + '-state-disabled').removeAttr('aria-disabled'); $('label[for=' + this.newelement.attr('id') + ']').attr('for', this.element.attr('id')).unbind('click'); this.newelement.remove(); this.list.remove(); this.element.show(); }, _typeAhead: function (code, eventType) {
var self = this; if (!self._prevChar) { self._prevChar = ['', 0]; }
var C = String.fromCharCode(code); c = C.toLowerCase(); var focusFound = false; function focusOpt(elem, ind) { focusFound = true; $(elem).trigger(eventType); self._prevChar[1] = ind; }; this.list.find('li a').each(function (i) {
if (!focusFound) {
var thisText = $(this).text(); if (thisText.indexOf(C) == 0 || thisText.indexOf(c) == 0) {
if (self._prevChar[0] == C) { if (self._prevChar[1] < i) { focusOpt(this, i); } }
else { focusOpt(this, i); } 
} 
} 
}); this._prevChar[0] = C;
}, _uiHash: function () { return { value: this.value() }; }, open: function (event) {
var self = this; var disabledStatus = this.newelement.attr("aria-disabled"); if (disabledStatus != 'true') {
this._refreshPosition(); this._closeOthers(event); this.newelement.addClass('ui-state-active'); this.list.appendTo('body').addClass(self.widgetBaseClass + '-open').attr('aria-hidden', false).find('li:not(.' + self.widgetBaseClass + '-group):eq(' + this._selectedIndex() + ') a')[0].focus(); if (this.options.style == "dropdown") { this.newelement.removeClass('ui-corner-all').addClass('ui-corner-top'); }
this._refreshPosition(); this._trigger("open", event, this._uiHash());
} 
}, close: function (event, retainFocus) {
if (this.newelement.is('.ui-state-active')) {
this.newelement.removeClass('ui-state-active'); this.list.attr('aria-hidden', true).removeClass(this.widgetBaseClass + '-open'); if (this.options.style == "dropdown") { this.newelement.removeClass('ui-corner-top').addClass('ui-corner-all'); }
if (retainFocus) { this.newelement[0].focus(); }
this._trigger("close", event, this._uiHash());
} 
}, change: function (event) { this.element.trigger('change'); this._trigger("change", event, this._uiHash()); }, select: function (event) { this._trigger("select", event, this._uiHash()); }, _closeOthers: function (event) { $('.' + this.widgetBaseClass + '.ui-state-active').not(this.newelement).each(function () { $(this).data('selectelement').selectmenu('close', event); }); $('.' + this.widgetBaseClass + '.ui-state-hover').trigger('mouseout'); }, _toggle: function (event, retainFocus) {
if (this.list.is('.' + this.widgetBaseClass + '-open')) { this.close(event, retainFocus); }
else { this.open(event); } 
}, _formatText: function (text) { return this.options.format ? this.options.format(text) : text; }, _selectedIndex: function () { return this.element[0].selectedIndex; }, _selectedOptionLi: function () { return this._optionLis.eq(this._selectedIndex()); }, _focusedOptionLi: function () { return this.list.find('.' + this.widgetBaseClass + '-item-focus'); }, _moveSelection: function (amt) { var currIndex = parseInt(this._selectedOptionLi().data('index'), 10); var newIndex = currIndex + amt; return this._optionLis.eq(newIndex).trigger('mouseup'); }, _moveFocus: function (amt) {
if (!isNaN(amt)) { var currIndex = parseInt(this._focusedOptionLi().data('index'), 10); var newIndex = currIndex + amt; }
else { var newIndex = parseInt(this._optionLis.filter(amt).data('index'), 10); }
if (newIndex < 0) { newIndex = 0; }
if (newIndex > this._optionLis.size() - 1) { newIndex = this._optionLis.size() - 1; }
var activeID = this.widgetBaseClass + '-item-' + Math.round(Math.random() * 1000); this._focusedOptionLi().find('a:eq(0)').attr('id', ''); this._optionLis.eq(newIndex).find('a:eq(0)').attr('id', activeID)[0].focus(); this.list.attr('aria-activedescendant', activeID);
}, _scrollPage: function (direction) { var numPerPage = Math.floor(this.list.outerHeight() / this.list.find('li:first').outerHeight()); numPerPage = (direction == 'up') ? -numPerPage : numPerPage; this._moveFocus(numPerPage); }, _setData: function (key, value) { this.options[key] = value; if (key == 'disabled') { this.close(); this.element.add(this.newelement).add(this.list)[value ? 'addClass' : 'removeClass'](this.widgetBaseClass + '-disabled' + ' ' + this.namespace + '-state-disabled').attr("aria-disabled", value); } }, value: function (newValue) {
if (arguments.length) { this.element[0].selectedIndex = newValue; this._refreshValue(); this._refreshPosition(); }
return this.element[0].selectedIndex;
}, _refreshValue: function () { var activeClass = (this.options.style == "popup") ? " ui-state-active" : ""; var activeID = this.widgetBaseClass + '-item-' + Math.round(Math.random() * 1000); this.list.find('.' + this.widgetBaseClass + '-item-selected').removeClass(this.widgetBaseClass + "-item-selected" + activeClass).find('a').attr('aria-selected', 'false').attr('id', ''); this._selectedOptionLi().addClass(this.widgetBaseClass + "-item-selected" + activeClass).find('a').attr('aria-selected', 'true').attr('id', activeID); var currentOptionClasses = this.newelement.data('optionClasses') ? this.newelement.data('optionClasses') : ""; var newOptionClasses = this._selectedOptionLi().data('optionClasses') ? this._selectedOptionLi().data('optionClasses') : ""; this.newelement.removeClass(currentOptionClasses).data('optionClasses', newOptionClasses).addClass(newOptionClasses).find('.' + this.widgetBaseClass + '-status').html(this._selectedOptionLi().find('a:eq(0)').html()); this.list.attr('aria-activedescendant', activeID) }, _refreshPosition: function () {
this.list.css('left', (this.newelement.offset().left + this.newelement.width() < $(window).width() ? this.newelement.offset().left : 0));var menuTop = this.newelement.offset().top; var scrolledAmt = this.list[0].scrollTop; this.list.find('li:lt(' + this._selectedIndex() + ')').each(function () { scrolledAmt -= $(this).outerHeight(); }); if (this.newelement.is('.' + this.widgetBaseClass + '-popup')) { menuTop += scrolledAmt; this.list.css('top', menuTop); }
else { menuTop += this.newelement.height(); this.list.css('top', menuTop); } 
} 
}); $.extend($.ui.selectmenu, { getter: "value", version: "@VERSION", eventPrefix: "selectmenu", defaults: { transferClasses: true, style: 'popup', width: null, menuWidth: null, handleWidth: 26, maxHeight: null, icons: null, format: null} });
})(jQuery);
//selectMenu--

//dateRangePicker
if(window.CurrentCulture == "es")
{
    Date.CultureInfo = { name: "es", englishName: "Spanish (Spain)", nativeName: "Spanish (Spain)", dateFormat: "dd/mm/yy", dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"], abbreviatedDayNames: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"], shortestDayNames: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"], firstLetterDayNames: ["D", "L", "M", "M", "J", "V", "S"], monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], abbreviatedMonthNames: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"], amDesignator: "AM", pmDesignator: "PM", firstDayOfWeek: 0, twoDigitYearMax: 2029, dateElementOrder: "dmy", formatPatterns: { shortDate: "d/M/yyyy", longDate: "dddd, MMMM dd, yyyy", shortTime: "h:mm tt", longTime: "h:mm:ss tt", fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt", sortableDateTime: "yyyy-MM-ddTHH:mm:ss", universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ", rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT", monthDay: "MMMM dd", yearMonth: "MMMM, yyyy" }, regexPatterns: { jan: /^jan(uary)?/i, feb: /^feb(ruary)?/i, mar: /^mar(ch)?/i, apr: /^apr(il)?/i, may: /^may/i, jun: /^jun(e)?/i, jul: /^jul(y)?/i, aug: /^aug(ust)?/i, sep: /^sep(t(ember)?)?/i, oct: /^oct(ober)?/i, nov: /^nov(ember)?/i, dec: /^dec(ember)?/i, sun: /^su(n(day)?)?/i, mon: /^mo(n(day)?)?/i, tue: /^tu(e(s(day)?)?)?/i, wed: /^we(d(nesday)?)?/i, thu: /^th(u(r(s(day)?)?)?)?/i, fri: /^fr(i(day)?)?/i, sat: /^sa(t(urday)?)?/i, future: /^next/i, past: /^last|past|prev(ious)?/i, add: /^(\+|after|from)/i, subtract: /^(\-|before|ago)/i, yesterday: /^yesterday/i, today: /^t(oday)?/i, tomorrow: /^tomorrow/i, now: /^n(ow)?/i, millisecond: /^ms|milli(second)?s?/i, second: /^sec(ond)?s?/i, minute: /^min(ute)?s?/i, hour: /^h(ou)?rs?/i, week: /^w(ee)?k/i, month: /^m(o(nth)?s?)?/i, day: /^d(ays?)?/i, year: /^y((ea)?rs?)?/i, shortMeridian: /^(a|p)/i, longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i, timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i, ordinalSuffix: /^\s*(st|nd|rd|th)/i, timeContext: /^\s*(\:|a|p)/i }, abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" }, abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" } };
    var today = "Hoy";
    var yesterday = "Ayer";
    var last7Days = "Últimos 7 días";
    var lastMonth = "Mes anterior";
    var currentMonth = "Mes actual";
    var currentYear = "Año actual";
    var dateRange = "Rango de fechas";
    var startDate = "Fecha de inicio";
    var allDatesBefore = "Anterior a";
    var allDatesAfter= "Posterior a";
    var endDate = "Fecha de fin";
    var next = "Siguiente";
    var previous = "Anterior";
    var done = "Hecho";
    var dateFormat = "d/m/yy";
}
else {
    Date.CultureInfo = { name: "en", englishName: "English (US)", nativeName: "English (US)", dateFormat: "mm/dd/yy", dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"], monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"], amDesignator: "AM", pmDesignator: "PM", firstDayOfWeek: 0, twoDigitYearMax: 2029, dateElementOrder: "mdy", formatPatterns: { shortDate: "M/d/yyyy", longDate: "MMMM dd, dddd, yyyy", shortTime: "h:mm tt", longTime: "h:mm:ss tt", fullDateTime: "MMMM dd, dddd, yyyy h:mm:ss tt", sortableDateTime: "yyyy-MM-ddTHH:mm:ss", universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ", rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT", monthDay: "MMMM dd", yearMonth: "MMMM, yyyy" }, regexPatterns: { jan: /^jan(uary)?/i, feb: /^feb(ruary)?/i, mar: /^mar(ch)?/i, apr: /^apr(il)?/i, may: /^may/i, jun: /^jun(e)?/i, jul: /^jul(y)?/i, aug: /^aug(ust)?/i, sep: /^sep(t(ember)?)?/i, oct: /^oct(ober)?/i, nov: /^nov(ember)?/i, dec: /^dec(ember)?/i, sun: /^su(n(day)?)?/i, mon: /^mo(n(day)?)?/i, tue: /^tu(e(s(day)?)?)?/i, wed: /^we(d(nesday)?)?/i, thu: /^th(u(r(s(day)?)?)?)?/i, fri: /^fr(i(day)?)?/i, sat: /^sa(t(urday)?)?/i, future: /^next/i, past: /^last|past|prev(ious)?/i, add: /^(\+|after|from)/i, subtract: /^(\-|before|ago)/i, yesterday: /^yesterday/i, today: /^t(oday)?/i, tomorrow: /^tomorrow/i, now: /^n(ow)?/i, millisecond: /^ms|milli(second)?s?/i, second: /^sec(ond)?s?/i, minute: /^min(ute)?s?/i, hour: /^h(ou)?rs?/i, week: /^w(ee)?k/i, month: /^m(o(nth)?s?)?/i, day: /^d(ays?)?/i, year: /^y((ea)?rs?)?/i, shortMeridian: /^(a|p)/i, longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i, timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i, ordinalSuffix: /^\s*(st|nd|rd|th)/i, timeContext: /^\s*(\:|a|p)/i }, abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" }, abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800" } };
    var today = "Today";
    var yesterday = "Yesterday";
    var last7Days = "Last 7 days";
    var lastMonth = "Last month";
    var currentMonth = "Current month";
    var currentYear = "Current year";
    var dateRange = "Dates range";
    var startDate = "Start date";
    var allDatesBefore = "Before";
    var allDatesAfter= "After";
    var endDate = "End date";
    var next = "Next";
    var previous = "Previous";
    var done = "Done";
    var dateFormat = "m/d/yy";

}

//Date.getMonthNumberFromName = function (a) { var b = Date.CultureInfo.monthNames, c = Date.CultureInfo.abbreviatedMonthNames, d = a.toLowerCase(); for (var e = 0; e < b.length; e++) { if (b[e].toLowerCase() == d || c[e].toLowerCase() == d) { return e } } return -1 }; Date.getDayNumberFromName = function (a) { var b = Date.CultureInfo.dayNames, c = Date.CultureInfo.abbreviatedDayNames, d = Date.CultureInfo.shortestDayNames, e = a.toLowerCase(); for (var f = 0; f < b.length; f++) { if (b[f].toLowerCase() == e || c[f].toLowerCase() == e) { return f } } return -1 }; Date.isLeapYear = function (a) { return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0 }; Date.getDaysInMonth = function (a, b) { return [31, Date.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b] }; Date.getTimezoneOffset = function (a, b) { return b || false ? Date.CultureInfo.abbreviatedTimeZoneDST[a.toUpperCase()] : Date.CultureInfo.abbreviatedTimeZoneStandard[a.toUpperCase()] }; Date.getTimezoneAbbreviation = function (a, b) { var c = b || false ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard, d; for (d in c) { if (c[d] === a) { return d } } return null }; Date.prototype.clone = function () { return new Date(this.getTime()) }; Date.prototype.compareTo = function (a) { if (isNaN(this)) { throw new Error(this) } if (a instanceof Date && !isNaN(a)) { return this > a ? 1 : this < a ? -1 : 0 } else { throw new TypeError(a) } }; Date.prototype.equals = function (a) { return this.compareTo(a) === 0 }; Date.prototype.between = function (a, b) { var c = this.getTime(); return c >= a.getTime() && c <= b.getTime() }; Date.prototype.addMilliseconds = function (a) { this.setMilliseconds(this.getMilliseconds() + a); return this }; Date.prototype.addSeconds = function (a) { return this.addMilliseconds(a * 1e3) }; Date.prototype.addMinutes = function (a) { return this.addMilliseconds(a * 6e4) }; Date.prototype.addHours = function (a) { return this.addMilliseconds(a * 36e5) }; Date.prototype.addDays = function (a) { return this.addMilliseconds(a * 864e5) }; Date.prototype.addWeeks = function (a) { return this.addMilliseconds(a * 6048e5) }; Date.prototype.addMonths = function (a) { var b = this.getDate(); this.setDate(1); this.setMonth(this.getMonth() + a); this.setDate(Math.min(b, this.getDaysInMonth())); return this }; Date.prototype.addYears = function (a) { return this.addMonths(a * 12) }; Date.prototype.add = function (a) { if (typeof a == "number") { this._orient = a; return this } var b = a; if (b.millisecond || b.milliseconds) { this.addMilliseconds(b.millisecond || b.milliseconds) } if (b.second || b.seconds) { this.addSeconds(b.second || b.seconds) } if (b.minute || b.minutes) { this.addMinutes(b.minute || b.minutes) } if (b.hour || b.hours) { this.addHours(b.hour || b.hours) } if (b.month || b.months) { this.addMonths(b.month || b.months) } if (b.year || b.years) { this.addYears(b.year || b.years) } if (b.day || b.days) { this.addDays(b.day || b.days) } return this }; Date._validate = function (a, b, c, d) { if (typeof a != "number") { throw new TypeError(a + " is not a Number.") } else if (a < b || a > c) { throw new RangeError(a + " is not a valid value for " + d + ".") } return true }; Date.validateMillisecond = function (a) { return Date._validate(a, 0, 999, "milliseconds") }; Date.validateSecond = function (a) { return Date._validate(a, 0, 59, "seconds") }; Date.validateMinute = function (a) { return Date._validate(a, 0, 59, "minutes") }; Date.validateHour = function (a) { return Date._validate(a, 0, 23, "hours") }; Date.validateDay = function (a, b, c) { return Date._validate(a, 1, Date.getDaysInMonth(b, c), "days") }; Date.validateMonth = function (a) { return Date._validate(a, 0, 11, "months") }; Date.validateYear = function (a) { return Date._validate(a, 1, 9999, "seconds") }; Date.prototype.set = function (a) { var b = a; if (!b.millisecond && b.millisecond !== 0) { b.millisecond = -1 } if (!b.second && b.second !== 0) { b.second = -1 } if (!b.minute && b.minute !== 0) { b.minute = -1 } if (!b.hour && b.hour !== 0) { b.hour = -1 } if (!b.day && b.day !== 0) { b.day = -1 } if (!b.month && b.month !== 0) { b.month = -1 } if (!b.year && b.year !== 0) { b.year = -1 } if (b.millisecond != -1 && Date.validateMillisecond(b.millisecond)) { this.addMilliseconds(b.millisecond - this.getMilliseconds()) } if (b.second != -1 && Date.validateSecond(b.second)) { this.addSeconds(b.second - this.getSeconds()) } if (b.minute != -1 && Date.validateMinute(b.minute)) { this.addMinutes(b.minute - this.getMinutes()) } if (b.hour != -1 && Date.validateHour(b.hour)) { this.addHours(b.hour - this.getHours()) } if (b.month !== -1 && Date.validateMonth(b.month)) { this.addMonths(b.month - this.getMonth()) } if (b.year != -1 && Date.validateYear(b.year)) { this.addYears(b.year - this.getFullYear()) } if (b.day != -1 && Date.validateDay(b.day, this.getFullYear(), this.getMonth())) { this.addDays(b.day - this.getDate()) } if (b.timezone) { this.setTimezone(b.timezone) } if (b.timezoneOffset) { this.setTimezoneOffset(b.timezoneOffset) } return this }; Date.prototype.clearTime = function () { this.setHours(0); this.setMinutes(0); this.setSeconds(0); this.setMilliseconds(0); return this }; Date.prototype.isLeapYear = function () { var a = this.getFullYear(); return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0 }; Date.prototype.isWeekday = function () { return !(this.is().sat() || this.is().sun()) }; Date.prototype.getDaysInMonth = function () { return Date.getDaysInMonth(this.getFullYear(), this.getMonth()) }; Date.prototype.moveToFirstDayOfMonth = function () { return this.set({ day: 1 }) }; Date.prototype.moveToLastDayOfMonth = function () { return this.set({ day: this.getDaysInMonth() }) }; Date.prototype.moveToDayOfWeek = function (a, b) { var c = (a - this.getDay() + 7 * (b || +1)) % 7; return this.addDays(c === 0 ? c += 7 * (b || +1) : c) }; Date.prototype.moveToMonth = function (a, b) { var c = (a - this.getMonth() + 12 * (b || +1)) % 12; return this.addMonths(c === 0 ? c += 12 * (b || +1) : c) }; Date.prototype.getDayOfYear = function () { return Math.floor((this - new Date(this.getFullYear(), 0, 1)) / 864e5) }; Date.prototype.getWeekOfYear = function (a) { var b = this.getFullYear(), c = this.getMonth(), d = this.getDate(); var e = a || Date.CultureInfo.firstDayOfWeek; var f = 7 + 1 - (new Date(b, 0, 1)).getDay(); if (f == 8) { f = 1 } var g = (Date.UTC(b, c, d, 0, 0, 0) - Date.UTC(b, 0, 1, 0, 0, 0)) / 864e5 + 1; var h = Math.floor((g - f + 7) / 7); if (h === e) { b--; var i = 7 + 1 - (new Date(b, 0, 1)).getDay(); if (i == 2 || i == 8) { h = 53 } else { h = 52 } } return h }; Date.prototype.isDST = function () { return this.toString().match(/(E|C|M|P)(S|D)T/)[2] == "D" }; Date.prototype.getTimezone = function () { return Date.getTimezoneAbbreviation(this.getUTCOffset, this.isDST()) }; Date.prototype.setTimezoneOffset = function (a) { var b = this.getTimezoneOffset(), c = Number(a) * -6 / 10; this.addMinutes(c - b); return this }; Date.prototype.setTimezone = function (a) { return this.setTimezoneOffset(Date.getTimezoneOffset(a)) }; Date.prototype.getUTCOffset = function () { var a = this.getTimezoneOffset() * -10 / 6, b; if (a < 0) { b = (a - 1e4).toString(); return b[0] + b.substr(2) } else { b = (a + 1e4).toString(); return "+" + b.substr(1) } }; Date.prototype.getDayName = function (a) { return a ? Date.CultureInfo.abbreviatedDayNames[this.getDay()] : Date.CultureInfo.dayNames[this.getDay()] }; Date.prototype.getMonthName = function (a) { return a ? Date.CultureInfo.abbreviatedMonthNames[this.getMonth()] : Date.CultureInfo.monthNames[this.getMonth()] }; Date.prototype._toString = Date.prototype.toString; Date.prototype.toString = function (a) { var b = this; var c = function (b) { return b.toString().length == 1 ? "0" + b : b }; return a ? a.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g, function (a) { switch (a) { case "hh": return c(b.getHours() < 13 ? b.getHours() : b.getHours() - 12); case "h": return b.getHours() < 13 ? b.getHours() : b.getHours() - 12; case "HH": return c(b.getHours()); case "H": return b.getHours(); case "mm": return c(b.getMinutes()); case "m": return b.getMinutes(); case "ss": return c(b.getSeconds()); case "s": return b.getSeconds(); case "yyyy": return b.getFullYear(); case "yy": return b.getFullYear().toString().substring(2, 4); case "dddd": return b.getDayName(); case "ddd": return b.getDayName(true); case "dd": return c(b.getDate()); case "d": return b.getDate().toString(); case "MMMM": return b.getMonthName(); case "MMM": return b.getMonthName(true); case "MM": return c(b.getMonth() + 1); case "M": return b.getMonth() + 1; case "t": return b.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1); case "tt": return b.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator; case "zzz": case "zz": case "z": return "" } }) : this._toString() }; Date.now = function () { return new Date }; Date.today = function () { return Date.now().clearTime() }; Date.prototype._orient = +1; Date.prototype.next = function () { this._orient = +1; return this }; Date.prototype.last = Date.prototype.prev = Date.prototype.previous = function () { this._orient = -1; return this }; Date.prototype._is = false; Date.prototype.is = function () { this._is = true; return this }; Number.prototype._dateElement = "day"; Number.prototype.fromNow = function () { var a = {}; a[this._dateElement] = this; return Date.now().add(a) }; Number.prototype.ago = function () { var a = {}; a[this._dateElement] = this * -1; return Date.now().add(a) }; (function () { var a = Date.prototype, b = Number.prototype; var c = "sunday monday tuesday wednesday thursday friday saturday".split(/\s/), d = "january february march april may june july august september october november december".split(/\s/), e = "Millisecond Second Minute Hour Day Week Month Year".split(/\s/), f; var g = function (a) { return function () { if (this._is) { this._is = false; return this.getDay() == a } return this.moveToDayOfWeek(a, this._orient) } }; for (var h = 0; h < c.length; h++) { a[c[h]] = a[c[h].substring(0, 3)] = g(h) } var i = function (a) { return function () { if (this._is) { this._is = false; return this.getMonth() === a } return this.moveToMonth(a, this._orient) } }; for (var j = 0; j < d.length; j++) { a[d[j]] = a[d[j].substring(0, 3)] = i(j) } var k = function (a) { return function () { if (a.substring(a.length - 1) != "s") { a += "s" } return this["add" + a](this._orient) } }; var l = function (a) { return function () { this._dateElement = a; return this } }; for (var m = 0; m < e.length; m++) { f = e[m].toLowerCase(); a[f] = a[f + "s"] = k(e[m]); b[f] = b[f + "s"] = l(f) } })(); Date.prototype.toJSONString = function () { return this.toString("yyyy-MM-ddThh:mm:ssZ") }; Date.prototype.toShortDateString = function () { return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern) }; Date.prototype.toLongDateString = function () { return this.toString(Date.CultureInfo.formatPatterns.longDatePattern) }; Date.prototype.toShortTimeString = function () { return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern) }; Date.prototype.toLongTimeString = function () { return this.toString(Date.CultureInfo.formatPatterns.longTimePattern) }; Date.prototype.getOrdinal = function () { switch (this.getDate()) { case 1: case 21: case 31: return "st"; case 2: case 22: return "nd"; case 3: case 23: return "rd"; default: return "th" } }; (function () { Date.Parsing = { Exception: function (a) { this.message = "Parse error at '" + a.substring(0, 10) + " ...'" } }; var a = Date.Parsing; var b = a.Operators = { rtoken: function (b) { return function (c) { var d = c.match(b); if (d) { return [d[0], c.substring(d[0].length)] } else { throw new a.Exception(c) } } }, token: function (a) { return function (a) { return b.rtoken(new RegExp("^s*" + a + "s*"))(a) } }, stoken: function (a) { return b.rtoken(new RegExp("^" + a)) }, until: function (a) { return function (b) { var c = [], d = null; while (b.length) { try { d = a.call(this, b) } catch (e) { c.push(d[0]); b = d[1]; continue } break } return [c, b] } }, many: function (a) { return function (b) { var c = [], d = null; while (b.length) { try { d = a.call(this, b) } catch (e) { return [c, b] } c.push(d[0]); b = d[1] } return [c, b] } }, optional: function (a) { return function (b) { var c = null; try { c = a.call(this, b) } catch (d) { return [null, b] } return [c[0], c[1]] } }, not: function (b) { return function (c) { try { b.call(this, c) } catch (d) { return [null, c] } throw new a.Exception(c) } }, ignore: function (a) { return a ? function (b) { var c = null; c = a.call(this, b); return [null, c[1]] } : null }, product: function () { var a = arguments[0], c = Array.prototype.slice.call(arguments, 1), d = []; for (var e = 0; e < a.length; e++) { d.push(b.each(a[e], c)) } return d }, cache: function (b) { var c = {}, d = null; return function (e) { try { d = c[e] = c[e] || b.call(this, e) } catch (f) { d = c[e] = f } if (d instanceof a.Exception) { throw d } else { return d } } }, any: function () { var b = arguments; return function (c) { var d = null; for (var e = 0; e < b.length; e++) { if (b[e] == null) { continue } try { d = b[e].call(this, c) } catch (f) { d = null } if (d) { return d } } throw new a.Exception(c) } }, each: function () { var b = arguments; return function (c) { var d = [], e = null; for (var f = 0; f < b.length; f++) { if (b[f] == null) { continue } try { e = b[f].call(this, c) } catch (g) { throw new a.Exception(c) } d.push(e[0]); c = e[1] } return [d, c] } }, all: function () { var a = arguments, b = b; return b.each(b.optional(a)) }, sequence: function (c, d, e) { d = d || b.rtoken(/^\s*/); e = e || null; if (c.length == 1) { return c[0] } return function (b) { var f = null, g = null; var h = []; for (var i = 0; i < c.length; i++) { try { f = c[i].call(this, b) } catch (j) { break } h.push(f[0]); try { g = d.call(this, f[1]) } catch (k) { g = null; break } b = g[1] } if (!f) { throw new a.Exception(b) } if (g) { throw new a.Exception(g[1]) } if (e) { try { f = e.call(this, f[1]) } catch (l) { throw new a.Exception(f[1]) } } return [h, f ? f[1] : b] } }, between: function (a, c, d) { d = d || a; var e = b.each(b.ignore(a), c, b.ignore(d)); return function (a) { var b = e.call(this, a); return [[b[0][0], r[0][2]], b[1]] } }, list: function (a, c, d) { c = c || b.rtoken(/^\s*/); d = d || null; return a instanceof Array ? b.each(b.product(a.slice(0, -1), b.ignore(c)), a.slice(-1), b.ignore(d)) : b.each(b.many(b.each(a, b.ignore(c))), px, b.ignore(d)) }, set: function (c, d, e) { d = d || b.rtoken(/^\s*/); e = e || null; return function (f) { var g = null, h = null, i = null, j = null, k = [[], f], l = false; for (var m = 0; m < c.length; m++) { i = null; h = null; g = null; l = c.length == 1; try { g = c[m].call(this, f) } catch (n) { continue } j = [[g[0]], g[1]]; if (g[1].length > 0 && !l) { try { i = d.call(this, g[1]) } catch (o) { l = true } } else { l = true } if (!l && i[1].length === 0) { l = true } if (!l) { var p = []; for (var q = 0; q < c.length; q++) { if (m != q) { p.push(c[q]) } } h = b.set(p, d).call(this, i[1]); if (h[0].length > 0) { j[0] = j[0].concat(h[0]); j[1] = h[1] } } if (j[1].length < k[1].length) { k = j } if (k[1].length === 0) { break } } if (k[0].length === 0) { return k } if (e) { try { i = e.call(this, k[1]) } catch (r) { throw new a.Exception(k[1]) } k[1] = i[1] } return k } }, forward: function (a, b) { return function (c) { return a[b].call(this, c) } }, replace: function (a, b) { return function (c) { var d = a.call(this, c); return [b, d[1]] } }, process: function (a, b) { return function (c) { var d = a.call(this, c); return [b.call(this, d[0]), d[1]] } }, min: function (b, c) { return function (d) { var e = c.call(this, d); if (e[0].length < b) { throw new a.Exception(d) } return e } } }; var c = function (a) { return function () { var b = null, c = []; if (arguments.length > 1) { b = Array.prototype.slice.call(arguments) } else if (arguments[0] instanceof Array) { b = arguments[0] } if (b) { for (var d = 0, e = b.shift() ; d < e.length; d++) { b.unshift(e[d]); c.push(a.apply(null, b)); b.shift(); return c } } else { return a.apply(null, arguments) } } }; var d = "optional not ignore cache".split(/\s/); for (var e = 0; e < d.length; e++) { b[d[e]] = c(b[d[e]]) } var f = function (a) { return function () { if (arguments[0] instanceof Array) { return a.apply(null, arguments[0]) } else { return a.apply(null, arguments) } } }; var g = "each any all".split(/\s/); for (var h = 0; h < g.length; h++) { b[g[h]] = f(b[g[h]]) } })(); (function () { var a = function (b) { var c = []; for (var d = 0; d < b.length; d++) { if (b[d] instanceof Array) { c = c.concat(a(b[d])) } else { if (b[d]) { c.push(b[d]) } } } return c }; Date.Grammar = {}; Date.Translator = { hour: function (a) { return function () { this.hour = Number(a) } }, minute: function (a) { return function () { this.minute = Number(a) } }, second: function (a) { return function () { this.second = Number(a) } }, meridian: function (a) { return function () { this.meridian = a.slice(0, 1).toLowerCase() } }, timezone: function (a) { return function () { var b = a.replace(/[^\d\+\-]/g, ""); if (b.length) { this.timezoneOffset = Number(b) } else { this.timezone = a.toLowerCase() } } }, day: function (a) { var b = a[0]; return function () { this.day = Number(b.match(/\d+/)[0]) } }, month: function (a) { return function () { this.month = a.length == 3 ? Date.getMonthNumberFromName(a) : Number(a) - 1 } }, year: function (a) { return function () { var b = Number(a); this.year = a.length > 2 ? b : b + (b + 2e3 < Date.CultureInfo.twoDigitYearMax ? 2e3 : 1900) } }, rday: function (a) { return function () { switch (a) { case "yesterday": this.days = -1; break; case "tomorrow": this.days = 1; break; case "today": this.days = 0; break; case "now": this.days = 0; this.now = true; break } } }, finishExact: function (a) { a = a instanceof Array ? a : [a]; var b = new Date; this.year = b.getFullYear(); this.month = b.getMonth(); this.day = 1; this.hour = 0; this.minute = 0; this.second = 0; for (var c = 0; c < a.length; c++) { if (a[c]) { a[c].call(this) } } this.hour = this.meridian == "p" && this.hour < 13 ? this.hour + 12 : this.hour; if (this.day > Date.getDaysInMonth(this.year, this.month)) { throw new RangeError(this.day + " is not a valid value for days.") } var d = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second); if (this.timezone) { d.set({ timezone: this.timezone }) } else if (this.timezoneOffset) { d.set({ timezoneOffset: this.timezoneOffset }) } return d }, finish: function (b) { b = b instanceof Array ? a(b) : [b]; if (b.length === 0) { return null } for (var c = 0; c < b.length; c++) { if (typeof b[c] == "function") { b[c].call(this) } } if (this.now) { return new Date } var d = Date.today(); var e = null; var f = !!(this.days != null || this.orient || this.operator); if (f) { var g, h, i; i = this.orient == "past" || this.operator == "subtract" ? -1 : 1; if (this.weekday) { this.unit = "day"; g = Date.getDayNumberFromName(this.weekday) - d.getDay(); h = 7; this.days = g ? (g + i * h) % h : i * h } if (this.month) { this.unit = "month"; g = this.month - d.getMonth(); h = 12; this.months = g ? (g + i * h) % h : i * h; this.month = null } if (!this.unit) { this.unit = "day" } if (this[this.unit + "s"] == null || this.operator != null) { if (!this.value) { this.value = 1 } if (this.unit == "week") { this.unit = "day"; this.value = this.value * 7 } this[this.unit + "s"] = this.value * i } return d.add(this) } else { if (this.meridian && this.hour) { this.hour = this.hour < 13 && this.meridian == "p" ? this.hour + 12 : this.hour } if (this.weekday && !this.day) { this.day = d.addDays(Date.getDayNumberFromName(this.weekday) - d.getDay()).getDate() } if (this.month && !this.day) { this.day = 1 } return d.set(this) } } }; var b = Date.Parsing.Operators, c = Date.Grammar, d = Date.Translator, e; c.datePartDelimiter = b.rtoken(/^([\s\-\.\,\/\x27]+)/); c.timePartDelimiter = b.stoken(":"); c.whiteSpace = b.rtoken(/^\s*/); c.generalDelimiter = b.rtoken(/^(([\s\,]|at|on)+)/); var f = {}; c.ctoken = function (a) { var c = f[a]; if (!c) { var d = Date.CultureInfo.regexPatterns; var e = a.split(/\s+/), g = []; for (var h = 0; h < e.length; h++) { g.push(b.replace(b.rtoken(d[e[h]]), e[h])) } c = f[a] = b.any.apply(null, g) } return c }; c.ctoken2 = function (a) { return b.rtoken(Date.CultureInfo.regexPatterns[a]) }; c.h = b.cache(b.process(b.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), d.hour)); c.hh = b.cache(b.process(b.rtoken(/^(0[0-9]|1[0-2])/), d.hour)); c.H = b.cache(b.process(b.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), d.hour)); c.HH = b.cache(b.process(b.rtoken(/^([0-1][0-9]|2[0-3])/), d.hour)); c.m = b.cache(b.process(b.rtoken(/^([0-5][0-9]|[0-9])/), d.minute)); c.mm = b.cache(b.process(b.rtoken(/^[0-5][0-9]/), d.minute)); c.s = b.cache(b.process(b.rtoken(/^([0-5][0-9]|[0-9])/), d.second)); c.ss = b.cache(b.process(b.rtoken(/^[0-5][0-9]/), d.second)); c.hms = b.cache(b.sequence([c.H, c.mm, c.ss], c.timePartDelimiter)); c.t = b.cache(b.process(c.ctoken2("shortMeridian"), d.meridian)); c.tt = b.cache(b.process(c.ctoken2("longMeridian"), d.meridian)); c.z = b.cache(b.process(b.rtoken(/^(\+|\-)?\s*\d\d\d\d?/), d.timezone)); c.zz = b.cache(b.process(b.rtoken(/^(\+|\-)\s*\d\d\d\d/), d.timezone)); c.zzz = b.cache(b.process(c.ctoken2("timezone"), d.timezone)); c.timeSuffix = b.each(b.ignore(c.whiteSpace), b.set([c.tt, c.zzz])); c.time = b.each(b.optional(b.ignore(b.stoken("T"))), c.hms, c.timeSuffix); c.d = b.cache(b.process(b.each(b.rtoken(/^([0-2]\d|3[0-1]|\d)/), b.optional(c.ctoken2("ordinalSuffix"))), d.day)); c.dd = b.cache(b.process(b.each(b.rtoken(/^([0-2]\d|3[0-1])/), b.optional(c.ctoken2("ordinalSuffix"))), d.day)); c.ddd = c.dddd = b.cache(b.process(c.ctoken("sun mon tue wed thu fri sat"), function (a) { return function () { this.weekday = a } })); c.M = b.cache(b.process(b.rtoken(/^(1[0-2]|0\d|\d)/), d.month)); c.MM = b.cache(b.process(b.rtoken(/^(1[0-2]|0\d)/), d.month)); c.MMM = c.MMMM = b.cache(b.process(c.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), d.month)); c.y = b.cache(b.process(b.rtoken(/^(\d\d?)/), d.year)); c.yy = b.cache(b.process(b.rtoken(/^(\d\d)/), d.year)); c.yyy = b.cache(b.process(b.rtoken(/^(\d\d?\d?\d?)/), d.year)); c.yyyy = b.cache(b.process(b.rtoken(/^(\d\d\d\d)/), d.year)); e = function () { return b.each(b.any.apply(null, arguments), b.not(c.ctoken2("timeContext"))) }; c.day = e(c.d, c.dd); c.month = e(c.M, c.MMM); c.year = e(c.yyyy, c.yy); c.orientation = b.process(c.ctoken("past future"), function (a) { return function () { this.orient = a } }); c.operator = b.process(c.ctoken("add subtract"), function (a) { return function () { this.operator = a } }); c.rday = b.process(c.ctoken("yesterday tomorrow today now"), d.rday); c.unit = b.process(c.ctoken("minute hour day week month year"), function (a) { return function () { this.unit = a } }); c.value = b.process(b.rtoken(/^\d\d?(st|nd|rd|th)?/), function (a) { return function () { this.value = a.replace(/\D/g, "") } }); c.expression = b.set([c.rday, c.operator, c.value, c.unit, c.orientation, c.ddd, c.MMM]); e = function () { return b.set(arguments, c.datePartDelimiter) }; c.mdy = e(c.ddd, c.month, c.day, c.year); c.ymd = e(c.ddd, c.year, c.month, c.day); c.dmy = e(c.ddd, c.day, c.month, c.year); c.date = function (a) { return (c[Date.CultureInfo.dateElementOrder] || c.mdy).call(this, a) }; c.format = b.process(b.many(b.any(b.process(b.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function (a) { if (c[a]) { return c[a] } else { throw Date.Parsing.Exception(a) } }), b.process(b.rtoken(/^[^dMyhHmstz]+/), function (a) { return b.ignore(b.stoken(a)) }))), function (a) { return b.process(b.each.apply(null, a), d.finishExact) }); var g = {}; var h = function (a) { return g[a] = g[a] || c.format(a)[0] }; c.formats = function (a) { if (a instanceof Array) { var c = []; for (var d = 0; d < a.length; d++) { c.push(h(a[d])) } return b.any.apply(null, c) } else { return h(a) } }; c._formats = c.formats(["yyyy-MM-ddTHH:mm:ss", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "d"]); c._start = b.process(b.set([c.date, c.time, c.expression], c.generalDelimiter, c.whiteSpace), d.finish); c.start = function (a) { try { var b = c._formats.call({}, a); if (b[1].length === 0) { return b } } catch (d) { } return c._start.call({}, a) } })(); Date._parse = Date.parse; Date.parse = function (a) { var b = null; if (!a) { return null } try { b = Date.Grammar.start.call({}, a) } catch (c) { return null } return b[1].length === 0 ? b[0] : null }; Date.getParseFunction = function (a) { var b = Date.Grammar.formats(a); return function (a) { var c = null; try { c = b.call({}, a) } catch (d) { return null } return c[1].length === 0 ? c[0] : null } }; Date.parseExact = function (a, b) { return Date.getParseFunction(b)(a) }; var TimeSpan = function (a, b, c, d, e) { var f = "days hours minutes seconds milliseconds".split(/\s+/); var g = function (a) { return function () { return this[a] } }; var h = function (a) { return function (b) { this[a] = b; return this } }; for (var i = 0; i < f.length; i++) { var j = f[i], k = j.slice(0, 1).toUpperCase() + j.slice(1); TimeSpan.prototype[j] = 0; TimeSpan.prototype["get" + k] = g(j); TimeSpan.prototype["set" + k] = h(j) } if (arguments.length == 4) { this.setDays(a); this.setHours(b); this.setMinutes(c); this.setSeconds(d) } else if (arguments.length == 5) { this.setDays(a); this.setHours(b); this.setMinutes(c); this.setSeconds(d); this.setMilliseconds(e) } else if (arguments.length == 1 && typeof a == "number") { var l = a < 0 ? -1 : +1; this.setMilliseconds(Math.abs(a)); this.setDays(Math.floor(this.getMilliseconds() / 864e5) * l); this.setMilliseconds(this.getMilliseconds() % 864e5); this.setHours(Math.floor(this.getMilliseconds() / 36e5) * l); this.setMilliseconds(this.getMilliseconds() % 36e5); this.setMinutes(Math.floor(this.getMilliseconds() / 6e4) * l); this.setMilliseconds(this.getMilliseconds() % 6e4); this.setSeconds(Math.floor(this.getMilliseconds() / 1e3) * l); this.setMilliseconds(this.getMilliseconds() % 1e3); this.setMilliseconds(this.getMilliseconds() * l) } this.getTotalMilliseconds = function () { return this.getDays() * 864e5 + this.getHours() * 36e5 + this.getMinutes() * 6e4 + this.getSeconds() * 1e3 }; this.compareTo = function (a) { var b = new Date(1970, 1, 1, this.getHours(), this.getMinutes(), this.getSeconds()), c; if (a === null) { c = new Date(1970, 1, 1, 0, 0, 0) } else { c = new Date(1970, 1, 1, a.getHours(), a.getMinutes(), a.getSeconds()) } return b < c ? -1 : b > c ? 1 : 0 }; this.equals = function (a) { return this.compareTo(a) === 0 }; this.add = function (a) { return a === null ? this : this.addSeconds(a.getTotalMilliseconds() / 1e3) }; this.subtract = function (a) { return a === null ? this : this.addSeconds(-a.getTotalMilliseconds() / 1e3) }; this.addDays = function (a) { return new TimeSpan(this.getTotalMilliseconds() + a * 864e5) }; this.addHours = function (a) { return new TimeSpan(this.getTotalMilliseconds() + a * 36e5) }; this.addMinutes = function (a) { return new TimeSpan(this.getTotalMilliseconds() + a * 6e4) }; this.addSeconds = function (a) { return new TimeSpan(this.getTotalMilliseconds() + a * 1e3) }; this.addMilliseconds = function (a) { return new TimeSpan(this.getTotalMilliseconds() + a) }; this.get12HourHour = function () { return this.getHours() > 12 ? this.getHours() - 12 : this.getHours() === 0 ? 12 : this.getHours() }; this.getDesignator = function () { return this.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator }; this.toString = function (a) { this._toString = function () { if (this.getDays() !== null && this.getDays() > 0) { return this.getDays() + "." + this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds()) } else { return this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds()) } }; this.p = function (a) { return a.toString().length < 2 ? "0" + a : a }; var b = this; return a ? a.replace(/dd?|HH?|hh?|mm?|ss?|tt?/g, function (a) { switch (a) { case "d": return b.getDays(); case "dd": return b.p(b.getDays()); case "H": return b.getHours(); case "HH": return b.p(b.getHours()); case "h": return b.get12HourHour(); case "hh": return b.p(b.get12HourHour()); case "m": return b.getMinutes(); case "mm": return b.p(b.getMinutes()); case "s": return b.getSeconds(); case "ss": return b.p(b.getSeconds()); case "t": return (b.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator).substring(0, 1); case "tt": return b.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator } }) : this._toString() }; return this }; Date.prototype.getTimeOfDay = function () { return new TimeSpan(0, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds()) }; var TimePeriod = function (a, b, c, d, e, f, g) { var h = "years months days hours minutes seconds milliseconds".split(/\s+/); var i = function (a) { return function () { return this[a] } }; var j = function (a) { return function (b) { this[a] = b; return this } }; for (var k = 0; k < h.length; k++) { var l = h[k], m = l.slice(0, 1).toUpperCase() + l.slice(1); TimePeriod.prototype[l] = 0; TimePeriod.prototype["get" + m] = i(l); TimePeriod.prototype["set" + m] = j(l) } if (arguments.length == 7) { this.years = a; this.months = b; this.setDays(c); this.setHours(d); this.setMinutes(e); this.setSeconds(f); this.setMilliseconds(g) } else if (arguments.length == 2 && arguments[0] instanceof Date && arguments[1] instanceof Date) { var n = a.clone(); var o = b.clone(); var p = n.clone(); var q = n > o ? -1 : +1; this.years = o.getFullYear() - n.getFullYear(); p.addYears(this.years); if (q == +1) { if (p > o) { if (this.years !== 0) { this.years-- } } } else { if (p < o) { if (this.years !== 0) { this.years++ } } } n.addYears(this.years); if (q == +1) { while (n < o && n.clone().addDays(Date.getDaysInMonth(n.getYear(), n.getMonth())) < o) { n.addMonths(1); this.months++ } } else { while (n > o && n.clone().addDays(-n.getDaysInMonth()) > o) { n.addMonths(-1); this.months-- } } var r = o - n; if (r !== 0) { var s = new TimeSpan(r); this.setDays(s.getDays()); this.setHours(s.getHours()); this.setMinutes(s.getMinutes()); this.setSeconds(s.getSeconds()); this.setMilliseconds(s.getMilliseconds()) } } return this }; jQuery.fn.daterangepicker = function (a) { function k(a) { if (!a.getDate()) { return "" } var b = a.getDate(); var d = a.getMonth(); var e = a.getFullYear(); d++; var f = c.dateFormat; return jQuery.datepicker.formatDate(f, a) } function l() { if (i.data("state") == "closed") { o(); i.fadeIn(300).data("state", "open"); c.onOpen() } } function m() { if (i.data("state") == "open") { i.fadeOut(300).data("state", "closed"); c.onClose() } } function n() { if (i.data("state") == "open") { m() } else { l() } } function o() { var a = u || b; var c = a.offset(), d = "left", e = c.left, f = jQuery(window).width() - e - a.outerWidth(); if (e > f) { d = "right", e = f } i.parent().css(d, e).css("top", c.top + a.outerHeight()) } function p(a, b, d, e) { if (a.is(".ui-daterangepicker-specificDate")) { e.hide(); d.show(); b.find(".title-start").text(c.presets.specificDate); b.find(".range-start").restoreDateFromData().css("opacity", 1).show(400); b.find(".range-end").restoreDateFromData().css("opacity", 0).hide(400); setTimeout(function () { e.fadeIn() }, 400) } else if (a.is(".ui-daterangepicker-allDatesBefore")) { e.hide(); d.show(); b.find(".title-end").text(c.presets.allDatesBefore); b.find(".range-start").saveDateToData().datepicker("setDate", c.earliestDate).css("opacity", 0).hide(400); b.find(".range-end").restoreDateFromData().css("opacity", 1).show(400); setTimeout(function () { e.fadeIn() }, 400) } else if (a.is(".ui-daterangepicker-allDatesAfter")) { e.hide(); d.show(); b.find(".title-start").text(c.presets.allDatesAfter); b.find(".range-start").restoreDateFromData().css("opacity", 1).show(400); b.find(".range-end").saveDateToData().datepicker("setDate", c.latestDate).css("opacity", 0).hide(400); setTimeout(function () { e.fadeIn() }, 400) } else if (a.is(".ui-daterangepicker-dateRange")) { e.hide(); d.show(); b.find(".title-start").text(c.rangeStartTitle); b.find(".title-end").text(c.rangeEndTitle); b.find(".range-start").restoreDateFromData().css("opacity", 1).show(400); b.find(".range-end").restoreDateFromData().css("opacity", 1).show(400); setTimeout(function () { e.fadeIn() }, 400) } else { e.hide(); b.find(".range-start, .range-end").css("opacity", 0).hide(400, function () { d.hide() }); var f = typeof a.data("dateStart") == "string" ? Date.parse(a.data("dateStart")) : a.data("dateStart")(); var g = typeof a.data("dateEnd") == "string" ? Date.parse(a.data("dateEnd")) : a.data("dateEnd")(); b.find(".range-start").datepicker("setDate", f).find(".ui-datepicker-current-day").trigger("click"); b.find(".range-end").datepicker("setDate", g).find(".ui-datepicker-current-day").trigger("click") } return false } var b = jQuery(this); var c = jQuery.extend({ presetRanges: [{ text: today, dateStart: "today", dateEnd: "today" }, { text: yesterday, dateStart: "today-1days", dateEnd: "today-1days" }, { text: last7Days, dateStart: "today-7days", dateEnd: "today" }, { text: currentMonth, dateStart: function () { return Date.parse("today").moveToFirstDayOfMonth() }, dateEnd: function () { return Date.parse("today").moveToLastDayOfMonth() } }, { text: currentYear, dateStart: function () { var a = Date.parse("today"); a.setMonth(0); a.setDate(1); return a }, dateEnd: function () { var a = Date.parse("today"); a.setMonth(11); a.setDate(31); return a } }, { text: lastMonth, dateStart: function () { return Date.parse("1 month ago").moveToFirstDayOfMonth() }, dateEnd: function () { return Date.parse("1 month ago").moveToLastDayOfMonth() } }], presets: { /*specificDate: "Fecha especifica",*/ dateRange: dateRange,allDatesBefore: allDatesBefore, allDatesAfter: allDatesAfter }, rangeStartTitle: startDate, rangeEndTitle: endDate, nextLinkText: next, prevLinkText: previous, doneButtonText: done, earliestDate: Date.parse("-15years"), latestDate: Date.parse("+15years"), constrainDates: false, rangeSplitter: "-", dateFormat: dateFormat, closeOnSelect: true, arrows: false, appendTo: "body", onClose: function () { }, onOpen: function () { }, onChange: function () { }, datepickerOptions: null }, a); var d = { onSelect: function (a, d) { if (i.find(".ui-daterangepicker-specificDate").is(".ui-state-active")) { i.find(".range-end").datepicker("setDate", i.find(".range-start").datepicker("getDate")) } $(this).trigger("constrainOtherPicker"); var e = k(i.find(".range-start").datepicker("getDate")); var f = k(i.find(".range-end").datepicker("getDate")); if (b.length == 2) { b.eq(0).val(e).change(); b.eq(1).val(f).change() } else { b.val(e != f ? e + " " + c.rangeSplitter + " " + f : e).change() } if (c.closeOnSelect) { if (!i.find("li.ui-state-active").is(".ui-daterangepicker-dateRange") && !i.is(":animated")) { m() } } c.onChange() }, defaultDate: +0 }; b.bind("change", c.onChange); c.datepickerOptions = a ? jQuery.extend(d, a.datepickerOptions) : d; var e, f = Date.parse("today"); var g, h; if (b.size() == 2) { g = Date.parse(b.eq(0).val()); h = Date.parse(b.eq(1).val()); if (g == null) { g = h } if (h == null) { h = g } } else { g = Date.parse(b.val().split(c.rangeSplitter)[0]); h = Date.parse(b.val().split(c.rangeSplitter)[1]); if (h == null) { h = g } } if (g != null) { e = g } if (h != null) { f = h } var i = jQuery('<div class="ui-daterangepicker ui-widget ui-helper-clearfix ui-widget-content ui-corner-all"></div>'); var j = function () { var a = jQuery('<ul class="ui-widget-content"></ul>').appendTo(i); jQuery.each(c.presetRanges, function () { jQuery('<li class="ui-daterangepicker-' + this.text.replace(/ /g, "") + ' ui-corner-all"><a href="#">' + this.text + "</a></li>").data("dateStart", this.dateStart).data("dateEnd", this.dateEnd).appendTo(a) }); var b = 0; jQuery.each(c.presets, function (c, d) { jQuery('<li class="ui-daterangepicker-' + c + " preset_" + b + ' ui-helper-clearfix ui-corner-all"><span class="ui-icon ui-icon-triangle-1-e"></span><a href="#">' + d + "</a></li>").appendTo(a); b++ }); a.find("li").hover(function () { jQuery(this).addClass("ui-state-hover") }, function () { jQuery(this).removeClass("ui-state-hover") }).click(function () { i.find(".ui-state-active").removeClass("ui-state-active"); jQuery(this).addClass("ui-state-active"); p(jQuery(this), i, q, r); return false }); return a }(); jQuery.fn.restoreDateFromData = function () { if (jQuery(this).data("saveDate")) { jQuery(this).datepicker("setDate", jQuery(this).data("saveDate")).removeData("saveDate") } return this }; jQuery.fn.saveDateToData = function () { if (!jQuery(this).data("saveDate")) { jQuery(this).data("saveDate", jQuery(this).datepicker("getDate")) } return this }; var q = jQuery('<div class="ranges ui-widget-header ui-corner-all ui-helper-clearfix"><div class="range-start"><span class="title-start">Start Date</span></div><div class="range-end"><span class="title-end">End Date</span></div></div>').appendTo(i); q.find(".range-start, .range-end").datepicker(c.datepickerOptions); q.find(".range-start").datepicker("setDate", e); q.find(".range-end").datepicker("setDate", f); q.find(".range-start, .range-end").bind("constrainOtherPicker", function () { if (c.constrainDates) { if ($(this).is(".range-start")) { i.find(".range-end").datepicker("option", "minDate", $(this).datepicker("getDate")) } else { i.find(".range-start").datepicker("option", "maxDate", $(this).datepicker("getDate")) } } }).trigger("constrainOtherPicker"); var r = jQuery('<button class="btnDone ui-state-default ui-corner-all">' + c.doneButtonText + "</button>").click(function () { i.find(".ui-datepicker-current-day").trigger("click"); m() }).hover(function () { jQuery(this).addClass("ui-state-hover") }, function () { jQuery(this).removeClass("ui-state-hover") }).appendTo(q); jQuery(this).click(function () { n(); return false }); q.hide().find(".range-start, .range-end, .btnDone").hide(); i.data("state", "closed"); q.find(".ui-datepicker").css("display", "block"); jQuery(c.appendTo).append(i); i.wrap('<div class="ui-daterangepickercontain"></div>'); if (c.arrows && b.size() == 1) { var s = jQuery('<a href="#" class="ui-daterangepicker-prev ui-corner-all" title="' + c.prevLinkText + '"><span class="ui-icon ui-icon-circle-triangle-w">' + c.prevLinkText + "</span></a>"); var t = jQuery('<a href="#" class="ui-daterangepicker-next ui-corner-all" title="' + c.nextLinkText + '"><span class="ui-icon ui-icon-circle-triangle-e">' + c.nextLinkText + "</span></a>"); jQuery(this).addClass("ui-rangepicker-input ui-widget-content").wrap('<div class="ui-daterangepicker-arrows ui-widget ui-widget-header ui-helper-clearfix ui-corner-all"></div>').before(s).before(t).parent().find("a").click(function () { var a = q.find(".range-start").datepicker("getDate"); var b = q.find(".range-end").datepicker("getDate"); var c = Math.abs((new TimeSpan(a - b)).getTotalMilliseconds()) + 864e5; if (jQuery(this).is(".ui-daterangepicker-prev")) { c = -c } q.find(".range-start, .range-end ").each(function () { var a = jQuery(this).datepicker("getDate"); if (a == null) { return false } jQuery(this).datepicker("setDate", a.add({ milliseconds: c })).find(".ui-datepicker-current-day").trigger("click") }); return false }).hover(function () { jQuery(this).addClass("ui-state-hover") }, function () { jQuery(this).removeClass("ui-state-hover") }); var u = b.parent() } jQuery(document).click(function () { if (i.is(":visible")) { m() } }); i.click(function () { return false }).hide(); return this }
Date.getMonthNumberFromName = function (a) { var b = Date.CultureInfo.monthNames, c = Date.CultureInfo.abbreviatedMonthNames, d = a.toLowerCase(); for (var e = 0; e < b.length; e++) { if (b[e].toLowerCase() == d || c[e].toLowerCase() == d) { return e } } return -1 }; Date.getDayNumberFromName = function (a) { var b = Date.CultureInfo.dayNames, c = Date.CultureInfo.abbreviatedDayNames, d = Date.CultureInfo.shortestDayNames, e = a.toLowerCase(); for (var f = 0; f < b.length; f++) { if (b[f].toLowerCase() == e || c[f].toLowerCase() == e) { return f } } return -1 }; Date.isLeapYear = function (a) { return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0 }; Date.getDaysInMonth = function (a, b) { return [31, Date.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b] }; Date.getTimezoneOffset = function (a, b) { return b || false ? Date.CultureInfo.abbreviatedTimeZoneDST[a.toUpperCase()] : Date.CultureInfo.abbreviatedTimeZoneStandard[a.toUpperCase()] }; Date.getTimezoneAbbreviation = function (a, b) { var c = b || false ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard, d; for (d in c) { if (c[d] === a) { return d } } return null }; Date.prototype.clone = function () { return new Date(this.getTime()) }; Date.prototype.compareTo = function (a) { if (isNaN(this)) { throw new Error(this) } if (a instanceof Date && !isNaN(a)) { return this > a ? 1 : this < a ? -1 : 0 } else { throw new TypeError(a) } }; Date.prototype.equals = function (a) { return this.compareTo(a) === 0 }; Date.prototype.between = function (a, b) { var c = this.getTime(); return c >= a.getTime() && c <= b.getTime() }; Date.prototype.addMilliseconds = function (a) { this.setMilliseconds(this.getMilliseconds() + a); return this }; Date.prototype.addSeconds = function (a) { return this.addMilliseconds(a * 1e3) }; Date.prototype.addMinutes = function (a) { return this.addMilliseconds(a * 6e4) }; Date.prototype.addHours = function (a) { return this.addMilliseconds(a * 36e5) }; Date.prototype.addDays = function (a) { return this.addMilliseconds(a * 864e5) }; Date.prototype.addWeeks = function (a) { return this.addMilliseconds(a * 6048e5) }; Date.prototype.addMonths = function (a) { var b = this.getDate(); this.setDate(1); this.setMonth(this.getMonth() + a); this.setDate(Math.min(b, this.getDaysInMonth())); return this }; Date.prototype.addYears = function (a) { return this.addMonths(a * 12) }; Date.prototype.add = function (a) { if (typeof a == "number") { this._orient = a; return this } var b = a; if (b.millisecond || b.milliseconds) { this.addMilliseconds(b.millisecond || b.milliseconds) } if (b.second || b.seconds) { this.addSeconds(b.second || b.seconds) } if (b.minute || b.minutes) { this.addMinutes(b.minute || b.minutes) } if (b.hour || b.hours) { this.addHours(b.hour || b.hours) } if (b.month || b.months) { this.addMonths(b.month || b.months) } if (b.year || b.years) { this.addYears(b.year || b.years) } if (b.day || b.days) { this.addDays(b.day || b.days) } return this }; Date._validate = function (a, b, c, d) { if (typeof a != "number") { throw new TypeError(a + " is not a Number.") } else if (a < b || a > c) { throw new RangeError(a + " is not a valid value for " + d + ".") } return true }; Date.validateMillisecond = function (a) { return Date._validate(a, 0, 999, "milliseconds") }; Date.validateSecond = function (a) { return Date._validate(a, 0, 59, "seconds") }; Date.validateMinute = function (a) { return Date._validate(a, 0, 59, "minutes") }; Date.validateHour = function (a) { return Date._validate(a, 0, 23, "hours") }; Date.validateDay = function (a, b, c) { return Date._validate(a, 1, Date.getDaysInMonth(b, c), "days") }; Date.validateMonth = function (a) { return Date._validate(a, 0, 11, "months") }; Date.validateYear = function (a) { return Date._validate(a, 1, 9999, "seconds") }; Date.prototype.set = function (a) { var b = a; if (!b.millisecond && b.millisecond !== 0) { b.millisecond = -1 } if (!b.second && b.second !== 0) { b.second = -1 } if (!b.minute && b.minute !== 0) { b.minute = -1 } if (!b.hour && b.hour !== 0) { b.hour = -1 } if (!b.day && b.day !== 0) { b.day = -1 } if (!b.month && b.month !== 0) { b.month = -1 } if (!b.year && b.year !== 0) { b.year = -1 } if (b.millisecond != -1 && Date.validateMillisecond(b.millisecond)) { this.addMilliseconds(b.millisecond - this.getMilliseconds()) } if (b.second != -1 && Date.validateSecond(b.second)) { this.addSeconds(b.second - this.getSeconds()) } if (b.minute != -1 && Date.validateMinute(b.minute)) { this.addMinutes(b.minute - this.getMinutes()) } if (b.hour != -1 && Date.validateHour(b.hour)) { this.addHours(b.hour - this.getHours()) } if (b.month !== -1 && Date.validateMonth(b.month)) { this.addMonths(b.month - this.getMonth()) } if (b.year != -1 && Date.validateYear(b.year)) { this.addYears(b.year - this.getFullYear()) } if (b.day != -1 && Date.validateDay(b.day, this.getFullYear(), this.getMonth())) { this.addDays(b.day - this.getDate()) } if (b.timezone) { this.setTimezone(b.timezone) } if (b.timezoneOffset) { this.setTimezoneOffset(b.timezoneOffset) } return this }; Date.prototype.clearTime = function () { this.setHours(0); this.setMinutes(0); this.setSeconds(0); this.setMilliseconds(0); return this }; Date.prototype.isLeapYear = function () { var a = this.getFullYear(); return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0 }; Date.prototype.isWeekday = function () { return !(this.is().sat() || this.is().sun()) }; Date.prototype.getDaysInMonth = function () { return Date.getDaysInMonth(this.getFullYear(), this.getMonth()) }; Date.prototype.moveToFirstDayOfMonth = function () { return this.set({ day: 1 }) }; Date.prototype.moveToLastDayOfMonth = function () { return this.set({ day: this.getDaysInMonth() }) }; Date.prototype.moveToDayOfWeek = function (a, b) { var c = (a - this.getDay() + 7 * (b || +1)) % 7; return this.addDays(c === 0 ? c += 7 * (b || +1) : c) }; Date.prototype.moveToMonth = function (a, b) { var c = (a - this.getMonth() + 12 * (b || +1)) % 12; return this.addMonths(c === 0 ? c += 12 * (b || +1) : c) }; Date.prototype.getDayOfYear = function () { return Math.floor((this - new Date(this.getFullYear(), 0, 1)) / 864e5) }; Date.prototype.getWeekOfYear = function (a) { var b = this.getFullYear(), c = this.getMonth(), d = this.getDate(); var e = a || Date.CultureInfo.firstDayOfWeek; var f = 7 + 1 - (new Date(b, 0, 1)).getDay(); if (f == 8) { f = 1 } var g = (Date.UTC(b, c, d, 0, 0, 0) - Date.UTC(b, 0, 1, 0, 0, 0)) / 864e5 + 1; var h = Math.floor((g - f + 7) / 7); if (h === e) { b--; var i = 7 + 1 - (new Date(b, 0, 1)).getDay(); if (i == 2 || i == 8) { h = 53 } else { h = 52 } } return h }; Date.prototype.isDST = function () { return this.toString().match(/(E|C|M|P)(S|D)T/)[2] == "D" }; Date.prototype.getTimezone = function () { return Date.getTimezoneAbbreviation(this.getUTCOffset, this.isDST()) }; Date.prototype.setTimezoneOffset = function (a) { var b = this.getTimezoneOffset(), c = Number(a) * -6 / 10; this.addMinutes(c - b); return this }; Date.prototype.setTimezone = function (a) { return this.setTimezoneOffset(Date.getTimezoneOffset(a)) }; Date.prototype.getUTCOffset = function () { var a = this.getTimezoneOffset() * -10 / 6, b; if (a < 0) { b = (a - 1e4).toString(); return b[0] + b.substr(2) } else { b = (a + 1e4).toString(); return "+" + b.substr(1) } }; Date.prototype.getDayName = function (a) { return a ? Date.CultureInfo.abbreviatedDayNames[this.getDay()] : Date.CultureInfo.dayNames[this.getDay()] }; Date.prototype.getMonthName = function (a) { return a ? Date.CultureInfo.abbreviatedMonthNames[this.getMonth()] : Date.CultureInfo.monthNames[this.getMonth()] }; Date.prototype._toString = Date.prototype.toString; Date.prototype.toString = function (a) { var b = this; var c = function (b) { return b.toString().length == 1 ? "0" + b : b }; return a ? a.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g, function (a) { switch (a) { case "hh": return c(b.getHours() < 13 ? b.getHours() : b.getHours() - 12); case "h": return b.getHours() < 13 ? b.getHours() : b.getHours() - 12; case "HH": return c(b.getHours()); case "H": return b.getHours(); case "mm": return c(b.getMinutes()); case "m": return b.getMinutes(); case "ss": return c(b.getSeconds()); case "s": return b.getSeconds(); case "yyyy": return b.getFullYear(); case "yy": return b.getFullYear().toString().substring(2, 4); case "dddd": return b.getDayName(); case "ddd": return b.getDayName(true); case "dd": return c(b.getDate()); case "d": return b.getDate().toString(); case "MMMM": return b.getMonthName(); case "MMM": return b.getMonthName(true); case "MM": return c(b.getMonth() + 1); case "M": return b.getMonth() + 1; case "t": return b.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1); case "tt": return b.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator; case "zzz": case "zz": case "z": return "" } }) : this._toString() }; Date.now = function () { return new Date }; Date.today = function () { return Date.now().clearTime() }; Date.prototype._orient = +1; Date.prototype.next = function () { this._orient = +1; return this }; Date.prototype.last = Date.prototype.prev = Date.prototype.previous = function () { this._orient = -1; return this }; Date.prototype._is = false; Date.prototype.is = function () { this._is = true; return this }; Number.prototype._dateElement = "day"; Number.prototype.fromNow = function () { var a = {}; a[this._dateElement] = this; return Date.now().add(a) }; Number.prototype.ago = function () { var a = {}; a[this._dateElement] = this * -1; return Date.now().add(a) }; (function () { var a = Date.prototype, b = Number.prototype; var c = "sunday monday tuesday wednesday thursday friday saturday".split(/\s/), d = "january february march april may june july august september october november december".split(/\s/), e = "Millisecond Second Minute Hour Day Week Month Year".split(/\s/), f; var g = function (a) { return function () { if (this._is) { this._is = false; return this.getDay() == a } return this.moveToDayOfWeek(a, this._orient) } }; for (var h = 0; h < c.length; h++) { a[c[h]] = a[c[h].substring(0, 3)] = g(h) } var i = function (a) { return function () { if (this._is) { this._is = false; return this.getMonth() === a } return this.moveToMonth(a, this._orient) } }; for (var j = 0; j < d.length; j++) { a[d[j]] = a[d[j].substring(0, 3)] = i(j) } var k = function (a) { return function () { if (a.substring(a.length - 1) != "s") { a += "s" } return this["add" + a](this._orient) } }; var l = function (a) { return function () { this._dateElement = a; return this } }; for (var m = 0; m < e.length; m++) { f = e[m].toLowerCase(); a[f] = a[f + "s"] = k(e[m]); b[f] = b[f + "s"] = l(f) } })(); Date.prototype.toJSONString = function () { return this.toString("yyyy-MM-ddThh:mm:ssZ") }; Date.prototype.toShortDateString = function () { return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern) }; Date.prototype.toLongDateString = function () { return this.toString(Date.CultureInfo.formatPatterns.longDatePattern) }; Date.prototype.toShortTimeString = function () { return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern) }; Date.prototype.toLongTimeString = function () { return this.toString(Date.CultureInfo.formatPatterns.longTimePattern) }; Date.prototype.getOrdinal = function () { switch (this.getDate()) { case 1: case 21: case 31: return "st"; case 2: case 22: return "nd"; case 3: case 23: return "rd"; default: return "th" } }; (function () { Date.Parsing = { Exception: function (a) { this.message = "Parse error at '" + a.substring(0, 10) + " ...'" } }; var a = Date.Parsing; var b = a.Operators = { rtoken: function (b) { return function (c) { var d = c.match(b); if (d) { return [d[0], c.substring(d[0].length)] } else { throw new a.Exception(c) } } }, token: function (a) { return function (a) { return b.rtoken(new RegExp("^s*" + a + "s*"))(a) } }, stoken: function (a) { return b.rtoken(new RegExp("^" + a)) }, until: function (a) { return function (b) { var c = [], d = null; while (b.length) { try { d = a.call(this, b) } catch (e) { c.push(d[0]); b = d[1]; continue } break } return [c, b] } }, many: function (a) { return function (b) { var c = [], d = null; while (b.length) { try { d = a.call(this, b) } catch (e) { return [c, b] } c.push(d[0]); b = d[1] } return [c, b] } }, optional: function (a) { return function (b) { var c = null; try { c = a.call(this, b) } catch (d) { return [null, b] } return [c[0], c[1]] } }, not: function (b) { return function (c) { try { b.call(this, c) } catch (d) { return [null, c] } throw new a.Exception(c) } }, ignore: function (a) { return a ? function (b) { var c = null; c = a.call(this, b); return [null, c[1]] } : null }, product: function () { var a = arguments[0], c = Array.prototype.slice.call(arguments, 1), d = []; for (var e = 0; e < a.length; e++) { d.push(b.each(a[e], c)) } return d }, cache: function (b) { var c = {}, d = null; return function (e) { try { d = c[e] = c[e] || b.call(this, e) } catch (f) { d = c[e] = f } if (d instanceof a.Exception) { throw d } else { return d } } }, any: function () { var b = arguments; return function (c) { var d = null; for (var e = 0; e < b.length; e++) { if (b[e] == null) { continue } try { d = b[e].call(this, c) } catch (f) { d = null } if (d) { return d } } throw new a.Exception(c) } }, each: function () { var b = arguments; return function (c) { var d = [], e = null; for (var f = 0; f < b.length; f++) { if (b[f] == null) { continue } try { e = b[f].call(this, c) } catch (g) { throw new a.Exception(c) } d.push(e[0]); c = e[1] } return [d, c] } }, all: function () { var a = arguments, b = b; return b.each(b.optional(a)) }, sequence: function (c, d, e) { d = d || b.rtoken(/^\s*/); e = e || null; if (c.length == 1) { return c[0] } return function (b) { var f = null, g = null; var h = []; for (var i = 0; i < c.length; i++) { try { f = c[i].call(this, b) } catch (j) { break } h.push(f[0]); try { g = d.call(this, f[1]) } catch (k) { g = null; break } b = g[1] } if (!f) { throw new a.Exception(b) } if (g) { throw new a.Exception(g[1]) } if (e) { try { f = e.call(this, f[1]) } catch (l) { throw new a.Exception(f[1]) } } return [h, f ? f[1] : b] } }, between: function (a, c, d) { d = d || a; var e = b.each(b.ignore(a), c, b.ignore(d)); return function (a) { var b = e.call(this, a); return [[b[0][0], r[0][2]], b[1]] } }, list: function (a, c, d) { c = c || b.rtoken(/^\s*/); d = d || null; return a instanceof Array ? b.each(b.product(a.slice(0, -1), b.ignore(c)), a.slice(-1), b.ignore(d)) : b.each(b.many(b.each(a, b.ignore(c))), px, b.ignore(d)) }, set: function (c, d, e) { d = d || b.rtoken(/^\s*/); e = e || null; return function (f) { var g = null, h = null, i = null, j = null, k = [[], f], l = false; for (var m = 0; m < c.length; m++) { i = null; h = null; g = null; l = c.length == 1; try { g = c[m].call(this, f) } catch (n) { continue } j = [[g[0]], g[1]]; if (g[1].length > 0 && !l) { try { i = d.call(this, g[1]) } catch (o) { l = true } } else { l = true } if (!l && i[1].length === 0) { l = true } if (!l) { var p = []; for (var q = 0; q < c.length; q++) { if (m != q) { p.push(c[q]) } } h = b.set(p, d).call(this, i[1]); if (h[0].length > 0) { j[0] = j[0].concat(h[0]); j[1] = h[1] } } if (j[1].length < k[1].length) { k = j } if (k[1].length === 0) { break } } if (k[0].length === 0) { return k } if (e) { try { i = e.call(this, k[1]) } catch (r) { throw new a.Exception(k[1]) } k[1] = i[1] } return k } }, forward: function (a, b) { return function (c) { return a[b].call(this, c) } }, replace: function (a, b) { return function (c) { var d = a.call(this, c); return [b, d[1]] } }, process: function (a, b) { return function (c) { var d = a.call(this, c); return [b.call(this, d[0]), d[1]] } }, min: function (b, c) { return function (d) { var e = c.call(this, d); if (e[0].length < b) { throw new a.Exception(d) } return e } } }; var c = function (a) { return function () { var b = null, c = []; if (arguments.length > 1) { b = Array.prototype.slice.call(arguments) } else if (arguments[0] instanceof Array) { b = arguments[0] } if (b) { for (var d = 0, e = b.shift() ; d < e.length; d++) { b.unshift(e[d]); c.push(a.apply(null, b)); b.shift(); return c } } else { return a.apply(null, arguments) } } }; var d = "optional not ignore cache".split(/\s/); for (var e = 0; e < d.length; e++) { b[d[e]] = c(b[d[e]]) } var f = function (a) { return function () { if (arguments[0] instanceof Array) { return a.apply(null, arguments[0]) } else { return a.apply(null, arguments) } } }; var g = "each any all".split(/\s/); for (var h = 0; h < g.length; h++) { b[g[h]] = f(b[g[h]]) } })(); (function () { var a = function (b) { var c = []; for (var d = 0; d < b.length; d++) { if (b[d] instanceof Array) { c = c.concat(a(b[d])) } else { if (b[d]) { c.push(b[d]) } } } return c }; Date.Grammar = {}; Date.Translator = { hour: function (a) { return function () { this.hour = Number(a) } }, minute: function (a) { return function () { this.minute = Number(a) } }, second: function (a) { return function () { this.second = Number(a) } }, meridian: function (a) { return function () { this.meridian = a.slice(0, 1).toLowerCase() } }, timezone: function (a) { return function () { var b = a.replace(/[^\d\+\-]/g, ""); if (b.length) { this.timezoneOffset = Number(b) } else { this.timezone = a.toLowerCase() } } }, day: function (a) { var b = a[0]; return function () { this.day = Number(b.match(/\d+/)[0]) } }, month: function (a) { return function () { this.month = a.length == 3 ? Date.getMonthNumberFromName(a) : Number(a) - 1 } }, year: function (a) { return function () { var b = Number(a); this.year = a.length > 2 ? b : b + (b + 2e3 < Date.CultureInfo.twoDigitYearMax ? 2e3 : 1900) } }, rday: function (a) { return function () { switch (a) { case "yesterday": this.days = -1; break; case "tomorrow": this.days = 1; break; case "today": this.days = 0; break; case "now": this.days = 0; this.now = true; break } } }, finishExact: function (a) { a = a instanceof Array ? a : [a]; var b = new Date; this.year = b.getFullYear(); this.month = b.getMonth(); this.day = 1; this.hour = 0; this.minute = 0; this.second = 0; for (var c = 0; c < a.length; c++) { if (a[c]) { a[c].call(this) } } this.hour = this.meridian == "p" && this.hour < 13 ? this.hour + 12 : this.hour; if (this.day > Date.getDaysInMonth(this.year, this.month)) { throw new RangeError(this.day + " is not a valid value for days.") } var d = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second); if (this.timezone) { d.set({ timezone: this.timezone }) } else if (this.timezoneOffset) { d.set({ timezoneOffset: this.timezoneOffset }) } return d }, finish: function (b) { b = b instanceof Array ? a(b) : [b]; if (b.length === 0) { return null } for (var c = 0; c < b.length; c++) { if (typeof b[c] == "function") { b[c].call(this) } } if (this.now) { return new Date } var d = Date.today(); var e = null; var f = !!(this.days != null || this.orient || this.operator); if (f) { var g, h, i; i = this.orient == "past" || this.operator == "subtract" ? -1 : 1; if (this.weekday) { this.unit = "day"; g = Date.getDayNumberFromName(this.weekday) - d.getDay(); h = 7; this.days = g ? (g + i * h) % h : i * h } if (this.month) { this.unit = "month"; g = this.month - d.getMonth(); h = 12; this.months = g ? (g + i * h) % h : i * h; this.month = null } if (!this.unit) { this.unit = "day" } if (this[this.unit + "s"] == null || this.operator != null) { if (!this.value) { this.value = 1 } if (this.unit == "week") { this.unit = "day"; this.value = this.value * 7 } this[this.unit + "s"] = this.value * i } return d.add(this) } else { if (this.meridian && this.hour) { this.hour = this.hour < 13 && this.meridian == "p" ? this.hour + 12 : this.hour } if (this.weekday && !this.day) { this.day = d.addDays(Date.getDayNumberFromName(this.weekday) - d.getDay()).getDate() } if (this.month && !this.day) { this.day = 1 } return d.set(this) } } }; var b = Date.Parsing.Operators, c = Date.Grammar, d = Date.Translator, e; c.datePartDelimiter = b.rtoken(/^([\s\-\.\,\/\x27]+)/); c.timePartDelimiter = b.stoken(":"); c.whiteSpace = b.rtoken(/^\s*/); c.generalDelimiter = b.rtoken(/^(([\s\,]|at|on)+)/); var f = {}; c.ctoken = function (a) { var c = f[a]; if (!c) { var d = Date.CultureInfo.regexPatterns; var e = a.split(/\s+/), g = []; for (var h = 0; h < e.length; h++) { g.push(b.replace(b.rtoken(d[e[h]]), e[h])) } c = f[a] = b.any.apply(null, g) } return c }; c.ctoken2 = function (a) { return b.rtoken(Date.CultureInfo.regexPatterns[a]) }; c.h = b.cache(b.process(b.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), d.hour)); c.hh = b.cache(b.process(b.rtoken(/^(0[0-9]|1[0-2])/), d.hour)); c.H = b.cache(b.process(b.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), d.hour)); c.HH = b.cache(b.process(b.rtoken(/^([0-1][0-9]|2[0-3])/), d.hour)); c.m = b.cache(b.process(b.rtoken(/^([0-5][0-9]|[0-9])/), d.minute)); c.mm = b.cache(b.process(b.rtoken(/^[0-5][0-9]/), d.minute)); c.s = b.cache(b.process(b.rtoken(/^([0-5][0-9]|[0-9])/), d.second)); c.ss = b.cache(b.process(b.rtoken(/^[0-5][0-9]/), d.second)); c.hms = b.cache(b.sequence([c.H, c.mm, c.ss], c.timePartDelimiter)); c.t = b.cache(b.process(c.ctoken2("shortMeridian"), d.meridian)); c.tt = b.cache(b.process(c.ctoken2("longMeridian"), d.meridian)); c.z = b.cache(b.process(b.rtoken(/^(\+|\-)?\s*\d\d\d\d?/), d.timezone)); c.zz = b.cache(b.process(b.rtoken(/^(\+|\-)\s*\d\d\d\d/), d.timezone)); c.zzz = b.cache(b.process(c.ctoken2("timezone"), d.timezone)); c.timeSuffix = b.each(b.ignore(c.whiteSpace), b.set([c.tt, c.zzz])); c.time = b.each(b.optional(b.ignore(b.stoken("T"))), c.hms, c.timeSuffix); c.d = b.cache(b.process(b.each(b.rtoken(/^([0-2]\d|3[0-1]|\d)/), b.optional(c.ctoken2("ordinalSuffix"))), d.day)); c.dd = b.cache(b.process(b.each(b.rtoken(/^([0-2]\d|3[0-1])/), b.optional(c.ctoken2("ordinalSuffix"))), d.day)); c.ddd = c.dddd = b.cache(b.process(c.ctoken("sun mon tue wed thu fri sat"), function (a) { return function () { this.weekday = a } })); c.M = b.cache(b.process(b.rtoken(/^(1[0-2]|0\d|\d)/), d.month)); c.MM = b.cache(b.process(b.rtoken(/^(1[0-2]|0\d)/), d.month)); c.MMM = c.MMMM = b.cache(b.process(c.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), d.month)); c.y = b.cache(b.process(b.rtoken(/^(\d\d?)/), d.year)); c.yy = b.cache(b.process(b.rtoken(/^(\d\d)/), d.year)); c.yyy = b.cache(b.process(b.rtoken(/^(\d\d?\d?\d?)/), d.year)); c.yyyy = b.cache(b.process(b.rtoken(/^(\d\d\d\d)/), d.year)); e = function () { return b.each(b.any.apply(null, arguments), b.not(c.ctoken2("timeContext"))) }; c.day = e(c.d, c.dd); c.month = e(c.M, c.MMM); c.year = e(c.yyyy, c.yy); c.orientation = b.process(c.ctoken("past future"), function (a) { return function () { this.orient = a } }); c.operator = b.process(c.ctoken("add subtract"), function (a) { return function () { this.operator = a } }); c.rday = b.process(c.ctoken("yesterday tomorrow today now"), d.rday); c.unit = b.process(c.ctoken("minute hour day week month year"), function (a) { return function () { this.unit = a } }); c.value = b.process(b.rtoken(/^\d\d?(st|nd|rd|th)?/), function (a) { return function () { this.value = a.replace(/\D/g, "") } }); c.expression = b.set([c.rday, c.operator, c.value, c.unit, c.orientation, c.ddd, c.MMM]); e = function () { return b.set(arguments, c.datePartDelimiter) }; c.mdy = e(c.ddd, c.month, c.day, c.year); c.ymd = e(c.ddd, c.year, c.month, c.day); c.dmy = e(c.ddd, c.day, c.month, c.year); c.date = function (a) { return (c[Date.CultureInfo.dateElementOrder] || c.mdy).call(this, a) }; c.format = b.process(b.many(b.any(b.process(b.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function (a) { if (c[a]) { return c[a] } else { throw Date.Parsing.Exception(a) } }), b.process(b.rtoken(/^[^dMyhHmstz]+/), function (a) { return b.ignore(b.stoken(a)) }))), function (a) { return b.process(b.each.apply(null, a), d.finishExact) }); var g = {}; var h = function (a) { return g[a] = g[a] || c.format(a)[0] }; c.formats = function (a) { if (a instanceof Array) { var c = []; for (var d = 0; d < a.length; d++) { c.push(h(a[d])) } return b.any.apply(null, c) } else { return h(a) } }; c._formats = c.formats(["yyyy-MM-ddTHH:mm:ss", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "d"]); c._start = b.process(b.set([c.date, c.time, c.expression], c.generalDelimiter, c.whiteSpace), d.finish); c.start = function (a) { try { var b = c._formats.call({}, a); if (b[1].length === 0) { return b } } catch (d) { } return c._start.call({}, a) } })(); Date._parse = Date.parse; Date.parse = function (a) { var b = null; if (!a) { return null } try { b = Date.Grammar.start.call({}, a) } catch (c) { return null } return b[1].length === 0 ? b[0] : null }; Date.getParseFunction = function (a) { var b = Date.Grammar.formats(a); return function (a) { var c = null; try { c = b.call({}, a) } catch (d) { return null } return c[1].length === 0 ? c[0] : null } }; Date.parseExact = function (a, b) { return Date.getParseFunction(b)(a) }; var TimeSpan = function (a, b, c, d, e) { var f = "days hours minutes seconds milliseconds".split(/\s+/); var g = function (a) { return function () { return this[a] } }; var h = function (a) { return function (b) { this[a] = b; return this } }; for (var i = 0; i < f.length; i++) { var j = f[i], k = j.slice(0, 1).toUpperCase() + j.slice(1); TimeSpan.prototype[j] = 0; TimeSpan.prototype["get" + k] = g(j); TimeSpan.prototype["set" + k] = h(j) } if (arguments.length == 4) { this.setDays(a); this.setHours(b); this.setMinutes(c); this.setSeconds(d) } else if (arguments.length == 5) { this.setDays(a); this.setHours(b); this.setMinutes(c); this.setSeconds(d); this.setMilliseconds(e) } else if (arguments.length == 1 && typeof a == "number") { var l = a < 0 ? -1 : +1; this.setMilliseconds(Math.abs(a)); this.setDays(Math.floor(this.getMilliseconds() / 864e5) * l); this.setMilliseconds(this.getMilliseconds() % 864e5); this.setHours(Math.floor(this.getMilliseconds() / 36e5) * l); this.setMilliseconds(this.getMilliseconds() % 36e5); this.setMinutes(Math.floor(this.getMilliseconds() / 6e4) * l); this.setMilliseconds(this.getMilliseconds() % 6e4); this.setSeconds(Math.floor(this.getMilliseconds() / 1e3) * l); this.setMilliseconds(this.getMilliseconds() % 1e3); this.setMilliseconds(this.getMilliseconds() * l) } this.getTotalMilliseconds = function () { return this.getDays() * 864e5 + this.getHours() * 36e5 + this.getMinutes() * 6e4 + this.getSeconds() * 1e3 }; this.compareTo = function (a) { var b = new Date(1970, 1, 1, this.getHours(), this.getMinutes(), this.getSeconds()), c; if (a === null) { c = new Date(1970, 1, 1, 0, 0, 0) } else { c = new Date(1970, 1, 1, a.getHours(), a.getMinutes(), a.getSeconds()) } return b < c ? -1 : b > c ? 1 : 0 }; this.equals = function (a) { return this.compareTo(a) === 0 }; this.add = function (a) { return a === null ? this : this.addSeconds(a.getTotalMilliseconds() / 1e3) }; this.subtract = function (a) { return a === null ? this : this.addSeconds(-a.getTotalMilliseconds() / 1e3) }; this.addDays = function (a) { return new TimeSpan(this.getTotalMilliseconds() + a * 864e5) }; this.addHours = function (a) { return new TimeSpan(this.getTotalMilliseconds() + a * 36e5) }; this.addMinutes = function (a) { return new TimeSpan(this.getTotalMilliseconds() + a * 6e4) }; this.addSeconds = function (a) { return new TimeSpan(this.getTotalMilliseconds() + a * 1e3) }; this.addMilliseconds = function (a) { return new TimeSpan(this.getTotalMilliseconds() + a) }; this.get12HourHour = function () { return this.getHours() > 12 ? this.getHours() - 12 : this.getHours() === 0 ? 12 : this.getHours() }; this.getDesignator = function () { return this.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator }; this.toString = function (a) { this._toString = function () { if (this.getDays() !== null && this.getDays() > 0) { return this.getDays() + "." + this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds()) } else { return this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds()) } }; this.p = function (a) { return a.toString().length < 2 ? "0" + a : a }; var b = this; return a ? a.replace(/dd?|HH?|hh?|mm?|ss?|tt?/g, function (a) { switch (a) { case "d": return b.getDays(); case "dd": return b.p(b.getDays()); case "H": return b.getHours(); case "HH": return b.p(b.getHours()); case "h": return b.get12HourHour(); case "hh": return b.p(b.get12HourHour()); case "m": return b.getMinutes(); case "mm": return b.p(b.getMinutes()); case "s": return b.getSeconds(); case "ss": return b.p(b.getSeconds()); case "t": return (b.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator).substring(0, 1); case "tt": return b.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator } }) : this._toString() }; return this }; Date.prototype.getTimeOfDay = function () { return new TimeSpan(0, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds()) }; var TimePeriod = function (a, b, c, d, e, f, g) { var h = "years months days hours minutes seconds milliseconds".split(/\s+/); var i = function (a) { return function () { return this[a] } }; var j = function (a) { return function (b) { this[a] = b; return this } }; for (var k = 0; k < h.length; k++) { var l = h[k], m = l.slice(0, 1).toUpperCase() + l.slice(1); TimePeriod.prototype[l] = 0; TimePeriod.prototype["get" + m] = i(l); TimePeriod.prototype["set" + m] = j(l) } if (arguments.length == 7) { this.years = a; this.months = b; this.setDays(c); this.setHours(d); this.setMinutes(e); this.setSeconds(f); this.setMilliseconds(g) } else if (arguments.length == 2 && arguments[0] instanceof Date && arguments[1] instanceof Date) { var n = a.clone(); var o = b.clone(); var p = n.clone(); var q = n > o ? -1 : +1; this.years = o.getFullYear() - n.getFullYear(); p.addYears(this.years); if (q == +1) { if (p > o) { if (this.years !== 0) { this.years-- } } } else { if (p < o) { if (this.years !== 0) { this.years++ } } } n.addYears(this.years); if (q == +1) { while (n < o && n.clone().addDays(Date.getDaysInMonth(n.getYear(), n.getMonth())) < o) { n.addMonths(1); this.months++ } } else { while (n > o && n.clone().addDays(-n.getDaysInMonth()) > o) { n.addMonths(-1); this.months-- } } var r = o - n; if (r !== 0) { var s = new TimeSpan(r); this.setDays(s.getDays()); this.setHours(s.getHours()); this.setMinutes(s.getMinutes()); this.setSeconds(s.getSeconds()); this.setMilliseconds(s.getMilliseconds()) } } return this }; jQuery.fn.daterangepicker = function (a) { function k(a) { if (!a.getDate()) { return "" } var b = a.getDate(); var d = a.getMonth(); var e = a.getFullYear(); d++; var f = c.dateFormat; return jQuery.datepicker.formatDate(f, a) } function l() { if (i.data("state") == "closed") { o(); i.fadeIn(300).data("state", "open"); c.onOpen() } } function m() { if (i.data("state") == "open") { i.fadeOut(300).data("state", "closed"); c.onClose() } } function n() { if (i.data("state") == "open") { m() } else { l() } } function o() { var a = u || b; var c = a.offset(), d = "left", e = c.left, f = jQuery(window).width() - e - a.outerWidth(); if (e > f) { d = "right", e = f } i.parent().css(d, e).css("top", c.top + a.outerHeight()) } function p(a, b, d, e) { if (a.is(".ui-daterangepicker-specificDate")) { e.hide(); d.show(); b.find(".title-start").text(c.presets.specificDate); b.find(".range-start").restoreDateFromData().css("opacity", 1).show(400); b.find(".range-end").restoreDateFromData().css("opacity", 0).hide(400); setTimeout(function () { e.fadeIn() }, 400) } else if (a.is(".ui-daterangepicker-allDatesBefore")) { e.hide(); d.show(); b.find(".title-end").text(c.presets.allDatesBefore); b.find(".range-start").saveDateToData().datepicker("setDate", c.earliestDate).css("opacity", 0).hide(400); b.find(".range-end").restoreDateFromData().css("opacity", 1).show(400); setTimeout(function () { e.fadeIn() }, 400) } else if (a.is(".ui-daterangepicker-allDatesAfter")) { e.hide(); d.show(); b.find(".title-start").text(c.presets.allDatesAfter); b.find(".range-start").restoreDateFromData().css("opacity", 1).show(400); b.find(".range-end").saveDateToData().datepicker("setDate", c.latestDate).css("opacity", 0).hide(400); setTimeout(function () { e.fadeIn() }, 400) } else if (a.is(".ui-daterangepicker-dateRange")) { e.hide(); d.show(); b.find(".title-start").text(c.rangeStartTitle); b.find(".title-end").text(c.rangeEndTitle); b.find(".range-start").restoreDateFromData().css("opacity", 1).show(400); b.find(".range-end").restoreDateFromData().css("opacity", 1).show(400); setTimeout(function () { e.fadeIn() }, 400) } else { e.hide(); b.find(".range-start, .range-end").css("opacity", 0).hide(400, function () { d.hide() }); var f = typeof a.data("dateStart") == "string" ? Date.parse(a.data("dateStart")) : a.data("dateStart")(); var g = typeof a.data("dateEnd") == "string" ? Date.parse(a.data("dateEnd")) : a.data("dateEnd")(); b.find(".range-start").datepicker("setDate", f).find(".ui-datepicker-current-day").trigger("click"); b.find(".range-end").datepicker("setDate", g).find(".ui-datepicker-current-day").trigger("click") } return false } var b = jQuery(this); var c = jQuery.extend({ presetRanges: [{ text: today, dateStart: "today", dateEnd: "today" }, { text: yesterday, dateStart: "today-1days", dateEnd: "today-1days" }, { text: last7Days, dateStart: "today-7days", dateEnd: "today" }, { text: currentMonth, dateStart: function () { return Date.parse("today").moveToFirstDayOfMonth() }, dateEnd: function () { return Date.parse("today").moveToLastDayOfMonth() } }, { text: currentYear, dateStart: function () { var a = Date.parse("today"); a.setMonth(0); a.setDate(1); return a }, dateEnd: function () { var a = Date.parse("today"); a.setMonth(11); a.setDate(31); return a } }, { text: lastMonth, dateStart: function () { return Date.parse("1 month ago").moveToFirstDayOfMonth() }, dateEnd: function () { return Date.parse("1 month ago").moveToLastDayOfMonth() } }], presets: { /*specificDate: "Fecha especifica",*/ dateRange: dateRange,allDatesBefore: allDatesBefore, allDatesAfter: allDatesAfter }, rangeStartTitle: startDate, rangeEndTitle: endDate, nextLinkText: next, prevLinkText: previous, doneButtonText: done, earliestDate: Date.parse("-50years"), latestDate: Date.parse("+50years"), constrainDates: false, rangeSplitter: "-", dateFormat: dateFormat, closeOnSelect: true, arrows: false, appendTo: "body", onClose: function () { }, onOpen: function () { }, onChange: function () { }, datepickerOptions: null }, a); var d = { onSelect: function (a, d) { if (i.find(".ui-daterangepicker-specificDate").is(".ui-state-active")) { i.find(".range-end").datepicker("setDate", i.find(".range-start").datepicker("getDate")) } $(this).trigger("constrainOtherPicker"); var e = k(i.find(".range-start").datepicker("getDate")); var f = k(i.find(".range-end").datepicker("getDate")); if (b.length == 2) { b.eq(0).val(e).change(); b.eq(1).val(f).change() } else { b.val(e != f ? e + " " + c.rangeSplitter + " " + f : e).change() } if (c.closeOnSelect) { if (!i.find("li.ui-state-active").is(".ui-daterangepicker-dateRange") && !i.is(":animated")) { m() } } c.onChange() }, defaultDate: +0 }; b.bind("change", c.onChange); c.datepickerOptions = a ? jQuery.extend(d, a.datepickerOptions) : d; var e, f = Date.parse("today"); var g, h; if (b.size() == 2) { g = Date.parse(b.eq(0).val()); h = Date.parse(b.eq(1).val()); if (g == null) { g = h } if (h == null) { h = g } } else { g = Date.parse(b.val().split(c.rangeSplitter)[0]); h = Date.parse(b.val().split(c.rangeSplitter)[1]); if (h == null) { h = g } } if (g != null) { e = g } if (h != null) { f = h } var i = jQuery('<div class="ui-daterangepicker ui-widget ui-helper-clearfix ui-widget-content ui-corner-all"></div>'); var j = function () { var a = jQuery('<ul class="ui-widget-content"></ul>').appendTo(i); jQuery.each(c.presetRanges, function () { jQuery('<li class="ui-daterangepicker-' + this.text.replace(/ /g, "") + ' ui-corner-all"><a href="#">' + this.text + "</a></li>").data("dateStart", this.dateStart).data("dateEnd", this.dateEnd).appendTo(a) }); var b = 0; jQuery.each(c.presets, function (c, d) { jQuery('<li class="ui-daterangepicker-' + c + " preset_" + b + ' ui-helper-clearfix ui-corner-all"><span class="ui-icon ui-icon-triangle-1-e"></span><a href="#">' + d + "</a></li>").appendTo(a); b++ }); a.find("li").hover(function () { jQuery(this).addClass("ui-state-hover") }, function () { jQuery(this).removeClass("ui-state-hover") }).click(function () { i.find(".ui-state-active").removeClass("ui-state-active"); jQuery(this).addClass("ui-state-active"); p(jQuery(this), i, q, r); return false }); return a }(); jQuery.fn.restoreDateFromData = function () { if (jQuery(this).data("saveDate")) { jQuery(this).datepicker("setDate", jQuery(this).data("saveDate")).removeData("saveDate") } return this }; jQuery.fn.saveDateToData = function () { if (!jQuery(this).data("saveDate")) { jQuery(this).data("saveDate", jQuery(this).datepicker("getDate")) } return this }; var q = jQuery('<div class="ranges ui-widget-header ui-corner-all ui-helper-clearfix"><div class="range-start"><span class="title-start">Start Date</span></div><div class="range-end"><span class="title-end">End Date</span></div></div>').appendTo(i); q.find(".range-start, .range-end").datepicker(c.datepickerOptions); q.find(".range-start").datepicker("setDate", e); q.find(".range-end").datepicker("setDate", f); q.find(".range-start, .range-end").bind("constrainOtherPicker", function () { if (c.constrainDates) { if ($(this).is(".range-start")) { i.find(".range-end").datepicker("option", "minDate", $(this).datepicker("getDate")) } else { i.find(".range-start").datepicker("option", "maxDate", $(this).datepicker("getDate")) } } }).trigger("constrainOtherPicker"); var r = jQuery('<button class="btnDone ui-state-default ui-corner-all">' + c.doneButtonText + "</button>").click(function () { i.find(".ui-datepicker-current-day").trigger("click"); m() }).hover(function () { jQuery(this).addClass("ui-state-hover") }, function () { jQuery(this).removeClass("ui-state-hover") }).appendTo(q); jQuery(this).click(function () { n(); return false }); q.hide().find(".range-start, .range-end, .btnDone").hide(); i.data("state", "closed"); q.find(".ui-datepicker").css("display", "block"); jQuery(c.appendTo).append(i); i.wrap('<div class="ui-daterangepickercontain"></div>'); if (c.arrows && b.size() == 1) { var s = jQuery('<a href="#" class="ui-daterangepicker-prev ui-corner-all" title="' + c.prevLinkText + '"><span class="ui-icon ui-icon-circle-triangle-w">' + c.prevLinkText + "</span></a>"); var t = jQuery('<a href="#" class="ui-daterangepicker-next ui-corner-all" title="' + c.nextLinkText + '"><span class="ui-icon ui-icon-circle-triangle-e">' + c.nextLinkText + "</span></a>"); jQuery(this).addClass("ui-rangepicker-input ui-widget-content").wrap('<div class="ui-daterangepicker-arrows ui-widget ui-widget-header ui-helper-clearfix ui-corner-all"></div>').before(s).before(t).parent().find("a").click(function () { var a = q.find(".range-start").datepicker("getDate"); var b = q.find(".range-end").datepicker("getDate"); var c = Math.abs((new TimeSpan(a - b)).getTotalMilliseconds()) + 864e5; if (jQuery(this).is(".ui-daterangepicker-prev")) { c = -c } q.find(".range-start, .range-end ").each(function () { var a = jQuery(this).datepicker("getDate"); if (a == null) { return false } jQuery(this).datepicker("setDate", a.add({ milliseconds: c })).find(".ui-datepicker-current-day").trigger("click") }); return false }).hover(function () { jQuery(this).addClass("ui-state-hover") }, function () { jQuery(this).removeClass("ui-state-hover") }); var u = b.parent() } jQuery(document).click(function () { if (i.is(":visible")) { m() } }); i.click(function () { return false }).hide(); return this }
//daterangePicker--

//bt
jQuery.bt = { version: "0.9.7" }; (function ($) { jQuery.fn.bt = function (content, options) { if (typeof content != "string") { var contentSelect = true; options = content; content = false } else { var contentSelect = false } if (jQuery.fn.hoverIntent && jQuery.bt.defaults.trigger == "hover") { jQuery.bt.defaults.trigger = "hoverIntent" } return this.each(function (index) { var opts = jQuery.extend(false, jQuery.bt.defaults, jQuery.bt.options, options); opts.spikeLength = numb(opts.spikeLength); opts.spikeGirth = numb(opts.spikeGirth); opts.overlap = numb(opts.overlap); var ajaxTimeout = false; if (opts.killTitle) { $(this).find("[title]").andSelf().each(function () { if (!$(this).prop("bt-xTitle")) { $(this).prop("bt-xTitle", $(this).prop("title")).prop("title", "") } }) } if (typeof opts.trigger == "string") { opts.trigger = [opts.trigger] } if (opts.trigger[0] == "hoverIntent") { var hoverOpts = jQuery.extend(opts.hoverIntentOpts, { over: function () { this.btOn() }, out: function () { this.btOff() } }); $(this).hoverIntent(hoverOpts) } else { if (opts.trigger[0] == "hover") { $(this).hover(function () { this.btOn() }, function () { this.btOff() }) } else { if (opts.trigger[0] == "now") { if ($(this).hasClass("bt-active")) { this.btOff() } else { this.btOn() } } else { if (opts.trigger[0] == "none") { } else { if (opts.trigger.length > 1 && opts.trigger[0] != opts.trigger[1]) { $(this).bind(opts.trigger[0], function () { this.btOn() }).bind(opts.trigger[1], function () { this.btOff() }) } else { $(this).bind(opts.trigger[0], function () { if ($(this).hasClass("bt-active")) { this.btOff() } else { this.btOn() } }) } } } } } this.btOn = function () { if (typeof $(this).data("bt-box") == "object") { this.btOff() } opts.preBuild.apply(this); $(jQuery.bt.vars.closeWhenOpenStack).btOff(); $(this).addClass("bt-active " + opts.activeClass); if (contentSelect && opts.ajaxPath == null) { if (opts.killTitle) { $(this).prop("title", $(this).prop("bt-xTitle")) } content = $.isFunction(opts.contentSelector) ? opts.contentSelector.apply(this) : eval(opts.contentSelector); if (opts.killTitle) { $(this).prop("title", "") } } if (opts.ajaxPath != null && content == false) { if (typeof opts.ajaxPath == "object") { var url = eval(opts.ajaxPath[0]); url += opts.ajaxPath[1] ? " " + opts.ajaxPath[1] : "" } else { var url = opts.ajaxPath } var off = url.indexOf(" "); if (off >= 0) { var selector = url.slice(off, url.length); url = url.slice(0, off) } var cacheData = opts.ajaxCache ? $(document.body).data("btCache-" + url.replace(/\./g, "")) : null; if (typeof cacheData == "string") { content = selector ? $("<div/>").append(cacheData.replace(/<script(.|\s)*?\/script>/g, "")).find(selector) : cacheData } else { var target = this; var ajaxOpts = jQuery.extend(false, { type: opts.ajaxType, data: opts.ajaxData, cache: opts.ajaxCache, url: url, complete: function (XMLHttpRequest, textStatus) { if (textStatus == "success" || textStatus == "notmodified") { if (opts.ajaxCache) { $(document.body).data("btCache-" + url.replace(/\./g, ""), XMLHttpRequest.responseText) } ajaxTimeout = false; content = selector ? $("<div/>").append(XMLHttpRequest.responseText.replace(/<script(.|\s)*?\/script>/g, "")).find(selector) : XMLHttpRequest.responseText } else { if (textStatus == "timeout") { ajaxTimeout = true } content = opts.ajaxError.replace(/%error/g, XMLHttpRequest.statusText) } if ($(target).hasClass("bt-active")) { target.btOn() } } }, opts.ajaxOpts); jQuery.ajax(ajaxOpts); content = opts.ajaxLoading } } var shadowMarginX = 0; var shadowMarginY = 0; var shadowShiftX = 0; var shadowShiftY = 0; if (opts.shadow && !shadowSupport()) { opts.shadow = false; jQuery.extend(opts, opts.noShadowOpts) } if (opts.shadow) { if (opts.shadowBlur > Math.abs(opts.shadowOffsetX)) { shadowMarginX = opts.shadowBlur * 2 } else { shadowMarginX = opts.shadowBlur + Math.abs(opts.shadowOffsetX) } shadowShiftX = (opts.shadowBlur - opts.shadowOffsetX) > 0 ? opts.shadowBlur - opts.shadowOffsetX : 0; if (opts.shadowBlur > Math.abs(opts.shadowOffsetY)) { shadowMarginY = opts.shadowBlur * 2 } else { shadowMarginY = opts.shadowBlur + Math.abs(opts.shadowOffsetY) } shadowShiftY = (opts.shadowBlur - opts.shadowOffsetY) > 0 ? opts.shadowBlur - opts.shadowOffsetY : 0 } if (opts.offsetParent) { var offsetParent = $(opts.offsetParent); var offsetParentPos = offsetParent.offset(); var pos = $(this).offset(); var top = numb(pos.top) - numb(offsetParentPos.top) + numb($(this).css("margin-top")) - shadowShiftY; var left = numb(pos.left) - numb(offsetParentPos.left) + numb($(this).css("margin-left")) - shadowShiftX } else { var offsetParent = ($(this).css("position") == "absolute") ? $(this).parents().eq(0).offsetParent() : $(this).offsetParent(); var pos = $(this).btPosition(); var top = numb(pos.top) + numb($(this).css("margin-top")) - shadowShiftY; var left = numb(pos.left) + numb($(this).css("margin-left")) - shadowShiftX } var width = $(this).btOuterWidth(); var height = $(this).outerHeight(); if (typeof content == "object") { var original = content; var clone = $(original).clone(true).show(); var origClones = $(original).data("bt-clones") || []; origClones.push(clone); $(original).data("bt-clones", origClones); $(clone).data("bt-orig", original); $(this).data("bt-content-orig", { original: original, clone: clone }); content = clone } if (typeof content == "null" || content == "") { return } var $text = $('<div class="bt-content"></div>').append(content).css({ padding: opts.padding, position: "absolute", width: (opts.shrinkToFit ? "auto" : opts.width), zIndex: opts.textzIndex, left: shadowShiftX, top: shadowShiftY }).css(opts.cssStyles); var $box = $('<div class="bt-wrapper"></div>').append($text).addClass(opts.cssClass).css({ position: "absolute", width: opts.width, zIndex: opts.wrapperzIndex, visibility: "hidden" }).appendTo(offsetParent); if (jQuery.fn.bgiframe) { $text.bgiframe(); $box.bgiframe() } $(this).data("bt-box", $box); var scrollTop = numb($(document).scrollTop()); var scrollLeft = numb($(document).scrollLeft()); var docWidth = numb($(window).width()); var docHeight = numb($(window).height()); var winRight = scrollLeft + docWidth; var winBottom = scrollTop + docHeight; var space = new Object(); var thisOffset = $(this).offset(); space.top = thisOffset.top - scrollTop; space.bottom = docHeight - ((thisOffset + height) - scrollTop); space.left = thisOffset.left - scrollLeft; space.right = docWidth - ((thisOffset.left + width) - scrollLeft); var textOutHeight = numb($text.outerHeight()); var textOutWidth = numb($text.btOuterWidth()); if (opts.positions.constructor == String) { opts.positions = opts.positions.replace(/ /, "").split(",") } if (opts.positions[0] == "most") { var position = "top"; for (var pig in space) { position = space[pig] > space[position] ? pig : position } } else { for (var x in opts.positions) { var position = opts.positions[x]; if ((position == "left" || position == "right") && space[position] > textOutWidth + opts.spikeLength) { break } else { if ((position == "top" || position == "bottom") && space[position] > textOutHeight + opts.spikeLength) { break } } } } var horiz = left + ((width - textOutWidth) * 0.5); var vert = top + ((height - textOutHeight) * 0.5); var points = new Array(); var textTop, textLeft, textRight, textBottom, textTopSpace, textBottomSpace, textLeftSpace, textRightSpace, crossPoint, textCenter, spikePoint; switch (position) { case "top": $text.css("margin-bottom", opts.spikeLength + "px"); $box.css({ top: (top - $text.outerHeight(true)) + opts.overlap, left: horiz }); textRightSpace = (winRight - opts.windowMargin) - ($text.offset().left + $text.btOuterWidth(true)); var xShift = shadowShiftX; if (textRightSpace < 0) { $box.css("left", (numb($box.css("left")) + textRightSpace) + "px"); xShift -= textRightSpace } textLeftSpace = ($text.offset().left + numb($text.css("margin-left"))) - (scrollLeft + opts.windowMargin); if (textLeftSpace < 0) { $box.css("left", (numb($box.css("left")) - textLeftSpace) + "px"); xShift += textLeftSpace } textTop = $text.btPosition().top + numb($text.css("margin-top")); textLeft = $text.btPosition().left + numb($text.css("margin-left")); textRight = textLeft + $text.btOuterWidth(); textBottom = textTop + $text.outerHeight(); textCenter = { x: textLeft + ($text.btOuterWidth() * opts.centerPointX), y: textTop + ($text.outerHeight() * opts.centerPointY) }; points[points.length] = spikePoint = { y: textBottom + opts.spikeLength, x: ((textRight - textLeft) * 0.5) + xShift, type: "spike" }; crossPoint = findIntersectX(spikePoint.x, spikePoint.y, textCenter.x, textCenter.y, textBottom); crossPoint.x = crossPoint.x < textLeft + opts.spikeGirth / 2 + opts.cornerRadius ? textLeft + opts.spikeGirth / 2 + opts.cornerRadius : crossPoint.x; crossPoint.x = crossPoint.x > (textRight - opts.spikeGirth / 2) - opts.cornerRadius ? (textRight - opts.spikeGirth / 2) - opts.CornerRadius : crossPoint.x; points[points.length] = { x: crossPoint.x - (opts.spikeGirth / 2), y: textBottom, type: "join" }; points[points.length] = { x: textLeft, y: textBottom, type: "corner" }; points[points.length] = { x: textLeft, y: textTop, type: "corner" }; points[points.length] = { x: textRight, y: textTop, type: "corner" }; points[points.length] = { x: textRight, y: textBottom, type: "corner" }; points[points.length] = { x: crossPoint.x + (opts.spikeGirth / 2), y: textBottom, type: "join" }; points[points.length] = spikePoint; break; case "left": $text.css("margin-right", opts.spikeLength + "px"); $box.css({ top: vert + "px", left: ((left - $text.btOuterWidth(true)) + opts.overlap) + "px" }); textBottomSpace = (winBottom - opts.windowMargin) - ($text.offset().top + $text.outerHeight(true)); var yShift = shadowShiftY; if (textBottomSpace < 0) { $box.css("top", (numb($box.css("top")) + textBottomSpace) + "px"); yShift -= textBottomSpace } textTopSpace = ($text.offset().top + numb($text.css("margin-top"))) - (scrollTop + opts.windowMargin); if (textTopSpace < 0) { $box.css("top", (numb($box.css("top")) - textTopSpace) + "px"); yShift += textTopSpace } textTop = $text.btPosition().top + numb($text.css("margin-top")); textLeft = $text.btPosition().left + numb($text.css("margin-left")); textRight = textLeft + $text.btOuterWidth(); textBottom = textTop + $text.outerHeight(); textCenter = { x: textLeft + ($text.btOuterWidth() * opts.centerPointX), y: textTop + ($text.outerHeight() * opts.centerPointY) }; points[points.length] = spikePoint = { x: textRight + opts.spikeLength, y: ((textBottom - textTop) * 0.5) + yShift, type: "spike" }; crossPoint = findIntersectY(spikePoint.x, spikePoint.y, textCenter.x, textCenter.y, textRight); crossPoint.y = crossPoint.y < textTop + opts.spikeGirth / 2 + opts.cornerRadius ? textTop + opts.spikeGirth / 2 + opts.cornerRadius : crossPoint.y; crossPoint.y = crossPoint.y > (textBottom - opts.spikeGirth / 2) - opts.cornerRadius ? (textBottom - opts.spikeGirth / 2) - opts.cornerRadius : crossPoint.y; points[points.length] = { x: textRight, y: crossPoint.y + opts.spikeGirth / 2, type: "join" }; points[points.length] = { x: textRight, y: textBottom, type: "corner" }; points[points.length] = { x: textLeft, y: textBottom, type: "corner" }; points[points.length] = { x: textLeft, y: textTop, type: "corner" }; points[points.length] = { x: textRight, y: textTop, type: "corner" }; points[points.length] = { x: textRight, y: crossPoint.y - opts.spikeGirth / 2, type: "join" }; points[points.length] = spikePoint; break; case "bottom": $text.css("margin-top", opts.spikeLength + "px"); $box.css({ top: (top + height) - opts.overlap, left: horiz }); textRightSpace = (winRight - opts.windowMargin) - ($text.offset().left + $text.btOuterWidth(true)); var xShift = shadowShiftX; if (textRightSpace < 0) { $box.css("left", (numb($box.css("left")) + textRightSpace) + "px"); xShift -= textRightSpace } textLeftSpace = ($text.offset().left + numb($text.css("margin-left"))) - (scrollLeft + opts.windowMargin); if (textLeftSpace < 0) { $box.css("left", (numb($box.css("left")) - textLeftSpace) + "px"); xShift += textLeftSpace } textTop = $text.btPosition().top + numb($text.css("margin-top")); textLeft = $text.btPosition().left + numb($text.css("margin-left")); textRight = textLeft + $text.btOuterWidth(); textBottom = textTop + $text.outerHeight(); textCenter = { x: textLeft + ($text.btOuterWidth() * opts.centerPointX), y: textTop + ($text.outerHeight() * opts.centerPointY) }; points[points.length] = spikePoint = { x: ((textRight - textLeft) * 0.5) + xShift, y: shadowShiftY, type: "spike" }; crossPoint = findIntersectX(spikePoint.x, spikePoint.y, textCenter.x, textCenter.y, textTop); crossPoint.x = crossPoint.x < textLeft + opts.spikeGirth / 2 + opts.cornerRadius ? textLeft + opts.spikeGirth / 2 + opts.cornerRadius : crossPoint.x; crossPoint.x = crossPoint.x > (textRight - opts.spikeGirth / 2) - opts.cornerRadius ? (textRight - opts.spikeGirth / 2) - opts.cornerRadius : crossPoint.x; points[points.length] = { x: crossPoint.x + opts.spikeGirth / 2, y: textTop, type: "join" }; points[points.length] = { x: textRight, y: textTop, type: "corner" }; points[points.length] = { x: textRight, y: textBottom, type: "corner" }; points[points.length] = { x: textLeft, y: textBottom, type: "corner" }; points[points.length] = { x: textLeft, y: textTop, type: "corner" }; points[points.length] = { x: crossPoint.x - (opts.spikeGirth / 2), y: textTop, type: "join" }; points[points.length] = spikePoint; break; case "right": $text.css("margin-left", (opts.spikeLength + "px")); $box.css({ top: vert + "px", left: ((left + width) - opts.overlap) + "px" }); textBottomSpace = (winBottom - opts.windowMargin) - ($text.offset().top + $text.outerHeight(true)); var yShift = shadowShiftY; if (textBottomSpace < 0) { $box.css("top", (numb($box.css("top")) + textBottomSpace) + "px"); yShift -= textBottomSpace } textTopSpace = ($text.offset().top + numb($text.css("margin-top"))) - (scrollTop + opts.windowMargin); if (textTopSpace < 0) { $box.css("top", (numb($box.css("top")) - textTopSpace) + "px"); yShift += textTopSpace } textTop = $text.btPosition().top + numb($text.css("margin-top")); textLeft = $text.btPosition().left + numb($text.css("margin-left")); textRight = textLeft + $text.btOuterWidth(); textBottom = textTop + $text.outerHeight(); textCenter = { x: textLeft + ($text.btOuterWidth() * opts.centerPointX), y: textTop + ($text.outerHeight() * opts.centerPointY) }; points[points.length] = spikePoint = { x: shadowShiftX, y: ((textBottom - textTop) * 0.5) + yShift, type: "spike" }; crossPoint = findIntersectY(spikePoint.x, spikePoint.y, textCenter.x, textCenter.y, textLeft); crossPoint.y = crossPoint.y < textTop + opts.spikeGirth / 2 + opts.cornerRadius ? textTop + opts.spikeGirth / 2 + opts.cornerRadius : crossPoint.y; crossPoint.y = crossPoint.y > (textBottom - opts.spikeGirth / 2) - opts.cornerRadius ? (textBottom - opts.spikeGirth / 2) - opts.cornerRadius : crossPoint.y; points[points.length] = { x: textLeft, y: crossPoint.y - opts.spikeGirth / 2, type: "join" }; points[points.length] = { x: textLeft, y: textTop, type: "corner" }; points[points.length] = { x: textRight, y: textTop, type: "corner" }; points[points.length] = { x: textRight, y: textBottom, type: "corner" }; points[points.length] = { x: textLeft, y: textBottom, type: "corner" }; points[points.length] = { x: textLeft, y: crossPoint.y + opts.spikeGirth / 2, type: "join" }; points[points.length] = spikePoint; break } var canvas = document.createElement("canvas"); $(canvas).prop("width", (numb($text.btOuterWidth(true)) + opts.strokeWidth * 2 + shadowMarginX)).prop("height", (numb($text.outerHeight(true)) + opts.strokeWidth * 2 + shadowMarginY)).appendTo($box).css({ position: "absolute", zIndex: opts.boxzIndex }); if (typeof G_vmlCanvasManager != "undefined") { canvas = G_vmlCanvasManager.initElement(canvas) } if (opts.cornerRadius > 0) { var newPoints = new Array(); var newPoint; for (var i = 0; i < points.length; i++) { if (points[i].type == "corner") { newPoint = betweenPoint(points[i], points[(i - 1) % points.length], opts.cornerRadius); newPoint.type = "arcStart"; newPoints[newPoints.length] = newPoint; newPoints[newPoints.length] = points[i]; newPoint = betweenPoint(points[i], points[(i + 1) % points.length], opts.cornerRadius); newPoint.type = "arcEnd"; newPoints[newPoints.length] = newPoint } else { newPoints[newPoints.length] = points[i] } } points = newPoints } var ctx = canvas.getContext("2d"); if (opts.shadow && opts.shadowOverlap !== true) { var shadowOverlap = numb(opts.shadowOverlap); switch (position) { case "top": if (opts.shadowOffsetX + opts.shadowBlur - shadowOverlap > 0) { $box.css("top", (numb($box.css("top")) - (opts.shadowOffsetX + opts.shadowBlur - shadowOverlap))) } break; case "right": if (shadowShiftX - shadowOverlap > 0) { $box.css("left", (numb($box.css("left")) + shadowShiftX - shadowOverlap)) } break; case "bottom": if (shadowShiftY - shadowOverlap > 0) { $box.css("top", (numb($box.css("top")) + shadowShiftY - shadowOverlap)) } break; case "left": if (opts.shadowOffsetY + opts.shadowBlur - shadowOverlap > 0) { $box.css("left", (numb($box.css("left")) - (opts.shadowOffsetY + opts.shadowBlur - shadowOverlap))) } break } } drawIt.apply(ctx, [points], opts.strokeWidth); ctx.fillStyle = opts.fill; if (opts.shadow) { ctx.shadowOffsetX = opts.shadowOffsetX; ctx.shadowOffsetY = opts.shadowOffsetY; ctx.shadowBlur = opts.shadowBlur; ctx.shadowColor = opts.shadowColor } ctx.closePath(); ctx.fill(); if (opts.strokeWidth > 0) { ctx.shadowColor = "rgba(0, 0, 0, 0)"; ctx.lineWidth = opts.strokeWidth; ctx.strokeStyle = opts.strokeStyle; ctx.beginPath(); drawIt.apply(ctx, [points], opts.strokeWidth); ctx.closePath(); ctx.stroke() } opts.preShow.apply(this, [$box[0]]); $box.css({ display: "none", visibility: "visible" }); opts.showTip.apply(this, [$box[0]]); if (opts.overlay) { var overlay = $('<div class="bt-overlay"></div>').css({ position: "absolute", backgroundColor: "blue", top: top, left: left, width: width, height: height, opacity: ".2" }).appendTo(offsetParent); $(this).data("overlay", overlay) } if ((opts.ajaxPath != null && opts.ajaxCache == false) || ajaxTimeout) { content = false } if (opts.clickAnywhereToClose) { jQuery.bt.vars.clickAnywhereStack.push(this); $(document).click(jQuery.bt.docClick) } if (opts.closeWhenOthersOpen) { jQuery.bt.vars.closeWhenOpenStack.push(this) } opts.postShow.apply(this, [$box[0]]) }; this.btOff = function () { var box = $(this).data("bt-box"); opts.preHide.apply(this, [box]); var i = this; i.btCleanup = function () { var box = $(i).data("bt-box"); var contentOrig = $(i).data("bt-content-orig"); var overlay = $(i).data("bt-overlay"); if (typeof box == "object") { $(box).remove(); $(i).removeData("bt-box") } if (typeof contentOrig == "object") { var clones = $(contentOrig.original).data("bt-clones"); $(contentOrig).data("bt-clones", arrayRemove(clones, contentOrig.clone)) } if (typeof overlay == "object") { $(overlay).remove(); $(i).removeData("bt-overlay") } jQuery.bt.vars.clickAnywhereStack = arrayRemove(jQuery.bt.vars.clickAnywhereStack, i); jQuery.bt.vars.closeWhenOpenStack = arrayRemove(jQuery.bt.vars.closeWhenOpenStack, i); $(i).removeClass("bt-active " + opts.activeClass); opts.postHide.apply(i) }; opts.hideTip.apply(this, [box, i.btCleanup]) }; var refresh = this.btRefresh = function () { this.btOff(); this.btOn() } }); function drawIt(points, strokeWidth) { this.moveTo(points[0].x, points[0].y); for (i = 1; i < points.length; i++) { if (points[i - 1].type == "arcStart") { this.quadraticCurveTo(round5(points[i].x, strokeWidth), round5(points[i].y, strokeWidth), round5(points[(i + 1) % points.length].x, strokeWidth), round5(points[(i + 1) % points.length].y, strokeWidth)); i++ } else { this.lineTo(round5(points[i].x, strokeWidth), round5(points[i].y, strokeWidth)) } } } function round5(num, strokeWidth) { var ret; strokeWidth = numb(strokeWidth); if (strokeWidth % 2) { ret = num } else { ret = Math.round(num - 0.5) + 0.5 } return ret } function numb(num) { return parseInt(num) || 0 } function arrayRemove(arr, elem) { var x, newArr = new Array(); for (x in arr) { if (arr[x] != elem) { newArr.push(arr[x]) } } return newArr } function canvasSupport() { var canvas_compatible = false; try { canvas_compatible = !!(document.createElement("canvas").getContext("2d")) } catch (e) { canvas_compatible = !!(document.createElement("canvas").getContext) } return canvas_compatible } function shadowSupport() { try { var userAgent = navigator.userAgent.toLowerCase(); if (/webkit/.test(userAgent)) { return true } if (/gecko|mozilla/.test(userAgent)) { var match = userAgent.match(/firefox\/(\d+(?:\.\d+)+)/); if (match && match.length >= 2 && parseFloat(match[1]) >= 3.1) { return true } } if (/trident\/5.0/.test(userAgent)) { return true } } catch (err) { } return false } function betweenPoint(point1, point2, dist) { var y, x; if (point1.x == point2.x) { y = point1.y < point2.y ? point1.y + dist : point1.y - dist; return { x: point1.x, y: y } } else { if (point1.y == point2.y) { x = point1.x < point2.x ? point1.x + dist : point1.x - dist; return { x: x, y: point1.y } } } } function centerPoint(arcStart, corner, arcEnd) { var x = corner.x == arcStart.x ? arcEnd.x : arcStart.x; var y = corner.y == arcStart.y ? arcEnd.y : arcStart.y; var startAngle, endAngle; if (arcStart.x < arcEnd.x) { if (arcStart.y > arcEnd.y) { startAngle = (Math.PI / 180) * 180; endAngle = (Math.PI / 180) * 90 } else { startAngle = (Math.PI / 180) * 90; endAngle = 0 } } else { if (arcStart.y > arcEnd.y) { startAngle = (Math.PI / 180) * 270; endAngle = (Math.PI / 180) * 180 } else { startAngle = 0; endAngle = (Math.PI / 180) * 270 } } return { x: x, y: y, type: "center", startAngle: startAngle, endAngle: endAngle } } function findIntersect(r1x1, r1y1, r1x2, r1y2, r2x1, r2y1, r2x2, r2y2) { if (r2x1 == r2x2) { return findIntersectY(r1x1, r1y1, r1x2, r1y2, r2x1) } if (r2y1 == r2y2) { return findIntersectX(r1x1, r1y1, r1x2, r1y2, r2y1) } var r1m = (r1y1 - r1y2) / (r1x1 - r1x2); var r1b = r1y1 - (r1m * r1x1); var r2m = (r2y1 - r2y2) / (r2x1 - r2x2); var r2b = r2y1 - (r2m * r2x1); var x = (r2b - r1b) / (r1m - r2m); var y = r1m * x + r1b; return { x: x, y: y } } function findIntersectY(r1x1, r1y1, r1x2, r1y2, x) { if (r1y1 == r1y2) { return { x: x, y: r1y1 } } var r1m = (r1y1 - r1y2) / (r1x1 - r1x2); var r1b = r1y1 - (r1m * r1x1); var y = r1m * x + r1b; return { x: x, y: y } } function findIntersectX(r1x1, r1y1, r1x2, r1y2, y) { if (r1x1 == r1x2) { return { x: r1x1, y: y } } var r1m = (r1y1 - r1y2) / (r1x1 - r1x2); var r1b = r1y1 - (r1m * r1x1); var x = (y - r1b) / r1m; return { x: x, y: y } } }; jQuery.fn.btPosition = function () { function num(elem, prop) { return elem[0] && parseInt(jQuery.css(elem[0], prop, true), 10) || 0 } var left = 0, top = 0, results; if (this[0]) { var offsetParent = this.offsetParent(), offset = this.offset(), parentOffset = /^body|html$/i.test(offsetParent[0].tagName) ? { top: 0, left: 0 } : offsetParent.offset(); offset.top -= num(this, "marginTop"); offset.left -= num(this, "marginLeft"); parentOffset.top += num(offsetParent, "borderTopWidth"); parentOffset.left += num(offsetParent, "borderLeftWidth"); results = { top: offset.top - parentOffset.top, left: offset.left - parentOffset.left } } return results }; jQuery.fn.btOuterWidth = function (margin) { function num(elem, prop) { return elem[0] && parseInt(jQuery.css(elem[0], prop, true), 10) || 0 } return this["innerWidth"]() + num(this, "borderLeftWidth") + num(this, "borderRightWidth") + (margin ? num(this, "marginLeft") + num(this, "marginRight") : 0) }; jQuery.fn.btOn = function () { return this.each(function (index) { if (jQuery.isFunction(this.btOn)) { this.btOn() } }) }; jQuery.fn.btOff = function () { return this.each(function (index) { if (jQuery.isFunction(this.btOff)) { this.btOff() } }) }; jQuery.bt.vars = { clickAnywhereStack: [], closeWhenOpenStack: [] }; jQuery.bt.docClick = function (e) { if (!e) { var e = window.event } if (!$(e.target).parents().andSelf().filter(".bt-wrapper, .bt-active").length && jQuery.bt.vars.clickAnywhereStack.length) { $(jQuery.bt.vars.clickAnywhereStack).btOff(); $(document).unbind("click", jQuery.bt.docClick) } }; jQuery.bt.defaults = { trigger: "hover", clickAnywhereToClose: true, closeWhenOthersOpen: false, shrinkToFit: false, width: "200px", padding: "10px", spikeGirth: 10, spikeLength: 15, overlap: 0, overlay: false, killTitle: true, textzIndex: 9999, boxzIndex: 9998, wrapperzIndex: 9997, offsetParent: null, positions: ["most"], fill: "rgb(255, 255, 102)", windowMargin: 10, strokeWidth: 1, strokeStyle: "#000", cornerRadius: 5, centerPointX: 0.5, centerPointY: 0.5, shadow: false, shadowOffsetX: 2, shadowOffsetY: 2, shadowBlur: 3, shadowColor: "#000", shadowOverlap: false, noShadowOpts: { strokeStyle: "#999" }, cssClass: "", cssStyles: {}, activeClass: "bt-active", contentSelector: "$(this).prop('title')", ajaxPath: null, ajaxError: "<strong>ERROR:</strong> <em>%error</em>", ajaxLoading: "<blink>Cargando...</blink>", ajaxData: {}, ajaxType: "GET", ajaxCache: true, ajaxOpts: {}, preBuild: function () { }, preShow: function (box) { }, showTip: function (box) { $(box).show() }, postShow: function (box) { }, preHide: function (box) { }, hideTip: function (box, callback) { $(box).hide(); callback() }, postHide: function () { }, hoverIntentOpts: { interval: 300, timeout: 500 } }; jQuery.bt.options = {} })(jQuery);
//bt--

//MsgBox
var msgBoxImagePath="/content/img/";jQuery.msgBox=msg;function msg(options){var isShown=false;var typeOfValue=typeof options;var defaults={content:(typeOfValue=="string"?options:"Message"),title:"Warning",type:"alert",autoClose:false,timeOut:0,showButtons:true,buttons:[{value:"Ok"}],inputs:[{type:"text",name:"userName",header:"User Name"},{type:"password",name:"password",header:"Password"}],success:function(result){},beforeShow:function(){},afterShow:function(){},beforeClose:function(){},afterClose:function(){},opacity:0.1};options=typeOfValue=="string"?defaults:options;if(options.type!=null){switch(options.type){case"alert":options.title=options.title==null?"Warning":options.title;break;case"info":options.title=options.title==null?"Information":options.title;break;case"error":options.title=options.title==null?"Error":options.title;break;case"confirm":options.title=options.title==null?"Confirmation":options.title;options.buttons=options.buttons==null?[{value:"Yes"},{value:"No"},{value:"Cancel"}]:options.buttons;break;case"prompt":options.title=options.title==null?"Log In":options.title;options.buttons=options.buttons==null?[{value:"Login"},{value:"Cancel"}]:options.buttons;break;default:image="alert.png"}}options.timeOut=options.timeOut==null?(options.content==null?500:options.content.length*70):options.timeOut;options=$.extend(defaults,options);if(options.autoClose){setTimeout(hide,options.timeOut)}var image="";switch(options.type){case"alert":image="alert.png";break;case"info":image="info.png";break;case"error":image="error.png";break;case"confirm":image="confirm.png";break;default:image="alert.png"}var divId="msgBox"+new Date().getTime();var divMsgBoxId=divId;var divMsgBoxContentId=divId+"Content";var divMsgBoxImageId=divId+"Image";var divMsgBoxButtonsId=divId+"Buttons";var divMsgBoxBackGroundId=divId+"BackGround";var buttons="";$(options.buttons).each(function(index,button){buttons+="<input class=\"msgButton\" type=\"button\" name=\""+button.value+"\" value=\""+button.value+"\" />"});var inputs="";$(options.inputs).each(function(index,input){var type=input.type;if(type=="checkbox"||type=="radiobutton"){inputs+="<div class=\"msgInput\">"+"<input type=\""+input.type+"\" name=\""+input.name+"\" "+(input.checked==null?"":"checked ='"+input.checked+"'")+" value=\""+(typeof input.value=="undefined"?"":input.value)+"\" />"+"<text>"+input.header+"</text>"+"</div>"}else{inputs+="<div class=\"msgInput\">"+"<span class=\"msgInputHeader\">"+input.header+"<span>"+"<input type=\""+input.type+"\" name=\""+input.name+"\" value=\""+(typeof input.value=="undefined"?"":input.value)+"\" />"+"</div>"}});var divBackGround="<div id="+divMsgBoxBackGroundId+" class=\"msgBoxBackGround\"></div>";var divTitle="<div class=\"msgBoxTitle\">"+options.title+"</div>";var divContainer="<div class=\"msgBoxContainer\"><div id="+divMsgBoxImageId+" class=\"msgBoxImage\"><img src=\""+msgBoxImagePath+image+"\"/></div><div id="+divMsgBoxContentId+" class=\"msgBoxContent\"><p><span>"+options.content+"</span></p></div></div>";var divButtons="<div id="+divMsgBoxButtonsId+" class=\"msgBoxButtons\">"+buttons+"</div>";var divInputs="<div class=\"msgBoxInputs\">"+inputs+"</div>";var divMsgBox;var divMsgBoxContent;var divMsgBoxImage;var divMsgBoxButtons;var divMsgBoxBackGround;if(options.type=="prompt"){$("html").append(divBackGround+"<div id="+divMsgBoxId+" class=\"msgBox\">"+divTitle+"<div>"+divContainer+(options.showButtons?divButtons+"</div>":"</div>")+"</div>");divMsgBox=$("#"+divMsgBoxId);divMsgBoxContent=$("#"+divMsgBoxContentId);divMsgBoxImage=$("#"+divMsgBoxImageId);divMsgBoxButtons=$("#"+divMsgBoxButtonsId);divMsgBoxBackGround=$("#"+divMsgBoxBackGroundId);divMsgBoxImage.remove();divMsgBoxButtons.css({"text-align":"center","margin-top":"5px"});divMsgBoxContent.css({"width":"100%","height":"100%"});divMsgBoxContent.html(divInputs)}else{$("html").append(divBackGround+"<div id="+divMsgBoxId+" class=\"msgBox\">"+divTitle+"<div>"+divContainer+(options.showButtons?divButtons+"</div>":"</div>")+"</div>");divMsgBox=$("#"+divMsgBoxId);divMsgBoxContent=$("#"+divMsgBoxContentId);divMsgBoxImage=$("#"+divMsgBoxImageId);divMsgBoxButtons=$("#"+divMsgBoxButtonsId);divMsgBoxBackGround=$("#"+divMsgBoxBackGroundId)}var width=divMsgBox.width();var height=divMsgBox.height();var windowHeight=$(window).height();var windowWidth=$(window).width();var top=windowHeight/2-height/2;var left=windowWidth/2-width/2;show();function show(){if(isShown){return}divMsgBox.css({opacity:0,top:top-50,left:left});divMsgBox.css("background-image","url('"+msgBoxImagePath+"msgBoxBackGround.png')");divMsgBoxBackGround.css({opacity:options.opacity});options.beforeShow();divMsgBoxBackGround.css({"width":$(document).width(),"height":getDocHeight()});$(divMsgBoxId+","+divMsgBoxBackGroundId).fadeIn(0);divMsgBox.animate({opacity:1,"top":top,"left":left},200);setTimeout(options.afterShow,200);isShown=true;$(window).bind("resize",function(e){var width=divMsgBox.width();var height=divMsgBox.height();var windowHeight=$(window).height();var windowWidth=$(window).width();var top=windowHeight/2-height/2;var left=windowWidth/2-width/2;divMsgBox.css({"top":top,"left":left})})}function hide(){if(!isShown){return}options.beforeClose();divMsgBox.animate({opacity:0,"top":top-50,"left":left},200);divMsgBoxBackGround.fadeOut(300);setTimeout(function(){divMsgBox.remove();divMsgBoxBackGround.remove()},300);setTimeout(options.afterClose,300);isShown=false}function getDocHeight(){var D=document;return Math.max(Math.max(D.body.scrollHeight,D.documentElement.scrollHeight),Math.max(D.body.offsetHeight,D.documentElement.offsetHeight),Math.max(D.body.clientHeight,D.documentElement.clientHeight))}function getFocus(){divMsgBox.fadeOut(200).fadeIn(200)}$("input.msgButton").click(function(e){e.preventDefault();var value=$(this).val();if(options.type!="prompt"){options.success(value)}else{var inputValues=[];$("div.msgInput input").each(function(index,domEle){var name=$(this).attr("name");var value=$(this).val();var type=$(this).attr("type");if(type=="checkbox"||type=="radiobutton"){inputValues.push({name:name,value:value,checked:$(this).attr("checked")})}else{inputValues.push({name:name,value:value})}});options.success(value,inputValues)}hide()});divMsgBoxBackGround.click(function(e){if(!options.showButtons||options.autoClose){hide()}else{getFocus()}})};
//MsgBox


//$.cookie
(function ($, document, undefined) { var pluses = /\+/g; function raw(s) { return s; } function decoded(s) { return decodeURIComponent(s.replace(pluses, ' ')); } $.cookie = function (key, value, options) { if (value !== undefined && !/Object/.test(Object.prototype.toString.call(value))) { options = $.extend({}, $.cookie.defaults, options); if (value === null) { options.expires = -1; } if (typeof options.expires === 'number') { var days = options.expires, t = options.expires = new Date(); t.setDate(t.getDate() + days); } value = String(value); return (document.cookie = [encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('')); } options = value || $.cookie.defaults || {}; var decode = options.raw ? raw : decoded; var cookies = document.cookie.split('; '); for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')) ; i++) { if (decode(parts.shift()) === key) { return decode(parts.join('=')); } } return null; }; $.cookie.defaults = {}; $.removeCookie = function (key, options) { if ($.cookie(key, options) !== null) { $.cookie(key, null, options); return true; } return false; }; })(jQuery, document);



$.fn.enterKeySetter = function (options) {
    var defaults = {
        container: null
    };
    var opExtend = $.extend(defaults, options);
    this.keypress(function (e) {
        var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
        var tmp;
        var maxTabIndex = 96;
        var nTabIndex = this.tabIndex + 1;
        var myNode = this.nodeName.toLowerCase();
        var myNodeType = this.type;
        if (nTabIndex > 0 && key == 13 && nTabIndex <= maxTabIndex && ((myNode == "textarea") || (myNode == "input") || (myNode == "select") || (myNode != "a")) && myNodeType != "button") {
            for (var x = 0; x < 3; x++) {
                if (opExtend.container == null)
                    tmp = $("a[tabIndex='" + nTabIndex + "'],textarea[tabIndex='" + nTabIndex + "'],select[tabIndex='" + nTabIndex + "'],input[tabIndex='" + nTabIndex + "']").get(0);
                else
                    tmp = $("#" + opExtend.container).find("a[tabIndex='" + nTabIndex + "'],textarea[tabIndex='" + nTabIndex + "'],select[tabIndex='" + nTabIndex + "'],input[tabIndex='" + nTabIndex + "']").get(0);
                if (typeof tmp != "undefined" && !$(tmp).attr("disabled") && tmp.type != "button" && tmp.tagName != "A" && tmp.type != "submit") {
                    $(tmp).focus();
                    return false;
                } else if (typeof tmp != "undefined" && !$(tmp).attr("disabled") && (tmp.type == "button" || tmp.tagName == "A" || tmp.type == "submit")) {
                    $(tmp).click();
                    break;
                } else {
                    nTabIndex++;
                }
            }
            return false;
        }
        else if (myNode != "a") {
            $(this).click();
        }
        return true;
    });
    return this;
};

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function rndStr(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

$.fn.setDefaultLabels = function (options) {
    var defaults = {
        defaultColor: "#ddd",
        blurColor: "#656565",
        attrSelector: "title"
    };
    var optExtend = $.extend(defaults, options);
    $(this).each(function () {
        var base = $(this);
        var type = this.type;
        switch (type) {
            case "password":
            case "textarea":
            case "text":
                if (base.val() === '') {
                    base.val(base.attr(optExtend.attrSelector));
                    base.addClass('defaultInLabel').css("color", optExtend.defaultColor);
                }

                base.focus(function () {
                    if (base.val() === base.attr(optExtend.attrSelector)) {
                        base.val('').removeClass('defaultInLabel').css("color", optExtend.blurColor);
                    }
                    if (!base.hasClass("active"))
                        base.addClass("active");
                });

                base.blur(function () {
                    if (base.val() === '') {
                        base.val(base.attr(optExtend.attrSelector)).addClass('defaultInLabel').css("color", optExtend.defaultColor);
                    }
                    if (!base.is(":focus") && base.hasClass("active"))
                        base.removeClass("active");
                });

                base.change(function () {
                    if (base.val() != '' && base.val() != base.attr(optExtend.attrSelector)) {
                        base.removeClass('defaultInLabel').css("color", optExtend.blurColor);
                    }
                });

                base.mouseenter(function () {
                    if (!base.hasClass("active"))
                        base.addClass("active");
                });

                base.mouseleave(function () {
                    if (!base.is(":focus") && base.hasClass("active"))
                        base.removeClass("active");
                });
                break;
            case "select-one":
                if (base.val() === '') {
                    base.addClass('defaultInLabel').css("color", optExtend.defaultColor);
                }
                base.change(function () {
                    base.removeClass('defaultInLabel').css("color", optExtend.blurColor);
                    if (base.val() === '') {
                        base.addClass('defaultInLabel').css("color", optExtend.defaultColor);
                    }
                });
                break;
        }
    });
};

    function querystring(inkey) {
        var query = window.location.search.substring(1); var parms = query.split('&'); for (var i = 0; i < parms.length; i++) {
            var pos = parms[i].indexOf('='); if (pos > 0) {
                var key = parms[i].substring(0, pos); var val = parms[i].substring(pos + 1);
                if (inkey.toLowerCase() == key.toLowerCase()) return val;
            }
        } return '';
    }


(function ($) {
return $.fn.ajaxChosen = function (settings, callback, chosenOptions) {
var chosenXhr, defaultOptions, options, select; if (settings == null) { settings = {}; }
if (chosenOptions == null) { chosenOptions = { "disable_search": true }; }
defaultOptions = { minTermLength: 1, afterTypeDelay: 500, jsonTermKey: "term", keepTypingMsg: "Keep typing...", lookingForMsg: "Buscando", disable_search: true }; select = this; chosenXhr = null; options = $.extend({}, defaultOptions, $(select).data(), settings); this.chosen(chosenOptions ? chosenOptions : {}); return this.each(function () {
return $(this).next('.chzn-container').find(".search-field > input, .chzn-search > input").bind('keyup', function () {
var field, msg, success, untrimmed_val, val; untrimmed_val = $(this).val(); val = $.trim($(this).val()); msg = val.length < options.minTermLength ? options.keepTypingMsg : options.lookingForMsg + (" '" + val + "'"); select.next('.chzn-container').find('.no-results').text(msg); if (val === $(this).data('prevVal')) { return false; }
$(this).data('prevVal', val); if (this.timer) { clearTimeout(this.timer); }
if (val.length < options.minTermLength) { return false; }
field = $(this); if (options.data == null) { options.data = {}; }
options.data[options.jsonTermKey] = val; if (options.dataCallback != null) { options.data = options.dataCallback(options.data); }
success = options.success; options.success = function (data) {
var items, nbItems, selected_values; if (data == null) { return; }
selected_values = []; select.find('option').each(function () { if (!$(this).is(":selected")) { return $(this).remove(); } else { return selected_values.push($(this).val() + "-" + $(this).text()); } }); select.find('optgroup:empty').each(function () { return $(this).remove(); }); items = callback != null ? callback(data, field) : data; nbItems = 0; $.each(items, function (i, element) {
var group, text, value; nbItems++; if (element.group) {
group = select.find("optgroup[label='" + element.text + "']"); if (!group.size()) { group = $("<optgroup />"); }
group.attr('label', element.text).appendTo(select); return $.each(element.items, function (i, element) {
var text, value; if (typeof element === "string") { value = i; text = element; } else { value = element.value; text = element.text; }
if ($.inArray(value + "-" + text, selected_values) === -1) { return $("<option />").attr('value', value).html(text).appendTo(group); }
});
} else {
if (typeof element === "string") { value = i; text = element; } else { value = element.value; text = element.text; }
if ($.inArray(value + "-" + text, selected_values) === -1) { return $("<option />").attr('value', value).html(text).appendTo(select); }
}
}); if (nbItems) { select.trigger("liszt:updated"); } else { select.data().chosen.no_results_clear(); select.data().chosen.no_results(field.val()); }
if (settings.success != null) { settings.success(data); }
return field.val(untrimmed_val);
}; return this.timer = setTimeout(function () {
if (chosenXhr) { chosenXhr.abort(); }
return chosenXhr = $.ajax(options);
}, options.afterTypeDelay);
});
});
};
})(jQuery);

//Autocomplete
//(function (e) { "use strict"; if (typeof define === "function" && define.amd) { define(["jquery"], e) } else { e(jQuery) } })(function (e) { "use strict"; function r(t, n) { var i = function () { }, s = this, o = { autoSelectFirst: false, appendTo: "body", serviceUrl: null, lookup: null, onSelect: null, width: "auto", minChars: 2, maxHeight: 300, deferRequestBy: 200, params: {}, formatResult: r.formatResult, delimiter: null, zIndex: 9999, type: "GET", noCache: false, onSearchStart: i, onSearchComplete: i, containerClass: "autocomplete-suggestions", tabDisabled: false, dataType: "text", lookupFilter: function (e, t, n) { return e.value.toLowerCase().indexOf(n) !== -1 }, paramName: "query", transformResult: function (t) { return typeof t === "string" ? e.parseJSON(t) : t } }; s.element = t; s.el = e(t); s.suggestions = []; s.badQueries = []; s.selectedIndex = -1; s.currentValue = s.element.value; s.intervalId = 0; s.cachedResponse = []; s.onChangeInterval = null; s.onChange = null; s.ignoreValueChange = false; s.isLocal = false; s.suggestionsContainer = null; s.options = e.extend({}, o, n); s.classes = { selected: "autocomplete-selected", suggestion: "autocomplete-suggestion" }; s.initialize(); s.setOptions(n) } var t = function () { return { extend: function (t, n) { return e.extend(t, n) }, createNode: function (e) { var t = document.createElement("div"); t.innerHTML = e; return t.firstChild } } }(), n = { ESC: 27, TAB: 9, RETURN: 13, UP: 38, DOWN: 40 }; r.utils = t; e.Autocomplete = r; r.formatResult = function (e, t) { var n = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"].join("|\\") + ")", "g"), r = "(" + t.replace(n, "\\$1") + ")"; return e.value.replace(new RegExp(r, "gi"), "<strong>$1</strong>") }; r.prototype = { count: 0, killerFn: null, initialize: function () { var t = this, n = "." + t.classes.suggestion, i = t.classes.selected, s = t.options, o; t.element.setAttribute("autocomplete", "off"); t.killerFn = function (n) { if (e(n.target).closest("." + t.options.containerClass).length === 0) { t.killSuggestions(); t.disableKillerFn() } }; t.suggestionsContainer = r.utils.createNode('<div class="' + s.containerClass + '" style="position: absolute; display: none;"></div>'); o = e(t.suggestionsContainer); o.appendTo(s.appendTo); if (s.width !== "auto") { o.width(s.width) } o.on("mouseover.autocomplete", n, function () { t.activate(e(this).data("index")) }); o.on("mouseout.autocomplete", function () { t.selectedIndex = -1; o.children("." + i).removeClass(i) }); o.on("click.autocomplete", n, function () { t.select(e(this).data("index"), false) }); t.fixPosition(); t.el.on("keydown.autocomplete", function (e) { t.onKeyPress(e) }); t.el.on("keyup.autocomplete", function (e) { t.onKeyUp(e) }); t.el.on("blur.autocomplete", function () { t.onBlur() }); t.el.on("focus.autocomplete", function () { t.fixPosition() }) }, onBlur: function () { this.enableKillerFn() }, setOptions: function (n) { var r = this, i = r.options; t.extend(i, n); r.isLocal = e.isArray(i.lookup); if (r.isLocal) { i.lookup = r.verifySuggestionsFormat(i.lookup) } e(r.suggestionsContainer).css({ "max-height": i.maxHeight + "px", width: i.width + "px", "z-index": i.zIndex }) }, clearCache: function () { this.cachedResponse = []; this.badQueries = [] }, clear: function () { this.clearCache(); this.currentValue = null; this.suggestions = [] }, disable: function () { this.disabled = true }, enable: function () { this.disabled = false }, fixPosition: function () { var t = this, n; if (t.options.appendTo !== "body") { return } n = t.el.offset(); e(t.suggestionsContainer).css({ top: n.top + t.el.outerHeight() + "px", left: n.left + "px" }) }, enableKillerFn: function () { var t = this; e(document).on("click.autocomplete", t.killerFn) }, disableKillerFn: function () { var t = this; e(document).off("click.autocomplete", t.killerFn) }, killSuggestions: function () { var e = this; e.stopKillSuggestions(); e.intervalId = window.setInterval(function () { e.hide(); e.stopKillSuggestions() }, 300) }, stopKillSuggestions: function () { window.clearInterval(this.intervalId) }, onKeyPress: function (e) { var t = this; if (!t.disabled && !t.visible && e.keyCode === n.DOWN && t.currentValue) { t.suggest(); return } if (t.disabled || !t.visible) { return } switch (e.keyCode) { case n.ESC: t.el.val(t.currentValue); t.hide(); break; case n.TAB: case n.RETURN: if (t.selectedIndex === -1) { t.hide(); return } t.select(t.selectedIndex, e.keyCode === n.RETURN); if (e.keyCode === n.TAB && this.options.tabDisabled === false) { return } break; case n.UP: t.moveUp(); break; case n.DOWN: t.moveDown(); break; default: return } e.stopImmediatePropagation(); e.preventDefault() }, onKeyUp: function (e) { var t = this; if (t.disabled) { return } switch (e.keyCode) { case n.UP: case n.DOWN: return } clearInterval(t.onChangeInterval); if (t.currentValue !== t.el.val()) { if (t.options.deferRequestBy > 0) { t.onChangeInterval = setInterval(function () { t.onValueChange() }, t.options.deferRequestBy) } else { t.onValueChange() } } }, onValueChange: function () { var e = this, t; clearInterval(e.onChangeInterval); e.currentValue = e.element.value; t = e.getQuery(e.currentValue); e.selectedIndex = -1; if (e.ignoreValueChange) { e.ignoreValueChange = false; return } if (t.length < e.options.minChars) { e.hide() } else { e.getSuggestions(t) } }, getQuery: function (t) { var n = this.options.delimiter, r; if (!n) { return e.trim(t) } r = t.split(n); return e.trim(r[r.length - 1]) }, getSuggestionsLocal: function (t) { var n = this, r = t.toLowerCase(), i = n.options.lookupFilter; return { suggestions: e.grep(n.options.lookup, function (e) { return i(e, t, r) }) } }, getSuggestions: function (t) { var n, r = this, i = r.options, s = i.serviceUrl; n = r.isLocal ? r.getSuggestionsLocal(t) : r.cachedResponse[t]; if (n && e.isArray(n.suggestions)) { r.suggestions = n.suggestions; r.suggest() } else if (!r.isBadQuery(t)) { i.params[i.paramName] = t; if (i.onSearchStart.call(r.element, i.params) === false) { return } if (e.isFunction(i.serviceUrl)) { s = i.serviceUrl.call(r.element, t) } e(r.element).addClass("lupa-searching"); r.count++; e.ajax({ url: s, data: i.ignoreParams ? null : i.params, type: i.type, dataType: i.dataType }).done(function (n) { r.count--; if (r.count <= 0) e(r.element).removeClass("lupa-searching"); r.processResponse(n, t); i.onSearchComplete.call(r.element, t) }) } }, isBadQuery: function (e) { var t = this.badQueries, n = t.length; while (n--) { if (e.indexOf(t[n]) === 0) { return true } } return false }, hide: function () { var t = this; t.visible = false; t.selectedIndex = -1; e(t.suggestionsContainer).hide() }, suggest: function () { if (this.suggestions.length === 0) { this.hide(); return } var t = this, n = t.options.formatResult, r = t.getQuery(t.currentValue), i = t.classes.suggestion, s = t.classes.selected, o = e(t.suggestionsContainer), u = "", a; e.each(t.suggestions, function (e, t) { u += '<div class="' + i + '" data-index="' + e + '">' + n(t, r) + "</div>" }); if (t.options.width === "auto") { a = t.el.outerWidth() - 2; o.width(a > 0 ? a : 300) } o.html(u).show(); t.visible = true; if (t.options.autoSelectFirst) { t.selectedIndex = 0; o.children().first().addClass(s) } }, verifySuggestionsFormat: function (t) { if (t.length && typeof t[0] === "string") { return e.map(t, function (e) { return { value: e, data: null } }) } return t }, processResponse: function (e, t) { var n = this, r = n.options, i = r.transformResult(e, t); i.suggestions = n.verifySuggestionsFormat(i.suggestions); if (!r.noCache) { n.cachedResponse[i[r.paramName]] = i; if (i.suggestions.length === 0) { n.badQueries.push(i[r.paramName]) } } if (t === n.getQuery(n.currentValue)) { n.suggestions = i.suggestions; n.suggest() } }, activate: function (t) { var n = this, r, i = n.classes.selected, s = e(n.suggestionsContainer), o = s.children(); s.children("." + i).removeClass(i); n.selectedIndex = t; if (n.selectedIndex !== -1 && o.length > n.selectedIndex) { r = o.get(n.selectedIndex); e(r).addClass(i); return r } return null }, select: function (e, t) { var n = this, r = n.suggestions[e]; if (r) { n.el.val(r); n.ignoreValueChange = t; n.hide(); n.onSelect(e) } }, moveUp: function () { var t = this; if (t.selectedIndex === -1) { return } if (t.selectedIndex === 0) { e(t.suggestionsContainer).children().first().removeClass(t.classes.selected); t.selectedIndex = -1; t.el.val(t.currentValue); return } t.adjustScroll(t.selectedIndex - 1) }, moveDown: function () { var e = this; if (e.selectedIndex === e.suggestions.length - 1) { return } e.adjustScroll(e.selectedIndex + 1) }, adjustScroll: function (t) { var n = this, r = n.activate(t), i, s, o, u = 25; if (!r) { return } i = r.offsetTop; s = e(n.suggestionsContainer).scrollTop(); o = s + n.options.maxHeight - u; if (i < s) { e(n.suggestionsContainer).scrollTop(i) } else if (i > o) { e(n.suggestionsContainer).scrollTop(i - n.options.maxHeight + u) } n.el.val(n.getValue(n.suggestions[t].value)) }, onSelect: function (t) { var n = this, r = n.options.onSelect, i = n.suggestions[t]; n.el.val(n.getValue(i.value)); if (e.isFunction(r)) { r.call(n.element, i) } }, getValue: function (e) { var t = this, n = t.options.delimiter, r, i; if (!n) { return e } r = t.currentValue; i = r.split(n); if (i.length === 1) { return e } return r.substr(0, r.length - i[i.length - 1].length) + e }, dispose: function () { var t = this; t.el.off(".autocomplete").removeData("autocomplete"); t.disableKillerFn(); e(t.suggestionsContainer).remove() } }; e.fn.autocomplete = function (t, n) { var i = "autocomplete"; if (arguments.length === 0) { return this.first().data(i) } return this.each(function () { var s = e(this), o = s.data(i); if (typeof t === "string") { if (o && typeof o[t] === "function") { o[t](n) } } else { if (o && o.dispose) { o.dispose() } o = new r(this, t); s.data(i, o) } }) } })

(function(e) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else {
        e(jQuery)
    }
})(function(e) {
    "use strict";

    function r(t, n) {
        var i = function() {},
            s = this,
            o = {
                autoSelectFirst: false,
                appendTo: "body",
                serviceUrl: null,
                lookup: null,
                onSelect: null,
                width: "auto",
                minChars: 2,
                maxHeight: 300,
                deferRequestBy: 200,
                params: {},
                formatResult: r.formatResult,
                delimiter: null,
                zIndex: 9999,
                type: "GET",
                noCache: false,
                onSearchStart: i,
                onSearchComplete: i,
                containerClass: "autocomplete-suggestions",
                tabDisabled: false,
                dataType: "text",
                lookupFilter: function(e, t, n) {
                    return e.value.toLowerCase().indexOf(n) !== -1
                },
                paramName: "query",
                transformResult: function(t) {
                    return typeof t === "string" ? e.parseJSON(t) : t
                }
            };
        s.element = t;
        s.el = e(t);
        s.suggestions = [];
        s.badQueries = [];
        s.selectedIndex = -1;
        s.currentValue = s.element.value;
        s.intervalId = 0;
        s.cachedResponse = [];
        s.onChangeInterval = null;
        s.onChange = null;
        s.ignoreValueChange = false;
        s.isLocal = false;
        s.suggestionsContainer = null;
        s.options = e.extend({}, o, n);
        s.classes = {
            selected: "autocomplete-selected",
            suggestion: "autocomplete-suggestion"
        };
        s.initialize();
        s.setOptions(n)
    }
    var t = function() {
            return {
                extend: function(t, n) {
                    return e.extend(t, n)
                },
                createNode: function(e) {
                    var t = document.createElement("div");
                    t.innerHTML = e;
                    return t.firstChild
                }
            }
        }(),
        n = {
            ESC: 27,
            TAB: 9,
            RETURN: 13,
            UP: 38,
            DOWN: 40
        };
    r.utils = t;
    e.Autocomplete = r;
    r.formatResult = function(e, t) {
        var n = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"].join("|\\") + ")", "g"),
            r = "(" + t.replace(n, "\\$1") + ")";
        return e.value.replace(new RegExp(r, "gi"), "<strong>$1</strong>")
    };
    r.prototype = {
        count: 0,
        killerFn: null,
        initialize: function() {
            var t = this,
                n = "." + t.classes.suggestion,
                i = t.classes.selected,
                s = t.options,
                o;
            t.element.setAttribute("autocomplete", "off");
            t.killerFn = function(n) {
                if (e(n.target).closest("." + t.options.containerClass).length === 0) {
                    t.killSuggestions();
                    t.disableKillerFn()
                }
            };
            t.suggestionsContainer = r.utils.createNode('<div class="' + s.containerClass + '" style="position: absolute; display: none;"></div>');
            o = e(t.suggestionsContainer);
            o.appendTo(s.appendTo);
            if (s.width !== "auto") {
                o.width(s.width)
            }
            o.on("mouseover.autocomplete", n, function() {
                t.activate(e(this).data("index"))
            });
            o.on("mouseout.autocomplete", function() {
                t.selectedIndex = -1;
                o.children("." + i).removeClass(i)
            });
            o.on("click.autocomplete", n, function() {
                t.select(e(this).data("index"), false)
            });
            t.fixPosition();
            t.el.on("keydown.autocomplete", function(e) {
                t.onKeyPress(e)
            });
            t.el.on("keyup.autocomplete", function(e) {
                t.onKeyUp(e)
            });
            t.el.on("blur.autocomplete", function() {
                t.onBlur()
            });
            t.el.on("focus.autocomplete", function() {
                t.fixPosition()
            })
        },
        onBlur: function() {
            this.enableKillerFn()
        },
        setOptions: function(n) {
            var r = this,
                i = r.options;
            t.extend(i, n);
            r.isLocal = e.isArray(i.lookup);
            if (r.isLocal) {
                i.lookup = r.verifySuggestionsFormat(i.lookup)
            }
            e(r.suggestionsContainer).css({
                "max-height": i.maxHeight + "px",
                width: i.width + "px",
                "z-index": i.zIndex
            })
        },
        clearCache: function() {
            this.cachedResponse = [];
            this.badQueries = []
        },
        clear: function() {
            this.clearCache();
            this.currentValue = null;
            this.suggestions = []
        },
        disable: function() {
            this.disabled = true
        },
        enable: function() {
            this.disabled = false
        },
        fixPosition: function() {
            var t = this,
                n;
            if (t.options.appendTo !== "body") {
                return
            }
            n = t.el.offset();
            e(t.suggestionsContainer).css({
                top: n.top + t.el.outerHeight() + "px",
                left: n.left + "px"
            })
        },
        enableKillerFn: function() {
            var t = this;
            e(document).on("click.autocomplete", t.killerFn)
        },
        disableKillerFn: function() {
            var t = this;
            e(document).off("click.autocomplete", t.killerFn)
        },
        killSuggestions: function() {
            var e = this;
            e.stopKillSuggestions();
            e.intervalId = window.setInterval(function() {
                e.hide();
                e.stopKillSuggestions()
            }, 300)
        },
        stopKillSuggestions: function() {
            window.clearInterval(this.intervalId)
        },
        onKeyPress: function(e) {
            var t = this;
            if (!t.disabled && !t.visible && e.keyCode === n.DOWN && t.currentValue) {
                t.suggest();
                return
            }
            if (t.disabled || !t.visible) {
                return
            }
            switch (e.keyCode) {
                case n.ESC:
                    t.el.val(t.currentValue);
                    t.hide();
                    break;
                case n.TAB:
                case n.RETURN:
                    if (t.selectedIndex === -1) {
                        t.hide();
                        return
                    }
                    t.select(t.selectedIndex, e.keyCode === n.RETURN);
                    if (e.keyCode === n.TAB && this.options.tabDisabled === false) {
                        return
                    }
                    break;
                case n.UP:
                    t.moveUp();
                    break;
                case n.DOWN:
                    t.moveDown();
                    break;
                default:
                    return
            }
            e.stopImmediatePropagation();
            e.preventDefault()
        },
        onKeyUp: function(e) {
            var t = this;
            if (t.disabled) {
                return
            }
            switch (e.keyCode) {
                case n.UP:
                case n.DOWN:
                    return
            }
            clearInterval(t.onChangeInterval);
            if (t.currentValue !== t.el.val()) {
                if (t.options.deferRequestBy > 0) {
                    t.onChangeInterval = setInterval(function() {
                        t.onValueChange()
                    }, t.options.deferRequestBy)
                } else {
                    t.onValueChange()
                }
            }
        },
        onValueChange: function() {
            var e = this,
                t;
            clearInterval(e.onChangeInterval);
            e.currentValue = e.element.value;
            t = e.getQuery(e.currentValue);
            e.selectedIndex = -1;
            if (e.ignoreValueChange) {
                e.ignoreValueChange = false;
                return
            }
            if (t.length < e.options.minChars) {
                e.hide()
            } else {
                e.getSuggestions(t)
            }
        },
        getQuery: function(t) {
            var n = this.options.delimiter,
                r;
            if (!n) {
                return e.trim(t)
            }
            r = t.split(n);
            return e.trim(r[r.length - 1])
        },
        getSuggestionsLocal: function(t) {
            var n = this,
                r = t.toLowerCase(),
                i = n.options.lookupFilter;
            return {
                suggestions: e.grep(n.options.lookup, function(e) {
                    return i(e, t, r)
                })
            }
        },
        getSuggestions: function(t) {
            var n, r = this,
                i = r.options,
                s = i.serviceUrl;
            n = r.isLocal ? r.getSuggestionsLocal(t) : r.cachedResponse[t];
            if (n && e.isArray(n.suggestions)) {
                r.suggestions = n.suggestions;
                r.suggest()
            } else if (!r.isBadQuery(t)) {
                i.params[i.paramName] = t;
                if (i.onSearchStart.call(r.element, i.params) === false) {
                    return
                }
                if (e.isFunction(i.serviceUrl)) {
                    s = i.serviceUrl.call(r.element, t)
                }
                e(r.element).addClass("lupa-searching");
                r.count++;
                e.ajax({
                    url: s,
                    data: i.ignoreParams ? null : i.params,
                    type: i.type,
                    dataType: i.dataType
                }).done(function(n) {
                    r.count--;
                    if (r.count <= 0) e(r.element).removeClass("lupa-searching");
                    r.processResponse(n, t);
                    i.onSearchComplete.call(r.element, t)
                })
            }
        },
        isBadQuery: function(e) {
            var t = this.badQueries,
                n = t.length;
            while (n--) {
                if (e.indexOf(t[n]) === 0) {
                    return true
                }
            }
            return false
        },
        hide: function() {
            var t = this;
            t.visible = false;
            t.selectedIndex = -1;
            e(t.suggestionsContainer).hide()
        },
        suggest: function() {
            if (this.suggestions.length === 0) {
                this.hide();
                return
            }

            if ($(this.suggestionsContainer).parent().length == 0)
            {
                this.initialize();
            }

            var t = this,
                n = t.options.formatResult,
                r = t.getQuery(t.currentValue),
                i = t.classes.suggestion,
                s = t.classes.selected,
                o = e(t.suggestionsContainer),
                u = "",
                a;

            e.each(t.suggestions, function(e, t) {
                u += '<div class="' + i + '" data-index="' + e + '">' + n(t, r) + "</div>"
            });
            if (t.options.width === "auto") {
                a = t.el.outerWidth() - 2;
                o.width(a > 0 ? a : 300)
            }
            o.html(u).show();
            t.visible = true;
            if (t.options.autoSelectFirst) {
                t.selectedIndex = 0;
                o.children().first().addClass(s)
            }
        },
        verifySuggestionsFormat: function(t) {
            if (t.length && typeof t[0] === "string") {
                return e.map(t, function(e) {
                    return {
                        value: e,
                        data: null
                    }
                })
            }
            return t
        },
        processResponse: function(e, t) {
            var n = this,
                r = n.options,
                i = r.transformResult(e, t);
            i.suggestions = n.verifySuggestionsFormat(i.suggestions);
            if (!r.noCache) {
                n.cachedResponse[i[r.paramName]] = i;
                if (i.suggestions.length === 0) {
                    n.badQueries.push(i[r.paramName])
                }
            }
            if (t === n.getQuery(n.currentValue)) {
                n.suggestions = i.suggestions;
                n.suggest()
            }
        },
        activate: function(t) {
            var n = this,
                r, i = n.classes.selected,
                s = e(n.suggestionsContainer),
                o = s.children();
            s.children("." + i).removeClass(i);
            n.selectedIndex = t;
            if (n.selectedIndex !== -1 && o.length > n.selectedIndex) {
                r = o.get(n.selectedIndex);
                e(r).addClass(i);
                return r
            }
            return null
        },
        select: function(e, t) {
            var n = this,
                r = n.suggestions[e];
            if (r) {
                n.el.val(r);
                n.ignoreValueChange = t;
                n.hide();
                n.onSelect(e)
            }
        },
        moveUp: function() {
            var t = this;
            if (t.selectedIndex === -1) {
                return
            }
            if (t.selectedIndex === 0) {
                e(t.suggestionsContainer).children().first().removeClass(t.classes.selected);
                t.selectedIndex = -1;
                t.el.val(t.currentValue);
                return
            }
            t.adjustScroll(t.selectedIndex - 1)
        },
        moveDown: function() {
            var e = this;
            if (e.selectedIndex === e.suggestions.length - 1) {
                return
            }
            e.adjustScroll(e.selectedIndex + 1)
        },
        adjustScroll: function(t) {
            var n = this,
                r = n.activate(t),
                i, s, o, u = 25;
            if (!r) {
                return
            }
            i = r.offsetTop;
            s = e(n.suggestionsContainer).scrollTop();
            o = s + n.options.maxHeight - u;
            if (i < s) {
                e(n.suggestionsContainer).scrollTop(i)
            } else if (i > o) {
                e(n.suggestionsContainer).scrollTop(i - n.options.maxHeight + u)
            }
            n.el.val(n.getValue(n.suggestions[t].value))
        },
        onSelect: function(t) {
            var n = this,
                r = n.options.onSelect,
                i = n.suggestions[t];
            n.el.val(n.getValue(i.value));
            if (e.isFunction(r)) {
                r.call(n.element, i)
            }
        },
        getValue: function(e) {
            var t = this,
                n = t.options.delimiter,
                r, i;
            if (!n) {
                return e
            }
            r = t.currentValue;
            i = r.split(n);
            if (i.length === 1) {
                return e
            }
            return r.substr(0, r.length - i[i.length - 1].length) + e
        },
        dispose: function() {
            var t = this;
            t.el.off(".autocomplete").removeData("autocomplete");
            t.disableKillerFn();
            e(t.suggestionsContainer).remove()
        }
    };
    e.fn.autocomplete = function(t, n) {
        var i = "autocomplete";
        if (arguments.length === 0) {
            return this.first().data(i)
        }
        return this.each(function() {
            var s = e(this),
                o = s.data(i);
            if (typeof t === "string") {
                if (o && typeof o[t] === "function") {
                    o[t](n)
                }
            } else {
                if (o && o.dispose) {
                    o.dispose()
                }
                o = new r(this, t);
                s.data(i, o)
            }
        })
    }
})


function chkChanged(obj) {
    if ($(obj).find('input[type=checkbox]').attr("checked") == "checked")
        $(obj).attr('class', 'label_check c_on');
    else
        $(obj).attr('class', 'label_check c_off');
}

function swapLanguage(lang) {
    document.location = updateQueryStringParameter(document.URL, 'lang', lang);
}

function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?|&])" + key + "=.*?(&|$)", "i");
    separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
        return uri + separator + key + "=" + value;
    }
}

function handleAjaxException(xmlHttpRequest, textStatus, errorThrown) {
    var error = '';
    var error403 = '';
    var error410 = '';
    var errorSession = '';
    var errorGeneric = '';
    if (window.CurrentCulture == 'es') {
        error403 = 'No tienes permiso para ejecutar esta acción.';
        error410 = 'Tu sesion ha expirado, es necesario que vuelvas a ingresar tus datos para continuar.';
        errorSession = 'Tu sesion ha expirado. Por favor vuelve a ingresar';
        errorGeneric = 'Ha ocurrido un error al procesar tu solicitud';
    }
    else {
        error403 = 'You do not have privileges to do this action.';
        error410 = 'Your session have expired, you have to logon again to continue.';
        errorSession = 'Your session have expired, you have to logon again to continue.';
        errorGeneric = 'An error was thrown processing your request';
    }

    if (xmlHttpRequest.status == 455)
        userExceeded();
    else if (xmlHttpRequest.status == 403)
        Alert(error403);
    else if (xmlHttpRequest.status == 410) {
        alert(error410);
        window.location = '/account/logon?returnurl=' + location.pathname;
    }
    else if ($(xmlHttpRequest.responseText).find("#FormLogOn").size() > 0) {
        alert(errorSession);
        window.location = "/account/logon";
    }
    else
        Alert(errorGeneric + ': ' + errorThrown);

    xmlHttpRequest.status = 0;
}


function swapContactMe(chk) {
    if (chk.is(':checked'))
        $('#contactme').show();
    else
        $('#contactme').hide();
}

function querystring(inkey) { var query = window.location.search.substring(1); var parms = query.split('&'); for (var i = 0; i < parms.length; i++) { var pos = parms[i].indexOf('='); if (pos > 0) { var key = parms[i].substring(0, pos); var val = parms[i].substring(pos + 1); if (inkey.toLowerCase() == key.toLowerCase()) return val; } } return ''; }

function closeFancy(refresh, redraw) {
    if (refresh == '1') {
        window.location.reload();
    }
    else {
        $.validity.clear();
        $('.autocomplete-suggestions').remove();
        $.fancybox.close('true');
        if (redraw == '1') {
            setTimeout(function () {
                $(window).trigger('resize');
                $('body').hide().show(0);
            }, 500);
        }
    }
}


function syncQuickBooks(but) {
    but.waiting(); 
    $.ajax({
        type: "POST",
        cache: false,
        url: '/' + window.CurrentCulture + "/account/syncquickbooks",
        data: $('#formrvt').serialize(),
        timeout: 250000
    }).done(function (data) {
        if (data.Response == 'Ok')
            location.reload();
        else if (data.Response = 'Fail') {
            Warn(QuickBooksFail, disconnectQuickBooks);
        }
    });
}

function disconnectQuickBooks(but) {
    //but.waiting({ position: 'right' }); 
    $.ajax({
        type: "POST",
        cache: false,
        url: '/' + window.CurrentCulture + "/account/qbodisconnect?json=1",
    }).done(function (data) {
        location.reload();
    });
}

function syncXero(but) {
    but.waiting({ position: 'right' });
    $.ajax({
        type: "POST",
        cache: false,
        url: '/' + window.CurrentCulture + "/account/syncxero",
        data: $('#formrvt').serialize(),
        timeout: 120000
    }).done(function (data) {
        if (data.Response == 'Ok')
            location.reload();
        else if (data.Response = 'Fail') {
            Warn(XeroFail, disconnectXero);
        }
    });
}

function disconnectXero() {
    //but.waiting({ position: 'right' }); 
    $.ajax({
        type: "POST",
        cache: false,
        url: '/' + window.CurrentCulture + "/account/xerodisconnect",
    }).done(function (data) {
        location.reload();
    });
}

function loadScript(url,callback){if(!url || !(typeof url === 'string')){return};var script = document.createElement('script');if(typeof document.attachEvent === "object"){script.onreadystatechange = function(){if (script.readyState === 'loaded'){if (callback){callback()};};};} else {script.onload = function(){if (callback){callback()};};};script.src = url;document.getElementsByTagName('head')[0].appendChild(script);};

function logoff() {
    if (window.qbologgedin == '1') {
        loadScript('https://js.appcenter.intuit.com/Content/IA/intuit.ipp.anywhere.js', onintuitready);
    }
    else {
        window.location.href = '/logon?logoff=1';
    }
}

function onintuitready() {
    intuit.ipp.anywhere.logout(function () { window.location.href = '/logon?logoff=1'; });
}

function SetEvent(type, value) {
    $.ajax({
        type: "POST",
        cache: false,
        url: '/' + window.CurrentCulture + "/account/event?type=" + type + '&value=' + value,
        data: $('#formrvt').serialize()
    });
}

!function (a, b) { function c(b, c) { var d, e, f = c; this.pause = function () { a.clearTimeout(d), f -= new Date - e }, this.resume = function () { return e = new Date, d = a.setTimeout(b, f), f }, this.stop = function () { a.clearTimeout(d) }, this.resume() } var d = ["flash", "bounce", "shake", "tada", "fadeIn", "fadeInUp", "fadeInDown", "fadeInLeft", "fadeInRight", "fadeInUpBig", "fadeInDownBig", "fadeInLeftBig", "fadeInRightBig", "bounceIn", "bounceInDown", "bounceInUp", "bounceInLeft", "bounceInRight", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight"], e = function (c, d) { this.settings = b.extend({ tripIndex: 0, tripTheme: "black", backToTopWhenEnded: !1, overlayZindex: 99999, delay: 1e3, enableKeyBinding: !0, enableAnimation: !0, showCloseBox: !1, showHeader: !1, skipUndefinedTrip: !1, showNavigation: !1, canGoNext: !0, canGoPrev: !0, nextLabel: "Next", prevLabel: "Back", finishLabel: "Dismiss", closeBoxLabel: "&#215;", header: "Step {{tripIndex}}", onStart: b.noop, onEnd: b.noop, onTripStart: b.noop, onTripEnd: b.noop, onTripStop: b.noop, onTripPause: b.noop, onTripResume: b.noop, onTripChange: b.noop, onTripClose: b.noop, animation: "tada", tripBlockHTML: ['<div class="trip-block">', '<a href="#" class="trip-close"></a>', '<div class="trip-header"></div>', '<div class="trip-content"></div>', '<div class="trip-progress-wrapper">', '<div class="trip-progress-bar"></div>', '<a href="#" class="trip-prev"></a>', '<a href="#" class="trip-next"></a>', "</div>", "</div>"] }, d), this.tripData = c, this.$tripBlock = null, this.$overlay = null, this.$bar = null, this.$root = b("body, html"), this.tripIndex = this.settings.tripIndex, this.tripDirection = "next", this.timer = null, this.progressing = !1, this.hasExpose = !1, this.CONSTANTS = { LEFT_ARROW: 37, UP_ARROW: 38, RIGHT_ARROW: 39, DOWN_ARROW: 40, ESC: 27, SPACE: 32, TRIP_BLOCK_OFFSET_VERTICAL: 10, TRIP_BLOCK_OFFSET_HORIZONTAL: 10 }, this.console = a.console || {} }; e.prototype = { preInit: function () { if ("undefined" == typeof this.console) { var a = this, c = ["log", "warn", "debug", "info", "error"]; b.each(c, function (c, d) { a.console[d] = b.noop }) } }, showExpose: function (a) { var b, c; this.hasExpose = !0, b = { position: a.css("position"), zIndex: a.css("z-Index") }, c = { position: "relative", zIndex: this.settings.overlayZindex + 1 }, a.data("trip-old-css", b).css(c).addClass("trip-exposed"), this.$overlay.show() }, hideExpose: function () { var a = b(".trip-exposed"), c = a.data("trip-old-css"); this.hasExpose = !1, a.css(c).removeClass("trip-exposed"), this.$overlay.hide() }, bindResizeEvents: function () { var c = this; b(a).on("resize.Trip", function () { c.run() }) }, unbindResizeEvents: function () { b(a).off("resize.Trip") }, bindKeyEvents: function () { var a = this; b(document).on({ "keydown.Trip": function (b) { a.keyEvent.call(a, b) } }) }, unbindKeyEvents: function () { b(document).off("keydown.Trip") }, keyEvent: function (a) { switch (a.which) { case this.CONSTANTS.ESC: this.stop(); break; case this.CONSTANTS.SPACE: a.preventDefault(), this.pause(); break; case this.CONSTANTS.LEFT_ARROW: case this.CONSTANTS.UP_ARROW: this.prev(); break; case this.CONSTANTS.RIGHT_ARROW: case this.CONSTANTS.DOWN_ARROW: this.next() } }, stop: function () { this.timer && this.timer.stop(), this.hasExpose && this.hideExpose(), this.hideTripBlock(), this.unbindKeyEvents(), this.unbindResizeEvents(); var a = this.getCurrentTripObject(), b = a.onTripStop || this.settings.onTripStop; b(this.tripIndex, a), this.settings.onEnd() }, pauseAndResume: function () { if (this.progressing) this.timer.pause(), this.pauseProgressBar(); else { var a = this.timer.resume(); this.resumeProgressBar(a) } this.progressing = !this.progressing }, pause: function () { this.pauseAndResume(); var a = this.getCurrentTripObject(), b = a.onTripPause || this.settings.onTripPause; b(this.tripIndex, a) }, resume: function () { this.pauseAndResume(); var a = this.getCurrentTripObject(), b = a.onTripResume || this.settings.onTripResume; b(this.tripIndex, a) }, next: function () { return this.tripDirection = "next", this.canGoNext() ? (this.hasCallback() && this.callCallback(), void (this.isLast() ? this.doLastOperation() : (this.increaseIndex(), this.run()))) : this.run() }, prev: function () { this.tripDirection = "prev", !this.isFirst() && this.canGoPrev() && this.decreaseIndex(), this.run() }, showCurrentTrip: function (a) { this.settings.enableAnimation && this.removeAnimation(), this.timer && this.timer.stop(), this.hasExpose && this.hideExpose(), this.progressing && (this.hideProgressBar(), this.progressing = !1), this.setTripBlock(a), this.showTripBlock(a), this.settings.enableAnimation && this.addAnimation(a), a.expose && this.showExpose(b(a.sel)) }, doLastOperation: function () { return this.timer && this.timer.stop(), this.settings.enableKeyBinding && this.unbindKeyEvents(), this.hideTripBlock(), this.unbindResizeEvents(), this.hasExpose && this.hideExpose(), this.settings.backToTopWhenEnded && this.$root.animate({ scrollTop: 0 }, "slow"), this.tripIndex = this.settings.tripIndex, this.settings.onEnd(), !1 }, showProgressBar: function (a) { var b = this; this.$bar.animate({ width: "100%" }, a, "linear", function () { b.$bar.width(0) }) }, hideProgressBar: function () { this.$bar.width(0), this.$bar.stop(!0) }, pauseProgressBar: function () { this.$bar.stop(!0) }, resumeProgressBar: function (a) { this.showProgressBar(a) }, run: function () { var a = this, b = this.getCurrentTripObject(), d = b.onTripStart || this.settings.onTripStart, e = b.onTripChange || this.settings.onTripChange, f = b.onTripEnd || this.settings.onTripEnd, g = b.delay || this.settings.delay; return this.isTripDataValid(b) ? (this.showCurrentTrip(b), this.showProgressBar(g), this.progressing = !0, e(this.tripIndex, b), d(this.tripIndex, b), void (g >= 0 && (this.timer = new c(function () { f(a.tripIndex, b), a.next() }, g)))) : this.settings.skipUndefinedTrip === !1 ? (this.console.error("Your tripData is not valid at index: " + this.tripIndex), this.stop(), !1) : this[this.tripDirection]() }, isFirst: function () { return 0 === this.tripIndex ? !0 : !1 }, isLast: function () { return this.tripIndex === this.tripData.length - 1 ? !0 : !1 }, isTripDataValid: function (a) { var c = ["screen-ne", "screen-se", "screen-sw", "screen-nw", "screen-center"]; return b.inArray(a.position, c) >= 0 ? !0 : "undefined" == typeof a.content || "undefined" == typeof a.sel || null === a.sel || 0 === a.sel.length || 0 === b(a.sel).length ? !1 : !0 }, hasCallback: function () { return "undefined" != typeof this.tripData[this.tripIndex].callback }, callCallback: function () { this.tripData[this.tripIndex].callback(this.tripIndex) }, canGoPrev: function () { var a = this.tripData[this.tripIndex], b = a.canGoPrev || this.settings.canGoPrev; return "function" == typeof b && (b = b.call(a)), b }, canGoNext: function () { var a = this.tripData[this.tripIndex], b = a.canGoNext || this.settings.canGoNext; return "function" == typeof b && (b = b.call(a)), b }, increaseIndex: function () { this.tripIndex >= this.tripData.length - 1 || (this.tripIndex += 1) }, decreaseIndex: function () { this.tripIndex <= 0 || (this.tripIndex -= 1) }, getCurrentTripObject: function () { return this.tripData[this.tripIndex] }, getCurrentHeader: function (a) { var b = /\{\{(tripIndex)\}\}/g; return a.replace(b, this.tripIndex + 1) }, setTripBlock: function (a) { var b = this.$tripBlock, c = a.showCloseBox || this.settings.showCloseBox, d = a.showNavigation || this.settings.showNavigation, e = a.showHeader || this.settings.showHeader, f = a.closeBoxLabel || this.settings.closeBoxLabel, g = a.prevLabel || this.settings.prevLabel, h = a.nextLabel || this.settings.nextLabel, i = a.finishLabel || this.settings.finishLabel, j = a.header || this.settings.header; b.find(".trip-header").html(this.getCurrentHeader(j)).toggle(e), b.find(".trip-content").html(a.content), b.find(".trip-prev").html(g).toggle(d && !this.isFirst()), b.find(".trip-next").html(this.isLast() ? i : h).toggle(d), b.find(".trip-close").html(f).toggle(c), b.removeClass("e s w n screen-ne screen-se screen-sw screen-nw screen-center"), b.addClass(a.position), this.setTripBlockPosition(a, "horizontal"), this.setTripBlockPosition(a, "vertical") }, setTripBlockPosition: function (a, c) { var d, e, f = this.$tripBlock, g = b(a.sel), h = g && g.outerWidth(), i = g && g.outerHeight(), j = f.outerWidth(), k = f.outerHeight(), l = 10, m = 10; switch (a.position) { case "screen-center": d = "50%", e = "50%"; break; case "screen-ne": case "screen-se": case "screen-nw": case "screen-sw": d = this.CONSTANTS.TRIP_BLOCK_OFFSET_HORIZONTAL, e = this.CONSTANTS.TRIP_BLOCK_OFFSET_VERTICAL; break; case "e": d = g.offset().left + h + m, e = g.offset().top - (k - i) / 2; break; case "s": d = g.offset().left + (h - j) / 2, e = g.offset().top + i + l; break; case "w": d = g.offset().left - (m + j), e = g.offset().top - (k - i) / 2; break; case "n": default: d = g.offset().left + (h - j) / 2, e = g.offset().top - l - k } if ("horizontal" === c) switch (f.css({ left: "", right: "", marginLeft: "" }), a.position) { case "screen-center": f.css({ left: d, marginLeft: -.5 * j }); break; case "screen-se": case "screen-ne": f.css({ right: d }); break; case "screen-sw": case "screen-nw": case "e": case "s": case "w": case "n": default: f.css({ left: d }) } else if ("vertical" === c) switch (f.css({ top: "", bottom: "", marginTop: "" }), a.position) { case "screen-center": f.css({ top: e, marginTop: -.5 * k }); break; case "screen-sw": case "screen-se": f.css({ bottom: e }); break; case "screen-nw": case "screen-ne": case "e": case "s": case "w": case "n": default: f.css({ top: e }) } }, addAnimation: function (a) { var c = a.animation || this.settings.animation; b.inArray(c, d) >= 0 && (this.$tripBlock.addClass("animated"), this.$tripBlock.addClass(c)) }, removeAnimation: function () { this.$tripBlock.removeClass(d.join(" ")), this.$tripBlock.removeClass("animated") }, showTripBlock: function () { this.$tripBlock.css({ display: "inline-block", zIndex: this.settings.overlayZindex + 1 }); var c = b(a).height(), d = b(a).scrollTop(), e = this.$tripBlock.offset().top, f = 100; d + c > e && e >= d || this.$root.animate({ scrollTop: e - f }, "slow") }, hideTripBlock: function () { this.$tripBlock.fadeOut("slow") }, create: function () { this.createTripBlock(), this.createOverlay() }, createTripBlock: function () { if ("undefined" == typeof b(".trip-block").get(0)) { var a = this, c = this.settings.tripBlockHTML.join(""), d = b(c).addClass(this.settings.tripTheme); b("body").append(d), d.find(".trip-close").on("click", function (b) { b.preventDefault(); var c = a.getCurrentTripObject(), d = c.onTripClose || a.settings.onTripClose; d(a.tripIndex, c), a.stop() }), d.find(".trip-prev").on("click", function (c) { c.preventDefault(), b(this).blur(), a.prev() }), d.find(".trip-next").on("click", function (c) { c.preventDefault(), b(this).blur(), a.next() }) } }, createOverlay: function () { if ("undefined" == typeof b(".trip-overlay").get(0)) { var c = ['<div class="trip-overlay">', "</div>"].join(""), d = b(c); d.height(b(a).height()).css({ zIndex: this.settings.overlayZindex }), b("body").append(d) } }, cleanup: function () { b(".trip-overlay, .trip-block").remove() }, init: function () { this.preInit(), this.settings.enableKeyBinding && this.bindKeyEvents(), this.bindResizeEvents(), this.$tripBlock = b(".trip-block"), this.$bar = b(".trip-progress-bar"), this.$overlay = b(".trip-overlay") }, start: function () { this.cleanup(), this.settings.onStart(), this.create(), this.init(), this.run() } }, a.Trip = e }(window, jQuery);



function insertAtCaret(areaId,text) {
    var txtarea = document.getElementById(areaId);
    var scrollPos = txtarea.scrollTop;
    var strPos = 0;
    var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ? 
        "ff" : (document.selection ? "ie" : false ) );
    if (br == "ie") { 
        txtarea.focus();
        var range = document.selection.createRange();
        range.moveStart ('character', -txtarea.value.length);
        strPos = range.text.length;
    }
    else if (br == "ff") strPos = txtarea.selectionStart;

    var front = (txtarea.value).substring(0,strPos);  
    var back = (txtarea.value).substring(strPos,txtarea.value.length); 
    txtarea.value=front+text+back;
    strPos = strPos + text.length;
    if (br == "ie") { 
        txtarea.focus();
        var range = document.selection.createRange();
        range.moveStart ('character', -txtarea.value.length);
        range.moveStart ('character', strPos);
        range.moveEnd ('character', 0);
        range.select();
    }
    else if (br == "ff") {
        txtarea.focus();
        txtarea.setSelectionRange(strPos, strPos + 1);
    }
    txtarea.scrollTop = scrollPos;
}

function fieldSelected(sel) {
    if (sel.val() != '') {
        insertAtCaret('body', sel.val());
    }
    sel.val('');
    sel.selectmenu("value", '');
    setTimeout(function() { $('#body').focus(); }, 100);
}

function fieldChangedIO(sel) {
    sel.parent().find('.isfilter').hide();
    switch (sel.find(":selected").attr('type')) {
        case 'status':
            if (sel.parent().find('#selStatus_chzn').length == 0) {
                sel.parent().find('#selStatus').chosen({ "disable_search": true });
            }
            sel.parent().find('#divstatus').fadeIn();
            break;
        case 'txt':
        case 'phone':
            sel.parent().find('#selText').fadeIn('fast');
            sel.parent().find('#selText #operatorContains').chosen({ "disable_search": true });
            break;
        case 'date':
            if (sel.parent().find('#selOperatorDate_chzn').length == 0) {
                sel.parent().find('#selOperatorDate').chosen({ "disable_search": true });
            }
            sel.parent().find('#selDate').fadeIn('fast');
            break;
        case 'num':
        case 'curr':
            sel.parent().find('#selOperator').chosen({ "disable_search": true });
            sel.parent().find('#selAmount').fadeIn('fast');
            break;
        case 'seg':
            var $input = sel.parent().find('#selList');
            $input.chosen({ "disable_search": true });
            sel.parent().find('#operatorList').chosen({ "disable_search": true });
            sel.parent().find('#List').fadeIn();
            var id = sel.val().replace('segment-', '');
            $.ajax({
                url: '/' + window.CurrentCulture + '/segment/_getlist',
                contentType: "application/x-www-form-urlencoded;charset=windows-1252",
                type: "POST",
                data: $('#formrvt').serialize()
            }).done(function (data) {
                var list = JSON.parse(data);
                $input.empty();
                for (var ix = 0; ix < list.length; ix++) {
                    $input.append($("<option />").val(list[ix].Item1).text(list[ix].Item2));
                }
                $input.trigger("liszt:updated");
            });
            break;
        case 'iostatus':
            var $input = sel.parent().find('#selList');
            $input.chosen({ "disable_search": true });
            sel.parent().find('#operatorList').chosen({ "disable_search": true });
            sel.parent().find('#List').fadeIn();
            var id = sel.val().replace('segment-', '');
            $.ajax({
                url: '/' + window.CurrentCulture + '/iostatus/_getlist',
                contentType: "application/x-www-form-urlencoded;charset=windows-1252",
                type: "POST",
                data: $('#formrvt').serialize()
            }).done(function (data) {
                var list = JSON.parse(data);
                $input.empty();
                for (var ix = 0; ix < list.length; ix++) {
                    $input.append($("<option />").val(list[ix].Item1).text(list[ix].Item2));
                }
                $input.trigger("liszt:updated");
            });
            break;
        case 'list':
            var $input = sel.parent().find('#selList');
            $input.chosen({ "disable_search": true });
            sel.parent().find('#operatorList').chosen({ "disable_search": true });
            sel.parent().find('#List').fadeIn();
            var id = sel.val().replace('personadditional-', '');
            id = id.replace('additional-', '');
            if (id.indexOf('-') >= 0) {
                id = id.substring(0, id.indexOf('-'));
            }
            $.ajax({
                url: '/' + window.CurrentCulture + '/additional/getitemlist?id=' + id,
                contentType: "application/x-www-form-urlencoded;charset=windows-1252",
                type: "POST",
                data: $('#formrvt').serialize()
            }).done(function (data) {
                var list = JSON.parse(data);
                $input.empty();
                for (var ix = 0; ix < list.length; ix++) {
                    $input.append($("<option />").val(list[ix].Item1).text(list[ix].Item2));
                }
                if ($input.attr('val') != null) {
                    $input.val($input.attr('val'));
                }
                $input.removeAttr('val');
                $input.trigger("liszt:updated");
            });
            break;
        case 'tag':
            sel.parent().find('#selTag').find('#tagidsFilter').removeClass('chzn-done').data('chosen', null).next().remove();
            sel.parent().find('#selTag').find('#tagidsFilter').chosen({ create_option: false });
            sel.parent().find('#selTag').fadeIn('fast');
            break;
    }
}