import React from 'react';
import { storiesOf } from '@storybook/react';
import { withStorySource } from '@storybook/addon-storysource';
import Svg from '../src/components/ImportImage';
import Table from '../src/components/Table/TablePageObjects';
import Tipografy from '../src/components/Tipografy';
import Button from '../src/components/Button';
import Input from '../src/components/Input';
import FormDate from '../src/components/FormDate';

storiesOf('Tipografy', module)
  .addDecorator(
    withStorySource(
      `import React, { Component } from "react";
      import Table from "./components/Tipografy"; 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Tipografy />
      </div>
    );
  }
}

export default App;`,
    ),
  )
  .add('default', () => <Tipografy />);
storiesOf('Input', module)
  .addDecorator(
    withStorySource(
      `import React, { Component } from "react";
import Input from "./components/Input";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input
          type="text"
          placeholder="Текстовое поле"
          onChange={this.handleTextChange}
          value=""
        />
      </div>
    );
  }
}

export default App;`,
    ),
  )
  .add('default', () => <Input type="text" placeholder="Текстовое поле" onChange={this.handleTextChange} value="" />)
  .add('submit', () => <Input type="submit" value="Кнопка" />)
  .add('checkbox', () => <Input type="checkbox" onChange={this.handleTextChange} />)
  .add('radio', () => (
    <div>
      <Input type="radio" name="count" onChange={this.handleTextChange} />
      <Input type="radio" name="count" onChange={this.handleTextChange} />
      <Input type="radio" name="count" onChange={this.handleTextChange} />
    </div>
  ));
storiesOf('Button', module)
  .addDecorator(
    withStorySource(
      `import React, { Component } from "react";
import Button from "./components/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button />
      </div>
    );
  }
}

export default App;`,
    ),
  )
  .add('default with icon', () => (
    <Button typebtn="warning">
      <Svg name="filter" />
      Найти объекты
    </Button>
  ))
  .add('clear', () => <Button typebtn="clear">Очистить форму</Button>)
  .add('info with icon', () => (
    <Button typebtn="info">
      <Svg name="calc" />
      Рассчитать
    </Button>
  ))
  .add('warning with icon', () => (
    <Button typebtn="warning">
      <Svg name="calc" />
      Рассчитать
    </Button>
  ))
  .add('disabled', () => (
    <Button disabled="" typebtn="disabled">
      Отправить
    </Button>
  ))
  .add('warning send', () => <Button typebtn="warning">Oтправить</Button>)
  .add('invert', () => <Button typebtn="invert">Вернуться на главную</Button>)
  .add('like link', () => <Button typebtn="link">Вернуться на главную</Button>);

storiesOf('Table', module)
  .addDecorator(
    withStorySource(
      `import React, { Component } from "react";
import Table from "./components/Table";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

export default App;`,
    ),
  )
  .add('search result', () => <Table />);

storiesOf('FormData', module)
  .addDecorator(
    withStorySource(
      `import React, { Component } from "react";
import { FormData } from "./components/FormData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormData />
      </div>
    );
  }
}

export default App;`,
    ),
  )
  .add('range date', () => <FormDate />);
