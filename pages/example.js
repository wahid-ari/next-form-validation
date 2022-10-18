import Head from 'next/head'
import BackToTop from '../components/BackToTop';
import Navbar from '../components/Navbar';
import Code from '../components/Code';
import ExampleSidebar from '../components/ExampleSidebar';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Example Yup Page</title>
        <meta name="description" content="Example Yup Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <BackToTop />

        <div className="sm:flex sm:flex-wrap min-h-screen max-w-5xl mx-auto">
          
          <ExampleSidebar />

          <div className="sm:w-4/5 px-4 mx-auto pt-4">
            <h1 className="dark:text-white text-2xl font-semibold">Yup Page</h1>
            <div className="mt-4 mb-8">
              <Code name='pages/index' code={`import { useState } from "react";
import Button from "../components/Button"
import Input from "../components/Input"
import InputPassword from "../components/InputPassword"
import Label from "../components/Label"
import Select from "../components/Select"
import Checkbox from '../components/Checkbox';
import Radio from '../components/Radio';
import TextArea from '../components/TextArea';
import { validateForm } from '../validations/yup';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {

  const [submitted, setSubmitted] = useState(false)
  const validData = {
    name: "John Doe",
    username: "johnd",
    email: "john.doe@gmail.com",
    password: "abc123",
    bio: "John Bio",
    gender: "male",
    web: "https://www.johndoe.com",
    fruit: "apple",
    rating: 8,
    age: 25,
    subscribe: true,
    red: true,
    blue: false,
    dob: "1995-10-05",
  }
  const invalidData = {
    name: "John Doe?",
    username: "johnd;' ",
    email: "john.doe@gmail",
    password: "abc",
    bio: "John Bio that very long",
    gender: "",
    web: "https://www.",
    fruit: "",
    rating: 0,
    age: 20.5,
    subscribe: null,
    red: null,
    blue: null,
    dob: null,
  }
  const [data, setData] = useState(validData)
  const [error, setError] = useState()

  function handleInputChange(e) {
    if (e.target.type == 'checkbox') {
      if (e.target.checked) {
        setData({
          ...data, [e.target.name]: true
        })
      } else {
        setData({
          ...data, [e.target.name]: false
        })
      }
    } else {
      setData({ ...data, [e.target.name]: e.target.value })
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const { valid, errors } = await validateForm(data);
    if (!valid) {
      setError(errors)
      setSubmitted(false)
      toast.dismiss();
      let reverseErrors = [...errors].reverse()
      reverseErrors.forEach(msg => toast.error(msg, {
        position: 'top-right',
        className: 'text-xs dark:text-white dark:bg-neutral-800 -m-0.5 -py-2'
      }));
      return
    }
    toast.dismiss();
    setError(null)
    setSubmitted(true)
  }

  function handleUseInvalidData(e) {
    e.preventDefault()
    setSubmitted(false)
    setData(invalidData)
    setError(null)
  }

  return (
    <main className="dark:bg-neutral-900 min-h-screen pb-8">
      <Toaster />
      <div className="max-w-5xl mx-auto p-4">

        <Label htmlFor="name" className="font-semibold">Name</Label>
        <Input type="text" id="name" name="name" value={data.name} onChange={handleInputChange} placeholder='Name' className="mb-5"/>

        <Label htmlFor="username" className="font-semibold">Username</Label>
        <Input type="text" id="username" name="username" value={data.username} onChange={handleInputChange} placeholder='Username' className="mb-5"/>

        <Label htmlFor="email" className="font-semibold">Email</Label>
        <Input type="text" id="email" name="email" value={data.email} onChange={handleInputChange} placeholder='Email' className="mb-5"/>

        <Label htmlFor="password" className="font-semibold">Password</Label>
        <InputPassword type="password" id="password" name="password" value={data.password} onChange={handleInputChange} placeholder='Password'/>

        <Label htmlFor="bio" className="font-semibold mt-5">Bio</Label>
        <TextArea type="text" name="bio" id="bio" value={data.bio} onChange={handleInputChange} placeholder='Bio' />

        <Label className="font-semibold mb-2">Gender</Label>
        <Radio label="Male" name="gender" value="male" onChange={handleInputChange} checked={data.gender == "male"} />
        <Radio label="Female" name="gender" value="female" onChange={handleInputChange} checked={data.gender == "female"} />

        <Label htmlFor="web" className="font-semibold mt-5">Web</Label>
        <Input type="text" id="web" name="web" value={data.web} onChange={handleInputChange} placeholder='Web' className="mb-5"/>

        <Label htmlFor="rating" className="font-semibold">Rating</Label>
        <Input type="number" id="rating" name="rating" value={data.rating} onChange={handleInputChange} placeholder='Rating' className="mb-5"/>

        <Label htmlFor="age" className="font-semibold">Age</Label>
        <Input type="number" id="age" name="age" value={data.age} onChange={handleInputChange} placeholder='Age' />

        <Label className="font-semibold mt-5 mb-2">Subscribe</Label>
        <Checkbox label="Subscribe" name="subscribe" onChange={handleInputChange} checked={data.subscribe !== null && data.subscribe} />

        <Label className="font-semibold mt-5 mb-2">Color</Label>
        <Checkbox label="Red" name="red" onChange={handleInputChange} checked={data.red !== null && data.red} />
        <Checkbox label="Blue" name="blue" onChange={handleInputChange} checked={data.blue !== null && data.blue} />

        <Label htmlFor="dob" className="font-semibold mt-5">Date of Birth</Label>
        <Input type="date" id="dob" name="dob" value={data.dob !== null && data.dob} onChange={handleInputChange} placeholder='Date of Birth' />

        <Label className="font-semibold mt-5 mb-2">Fruit</Label>
        <Select name="fruit" onChange={handleInputChange} value={data.fruit !== null && data.fruit}>
          <Select.option value="" hidden>Select Fruit</Select.option>
          <Select.option value="apple">Apple</Select.option>
          <Select.option value="grape">Grape</Select.option>
        </Select>

        <Button type="submit" value="submit" onClick={handleSubmit} className="mt-4">Submit</Button>
        <Button.red onClick={handleUseInvalidData} className="mt-4 ml-4">Use Invalid Data</Button.red>

      </div>
    </main>
  )
}
`} />
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}
