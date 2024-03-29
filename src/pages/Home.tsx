import { useNavigate } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

import { Button } from '../components/Button'

import '../styles/auth.scss'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

export function Home() {
  const navigate = useNavigate()

  const { user, signInWithGoogle } = useAuth()

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    navigate('/rooms/new')
  }

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
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Google brand" />
            Create your room with Google
          </button>
          <div className="separator">or enter a room</div>
          <form>
            <input type="text" placeholder="Enter room code" />
            <Button type="submit">Enter in the room</Button>
          </form>
        </div>
      </main>
    </div>
  )
}
