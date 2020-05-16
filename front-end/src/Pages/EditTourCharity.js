import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'
import { connect } from 'react-redux'

import { Jumbotron, Button, Form } from 'react-bootstrap'


export default function TourCharity() {

   const StyleDiv = styled.div`
   .Jumbo{
      background-color : #584C4C !important ;
   }
   .Title {
      color : white !important ;
      text-align : center ;
      font-size : 180% ;
   }
   `;

   const StyleForm = styled.div`
      display : flex ;
      justify-content : center ;
      .input{
         margin-top : 50px;
         width : 80%;
         margin-left : 10%;
         
      }
      .FormInput{
         margin-bottom : 25px;
         background-color : #E5E5E5 !important;
      }
      #formDate{
         display : flex ;
         justify-content : space-around
      }
      .button-submit{
         text-align : center;
         margin-bottom : 25px;
      }
   `;

   return (
      <Fragment>
         <StyleDiv>
            <Jumbotron className="Jumbo" >
               <h1 className="Title">Galang Dana Konser</h1>
            </Jumbotron>
         </StyleDiv>

         <StyleForm>
            <div className="container">
               <Formik
                  initialValues={{
                     judulDonasi: "",
                     kategori: "",
                     namaPendonasi: "",
                     namaOrganisasi: "",
                     email: "",
                     nominalDonasi: "",
                     deskripsi: "",
                     startDate: "",
                     endDate: "",
                     urlKarya: "",
                  }}
                  validate={(values) => {
                     const errors = {};
                     if (values.judulDonasi === "") {
                        errors.judulDonasi = "Requeired"
                     }
                     if (values.kategori === "") {
                        errors.kategori = "Requeired"
                     }
                     if (values.namaPendonasi === "") {
                        errors.namaPendonasi = "Requeired"
                     }
                     if (values.namaOrganisasi === "") {
                        errors.namaOrganisasi = "Requeired"
                     }
                     if (values.email === "") {
                        errors.email = "Requeired"
                     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = "Invalid email address";
                     }
                     if(values.nominalDonasi < 2000000){
                        errors.nominalDonasi = "Minimum Donasi Rp 2.000.000"
                     }
                     if(values.deskripsi === ""){
                        errors.deskripsi = "Required"
                     }
                     if (values.startDate === "") {
                        errors.startDate = "Requeired"
                     }
                     if (values.endDate === "") {
                        errors.endDate = "Requeired"
                     }
                     if (values.urlKarya === "") {
                        errors.urlKarya = "Requeired"
                     }
                     return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                       alert(JSON.stringify(values, null, 2));
                       setSubmitting(false);
                   }}
               >
                  {({
                     values,
                     errors,
                     touched,
                     handleChange,
                     handleBlur,
                     handleSubmit,
                     isSubmitting,
                  }) => {
                     return (

                        <Form className="input" onSubmit={handleSubmit}>
                           <Form.Group>
                              <Form.Label>Judul Donasi</Form.Label>
                              <Form.Control
                                 className="FormInput"
                                 type="text"
                                 name="judulDonasi"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.judulDonasi}
                              />
                              <span
                                 style={{
                                    color: "red",
                                    fontStyle: "bold",
                                 }}
                              >
                                 {errors.judulDonasi &&
                                    touched.judulDonasi &&
                                    errors.judulDonasi}
                              </span>
                           </Form.Group>
                           <Form.Group controlId="exampleForm.ControlSelect1">
                              <Form.Label>Kategori Donasi</Form.Label>
                              <Form.Control
                                 className="FormInput"
                                 as="select"
                                 name="kategori"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.kategori}>
                                 <option>Pilih Category</option>
                                 <option>Konser</option>
                                 <option>Alat Musik</option>
                                 <option>Album</option>
                              </Form.Control>
                           </Form.Group>
                           <Form.Group >
                              <Form.Label>Nama Pendonasi</Form.Label>
                              <Form.Control
                                 className="FormInput"
                                 type="text"
                                 name="namaPendonasi"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.namaPendonasi}
                              />
                              <span
                                 style={{
                                    color: "red",
                                    fontStyle: "bold",
                                 }}
                              >
                                 {errors.namaPendonasi &&
                                    touched.namaPendonasi &&
                                    errors.namaPendonasi}
                              </span>
                           </Form.Group>
                           <Form.Group >
                              <Form.Label>Nama Organisasi</Form.Label>
                              <Form.Control
                                 className="FormInput"
                                 type="text"
                                 name="namaOrganisasi"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.namaOrganisasi}
                              />
                              <span
                                 style={{
                                    color: "red",
                                    fontStyle: "bold",
                                 }}
                              >
                                 {errors.namaOrganisasi &&
                                    touched.namaOrganisasi &&
                                    errors.namaOrganisasi}
                              </span>
                           </Form.Group>
                           <Form.Group >
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                 className="FormInput"
                                 type="email"
                                 name="email"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.email}
                              />
                              <span
                                 style={{
                                    color: "red",
                                    fontStyle: "bold",
                                 }}
                              >
                                 {errors.email &&
                                    touched.email &&
                                    errors.email}
                              </span>
                           </Form.Group>
                           <Form.Group >
                              <Form.Label>Nominal Donasi</Form.Label>
                              <Form.Control
                                 className="FormInput"
                                 type="number"
                                 name="nominalDonasi"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.nominalDonasi}
                              />
                              <span
                                 style={{
                                    color: "red",
                                    fontStyle: "bold",
                                 }}
                              >
                                 {errors.nominalDonasi &&
                                    touched.nominalDonasi &&
                                    errors.nominalDonasi}
                              </span>
                           </Form.Group>
                           <Form.Group controlId="exampleForm.ControlTextarea1">
                              <Form.Label>Deskripsi</Form.Label>
                              <Form.Control
                                 as="textarea"
                                 rows="4"
                                 className="FormInput"
                                 type="text"
                                 name="deskripsi"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.deskripsi}
                              />
                              <span
                                 style={{
                                    color: "red",
                                    fontStyle: "bold",
                                 }}
                              >
                                 {errors.deskripsi &&
                                    touched.deskripsi &&
                                    errors.deskripsi}
                              </span>
                           </Form.Group>

                           <div className="row" id="formDate">
                              <Form.Group >
                                 <Form.Label>Waktu Dimulai</Form.Label>
                                 <Form.Control
                                    className="FormInput"
                                    type="date"
                                    placeholder="Waktu Mulai"
                                    name="startDate"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.startDate}
                                 />
                                 <span
                                    style={{
                                       color: "red",
                                       fontStyle: "bold",
                                    }}
                                 >
                                    {errors.startDate &&
                                       touched.startDate &&
                                       errors.startDate}
                                 </span>
                              </Form.Group>
                              <Form.Group >
                                 <Form.Label>Waktu Selesai</Form.Label>
                                 <Form.Control
                                    className="FormInput"
                                    type="date"
                                    placeholder="Waktu Selesai"
                                    name="endDate"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.endDate}
                                 />
                                 <span
                                    style={{
                                       color: "red",
                                       fontStyle: "bold",
                                    }}
                                 >
                                    {errors.endDate &&
                                       touched.endDate &&
                                       errors.endDate}
                                 </span>
                              </Form.Group>
                           </div>
                           <Form.Group >
                              <Form.Label>URL Karya</Form.Label>
                              <Form.Control
                                 className="FormInput"
                                 type="url"
                                 name="urlKarya"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.urlKarya}
                              />
                              <span
                                 style={{
                                    color: "red",
                                    fontStyle: "bold",
                                 }}
                              >
                                 {errors.urlKarya &&
                                    touched.urlKarya &&
                                    errors.urlKarya}
                              </span>
                           </Form.Group>
                           <div className="button-submit">
                              <Button variant="primary" type="submit" disabled={isSubmitting}>Galang Dana</Button>
                           </div>
                        </Form>
                     );
                  }}
               </Formik>
            </div>

         </StyleForm>
      </Fragment>



   )
}  