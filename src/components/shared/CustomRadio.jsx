
const CustomRadio = ({name, value, onChange}) => {
  return (
    <input type="radio" className="custom-radio" name={name} value={value} onChange={onChange} />
  )
}

export default CustomRadio