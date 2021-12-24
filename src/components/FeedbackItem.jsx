import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({ item, handleDelete }) {
  // anything inside Card JSX tag component gets passed into the Card component as a 'children' prop
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button
        className='close'
        type='button'
        onClick={() => handleDelete(item.id)}
      >
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
