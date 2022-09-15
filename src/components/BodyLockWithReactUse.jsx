import { useState } from 'react';
import { useLockBodyScroll } from 'react-use';
import {LoremIpsum} from './LoremIpsum';

export const BodyLockWithReactUse = () => {
  const [open, setOpen] = useState(false);
  useLockBodyScroll(open)

  return (
    <>
      <div style={{ pointerEvents: open ? 'none' : 'unset' }}>
        <h2>This example uses <code>useLockBodyScroll</code> from <code>react-use</code></h2>
        <button onClick={() => setOpen((prev) => !prev)} className='open-button'>Open</button>
        <p style={{ minHeight: 300, marginBlock: 0, background: 'aqua' }}>Block 1</p>
        <p style={{ minHeight: 300, marginBlock: 0, background: 'yellow' }}>Block 2</p>
        <p style={{ minHeight: 300, marginBlock: 0, background: 'green' }}>Block 3</p>
        <p style={{ minHeight: 300, marginBlock: 0, background: 'orange' }}>Block 4</p>
        <button onClick={() => setOpen((prev) => !prev)} className='open-button'>Open</button>
      </div>
      {open && <FixedContent close={() => setOpen(false)} />}
    </>
  );
}

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
      <LoremIpsum background='orange'/>
      <p style={{ minHeight: 300, background: '#d99' }}>Block 3</p>
      <button onClick={close} className='close-button'>
        Close
      </button>
    </div>
  );
};