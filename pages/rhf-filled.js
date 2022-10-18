import Head from 'next/head'
import { useState } from "react";
import Button from "../components/Button"
import Label from "../components/Label"
import BackToTop from '../components/BackToTop';
import Navbar from '../components/Navbar';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

export default function Home() {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [dataSubmit, setDataSubmit] = useState()
  const [submitted, setSubmitted] = useState(false)
  function onSubmit(data) {
    setSubmitted(true)
    setDataSubmit(data)
    toast.success("Success submit data", {
      position: 'top-right',
      className: 'text-xs dark:text-white dark:bg-neutral-800 -m-0.5 -py-2'
    });
  }

  const data = {
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@gmail.com",
    password: "abcd1234",
    bio: "John Doe Bio",
    gender: "male",
    web: "https://www.johndoe.com",
    fruit: "apple",
    rating: 8,
    age: 25,
    subscribe: false,
    red: false,
    blue: false,
    dob: "1995-10-05",
  }

  const inputClassName = "text-sm transition-all w-full px-3 py-[0.6rem] rounded-md mt-2 dark:text-white bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
  const textareaClassName = "text-sm rounded-md mt-2 w-full transition-all p-3 dark:text-white bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
  const radioClassName = "focus:ring-blue-500 h-4 w-4 text-blue-600 dark:bg-neutral-900 dark:checked:bg-blue-500 transition-all cursor-pointer border-gray-300 dark:border-neutral-700"
  const checkboxClassName = "h-4 w-4 border-gray-300 dark:border-neutral-700 rounded text-blue-500 focus:ring-blue-500 bg-white dark:bg-neutral-900 dark:checked:bg-blue-500 transition-all cursor-pointer"
  const selectClassName = "cursor-pointer mt-2 block w-full px-3 py-[0.6rem] text-sm rounded-md transition-all dark:text-white bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 focus:ring-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 outline-none"

  return (
    <div>
      <Head>
        <title>Next RHF Filled Validation</title>
        <meta name="description" content="Next RHF Filled Validation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <BackToTop />

        <Toaster />

        <div className="max-w-5xl mx-auto p-4">

          <h1 className="text-3xl text-neutral-800 dark:text-white font-semibold tracking-wide mb-8 mt-4">
            React Hook Form Filled Validation
          </h1>

          <div className="grid sm:grid-cols-2 sm:space-x-8">

            <form onSubmit={handleSubmit(onSubmit)}>

              <Label htmlFor="name" className="font-semibold">Name</Label>
              <input {...register("name", { required: true, maxLength: 20 })} type="text" id="name" defaultValue={data.name} placeholder='Name' className={inputClassName} />
              {errors.name?.type == 'required' && <p className="text-xs text-red-500 mb-5 mt-2">Name is required</p>}
              {errors.name?.type == 'maxLength' && <p className="text-xs text-red-500 mb-5 mt-2">Name length max is 20</p>}

              <Label htmlFor="username" className="font-semibold mt-5">Username</Label>
              <input {...register("username", { required: true, maxLength: 10, pattern: /^[A-Za-z0-9]+$/i })} type="text" id="username" defaultValue={data.username} placeholder='Username' className={inputClassName} />
              {errors.username?.type == 'required' && <p className="text-xs text-red-500 mb-5 mt-2">Username is required</p>}
              {errors.username?.type == 'maxLength' && <p className="text-xs text-red-500 mb-5 mt-2">Username length max is 10</p>}
              {errors.username?.type == 'pattern' && <p className="text-xs text-red-500 mb-5 mt-2">Username must be alphanumeric, without space</p>}

              <Label htmlFor="email" className="font-semibold mt-5">Email</Label>
              <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="email" id="email" defaultValue={data.email} placeholder='Email' className={inputClassName} />
              {errors.email?.type == 'required' && <p className="text-xs text-red-500 mb-5 mt-2">Email is required</p>}
              {errors.email?.type == 'pattern' && <p className="text-xs text-red-500 mb-5 mt-2">Email must be valid email address</p>}

              <Label htmlFor="password" className="font-semibold mt-5">Password</Label>
              <input {...register("password", { required: true, minLength: 8, pattern: /^[A-Za-z0-9]+$/i })} type="password" id="password" defaultValue={data.password} placeholder='Password' className={inputClassName} />
              {errors.password?.type == 'required' && <p className="text-xs text-red-500 mb-5 mt-2">Password is required</p>}
              {errors.password?.type == 'minLength' && <p className="text-xs text-red-500 mb-5 mt-2">Password length min is 8</p>}
              {errors.password?.type == 'pattern' && <p className="text-xs text-red-500 mb-5 mt-2">Password must be alphanumeric, without space</p>}

              <Label htmlFor="bio" className="font-semibold mt-5">Bio</Label>
              <textarea {...register("bio", { required: true, minLength: 10 })} type="text" id="bio" defaultValue={data.bio} placeholder='Bio' className={textareaClassName} />
              {errors.bio?.type == 'required' && <p className="text-xs text-red-500 mb-5 mt-1">Bio is required</p>}
              {errors.bio?.type == 'minLength' && <p className="text-xs text-red-500 mb-5 mt-1">Bio length min is 10</p>}

              <Label className="font-semibold mt-4 mb-2">Gender</Label>
              <label className="inline-flex items-center cursor-pointer">
                <input {...register("gender", { required: true })} value="male" type="radio" className={radioClassName} />
                <span className="text-sm ml-2 text-gray-700 dark:text-neutral-300">Male</span>
              </label>
              <br />
              <label className="inline-flex items-center cursor-pointer">
                <input {...register("gender", { required: true })} value="female" type="radio" className={radioClassName} />
                <span className="text-sm ml-2 text-gray-700 dark:text-neutral-300">Female</span>
              </label>
              <br />
              {errors.gender?.type == 'required' && <p className="text-xs text-red-500 mb-5 mt-2">Gender is required</p>}

              <Label htmlFor="web" className="font-semibold mt-5">Web</Label>
              <input {...register("web", { required: true, pattern: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/i })} type="text" id="web" defaultValue={data.web} placeholder='Web' className={inputClassName} />
              {errors.web?.type == 'required' && <p className="text-xs text-red-500 mb-5 mt-2">Web is required</p>}
              {errors.web?.type == 'pattern' && <p className="text-xs text-red-500 mb-5 mt-2">Web must be valid web address</p>}

              <Label htmlFor="rating" className="font-semibold mt-5">Rating</Label>
              <input {...register("rating", { required: true, min: 1, max: 10 })} type="number" id="rating" defaultValue={data.rating} placeholder='Rating' className={inputClassName} />
              {errors.rating?.type == 'required' && <p className="text-xs text-red-500 mb-5 mt-2">Rating is required</p>}
              {errors.rating?.type == 'min' && <p className="text-xs text-red-500 mb-5 mt-2">Rating min 1</p>}
              {errors.rating?.type == 'max' && <p className="text-xs text-red-500 mb-5 mt-2">Rating max 10</p>}

              <Label htmlFor="age" className="font-semibold mt-5">Age</Label>
              <input {...register("age", { required: true, min: 1, max: 50 })} type="number" id="age" defaultValue={data.age} placeholder='Age' className={inputClassName} />
              {errors.age?.type == 'required' && <p className="text-xs text-red-500 mb-5 mt-2">Age is required</p>}
              {errors.age?.type == 'min' && <p className="text-xs text-red-500 mb-5 mt-2">Age min 1</p>}
              {errors.age?.type == 'max' && <p className="text-xs text-red-500 mb-5 mt-2">Age max 50</p>}

              <Label className="font-semibold mt-5 mb-2">Subscribe</Label>
              <label className="inline-flex items-center cursor-pointer">
                <input {...register("subscribe", { required: true })} type="checkbox" className={checkboxClassName} />
                <span className="text-sm ml-2 text-gray-700 dark:text-neutral-300">Subscribe</span>
              </label>
              <br />
              {errors.subscribe?.type == 'required' && <p className="text-xs text-red-500 mb-5 mt-2">Subscribe is required</p>}

              <Label className="font-semibold mt-5 mb-2">Color</Label>
              <label className="inline-flex items-center cursor-pointer">
                <input {...register("red")} type="checkbox" className={checkboxClassName} />
                <span className="text-sm ml-2 text-gray-700 dark:text-neutral-300">Red</span>
              </label>
              <br />
              <label className="inline-flex items-center cursor-pointer mt-0.5">
                <input {...register("blue")} type="checkbox" className={checkboxClassName} />
                <span className="text-sm ml-2 text-gray-700 dark:text-neutral-300">Blue</span>
              </label>
              <br />

              <Label htmlFor="dob" className="font-semibold mt-5">Date of Birth</Label>
              <input {...register("dob", { required: true })} type="date" defaultValue="2022-10-16" id="dob" className={inputClassName + "cursor-pointer"} />
              {errors.dob?.type == 'required' && <p className="text-xs text-red-500 mb-5 mt-2">Date of Birth is required</p>}

              <Label className="font-semibold mt-5 mb-2">Fruit</Label>
              <select {...register("fruit", { required: true })} defaultValue={data.fruit} className={selectClassName}>
                <option value="" hidden>Select Fruit</option>
                <option value="apple">Apple</option>
                <option value="grape">Grape</option>
              </select>
              {errors.fruit?.type == 'required' && <p className="text-xs text-red-500 mb-5 mt-2">Fruit is required</p>}

              <Button type="submit" value="submit" onClick={handleSubmit} className="mt-6">Submit</Button>

            </form>

            {submitted &&
              <div className="dark:text-white text-sm my-8 sm:my-0 space-y-2">
                <p>Data Name : {dataSubmit.name}</p>
                <p>Data Username : {dataSubmit.username}</p>
                <p>Data Email : {dataSubmit.email}</p>
                <p>Data Password : {dataSubmit.password}</p>
                <p>Data Bio : {dataSubmit.bio}</p>
                <p>Data Gender : {dataSubmit.gender}</p>
                <p>Data Web : {dataSubmit.web}</p>
                <p>Data Fruit : {dataSubmit.fruit}</p>
                <p>Data Rating : {dataSubmit.rating}</p>
                <p>Data Age : {dataSubmit.age}</p>
                <p>Data Subscribe : {dataSubmit.subscribe ? "true" : "false"}</p>
                <p>Data Color : {dataSubmit.red && "red,"} {dataSubmit.blue && "blue"}</p>
                <p>Data Date of Birth : {dataSubmit.dob}</p>
                <Button.red onClick={() => {
                  setSubmitted(false)
                  setDataSubmit(null)
                }}
                  className="mt-4">Reset</Button.red>
              </div>
            }

          </div>

        </div>
      </main>
    </div>
  )
}
