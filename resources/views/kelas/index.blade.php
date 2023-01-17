@extends('main.layout')
@section('content')
   <center>
          <b>
            <h2>LIST DATA KELAS</h2>
            <a href="/kelas/create" class="button-primary">TAMBAH DATA </a>
            @if (session('success'))
            <p class="text-success">{{ session('success') }}</p>
            @endif
            @if (session('error'))
            <p class="text-danger">{{ session('eror') }}</p>
            @endif
                
            <table cellPadding="18">
                 <tr>
                     <th>NO</th>
                     <th>NAMA KELAS</th>
                     <th>JURUSAN</th>
                     <th>ACTION</th>
                 </tr>
                 @foreach($kelas as $k)
                   <tr>
                        <td>{{ $loop->iteration }}</td>
                        <td>{{ $k->nama_kelas }}</td>
                        <td>{{ $k->jurusan->nama_jurusan }}</td>
                        <td>
                            <a href="/kelas/edit/
                            {{ $k->id }}"
                            class="button-warning">
                                EDIT
                            </a>

                            <a href="/kelas/destroy/{{ $k->id }}"
                                class="button-danger"
                                onclick="return confirm 
                                ('Yakin Hapus?')">
                                   HAPUS
                            </a>
                        </td>
                   </tr>
                   @endforeach
            </table>
          </b>
   </center>

@endsection