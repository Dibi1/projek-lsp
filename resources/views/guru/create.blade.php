@extends('main.layout')
@section('content')
        <center>
            <b>
                <h2>TAMBAH DATA GURU</h2>
                <form method="POST" action="/guru/store">
                    @csrf
                    <table width="50%">
                           <tr>
                                <td class="bar">NIP</td>
                                <td class="bar">
                                    <input type="text" name="nip">
                                </td>
                           </tr>
                           <tr>
                            <td class="bar">NAMA GURU</td>
                            <td class="bar">
                                <input type="text" name="nama_guru">
                            </td>
                       </tr>
                       <tr>
                        <td class="bar">JENIS KELAMIN</td>
                        <td class="bar">
                            <input type="radio" name="jk" value="L">Laki-laki
                            <input type="radio" name="jk" value="P">Perempuan
                        </td>
                   </tr>
                     <tr>
                        <td class="bar">ALAMAT</td>
                        <td class="bar">
                            <textarea name="alamat"></textarea>
                        </td>
                   </tr>
                   <tr>
                    <td class="bar">PASSWORD</td>
                    <td class="bar">
                        <input type="password" name="password">
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