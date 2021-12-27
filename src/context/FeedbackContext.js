import { createContext, useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'this is feedback item 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'this is feedback item 2',
      rating: 9,
    },
    {
      id: 3,
      text: 'this is feedback item 3',
      rating: 7,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      // filter the clicked item
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()

    setFeedback([newFeedback, ...feedback])
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    )
    setFeedbackEdit({ item: {}, edit: false })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

// reference: https://kentcdodds.com/blog/how-to-use-react-context-effectively
export const useFeedback = () => {
  const context = useContext(FeedbackContext)
  if (context === undefined) {
    throw new Error('useFeedback must be used within a FeedbackProvider')
  }
  return context
}

export default FeedbackContext
