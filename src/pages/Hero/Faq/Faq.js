import React from 'react'
import Styles from './Faq.module.css'
import ArrowUp from './images/arrowUp.svg';
import ArrowDown from './images/arrowDown.svg';

let faqData = [
  {
    question: 'How do I adopt a pet from your center?',
    answerL: '',
  },
  {
    question: 'Are your pets vaccinated and spayed/neutered?',
    answerL: "Yes, all of our pets receive vaccinations and are spayed/neutered before they're available for adoption. We believe in providing our animals with the best possible start to their new lives.",
  },
  {
    question: 'Do you have a return policy?',
    answerL: "",
  },
  {
    question: 'Can I bring my current pets to meet a potential new pet?',
    answerL: "",
  },
  {
    question: 'What if I have allergies to pets?',
    answerL: "Yes, all of our pets receive vaccinations and are spayed/neutered before they're available for adoption. We believe in providing our animals with the best possible start to their new lives.",
  },
  {
    question: "How can I support your organization if I'm unable to adopt?",
    answerL: "",
  },
]

function Fact() {
  return (
    <div className='lg:px-28' id={Styles.Faq}>
      <div className='flex justify-center'>
        <h1>FAQS</h1>
      </div>
      <div className='space-y-5'>
        <FaqList/>
      </div>
    </div>
  )
}

function FaqList() {
  return (
    <>
      {faqData.map((faq, index) => (
        <div key={index}>
          <button className='w-full border-b-2 border-slate-400 flex place-content-between pb-4'>
            <label>{faq.question}</label>
            <span><img src={ArrowDown} alt='icon'/></span>
          </button>
        </div>
      ))}
    </>
  )
}

export default Fact