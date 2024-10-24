import { useState } from 'react';
import { useLockBodyScroll } from 'react-use';
import { FixedContent } from './FixedContent'

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
        <button onClick={() => setOpen((prev) => !prev)} className='open-button'>Open</button>
        <p style={{ minHeight: 300, marginBlock: 0, background: 'green' }}>Block 3</p>
        <p style={{ minHeight: 300, marginBlock: 0, background: 'orange' }}>Block 4</p>
        <button onClick={() => setOpen((prev) => !prev)} className='open-button'>Open</button>
      </div>
      {open && <FixedContent close={() => setOpen(false)} />}
    </>
  );
}
