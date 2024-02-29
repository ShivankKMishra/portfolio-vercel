import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactUS() {
  const [state, handleSubmit] = useForm('xoqgjbpd');

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form className='flex justify-center rounded-2xl flex-col border border-black p-4 max-w-md mx-auto' onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input className='border p-2' id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Message</label>
      <textarea className='border p-2 ' id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button className='bg-blue-500 text-white px-4 py-2 mt-2' type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
