import {Budget, StylizedP} from "./styles";


const Balance = ({income,expense}) => {
  let values = income - expense
  if (values > 0) {
    return (
      <Budget  style={{backgroundColor: "var(--green)"}}>
        <StylizedP>
          Saldo: {values.toFixed(2)} R$
        </StylizedP>
      </Budget>
    )
  } else if (values < 0) {
    return (
      <Budget style={{backgroundColor: "var(--orange)"}}>
        <StylizedP>
          Saldo: {values.toFixed(2)} R$
        </StylizedP>
      </Budget>
    )
  } else {
    return (
      <Budget style={{backgroundColor: "var(--white-green)"}}>
        <StylizedP>
          Saldo: {values.toFixed(2)} R$
        </StylizedP>
      </Budget>
    )
  }
}

export default Balance