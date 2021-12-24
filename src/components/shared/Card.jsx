import PropTypes from 'prop-types'

function Card({ children, reverse }) {
  return (
    <div
      className='card'
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0, 0.4)' : '#fff',
        color: reverse ? '#fff' : '#000',
      }}
    >
      {children}
    </div>
  )
}

Card.defaultProps = {
  // reverse == dark mode
  reverse: false,
}

Card.propTypes = {
  // (node) anything can be rendered: numbers, strings, elements, an array, or fragment
  children: PropTypes.node.isRequired,
}

export default Card
