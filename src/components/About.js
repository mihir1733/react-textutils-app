import React from 'react'

export default function About(props) {
  return (
    <div className={`container my-5 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <h5>About TextUtils</h5>
        <p>TextUtils is a versatile online tool designed to streamline your text manipulation needs. Whether you're a writer, student, programmer, or simply someone who deals with text on a daily basis, TextUtils is here to simplify your tasks.</p>
        <h4>Features:</h4>
        <ul>
            <li><strong>Text Case Conversion:</strong> TextUtils allows you to effortlessly convert text between uppercase and lowercase. Whether you need to shout your message in capital letters or tone it down to lowercase, we've got you covered.</li>
            <li><strong>Copy and Clear Text:</strong> With our intuitive interface, copying your manipulated text or starting afresh is just a click away. Seamlessly copy the transformed text to your clipboard for easy sharing or clear the text area to begin anew.</li>
            <li><strong>Text Summary:</strong> TextUtils provides a comprehensive summary of your text, including the number of words and characters. Get instant insights into the length and composition of your content, helping you tailor your writing with precision.</li>
        </ul>
        <h4>Why Choose TextUtils?</h4>
        <ul>
            <li><strong>Efficiency:</strong> Save time and effort with our user-friendly interface and lightning-fast text manipulation algorithms.</li>
            <li><strong>Accessibility:</strong> Access TextUtils from any device with an internet connection, whether you're on your desktop, laptop, tablet, or smartphone.</li>
            <li><strong>Privacy:</strong> Your privacy is our priority. TextUtils does not store any user data, ensuring your text remains confidential.</li>
        </ul>

        <p>TextUtils is not just a text manipulation tool; it's a productivity companion for anyone who works with text. Whether you're crafting emails, writing essays, coding scripts, or analyzing data.<br/>
        Experience the power of streamlined text manipulation with TextUtils today !!!</p>
    </div>
  )
}
