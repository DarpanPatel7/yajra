(function ($) {
    "use strict";
    $.easyDatatable = function (options) {
        var defaults = {
            selector: ".datatable",
            processing: true,
            serverSide: true,
            ajaxUrl: false,
        };

        var opt = defaults;

        // Extend user-set options over defaults
        if (options) {
            opt = $.extend(defaults, options);
        }
        console.log(opt);

        // Execute datatable request
        // check id or class exists
        if($(opt.selector).length)
        {
            var table = $(opt.selector).DataTable({
                processing: opt.processing,
                serverSide: opt.serverSide,
                ajax: opt.ajaxUrl,
                columns: [
                    {data: 'DT_RowIndex', name: 'DT_RowIndex'},
                    {data: 'name', name: 'name'},
                    {data: 'email', name: 'email'},
                    {data: 'username', name: 'username'},
                    {data: 'phone', name: 'phone'},
                    {data: 'dob', name: 'dob'},
                    {
                        data: 'action',
                        name: 'action',
                        orderable: false,
                        searchable: false,
                    },
                ]
            });
        }
    };
})(jQuery);

//history pushstate
const historyPush = (url) => {
    window.history.pushState({ id: url }, url, url);
};

// when session expire then it reload user to login page
$(document).ajaxError(function (event, jqxhr, settings, thrownError) {
    if (jqxhr.status == 401) {
        window.location.reload();
    }
});

// Prevent submit of ajax form
$(document).on("click", ".sweet-alert .confirm", function (e) {
    $(".sweet-alert .confirm").addClass("is-loading").prop("disabled", true);
});
$(document).on("ready", function () {
    $(".ajax-form").on("submit", function (e) {
        e.preventDefault();
    });
});
$(document).on("ajaxPageLoad", function () {
    $(".ajax-form").on("submit", function (e) {
        e.preventDefault();
    });
});
