import { useState } from 'react';

const questions = [
  { q: "How do I enroll?", a: "Go to course page and click enroll." },
  { q: "Can I access after deadline?", a: "Yes, access is lifetime." },
];

const Accordion = () => {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h2>FAQ</h2>
      {questions.map((item, i) => (
        <div key={i}>
          <div onClick={() => setOpen(open === i ? null : i)} style={{ cursor: 'pointer' }}>
            <strong>{item.q}</strong>
          </div>
          {open === i && <p>{item.a}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
