@extends('layout.base')

@section('content')    
    <main role="main" class="container" id="example">
        <div class="starter-template">
            <div class="row">
                <div class="col-sm-8 navbar-header">
                    <table>
                        <tr>
                            <td>
                                <img src={{ asset('/img/dcps-logo.png')}} width="100" class="logo"/>
                            </td>
                            <td>
                                <h1 class="headline">{{ trans('messages.app_name')}}</h1>
                                <h3 class="subtitle">Delegación de Comerciantes Valle de Paravachasca Sur</h3>
                            </td>
                        </tr>
                    </table>    
                </div>
                <div class="col-sm-4 mb-auto text-right">
                    @if (Auth::check())
                    <form action="{{ route('logout') }}" method="POST">
                        <button type="submit" name="button" class="btn btn-dark">{{trans('auth.logout')}}</button>
                        @csrf
                    </form>
                    @else
                        <a class="btn btn-dark" href="{{route('login')}}">{{trans('auth.login')}}</a>
                    @endif
                </div>
            </div>
            
            @if (Auth::check())
                <div id="crud-app"></div>
            @else 
                <div class="row container">
                    @foreach ($ads as $ad)
                        <div class="d-inline-block p-2">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="{{ asset('/img/default.png')}}" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">{{$ad->title}}</h5>
                                    <p class="card-text">{{$ad->subtitle}}</p>
                                    <button type="button" class="btn btn-primary" data-toggle="popover" data-content="{{$ad->description}}">{{trans('messages.more_info')}}</a>
                                    </div>
                                </div>
                        </div>
                    @endforeach
                </div>
            @endif
        </div>
    </main>
@endsection