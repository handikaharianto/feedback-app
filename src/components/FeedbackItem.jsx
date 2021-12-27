import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import { useFeedback } from '../context/FeedbackContext'

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useFeedback()

  // anything inside Card JSX tag component gets passed into the Card component as a 'children' prop
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button
        className='close'
        type='button'
        onClick={() => deleteFeedback(item.id)}
      >
        <FaTimes color='purple' />
      </button>
      <button className='edit' type='button' onClick={() => editFeedback(item)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
