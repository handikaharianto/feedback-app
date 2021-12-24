import PropTypes from 'prop-types'

function Button({ children, version, type, isDisabled }) {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
}

Button.propTypes = {
  // (node) anything can be rendered: numbers, strings, elements, an array, or fragment
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default Button
