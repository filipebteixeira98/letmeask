import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

export function Home() {
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="illustration symbolizing questions and answers"
        />
        <strong>Create live Q&amp;A rooms</strong>
        <p>take questions from your audience in real time</p>
        <main>
          <div>
            <img src={logoImg} alt="Letmeask Google Sign In" />
            <button>
              <img src={googleIconImg} alt="Google brand" />
              Create your room with Google
            </button>
            <div>or enter a room</div>
            <form>
              <input
                type="text"
                placeholder="Enter room code"
              />
              <button type="submit">Enter in the room</button>
            </form>
          </div>
        </main>
      </aside>
    </div>
  )
}
