import { LoremIpsum } from './LoremIpsum'

export const FixedContent = ({ close }) => {
    return (
      <div
        style={{
          background: 'blue',
          position: 'fixed',
          inset: 0,
          zIndex: 9,
          overflowY: 'scroll',
          WebkitOverflowScrolling: 'touch',
          height: '100vh',
          maxHeight: '100vh',
          minHeight: '100vh',
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        <h2 style={{color: 'white'}}>This is a fixed content</h2>
        <button onClick={close} className='close-button'>Close</button>
        <p style={{ minHeight: 300, background: '#ccc' }}>Block 1</p>
        <LoremIpsum background='green'/>
        <p style={{ minHeight: 300, background: '#d3d3d3' }}>Block 2</p>
        <button onClick={close} className='close-button'>Close</button>
        <LoremIpsum background='orange'/>
        <p style={{ minHeight: 300, background: '#d99' }}>Block 3</p>
        <p style={{ minHeight: 300, background: '#d99' }}>Block 4</p>
        <button onClick={close} className='close-button'>Close</button>
      </div>
    );
  };