import PropTypes from 'prop-types';


const Button = ({message, onButtonClick, value, classname}) => {
  return (
    <button onClick={onButtonClick} value={value}  className={classname}>
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
}

export default Button
