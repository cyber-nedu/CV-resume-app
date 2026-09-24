import { ArrowLeft, ArrowUpRight, Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <main className="not-found-page">
      <div className="not-found-wrapper">
        <div className="not-found-top">
          <span className="not-found-code">404</span>
          <span className="not-found-line"></span>
          <span className="not-found-status">PAGE NOT FOUND</span>
        </div>

        <div className="not-found-content">
          <div className="not-found-number">
            <span>4</span>
            <span className="not-found-zero">0</span>
            <span>4</span>
          </div>

          <div className="not-found-message">
            <span className="not-found-label">OOPS</span>

            <h1>
              This page took
              <br />
              a wrong turn.
            </h1>

            <p>
              The page you're looking for doesn't exist, has been moved,
              or the link may be incorrect.
            </p>

            <div className="not-found-actions">
              <Link to="/" className="not-found-home">
                <Home size={17} />
                Back to Home
                <ArrowUpRight size={16} />
              </Link>

              <button
                type="button"
                className="not-found-back"
                onClick={() => window.history.back()}
              >
                <ArrowLeft size={16} />
                Go Back
              </button>
            </div>
          </div>
        </div>

        <div className="not-found-footer">
          <span>ERROR / 404</span>

          <span className="not-found-footer-line"></span>

          <span>PAGE DOES NOT EXIST</span>
        </div>
      </div>
    </main>
  )
}

export default NotFound