import { ChangeEvent, useState } from "react"

//interfaz generica
interface FormValues{
    //puede ser en string o en numero
    [key:string]: string | number;
}
export const useForm = <T extends FormValues> (initialValues: T)=>{
    const [values, setValues] = useState<T>(initialValues)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name } = event.target;

        setValues({...values,[name]: value })
    }

    const resetForm = () => {
        setValues(initialValues);
    }

    return{
        values, 
        handleChange,
        resetForm,
        //funcion para validar los inputs
    }
}

