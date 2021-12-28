import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import Spinner from './shared/Spinner'
import { useFeedback } from '../context/FeedbackContext'

function FeedbackList() {
  const { feedback, isLoading } = useFeedback()

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
