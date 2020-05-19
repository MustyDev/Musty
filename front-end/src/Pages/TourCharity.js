import React, { Fragment } from "react";

import styled from "styled-components";

import { Formik } from "formik";

import { useHistory } from "react-router-dom";

import { Jumbotron, Button, Form } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { inputDonasi } from "../Action/DonateAction";

export default function TourCharity(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const StyleDiv = styled.div`
    .Jumbo {
      background-color: #584c4c !important ;
    }
    .Title {
      color: white !important ;
      text-align: center;
      font-size: 180%;
    }
  `;

  const StyleForm = styled.div`
    display: flex;
    justify-content: center;
    .input {
      margin-top: 50px;
      width: 80%;
      margin-left: 10%;
    }
    .FormInput {
      margin-bottom: 25px;
      background-color: #e5e5e5 !important;
    }
    #formDate {
      display: flex;
      justify-content: space-around;
    }
    .button-submit {
      text-align: center;
      margin-bottom: 25px;
    }
  `;

  return (
    <Fragment>
      <StyleDiv>
        <Jumbotron className="Jumbo">
          <h1 className="Title">Galang Dana Konser</h1>
        </Jumbotron>
      </StyleDiv>

      <StyleForm>
        <div className="container">
          <Formik
            initialValues={{
              judul: "",
              kategori: "",
              nama: "",
              organisasi: "",
              email: "",
              nominal: "",
              deskripsi: "",
              waktu_start: "",
              waktu_end: "",
              url: "",
              status: "waiting",
            }}
            validate={(values) => {
              const errors = {};
              if (values.judul === "") {
                errors.judul = "Required";
              }
              if (values.kategori === "") {
                errors.kategori = "Required";
              }
              if (values.nama === "") {
                errors.nama = "Required";
              }
              if (values.organisasi === "") {
                errors.organisasi = "Required";
              }
              if (values.email === "") {
                errors.email = "Requeired";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (values.nominal < 2000000) {
                errors.nominal = "Minimum Donasi Rp 2.000.000";
              }
              if (values.deskripsi === "") {
                errors.deskripsi = "Required";
              }
              if (values.waktu_start === "") {
                errors.waktu_start = "Required";
              }
              if (values.waktu_end === "") {
                errors.waktu_end = "Required";
              }
              if (values.url === "") {
                errors.url = "Required";
              }
              return errors;
            }}
            onSubmit={(values) => dispatch(inputDonasi(values, history))}
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
                      name="judul"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.judul}
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
                      value={values.kategori}
                    >
                      <option>Pilih Category</option>
                      <option value="1">Konser</option>
                      <option value="2">Alat Musik</option>
                      <option value="3">Album</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                      className="FormInput"
                      type="text"
                      name="nama"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nama}
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
                  <Form.Group>
                    <Form.Label>Nama Organisasi</Form.Label>
                    <Form.Control
                      className="FormInput"
                      type="text"
                      name="organisasi"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.organisasi}
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
                  <Form.Group>
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
                      {errors.email && touched.email && errors.email}
                    </span>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Nominal Donasi</Form.Label>
                    <Form.Control
                      className="FormInput"
                      type="number"
                      name="nominal"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nominal}
                    />
                    <span
                      style={{
                        color: "red",
                        fontStyle: "bold",
                      }}
                    >
                      {errors.nominal &&
                        touched.nominal &&
                        errors.nominal}
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
                    <Form.Group>
                      <Form.Label>Waktu Dimulai</Form.Label>
                      <Form.Control
                        className="FormInput"
                        type="date"
                        placeholder="Waktu Mulai"
                        name="waktu_start"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.waktu_start}
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
                    <Form.Group>
                      <Form.Label>Waktu Selesai</Form.Label>
                      <Form.Control
                        className="FormInput"
                        type="date"
                        placeholder="Waktu Selesai"
                        name="waktu_end"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.waktu_end}
                      />
                      <span
                        style={{
                          color: "red",
                          fontStyle: "bold",
                        }}
                      >
                        {errors.endDate && touched.endDate && errors.endDate}
                      </span>
                    </Form.Group>
                  </div>
                  <Form.Group>
                    <Form.Label>URL Karya</Form.Label>
                    <Form.Control
                      className="FormInput"
                      type="url"
                      name="url"
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
                      {errors.urlKarya && touched.urlKarya && errors.urlKarya}
                    </span>
                  </Form.Group>
                  <div className="button-submit">
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Galang Dana
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </StyleForm>
    </Fragment>
  );
}
