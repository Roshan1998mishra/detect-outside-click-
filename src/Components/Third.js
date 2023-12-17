import { useEffect, useRef, useState } from "react"

function App() {
  const ref = useRef()

  const [userICon, setuserICon] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (userICon && ref.current && !ref.current.contains(e.target)) {
        setuserICon(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [userICon])

  return (
    <div className="wrapper" ref={ref}>
      <button
        className="button"
        onClick={() => setuserICon(oldState => !oldState)}
      >
        Click Me
      </button>
      {userICon && (
        <ul className="list">
          <li className="list-item">dropdown option 1</li>
          <li className="list-item">dropdown option 2</li>
          <li className="list-item">dropdown option 3</li>
          <li className="list-item">dropdown option 4</li>
        </ul>
      )}
    </div>
  )
}

export default App


