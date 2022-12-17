import { useState, ChangeEvent } from "react";

 //export function useForm<T>(initState:T){
export const useForm = <T extends Object>(initState:T)=> {
    const [formualrio, setFormualrio] = useState(initState)
    const handleChange = ({ target }:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;

        setFormualrio({ 
            ...formualrio,
            [name]:value
            
        })
    }
  return {
    formualrio,
    handleChange
  }
}
