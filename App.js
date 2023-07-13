import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

//a heading element (H1 size), a sub heading element (H2 size), a link, 
// inline code, a code block, a list item, a blockquote, an image, and bolded text.

function App() {
    const [text, setText] = useState(`
     ### Headers
  
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List

- list item one
- list item two
- list item three

### Links

[FreeCodeCamp](https://www.freecodecamp.org)

[Google](https://www.google.com "World's Most Popular Search Enginee")

### Text Decorations

*italic*

**bold**

***bold and italic***

### Images

![alt text](https://i.pinimg.com/236x/72/bc/09/72bc091246361583fba7a93a31f898b9.jpg 'Cute Gold Retriever')

### Blockquote

> "Arise, Awake and Stop not until the goal is reached."
> -- Swami Vivekananda

> "A winner is a dreamer who never gives up."
> -- Nelson Mandela

### Code Block

\`npm install create-react-app -g\`

\`\`\`
function myFunction(p1, p2) {
    return p1 * p2; 
}

const name = 'Drake'
const age = 32
const number = Math.random() * 10
\`\`\`
     `);

    marked.setOptions({
        breaks: true
    })

  return (
      <div className="App">
          <textarea
              id="editor"
              onChange={(event) => {
                  setText(event.target.value)
              }}
              value={text}
          >
          </textarea>
          <div
              id="preview"
              dangerouslySetInnerHTML={{
                  __html: marked(text),
              }}
           >
          </div>
    </div>
  );
}

export default App;
