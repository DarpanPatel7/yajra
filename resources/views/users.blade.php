<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', '') }}</title>

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>

<div class="container">
    <div class="mt-5">
        <h1 class="mb-5">Laravel 9 with Yajro Datatables</h1>

        {{$dataTable->table()}}
    </div>
</div>

{{--  <script src="{{ mix('js/app.js') }}"></script>  --}}
{{--  <script src="{{ asset('vendor/datatables/buttons.server-side.js') }}"></script>  --}}
{{ $dataTable->scripts() }}
</body>
</html>
