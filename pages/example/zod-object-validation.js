import Head from 'next/head'
import BackToTop from '../../components/BackToTop';
import Navbar from '../../components/Navbar';
import Code from '../../components/Code';
import ExampleSidebar from '../../components/ExampleSidebar';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Example Zod Object Validation</title>
        <meta name="description" content="Example Zod Object Validation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <BackToTop />

        <div className="sm:flex sm:flex-wrap min-h-screen max-w-5xl mx-auto">
          
          <ExampleSidebar />

          <div className="sm:w-4/5 px-4 mx-auto pt-4">
            <h1 className="dark:text-white text-2xl font-semibold">Zod Object Validation</h1>
            <div className="mt-4 mb-8">
              <Code name='validations/zod-object' code={`import { z } from "zod";

const formSchema = z.object({
  name: z
    .string({ message: "Name must be string" })
    .min(1, { message: "Name is required" })
    .regex(/^[a-zA-Z ]*$/, { message: "Name is required" }),
  username: z
    .string({ message: "Username must be string" })
    .min(1, { message: "Username is required" })
    .regex(/^[a-z0-9]*$/, { message: "Username must be alphanumeric, without space" })
    .length(5, { message: "Username length must be 5" }),
  email: z
    .string({ message: "Email must be string" })
    .min(1, { message: "Email is required" })
    .email({ message: "Email must be valid" }),
  password: z
    .string({ message: "Password must be string" })
    .min(5, { message: "Password length min 5" })
    .max(10, { message: "Password length max 10" }),
  bio: z
    .string({ message: "Bio must be string" })
    .min(1, { message: "Bio is required" })
    .max(10, { message: "Bio length max 10" }),
  gender: z
    .string({ message: "Gender must be string" })
    .min(1, { message: "Gender is required" }),
  web: z
    .string({ message: "Web must be string" })
    .min(1, { message: "Web is required" })
    .url({ message: "Web must be valid" }),
  fruit: z
    .string({ message: "Fruit must be string" })
    .min(1, { message: "Fruit is required" }),
  rating: z
    .number({ message: "Rating must be a number" })
    .gt(1, { message: "Rating must be more than 1" })
    .lt(10, { message: "Rating must be less than 10" }),
  age: z
    .number({ message: "Age must be a number" })
    .min(1, { message: "Age is required" })
    .positive({ message: "Age must be a positive number" })
    .int({ message: "Age must be a integer number" }),
  subscribe: z
    .boolean({
      required_error: "Subscribe is required",
      invalid_type_error: "Subscribe must be boolean",
    }),
  red: z
    .boolean({
      required_error: "Red is required",
      invalid_type_error: "Red must be boolean",
    }),
  blue: z
    .boolean({
      required_error: "Blue is required",
      invalid_type_error: "Blue must be boolean",
    }),
  dob: z
    .preprocess((a) =>
      new Date(z.string().parse(a)),
      z.date({
        message: "DOB must be date",
        required_error: "DOB is required",
        invalid_type_error: "DOB must be date",
      }), {
      message: "DOB must be date",
      required_error: "DOB is required",
      invalid_type_error: "DOB must be date",
    })
});

function transformZodErrorsIntoObject(errors) {
  const validationErrors = {};
  errors.forEach((error) => {
    if (error.path !== undefined) {
      validationErrors[error.path] = error.message;
    }
  });
  return validationErrors;
};

export async function validateFormObject(data) {
  try {
    await formSchema.parseAsync(data);
    return { valid: true, errors: [] };
  } catch (err) {
    const validationErrors = transformZodErrorsIntoObject(err.errors);
    return { valid: false, errors: validationErrors };
  }
};`} />
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}
