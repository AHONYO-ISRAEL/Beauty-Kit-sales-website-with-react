import PropTypes from 'prop-types';


const Button = ({message, onButtonClick, value}) => {
  return (
    <button onClick={onButtonClick} value={value} >
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
}

export default Button
