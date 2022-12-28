import React, {useState} from "react"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ErrorMessage } from '@hookform/error-message';
import addToMailchimp from 'gatsby-plugin-mailchimp'; 


const schema = yup.object().shape({
    FNAME: yup.string().required("please enter a your name"),
    EMAIL: yup.string().email("please enter a vaild email").required("please enter your email")
  }).required();

const Form = () => {

    const [mailchimp, setMailchimp] = useState({EMAIL: null, FNAME: null})
    const [submitMessage, setSubmitMessage] = useState("Subscribe to my newslettter")

   const _handleChange = e => {

       

        console.log({
            [`${e.target.name}`]: e.target.value,
        })
        setMailchimp({ ...mailchimp,
            [`${e.target.name}`]: e.target.value,
        })
    }



    const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, reset } = useForm({
        mode: 'onBlur', resolver: yupResolver(schema), criteriaMode: "all"
      });

    
   const _handleSubmit = async (data, e) => {
        e.preventDefault();
        console.log(data)
        const result = await addToMailchimp(mailchimp.EMAIL, {FNAME: mailchimp.FNAME})
        .then(({ msg, result }) => {
            console.log('msg', `${result}: ${msg}`)

            if (result !== 'success') {
                throw msg
            }
            setSubmitMessage(msg)
        })
        .catch(err => {
            console.log('err', err)
            setSubmitMessage(err)
        })
        reset()
      }

  return (
<>
  <h2 className="text-center pb-2.5">{submitMessage}</h2>
   <form className="flex flex-col items-center" onSubmit={handleSubmit(_handleSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className={`w-[300px] 
      ${errors.FNAME
                ? "border-red-400" : "border-black"} sm:w-2/3 lg:w-1/3 uppercase text-center appearance-none border rounded leading-tight focus:outline-none focus:shadow-outline`} placeholder="name" value={mailchimp.FNAME} {...register("FNAME")}  name="FNAME" onChange={_handleChange}/>
        <p className="text-center text-red-700 py-[5px]">
            {errors.FNAME?.message}
        </p>
      {/* include validation with required or other standard HTML validation rules */}
      <input className={`w-[300px] ${errors.EMAIL
                ? "border-red-400" : "border-black"} sm:w-2/3 lg:w-1/3 uppercase text-center appearance-none border rounded leading-tight focus:outline-none focus:shadow-outline`} placeholder='email' value={mailchimp.EMAIL} {...register("EMAIL")} name="EMAIL" onChange={_handleChange}/>
     
      <p className="py-[5px] text-center text-red-700">{errors.EMAIL?.message}</p>
    
<button className="uppercase text- mb-2.5 cursor-pointer bg-black disabled:bg-slate-400 active:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    submit
</button>
    </form>
    </>
  )
}

export default Form


