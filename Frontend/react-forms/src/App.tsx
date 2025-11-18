import "./App.css"
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

type FormData = {
  name: string,
  date: string,
  subject: string,
  description: string
}

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  date: yup.string().required("Data é obrigatório"),
  subject: yup.string().required("Selecione um assunto"),
  description: yup
    .string()
    .required("Descrição é obrigatória")
    .min(10, "A descrição precisa ter pelo menos 10 dígitos")
})

export default function App() {

  const { control, handleSubmit, formState: {errors}} = useForm<FormData>({
    defaultValues: {
      name: "",
      date: "",
      subject: "",
      description: ""
    },
    resolver: yupResolver(schema)
  })


  function onSubmit(data: FormData) {
    console.log(data)
  }

  return (
    <div>
      <h1 className=" text-green-600 text-4xl font-bold underline">Evento</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <input type="text" placeholder="Nome do evento" {...field} />
          )}
        />

        {
          errors.name?.message && <span className="error">{errors.name.message}</span>
        }  
        
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <input type="date" placeholder="Nome do evento" {...field} />
          )}
        />

        {
          errors.date?.message && <span className="error">{errors.date.message}</span>
        }  


        <select defaultValue="">
          <option value="" disabled>
            Selecione...
          </option>

          <option value="react">React</option>
          <option value="notejs">Node.js</option>
          <option value="javascript">Javascript</option>
          <option value="typescript">Typescript</option>
        </select>

        <textarea placeholder="Descrição" rows={4} />

        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}
