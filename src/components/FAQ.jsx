import React from "react";
import { listFAQ } from "../data";
import qa from '../asset/icon/qa.svg';
import question from '../asset/icon/question.svg';

const FAQ = () => {
    const handleClick = (i) => {
        const faq = [...document.querySelectorAll('.faq__item')]
        const question = [...document.querySelectorAll('.faq__question')]
        const panel = [...document.querySelectorAll('.faq__panel')]
        question[i].classList.toggle('clicked')
        faq[i].classList.toggle('bordered')

        if(panel[i].style.maxHeight) {
            panel[i].style.maxHeight = null;
            panel[i].firstElementChild.style.opacity = 0
        } else {
            panel[i].style.maxHeight = panel[i].scrollHeight + "px";
            panel[i].firstElementChild.style.opacity = 1
        }

        panel.forEach((item, index) => {
            if(index !== i) {
                item.style.maxHeight = null;
                item.firstElementChild.style.opacity = 0
                question[index].classList.remove('clicked')
                faq[index].classList.remove('bordered')
            }
        })

    }

    return (
        <div className="faq">
            <img src={qa} alt="" className="icon-1" />
            <img src={question} alt="" className="icon-2" />
            <div className="faq__heading">
                <h1 className="faq__title">Frequently Asked Question</h1>
                <h2 className="faq__subtitle">Akses materi yang berupa Modul, Video Pembelajaran, Quiz, Pre-Test, dan Post Test yang lengkap dalam satu platform. Pelajari sekarang di kelas online Guru Bintang.</h2>
            </div>
            <ul className="faq__list">
                {listFAQ.map(({question, answer}, i) => {
                    return (
                        <li className='faq__item' onClick={() => handleClick(i)} key={i}>
                            <h1 className="faq__question">{question}</h1>
                            <div className="faq__panel">
                                <p className="faq__answer">{answer}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FAQ