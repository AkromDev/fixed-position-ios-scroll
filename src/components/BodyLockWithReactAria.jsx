import { useState } from 'react';
import { usePreventScroll } from 'react-aria';
import { FixedContent } from './FixedContent'

export const BodyLockWithReactAria = () => {
  const [open, setOpen] = useState(false);
  usePreventScroll({
    isDisabled: !open
  })

  return (
    <>
      <div style={{ pointerEvents: open ? 'none' : 'unset' }}>
        <h2>This example uses <code>usePreventScroll</code> from <code>react-aria</code></h2>
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