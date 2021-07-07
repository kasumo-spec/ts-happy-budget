import { InputText } from './style'

const Input = ({value, setValue, placeholder}) =>{
    return(
      <InputText     
        value={value} 
        onChange={ e => setValue(e.target.value)}
        placeholder={placeholder}
      />
    )
}
export default Input