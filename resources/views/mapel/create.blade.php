@extends('main.layout')
@section('content')
        <center>
            <b>
                <h2>TAMBAH DATA MAPEL</h2>
                <form method="POST" action="/mapel/store">
                    @csrf
                    <table width="50%">
                           <tr>
                                <td class="bar">NAMA MAPEL</td>
                                <td class="bar">
                                    <input type="text" name="nama_mapel">
                                </td>
                            </tr>
               <tr>
                <td colspan="2">
                    <center>
                   <button class="button-primary" input type="submit" method="POST">SIMPAN</button>
                    </center>
                </td>
           </tr>
               
                    </table>
                 
                </form>
            </b>
        </center>
@endsection