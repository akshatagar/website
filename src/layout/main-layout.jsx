import NavBar from "../components/general/NavBar";
import Footer from "../components/general/Footer";
import FeedbackForm from "../components/feedbackpage/FeedbackForm";
import { useFeedback } from '../components/contexts/FeedbackContext';
import PopupWindow from "../components/feedbackpage/Popup";

export default function MainLayout({ children }) {
  
  const { showFeedback, setShowFeedback } = useFeedback();
  return (
    <div className="d-flex flex-column min-vh-100 w-100 overflow-hidden">
      <NavBar />
      <main className="flex-grow-1 w-100">
        {children}
      </main>
      {showFeedback && (
        <PopupWindow
          title="Feedback Form"
          onClose={() => setShowFeedback(false)}>
          <FeedbackForm />
         </PopupWindow>
      )}
      <Footer />
    </div>
  );
}
