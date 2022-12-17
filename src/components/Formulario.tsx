
import { useForm } from '../hooks/useForm';
const initState ={
    name:'',
    email:''
}
 interface FromData {
 name:string,
 email:string
 }
export const Formulario = () => {
   
   const {formualrio,handleChange} = useForm<FromData>(initState)
  return (
    <form action="">
        <div className='form-label' >
            <label className='form-label'>Email</label>
            <input type="email"
            className='form-control'
            value={formualrio.email}
            name='email'
            onChange={handleChange} />

        </div>
        <div className='form-label' >
            <label className='form-label'>Nombre</label>
            <input type="text"
            className='form-control'
            name='name' 
            value={formualrio.name}
            onChange={handleChange} />

        </div>
    </form>
  )
}
