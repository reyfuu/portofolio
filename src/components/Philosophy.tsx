import React from 'react';

const principles = [
  {
    num: '01',
    title: 'Make the steps visible',
    desc: 'I prefer workflows where inputs, tool calls and outputs are easy to follow.',
  },
  {
    num: '02',
    title: 'Keep interfaces clear',
    desc: 'Go and TypeScript help me describe what a function expects and what it returns.',
  },
  {
    num: '03',
    title: 'Plan for the offline case',
    desc: 'This portfolio keeps a local project dataset so the work stays visible when GitHub is unavailable.',
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 border-t border-subtle">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[680px] mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent mb-3 inline-block">
            03 / Working notes
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-prose-primary mb-4">
            How I approach the work.
          </h2>
          <p className="text-base text-prose-secondary leading-relaxed">
            A few preferences that guide my implementation choices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item) => (
            <div
              key={item.num}
              className="py-6 border-t border-default"
            >
              <div className="font-mono text-sm font-bold text-accent mb-4">
                {item.num} {'/'}
              </div>
              <h3 className="text-lg font-bold text-prose-primary mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-prose-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
