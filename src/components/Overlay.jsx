export function Overlay() {
  return (
    <div className="text">
      <div className="char" style={{ top: 40, left: 40 }}>
        B
      </div>
      <div className="char" style={{ top: 40, left: '26vw' }}>
        R
      </div>
      <div className="char" style={{ top: 40, left: '40vw' }}>
        U
      </div>
      {/* <div className="char" style={{ top: 40, left: '55vw' }}>
        N
      </div> */}
      <div className="char" style={{ top: '20vw', left: '20vw' }}>
        N
      </div>
      {/* <div className="char" style={{ bottom: 40, left: '50vw' }}>
        C
      </div> */}
      <div className="char" style={{ bottom: 40, left: '60vw' }}>
        C
      </div>
      <div className="char" style={{ bottom: 40, left: '80vw' }}>
        H
      </div>
      <div style={{ position: 'absolute', top: 40, right: 160, fontSize: '15px', textAlign: 'right' }}>
        THREEJS
        <br />
        3D MODEL
      </div>
      <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '15px', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
        —
        <br />
        March 2023
      </div>
      <svg style={{ position: 'absolute', right: 40, top: '50%' }} width="54" height="23" viewBox="0 0 54 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="1.5" x2="54" y2="1.5" stroke="black" strokeWidth="3" />
        <line y1="11.5" x2="54" y2="11.5" stroke="black" strokeWidth="3" />
        <line y1="21.5" x2="54" y2="21.5" stroke="black" strokeWidth="3" />
      </svg>
      <div style={{ position: 'absolute', bottom: 120, left: 120, fontSize: '18px' }}>
        Acai bowl
        <br />
        Your best brunch choice.
        <br />
        <br />
        <div style={{ position: 'relative', marginTop: 10, display: 'inline-block' }}>
          <a style={{ fontSize: '15px', fontWeight: 600, letterSpacing: 2 }} href="https://github.com/amberyufangchiu">
            GITHUB
          </a>
          <div style={{ marginTop: 6, height: 2.5, width: '100%', background: '#3e3e3d' }} />
        </div>
        <br />
      </div>
    </div>
  )
}
