import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 border-t border-default">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Let’s talk about the work.</h2>
          <p className="text-prose-secondary max-w-lg">Email me about a project, a role or a collaboration.</p>
        </div>
        <a href="mailto:audinathanael@gmail.com" className="inline-flex items-center gap-2 break-all text-base text-accent underline underline-offset-8 hover:text-accent">
          audinathanael@gmail.com <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M7 7h10v10" /></svg>
        </a>
      </div>
    </section>
  );
}
