import CurrencyFormat from 'react-currency-format'
import './style.css'

const InputCurrency = ({value, setValue}) =>{

    return(
        <CurrencyFormat 
            thousandSeparator={true}
            allowNegative={false}
            prefix={'R$ '}

            placeholder='R$ 0,000,000'
            className='InputCurrency'
            value={value}
            onChange={e=>setValue(e.target.value)}
        />
    )
}
export default InputCurrency