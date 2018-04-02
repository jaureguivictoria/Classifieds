<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">{{trans('messages.navbar')}}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">{{trans('messages.home')}} <span class="sr-only">({{trans('messages.current')}})</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">{{trans('messages.link')}}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">{{trans('messages.disabled')}}</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{trans('messages.dropdown')}}</a>
                <div class="dropdown-menu" aria-labelledby="dropdown01">
                    <a class="dropdown-item" href="#">{{trans('messages.action')}}</a>
                </div>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="{{trans('messages.search')}}" aria-label="{{trans('messages.search')}}">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">{{trans('messages.search')}}</button>
        </form>
    </div>
</nav>