import axios from 'axios'
const queryString = require("query-string");

export const INPUT_DATA_DONASI = 'INPUT_DATA_DONASI'

export const setInputData = (data) => {
    return {
        type: INPUT_DATA_DONASI,
        payload: data,
    }
}

export const inputDonasi = (values, history) => (dispatch) => {

    console.log("tes", values, history)

    const judul = values.judul
    const kategori = values.kategori
    const nama = values.nama
    const organisasi = values.organisasi
    const email = values.email
    const nominal = values.nominal
    const deskripsi = values.deskripsi
    const waktu_start = values.waktu_start
    const waktu_end = values.waktu_end
    const url = values.url
    const status = values.status

    return axios
        .post(`https://musty-api.herokuapp.com/donasi`,
        queryString.stringify({judul, kategori, nama, organisasi,
                                email, nominal, deskripsi, waktu_start,
                                waktu_end, url, status})
        )
        .then((response) => {
            console.log(response);
            //dikirim ke reducers
            dispatch(setInputData(response.data))
            history.push("/")
        })
        .catch((error) => {
            console.log(error)
        })
}