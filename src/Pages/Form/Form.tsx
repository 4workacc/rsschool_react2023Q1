import Header from '../../components/Header/Header';
import React from 'react';

import './Form.scss';

type IFormProps = {
  prop?: string;
};

type IFormState = {
  textInputValue: string;
};

const colors: string[] = ["red", "green", "black"];
const sizes: string[] = ["small", "medium", "big"];

export default class Form extends React.Component<IFormProps, IFormState> {
  private testInput: React.RefObject<HTMLInputElement>;
  private dateInput: React.RefObject<HTMLInputElement>;
  private selectInput: React.RefObject<HTMLSelectElement>;
  private checkboxInput: React.RefObject<HTMLInputElement>;
  private fileInput: React.RefObject<HTMLInputElement>;
  private price: React.RefObject<HTMLInputElement>;

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
    this.price = React.createRef();

    this.radio1 = React.createRef();
    this.radio2 = React.createRef();
    this.radio3 = React.createRef();
  }
  
  formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    let storageData: any = localStorage.getItem("StorageCards") || "";
    let tempData: any[] = storageData === "" ? [] : JSON.parse(storageData);

    let selectedRadio = 0;
    if ( this.radio1.current?.checked) { selectedRadio = 0; }
    if ( this.radio2.current?.checked) { selectedRadio = 1; }
    if ( this.radio3.current?.checked) { selectedRadio = 2; }

    event.preventDefault;
    let qw = {
      title: this.testInput.current?.value,
      date: this.dateInput.current?.value,
      color: colors[this.selectInput.current?.selectedIndex!],
      isAvalible: this.checkboxInput.current?.checked,
      boxSize: sizes[selectedRadio],
      fileValue: this.fileInput.current?.value,
      price: this.price.current?.value,
    }
    tempData.push(qw);
    localStorage.setItem("StorageCards", JSON.stringify(tempData));
    alert("Form data saved");
  }
  render() {
    return (
      <div className="Form" >
        <Header page="Form" />
        <form className="Form_form" onSubmit={this.formHandler}>
          <label htmlFor='Form_title'>Title</label>
          <input type="text" ref={this.testInput} id = "Form_title"/>
          <label htmlFor='Form_price'>Price</label>
          <input type="number" ref={this.price} id = "Form_price"/>
          <label htmlFor='Form_date'>Form_date</label>
          <input type="date" ref={this.dateInput} id = "Form_date"/>
          <label htmlFor='Form_select'>Select color</label>
          <select ref={this.selectInput} id = "Form_select">
            <option>red</option>
            <option>green</option>
            <option>black</option>
          </select>
          <label htmlFor='Form_isAtStore'>Is avalible</label>
          <input type="checkbox" ref={this.checkboxInput} id = "Form_isAtStore"/>
          <label htmlFor='Form_size'>Box size</label>
          <fieldset id = "Form_size">
            <legend>Select a box size:</legend>
            <div>
              <input
                type="radio"
                id="radio1"
                value="radio1"
                ref={this.radio1}
                name="test_radio"            
              />
              <label htmlFor="radio1">small</label>
            </div>
            <div>
              <input type="radio" id="radio2" value="radio2" ref={this.radio2} name="test_radio" />
              <label htmlFor="radio2">mediul</label>
            </div>
            <div>
              <input type="radio" id="radio3" value="radio3" ref={this.radio3} name="test_radio" />
              <label htmlFor="radio3">big</label>
            </div>
          </fieldset>
          <label htmlFor='Form_img_file'>Image file</label>
          <input type="file" ref={this.fileInput} id = "Form_img_file"/>
          <input type="submit" value = "Collect data"></input>
        </form>
      </div>
    );
  }
}
