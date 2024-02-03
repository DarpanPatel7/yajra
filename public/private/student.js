$(function () {
    var table = $('.yajra-datatable').DataTable({
        processing: true,
        serverSide: true,
        // ajax: "{{ route('students.list') }}",
        ajax: 'http://localhost:8080/test/laravel-yajra-datatables/public/students/list',
        columns: [
            { data: 'DT_RowIndex', name: 'DT_RowIndex' },
            { data: 'name', name: 'name' },
            { data: 'email', name: 'email' },
            { data: 'username', name: 'username' },
            { data: 'phone', name: 'phone' },
            { data: 'dob', name: 'dob' },
            {
                data: 'action',
                name: 'action',
                orderable: true,
                searchable: true
            },
        ]
    });

    $('.yajra-datatable tbody').on('click', '.delete', function () {
        var userURL = $(this).data('url');
        $.ajax({
            url: userURL,
            type: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            dataType: 'json',
            success: function (data) {
                table.row($(this).parents('tr')).remove().draw();
            }
        });
    });
});
