import React from 'react';
import { Button } from './components/Button/Button';
import { ButtonLink } from './components/Button/ButtonLink';
import { CustomComponent } from './components/Button/CustomComponent';

const customComponentTemplate = `
// Example custom component

interface CustomComponentProps {
  stringProp: string;
  numberProp: number;
}

function CustomComponent({ stringProp, numberProp, ...others }: CustomComponentProps);
`;

function App() {
  const buttonReference = React.createRef<HTMLButtonElement>();

  return (
    <div>
      <header>
        <h1>Aviationexam Interview Task</h1>
      </header>
      <main>
        <div className="card">
          <h2>I. Task</h2>
          <p>
            Render the button as is with some additional styles
            (backgroundColor, color, padding, borderRadius)
          </p>
          <ul>
            <li>
              Component is rendered as HTMLButtonElement (resulting HTML is
              {' <button ...>...</button>'})
            </li>
            <li>
              TypeScript needs to correctly hint all HTMLButtonElement props
              (e.g. onClick with correct event)
            </li>
            <li>
              Styles provided will be mainly used as an indicator of correct
              solutions for upcoming tasks, it does NOT matter how they are
              provided (css, style tag, className, ...)
            </li>
          </ul>
          <div className="result">
            <Button stringProp="Button" />
          </div>
        </div>
        <div className="card">
          <h2>II. Task</h2>
          <p>
            Render the button as HTMLAnchorElement redirecting the user to
            https://google.com
          </p>
          <ul>
            <li>
              Component is rendered as HTMLAnchorElement (resulting HTML is
              {' <a ...>...</a>'})
            </li>
            <li>
              TypeScript needs to correctly hint all HTMLAnchorElement props
              (e.g. href, target, ...)
            </li>
            <li>
              All of Button component's visual attributes (styles) are kept
            </li>
          </ul>
          <div className="result">
            <ButtonLink stringProp="Button Link" />
          </div>
        </div>
        <div className="card">
          <h2>III. Task</h2>
          <p>
            Create CustomComponent with custom props and render the button as
            given component.
          </p>
          <pre>{customComponentTemplate}</pre>
          <ul>
            <li>
              Component is rendered as a HTML element specified in
              CustomComponent
            </li>
            <li>
              TypeScript needs to correctly hint all CustomComponentProps (e.g.{' '}
              <pre className="inline">stringProp</pre> and{' '}
              <pre className="inline">numberProp</pre> from example) and all of
              the underlying DOM element props
            </li>
            <li>
              All of Button component's visual attributes (styles) are kept
            </li>
          </ul>
          <div className="result">
            <CustomComponent isButton={true} stringProp="I am button" />
            <CustomComponent stringProp="I am link" />
          </div>
        </div>
        <div className="card">
          <h2>Bonus Task</h2>
          <p>Enhance the Button component with ability to forward refs.</p>
          <ul>
            <li>Component satisfies all of the tasks above</li>
            <li>
              Component can forward correctly typed ref (HTMLButtonElement by
              default)
            </li>
          </ul>
          <div className="result">
            <Button
              ref={buttonReference}
              stringProp=" I am button with forwarded ref"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
