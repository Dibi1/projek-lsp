@extends('main.layout')
@section('content')

       <center>
              <br>
              <h2>EDIT DATA MAPEL</h2>
              <form method="POST" action="/mapel/update/{{ $mapel->id }}">
                @csrf
                <table width="50%">
                    <tr>
                        <td width="25%">NAMA MAPEL</td>
                        <td width="25%"><input type="text" name="nama_mapel" value="{{ $mapel->nama_mapel }}"></td>

                    </tr>
                    <tr>
                        <td colspan="2">
                          <center><button class="button-primary" input type="submit" method="POST">UBAH</button></center>
                        </td>
                    </tr>
                </table>
            </form>
       </center>
@endsection