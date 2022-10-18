import * as yup from "yup";

const products = ["Product 1", "Product 2", "Product 3", "Product 4"];

const validationSchema = yup.object({
  product: yup.string().required("Please select a product").oneOf(products),
  name: yup.string().required(),
  email: yup.string().email().required(),
  title: yup.string().required(),
  review: yup.string().required(),
  rating: yup.number().min(1).max(10).required(),
  date: yup.date().default(() => new Date()),
  wouldRecommend: yup.boolean().default(false),
});

const initialValues = {
  name: "",
  email: "",
  title: "",
  review: "",
  rating: "",
  date: new Date(),
  wouldRecommend: false,
  product: "",
};

const dusunSchema = yup.object().shape({
  nik: yup
    .number()
    .required("NIK tidak boleh kosong")
    .integer("NIK harus valid")
    .typeError("NIK harus valid"),
  nama_dusun: yup
    .string()
    .required("Nama dusun tidak boleh kosong")
    .matches(/^[a-zA-Z ]*$/, "Nama dusun harus berupa huruf")
    .typeError("Nama dusun tidak boleh kosong"),
  kepala_dusun: yup
    .string()
    .required("Nama Kepala dusun tidak boleh kosong")
    .matches(/^[a-zA-Z ]*$/, "Kepala dusun harus berupa huruf")
    .typeError("Nama Kepala dusun tidak boleh kosong"),
});

const rwSchema = yup.object().shape({
  rw_nama: yup
    .number()
    .required("Nama RW tidak boleh kosong")
    .typeError("Nama RW tidak boleh kosong"),
  rw_ketua: yup
    .string()
    .required("Nama Ketua RW tidak boleh kosong")
    .matches(/^[a-zA-Z ]*$/, "Nama Ketua RW harus berupa huruf")
    .typeError("Nama Ketua RW tidak boleh kosong"),
});

const rtSchema = yup.object().shape({
  rt_nama: yup
    .number()
    .required("Nama RT tidak boleh kosong")
    .typeError("Nama RT tidak boleh kosong"),
  rt_ketua: yup
    .string()
    .required("Nama Ketua RT tidak boleh kosong")
    .matches(/^[a-zA-Z ]*$/, "Nama Ketua RT harus berupa huruf")
    .typeError("Nama Ketua RT tidak boleh kosong"),
});

const pendudukSchema = yup.object().shape({
  nik: yup
    .number()
    .required("NIK tidak boleh kosong")
    .integer("NIK harus valid")
    .typeError("NIK harus valid"),
  nama: yup
    .string()
    .required("Nama tidak boleh kosong")
    .typeError("Nama tidak boleh kosong"),
  tempat_lahir: yup
    .string()
    .required("Tempat lahir tidak boleh kosong")
    .matches(/^[a-zA-Z ]*$/, "Tempat lahir harus berupa huruf")
    .typeError("Tempat lahir tidak boleh kosong"),
  tanggal_lahir: yup
    .date()
    .required("Tanggal lahir tidak boleh kosong")
    .typeError("Tanggal lahir tidak boleh kosong"),
  kelamin: yup
    .string()
    .required("Kelamin tidak boleh kosong")
    .typeError("Kelamin tidak boleh kosong"),
  kk: yup
    .number()
    .required("KK tidak boleh kosong")
    .integer("KK harus valid")
    .typeError("KK harus valid"),
  ayah: yup
    .string()
    .required("Nama ayah tidak boleh kosong")
    .typeError("Nama ayah tidak boleh kosong"),
  ibu: yup
    .string()
    .required("Nama ibu tidak boleh kosong")
    .typeError("Nama ibu tidak boleh kosong"),
  alamat: yup
    .string()
    .required("Alamat tidak boleh kosong")
    .typeError("Alamat tidak boleh kosong"),
  dusun_id: yup
    .string()
    .required("Dusun tidak boleh kosong")
    .typeError("Dusun harus valid"),
  rt_id: yup
    .string()
    .required("RT tidak boleh kosong")
    .typeError("RT harus valid"),
  rw_id: yup
    .string()
    .required("RW tidak boleh kosong")
    .typeError("RW harus valid"),
  pendidikan_id: yup
    .string()
    .required("Pendidikan tidak boleh kosong")
    .typeError("Pendidikan harus valid"),
  hubungan_id: yup
    .string()
    .required("Hubungan tidak boleh kosong")
    .typeError("Hubungan harus valid"),
  warganegara_id: yup
    .string()
    .required("Warganegara tidak boleh kosong")
    .typeError("Warganegara harus valid"),
  pekerjaan_id: yup
    .string()
    .required("Pekerjaan tidak boleh kosong")
    .typeError("Pekerjaan harus valid"),
  status_id: yup
    .string()
    .required("Status tidak boleh kosong")
    .typeError("Status harus valid"),
  agama: yup
    .string()
    .required("Agama tidak boleh kosong")
    .typeError("Agama harus valid"),
});

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name tidak boleh kosong")
    .matches(/^[a-zA-Z ]*$/, "Name harus berupa huruf")
    .typeError("Name tidak boleh kosong"),
  username: yup
    .string()
    .required("Username tidak boleh kosong")
    .matches(/^[a-z0-9]*$/, "Username harus berupa huruf dan angka, tanpa spasi"),
  email: yup
    .string()
    .required("Email tidak boleh kosong")
    .email("Email harus valid")
    .typeError("Email tidak boleh kosong"),
  password: yup
    .string()
    .required("Password tidak boleh kosong"),
});

const informasiSchema = yup.object().shape({
  nama_desa: yup
    .string()
    .required("Nama desa tidak boleh kosong")
    .matches(/^[a-zA-Z ]*$/, "Nama desa harus berupa huruf")
    .typeError("Nama desa tidak boleh kosong"),
  kode_desa: yup
    .number()
    .required("Kode desa tidak boleh kosong")
    .integer("Kode desa harus valid")
    .typeError("Kode desa harus valid"),
  kode_pos: yup
    .number()
    .required("Kode pos tidak boleh kosong")
    .integer("Kode pos harus valid")
    .typeError("Kode pos harus valid"),
  alamat: yup
    .string()
    .required("Alamat tidak boleh kosong")
    .typeError("Alamat tidak boleh kosong"),
  email_desa: yup
    .string()
    .required("Email desa tidak boleh kosong")
    .email("Email desa harus valid")
    .typeError("Email desa tidak boleh kosong"),
  phone_kantor: yup
    .number()
    .required("Nomor telepon kantor tidak boleh kosong")
    .integer("Nomor telepon kantor harus valid")
    .typeError("Nomor telepon kantor harus valid"),
  website: yup
    .string()
    .required("Website tidak boleh kosong")
    .url("Website harus valid")
    .typeError("Website tidak boleh kosong"),
  phone_polisi: yup
    .number()
    .required("Nomor telepon polisi tidak boleh kosong")
    .integer("Nomor telepon polisi harus valid")
    .typeError("Nomor telepon polisi harus valid"),
  phone_pemadam: yup
    .number()
    .required("Nomor telepon pemadam tidak boleh kosong")
    .integer("Nomor telepon pemadam harus valid")
    .typeError("Nomor telepon pemadam harus valid"),
  phone_rs: yup
    .number()
    .required("Nomor telepon rumah sakit tidak boleh kosong")
    .integer("Nomor telepon rumah sakit harus valid")
    .typeError("Nomor telepon rumah sakit harus valid"),
  phone_pln: yup
    .number()
    .required("Nomor telepon PLN tidak boleh kosong")
    .integer("Nomor telepon PLN harus valid")
    .typeError("Nomor telepon PLN harus valid"),
  nama_kecamatan: yup
    .string()
    .required("Nama kecamatan tidak boleh kosong")
    .matches(/^[a-zA-Z ]*$/, "Nama kecamatan harus berupa huruf")
    .typeError("Nama kecamatan tidak boleh kosong"),
  kode_kecamatan: yup
    .number()
    .required("Kode kecamatan tidak boleh kosong")
    .integer("Kode kecamatan harus valid")
    .typeError("Kode kecamatan harus valid"),
  nama_kepala_camat: yup
    .string()
    .required("Nama kepala camat tidak boleh kosong")
    .matches(/^[a-zA-Z ]*$/, "Nama kepala camat harus berupa huruf")
    .typeError("Nama kepala camat tidak boleh kosong"),
  nip_kepala_camat: yup
    .number()
    .required("NIP kepala camat tidak boleh kosong")
    .integer("NIP kepala camat harus valid")
    .typeError("NIP kepala camat harus valid"),
  nama_kabupaten: yup
    .string()
    .required("Nama kabupaten tidak boleh kosong")
    .matches(/^[a-zA-Z ]*$/, "Nama kabupaten harus berupa huruf")
    .typeError("Nama kabupaten tidak boleh kosong"),
  kode_kabupaten: yup
    .number()
    .required("Kode kabupaten tidak boleh kosong")
    .integer("Kode kabupaten harus valid")
    .typeError("Kode kabupaten harus valid"),
  nama_provinsi: yup
    .string()
    .required("Nama provinsi tidak boleh kosong")
    .matches(/^[a-zA-Z ]*$/, "Nama provinsi harus berupa huruf")
    .typeError("Nama provinsi tidak boleh kosong"),
  kode_provinsi: yup
    .number()
    .required("Kode provinsi tidak boleh kosong")
    .integer("Kode provinsi harus valid")
    .typeError("Kode provinsi harus valid"),
});

export const validateDusun = async (data) => {
  try {
    await dusunSchema.validate(data, { abortEarly: false });
    return { valid: true, errors: [] };
  } catch (err) {
    return { valid: false, errors: err.errors };
  }
};

export const validateRW = async (data) => {
  try {
    await rwSchema.validate(data, { abortEarly: false });
    return { valid: true, errors: [] };
  } catch (err) {
    return { valid: false, errors: err.errors };
  }
};

export const validateRT = async (data) => {
  try {
    await rtSchema.validate(data, { abortEarly: false });
    return { valid: true, errors: [] };
  } catch (err) {
    return { valid: false, errors: err.errors };
  }
};

export async function validatePenduduk(data) {
  try {
    await pendudukSchema.validate(data, { abortEarly: false });
    return { valid: true, errors: [] };
  } catch (err) {
    return { valid: false, errors: err.errors };
  }
};

export const validateInformasi = async (data) => {
  try {
    await informasiSchema.validate(data, { abortEarly: false });
    return { valid: true, errors: [] };
  } catch (err) {
    return { valid: false, errors: err.errors };
  }
};

export const validateRegister = async (data) => {
  try {
    await registerSchema.validate(data, { abortEarly: false });
    return { valid: true, errors: [] };
  } catch (err) {
    return { valid: false, errors: err.errors };
  }
};

function transformYupErrorsIntoObject(errors) {
  const validationErrors = {};
  errors.inner.forEach((error) => {
    if (error.path !== undefined) {
      validationErrors[error.path] = error.errors[0];
    }
  });
  return validationErrors;
};

export async function validateFormObject(data) {
  try {
    await validationSchema.validate(data, { abortEarly: false });
    return { valid: true, errors: [] };
  } catch (err) {
    const validationErrors = transformYupErrorsIntoObject(err);
    return { valid: false, errors: validationErrors };
  }
};