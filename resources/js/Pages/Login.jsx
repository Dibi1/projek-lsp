import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import "../../../resources/css/style.css";

export default function Login() {
    const { error } = usePage().props.errors;
    const [idAdmin, setIdAdmin] = useState();
    const [nis, setNis] = useState();
    const [nip, setNip] = useState();
    const [password, setPassword] = useState();

    const [formAdminVisible, setFormAdminVisible] = useState(false);
    const [formSiswaVisible, setFormSiswaVisible] = useState(false);
    const [formGuruVisible, setFormGuruVisible] = useState(false);

    const handleLoginAdmin = () => {
        Inertia.post("/login/admin", {
            idAdmin,
            password,
        });
    };

    const handleLoginSiswa = () => {
        Inertia.post("/login/siswa", {
            nis,
            password,
        });
    };
    const handleLoginGuru = () => {
        Inertia.post("/login/guru", {
            nip,
            password,
        });
    };

    return(
        <>
           <head title="Login" />
           <div className="header">
              <img src="/gambar/header.jpg" height="40%" width="100%" />
           </div>
           <div className="menu">
            <b>
                <a href="#" className="active">Home</a>
            </b>
           </div>
           <div className="kiri-atas">
              <fieldset>
                <legend></legend>
                <center>
                    <button className="button-primary"
                    onClick={() => {
                         setFormAdminVisible(!formAdminVisible);
                         setFormSiswaVisible(false);
                         setFormGuruVisible(false);
                    }}
                    >
                      Admin   
                    </button>
                    <button className="button-primary"
                            onClick={() => {
                         setFormSiswaVisible(!formSiswaVisible);
                         setFormGuruVisible(false);
                         setFormAdminVisible(false);
                            }}
                            >
                       Siswa
                    </button>
                    <button className="button-primary"
                            onClick={() => {
                         setFormGuruVisible(!formGuruVisible);
                         setFormSiswaVisible(false);
                         setFormAdminVisible(false);
                            }}
                            >
                       Guru
                    </button>
                    <hr />
                    <b>Login sesuai dengan posisi anda</b>
                    <hr />
                </center>
              </fieldset>
           {/**---------------FORM LOGIN SISWA---------------- */}
           <div 
           style={{ display: formSiswaVisible ? "block" : "none" }}
           >
             <center>
                <b>Login Siswa</b>
                <p>{error}</p>
             </center>
            <table>
                <tr>
                    <td width="25%">NIS</td>
                    <td width="25%">
                        <input type="text"
                        onChange={(e) => setNis(e.target.value)} 
                        />
                    </td>
                </tr>
                <tr>
                    <td width="25%">Password</td>
                    <td width="25%">
                        <input type="text"
                        onChange={(e) => setPassword(e.target.value)} 
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <center>
                            <button className="button-primary"
                                    type="button"
                                    onClick={() => handleLoginSiswa()}>LOGIN</button>
                        </center>
                      
                    </td>
                </tr>
            </table>
           </div>
        
    

  {/**---------------FORM LOGIN GURU---------------- */}
  <div 
  style={{ display: formGuruVisible ? "block" : "none" }}
  >
    <center>
       <b>Login Guru</b>
       <p>{error}</p>
    </center>
   <table>
       <tr>
           <td width="25%">NIP</td>
           <td width="25%">
               <input type="text"
               onChange={(e) => setNip(e.target.value)} 
               />
           </td>
       </tr>
       <tr>
           <td width="25%">Password</td>
           <td width="25%">
               <input type="text"
               onChange={(e) => setPassword(e.target.value)} 
               />
           </td>
       </tr>
       <tr>
           <td colSpan="2">
               <center>
                   <button className="button-primary"
                           type="button"
                           onClick={() => handleLoginGuru()}>LOGIN</button>
               </center>
             
           </td>
       </tr>
   </table>
  </div>
  {/**---------------FORM LOGIN ADMIN---------------- */}
  <div 
  style={{ display: formAdminVisible ? "block" : "none" }}
  >
    <center>
       <b>Login Admin</b>
       <p>{error}</p>
    </center>
   <table>
       <tr>
           <td width="25%">KODE ADMIN</td>
           <td width="25%">
               <input type="text"
               onChange={(e) => setIdAdmin(e.target.value)} 
               />
           </td>
       </tr>
       <tr>
           <td width="25%">Password</td>
           <td width="25%">
               <input type="text"
               onChange={(e) => setPassword(e.target.value)} 
               />
           </td>
       </tr>
       <tr>
           <td colSpan="2">
               <center>
                   <button className="button-primary"
                           type="button"
                           onClick={() => handleLoginAdmin()}>LOGIN</button>
               </center>
             
           </td>
       </tr>
   </table>
  </div>
           </div>




  <div className="kanan">
    <center>
        <h1>
            SELAMAT DATANG
            <br />
            DI WEB PENILAIAN SMKN 1 CIBINONG
        </h1>
    </center>
  </div>

  <div className="kiri-bawah">
    <center>
        <p className="mar">Gallery</p>
        <div className="gallery">
            <img src="/gambar/g2.jpg"  />
            <div className="deskripsi">SMK BISA</div>
        </div>
    </center>
  </div>
  <div className="footer">
            <b>
                 <p className="mar">2023 - UJIKOM & LSP</p>
            </b>
        </div> 
</>
    );
}

