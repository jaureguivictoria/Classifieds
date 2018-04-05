<title>Clasificados</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- CSRF Token -->
<meta name="csrf-token" content="{{ csrf_token() }}">
<script>
    window.Laravel = <?php echo json_encode([
        'csrfToken' => csrf_token(),
    ]); ?>
</script>

<!-- Scripts -->    
<script defer src="{{ mix('/js/app.js') }}"></script>
<script defer src="{{ asset('/js/home.js') }}"></script>

<!-- Styles -->
<link rel="stylesheet" href="{{ mix('/css/app.css') }}">