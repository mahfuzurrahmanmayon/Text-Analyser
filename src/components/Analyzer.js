import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import wegems from "../../src/images/Wegems.svg";
import "./Analyzer.css";

const Analyzer = () => {
  const [inputText, setInputText] = useState("")
  const [wordCount,setWordCount] = useState(0)
  const [charCount,setCharCount] = useState(0)
  const [sentenceCount,setSentenceCount] = useState(0)
  const [paragraphCount,setParagraphCount] = useState(0)
  const [pronounCount,setPronounCount] = useState(0)
  const [longestWord,setLongestWord] = useState("")
  const [readingTime,setReadingTime] = useState(0)

  const updateWordCount = (text) => {
    const words = text.trim().split(/\s+/);
    const filteredWords = words.filter(word => word !== "");
    setWordCount(filteredWords.length);
  };

  const updateCharCount = (text) => {
    const characters = text.replace(/\s/g, "");
    setCharCount(characters.length)

  }

  const updateSentenceCount = (text) => {
    const sentences = text.split(/[.!?]/)
    const filteredSentences = sentences.filter(sentence => sentence.trim() !== "")
    setSentenceCount(filteredSentences.length)
  }

  const updateParagraphCount = (text) => {
    const paragraphs = text.split(/\n\s*\n|\n/)
    const filteredParagraphs = paragraphs.filter(paragraph => paragraph.trim() !== "");
    setParagraphCount(filteredParagraphs.length)
  }

  const updatePronounCount = (text) => {
    const personalPronouns = ['i', 'me', 'you', 'he', 'she', 'it', 'we', 'us', 'they', 'them'];
    const words = text.split(/\s+/);
    const pronouns = words.filter(word => personalPronouns.includes(word.toLowerCase()));
    setPronounCount(pronouns.length)
  }

  const updateLongestWord = (text) => {
    const words = text.split(/\s+/)
    let longestWord = '';
    words.forEach(word => {
      const cleanedWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
      if(cleanedWord.length > longestWord.length){
        longestWord = word
      }
    })
    setLongestWord(longestWord)
  }
  const updateReadingTime = (text) => {
    const wordsPerMinute = 200
    const wordCount = text.split(/\s+/).length;
    console.log(wordCount)
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    if(text.trim() === ""){
      setReadingTime(0);
    }else{
      setReadingTime(readingTime)
    }
  }

  const handleTextChange = (e) => {
    const text = e.target.value;
    setInputText(text)
    updateWordCount(text)
    updateCharCount(text)
    updateSentenceCount(text)
    updateParagraphCount(text)
    updatePronounCount(text)
    updateLongestWord(text)
    updateReadingTime(text)
  }

  return (
    <div className="Analyzer">
      <div className="hero">
        <div className="container">
          <div className="hero-Wrapper">
            <span>Text Analyser</span>
            <div className="hero-right">
              <a href="https://www.wegems.co/">
                <img src={wegems} alt="" />
              </a>
              <a className="fb" href="https://www.facebook.com/mahfuzurrahmanmayon">
                <FaFacebook />
              </a>
              <a className="li" href="https://www.linkedin.com/in/mahfujurrahmanmayon/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="small-container">
        <div className="main-app">
          <div className="result-bar">
            <div className="result-box">
              <span className="box-title">Words</span>
              <span className="box=value">{wordCount}</span>
            </div>
            <div className="result-box">
              <span className="box-title">Characters</span>
              <span className="box=value">{charCount}</span>
            </div>
            <div className="result-box">
              <span className="box-title">Sentences</span>
              <span className="box=value">{sentenceCount}</span>
            </div>
            <div className="result-box">
              <span className="box-title">Paragraphs</span>
              <span className="box=value">{paragraphCount}</span>
            </div>
            <div className="result-box">
              <span className="box-title">Pronouns</span>
              <span className="box=value">{pronounCount}</span>
            </div>
          </div>
          <textarea
            value={inputText}
            onChange={handleTextChange}
            className="text-area"
            placeholder="Paste your text here ..."
          ></textarea>
          <div className="bottom-result-bar">
            <div className="result-box">
              <span className="box-title">Longest word:</span>
              <span className="box-value">-{longestWord}</span>
            </div>
            <div className="result-box">
              <span className="box-title">Average Reading Time:</span>
              <span className="box-value">~{readingTime} Minutes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <span>Build by Mahfuz</span>
            <div className="footer-box">
              <a href="https://www.linkedin.com/in/mahfujurrahmanmayon/">
                <span>About Us</span>
              </a>
              <span>|</span>
              <a href="https://www.facebook.com/mahfuzurrahmanmayon">
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyzer;
