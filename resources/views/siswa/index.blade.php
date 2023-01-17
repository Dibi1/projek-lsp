@extends('main.layout')
@section('content')
   <center>
          <b>
            <h2>LIST DATA MAPEL</h2>
            <a href="/siswa/create" class="button-primary">TAMBAH DATA </a>
            <table cellPadding="18">
                 <tr>
                     <th>NO</th>
                     <th>NIS</th>
                     <th>NAMA SISWA</th>
                     <th>JENIS KELAMIN</th>
                     <th>ALAMAT</th>
                     <th>KELAS</th>
                     <th>PASSWORD</th>
                     <th>ACTION</th>
                 </tr>
                 @foreach($siswa as $s)
                   <tr>
                        <td>{{ $loop->iteration }}</td>
                        <td>{{ $s->nis }}</td>
                        <td>{{ $s->nama_siswa }}</td>
                        <td>{{ $s->jk == 'L' ? 'Laki-laki' : 'Perempuan' }}</td>
                        <td>{{ $s->alamat }}</td>
                        <td>{{ $s->kelas->nama_kelas }}</td>
                        <td>{{ $s->password }}</td>
                        <td>
                            <a href="/siswa/edit/
                            {{ $m->id }}"
                            class="button-warning">
                                EDIT
                            </a>

                            <a href="/siswa/destroy/{{ $m->id }}"
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