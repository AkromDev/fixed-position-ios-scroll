import { useState } from 'react';
import { FixedContent } from './FixedContent';

export const WithoutBodyScrollLock = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{ pointerEvents: open ? 'none' : 'unset' }}>
        <h2>This example does not have body scroll lock</h2>
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
