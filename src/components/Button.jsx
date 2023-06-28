import PropTypes from 'prop-types';


const Button = ({message, onButtonClick, value, classname, buttoncolor}) => {
  return (
    <button onClick={onButtonClick} value={value}  className={classname} style={{background:{buttoncolor}}}>
      {message}
    </button>
  )
}
Button.propTypes={
    message : PropTypes.string,
}

Button.propTypes={
    value: PropTypes.number,
    onButtonClick: PropTypes.func,
    classname : PropTypes.string,
    buttoncolor:PropTypes.string
}

export default Button
