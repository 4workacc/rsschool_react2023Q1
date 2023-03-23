import Header from '../../components/Header/Header';
import React from 'react';

import './Form.scss';

type IFormProps = {
  prop?: string;
};

type IFormState = {
  textInputValue: string;
};

export default class Form extends React.Component<IFormProps, IFormState> {
  private testInput: React.RefObject<HTMLInputElement>;
  private dateInput: React.RefObject<HTMLInputElement>;
  private selectInput: React.RefObject<HTMLSelectElement>;
  private checkboxInput: React.RefObject<HTMLInputElement>;
  private fileInput: React.RefObject<HTMLInputElement>;

  private radio1: React.RefObject<HTMLInputElement>;
  private radio2: React.RefObject<HTMLInputElement>;
  private radio3: React.RefObject<HTMLInputElement>;

  constructor(props: IFormProps) {
    super(props);
    this.testInput = React.createRef();
    this.dateInput = React.createRef();
    this.selectInput = React.createRef();
    this.checkboxInput = React.createRef();
    this.fileInput = React.createRef();

    this.radio1 = React.createRef();
    this.radio2 = React.createRef();
    this.radio3 = React.createRef();
  }
  InputHandler = () => {
    console.log(this.radio1.current?.checked);
  };
  render() {
    return (
      <div className="Form">
        <Header page="Form" />
        <form className="Form_form">
          <input type="text" ref={this.testInput} />
          <input type="date" ref={this.dateInput} />
          <select ref={this.selectInput}>
            <option>Opt 0</option>
            <option>Opt 1</option>
          </select>
          <input type="checkbox" ref={this.checkboxInput} />
          <fieldset>
            <legend>Select a radio:</legend>
            <div>
              <input
                type="radio"
                id="radio1"
                value="radio1"
                ref={this.radio1}
                name="test_radio"
                onChange={() => this.InputHandler()}
              />
              <label htmlFor="radio1">radio1</label>
            </div>
            <div>
              <input type="radio" id="radio2" value="radio2" ref={this.radio2} name="test_radio" />
              <label htmlFor="radio2">radio2</label>
            </div>
            <div>
              <input type="radio" id="radio3" value="radio3" ref={this.radio3} name="test_radio" />
              <label htmlFor="radio3">radio3</label>
            </div>
          </fieldset>
          <input type="file" ref={this.fileInput} />
        </form>
      </div>
    );
  }
}
