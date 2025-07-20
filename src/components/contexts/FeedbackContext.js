import { createContext, useState, useContext } from 'react';

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <FeedbackContext.Provider value={{ showFeedback, setShowFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  return useContext(FeedbackContext);
}