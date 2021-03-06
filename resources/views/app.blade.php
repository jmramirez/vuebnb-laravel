<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Vuebnb</title>
    <script src="https://kit.fontawesome.com/1ab2a93823.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('css/vue-style.css') }}" type="text/css">
    <script type="text/javascript">
        window.vuebnb_server_data = "{!! addslashes(json_encode($data)) !!}"
    </script>
</head>
<body>
<div id="app">
</div>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
