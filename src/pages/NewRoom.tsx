import { Link } from 'react-router-dom'

import { Button } from '../components/Button'

import '../styles/auth.scss'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="illustration symbolizing questions and answers"
        />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Take questions from your audience in real time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask Google Sign In" />
          <h2>Create a new room</h2>
          <form>
            <input type="text" placeholder="Room name" />
            <Button type="submit">Create room</Button>
          </form>
          <p>
            Do you want to enter a existing room? <Link to="/">Click here</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
