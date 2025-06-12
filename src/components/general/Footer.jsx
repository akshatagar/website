import Link from "next/link";

export default function Footer() {
  return (
    <footer className="d-flex justify-content-between align-items-center py-3 px-4 border-top text-white">
      <div className="d-flex align-items-center">
        <span>© 2025 Company, Inc</span>
      </div>

      <div className="d-flex align-items-center">
        <Link href="/feedback" className="me-3">
          <button type="button" className="btn custom-btn btn-lg">
            Feedback
          </button>
        </Link>
        <Link href="#" className="text-white" aria-label="Facebook">
          <svg className="bi" width="24" height="24"></svg>
        </Link>
      </div>
    </footer>
  );
}
