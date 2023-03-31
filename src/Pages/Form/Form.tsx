import Header from '../../components/Header/Header';
import React, { FC, ReactElement, useEffect, useState } from 'react';

import './Form.scss';

type IFormProps = {
  prop?: string;
};

// type IFormState = {
//   textInputValue: string;
// };

type TStorageData = {
  title: string | undefined;
  img?: string | undefined;
  price: string | undefined;
  date: string | undefined;
  color: string;
  isAvalible: boolean | undefined;
  boxSize: string;
};

// const colors: string[] = ['red', 'green', 'black'];
// const sizes: string[] = ['small', 'medium', 'big'];

// export default class Form extends React.Component<IFormProps, IFormState> {
//   private testInput: React.RefObject<HTMLInputElement>;
//   private dateInput: React.RefObject<HTMLInputElement>;
//   private selectInput: React.RefObject<HTMLSelectElement>;
//   private checkboxInput: React.RefObject<HTMLInputElement>;
//   private fileInput: React.RefObject<HTMLInputElement>;
//   private price: React.RefObject<HTMLInputElement>;
//   private formTitleError: React.RefObject<HTMLParagraphElement>;
//   private formPriceError: React.RefObject<HTMLParagraphElement>;
//   private formDateError: React.RefObject<HTMLParagraphElement>;
//   private formFileError: React.RefObject<HTMLParagraphElement>;

//   private radio1: React.RefObject<HTMLInputElement>;
//   private radio2: React.RefObject<HTMLInputElement>;
//   private radio3: React.RefObject<HTMLInputElement>;

//   constructor(props: IFormProps) {
//     super(props);
//     this.testInput = React.createRef();
//     this.dateInput = React.createRef();
//     this.selectInput = React.createRef();
//     this.checkboxInput = React.createRef();
//     this.fileInput = React.createRef();
//     this.price = React.createRef();
//     this.formTitleError = React.createRef();
//     this.formPriceError = React.createRef();
//     this.formDateError = React.createRef();
//     this.formFileError = React.createRef();

//     this.radio1 = React.createRef();
//     this.radio2 = React.createRef();
//     this.radio3 = React.createRef();
//   }
//   formValidate = () => {
//     let isValidate = true;
//     if (this.testInput.current?.value === '') {
//       this.formTitleError.current!.className = 'Form_err';
//       isValidate = false;
//     } else {
//       this.formTitleError.current!.className = 'Form_hidden_err';
//     }
//     if (this.price.current?.value === '') {
//       this.formPriceError.current!.className = 'Form_err';
//       isValidate = false;
//     } else {
//       this.formPriceError.current!.className = 'Form_hidden_err';
//     }
//     if (this.dateInput.current?.value === '') {
//       this.formDateError.current!.className = 'Form_err';
//       isValidate = false;
//     } else {
//       this.formDateError.current!.className = 'Form_hidden_err';
//     }
//     if (this.fileInput.current?.value === '') {
//       this.formFileError.current!.className = 'Form_err';
//       isValidate = false;
//     } else {
//       this.formFileError.current!.className = 'Form_hiden_err';
//     }
//     return isValidate;
//   };
//   // FormEvent<HTMLFormElement>
//   formHandler = (event: React.FormEvent) => {
//     event.preventDefault;
//     if (this.formValidate()) {
//       const storageData: TStorageData | string = localStorage.getItem('StorageCards') || '';
//       const tempData: TStorageData[] = storageData === '' ? [] : JSON.parse(storageData);

//       let selectedRadio = 0;
//       if (this.radio1.current?.checked) {
//         selectedRadio = 0;
//       }
//       if (this.radio2.current?.checked) {
//         selectedRadio = 1;
//       }
//       if (this.radio3.current?.checked) {
//         selectedRadio = 2;
//       }
//       const newCardData = {
//         id: tempData.length + 1,
//         title: this.testInput.current?.value,
//         date: this.dateInput.current?.value,
//         color: colors[this.selectInput.current!.selectedIndex],
//         isAvalible: this.checkboxInput.current!.checked,
//         boxSize: sizes[selectedRadio],
//         fileValue: this.fileInput.current?.value,
//         price: this.price.current?.value,
//       };
//       tempData.push(newCardData);
//       localStorage.setItem('StorageCards', JSON.stringify(tempData));
//       alert('Form data saved');

//       this.testInput.current!.value = '';
//       this.price.current!.value = '';
//       this.dateInput.current!.value = '';
//       this.checkboxInput.current!.checked = false;
//       this.radio1.current!.checked = true;
//       this.radio2.current!.checked = false;
//       this.radio3.current!.checked = false;
//       this.fileInput.current!.value = '';
//     }
//   };
//   clearSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//   };
//   checkboxChangeHandler = () => {};
//   render() {
//     return (
//       <div className="Form">
//         <Header page="Form" />
//         <form className="Form_form" onSubmit={this.clearSubmit}>
//           <label htmlFor="Form_title">Title</label>
//           <input type="text" ref={this.testInput} id="Form_title" />
//           <p ref={this.formTitleError} className="Form_hidden_err">
//             Input empty!!
//           </p>
//           <label htmlFor="Form_price">Price</label>
//           <input type="number" ref={this.price} id="Form_price" />
//           <p ref={this.formPriceError} className="Form_hidden_err">
//             Input empty!!
//           </p>
//           <label htmlFor="Form_date">Form_date</label>
//           <input type="date" ref={this.dateInput} id="Form_date" />
//           <p ref={this.formDateError} className="Form_hidden_err">
//             Input empty!!
//           </p>
//           <label htmlFor="Form_select">Select color</label>
//           <select ref={this.selectInput} id="Form_select">
//             <option>red</option>
//             <option>green</option>
//             <option>black</option>
//           </select>
//           <label htmlFor="Form_isAtStore">Is avalible</label>
//           <input
//             type="checkbox"
//             ref={this.checkboxInput}
//             id="Form_isAtStore"
//             onChange={this.checkboxChangeHandler}
//           />
//           <label htmlFor="Form_size">Box size</label>
//           <fieldset id="Form_size">
//             <legend>Select a box size:</legend>
//             <div>
//               <input
//                 type="radio"
//                 id="radio1"
//                 value="radio1"
//                 ref={this.radio1}
//                 name="test_radio"
//                 onChange={this.checkboxChangeHandler}
//                 checked
//               />
//               <label htmlFor="radio1">small</label>
//             </div>
//             <div>
//               <input
//                 type="radio"
//                 id="radio2"
//                 value="radio2"
//                 ref={this.radio2}
//                 name="test_radio"
//                 onChange={this.checkboxChangeHandler}
//               />
//               <label htmlFor="radio2">mediul</label>
//             </div>
//             <div>
//               <input
//                 type="radio"
//                 id="radio3"
//                 value="radio3"
//                 ref={this.radio3}
//                 name="test_radio"
//                 onChange={this.checkboxChangeHandler}
//               />
//               <label htmlFor="radio3">big</label>
//             </div>
//           </fieldset>

//           <label htmlFor="Form_img_file">Image file</label>
//           <input type="file" ref={this.fileInput} id="Form_img_file" />
//           <p ref={this.formFileError} className="Form_hidden_err">
//             Input empty!!
//           </p>
//           <input type="submit" value="Collect data" onClick={this.formHandler}></input>
//         </form>
//       </div>
//     );
//   }
// }

const Form: FC<IFormProps> = ({}): ReactElement => {
  const [cardsSetData, addCardData] = useState<TStorageData[]>([]);

  const [inputValue, setInputValue] = useState<string>('');
  const [numberValue, setNumberValue] = useState<number>(0);
  const [dateValue, setDateValue] = useState<string>('');
  const [fileValue, setFileValue] = useState<string>('');
  useEffect(() => {
    console.log(`Text: ${inputValue}`);
    console.log(`Text: ${numberValue}`);
  }, [inputValue, numberValue]);
  return (
    <div className="Form">
      <Header page="" />
      <div className="Form_Container">
        <form className="Form_Header">
          <div className="Form_Header__textInputZone">
            <label htmlFor="Form_textInput">Title</label>
            <input
              type="text"
              value={inputValue}
              id="Form_textInput"
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setInputValue(e.currentTarget.value);
              }}
            />
            <p className="Form_textInputErr">Check input value</p>
          </div>
          <div className="Form_Header__numberInputZone">
            <label htmlFor="Form_numberInput">Price</label>
            <input
              type="number"
              value={numberValue}
              id="Form_numberInput"
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setNumberValue(+e.currentTarget.value);
              }}
            />
            <p className="Form_numberInputErr">Check input value</p>
          </div>
          <div className="Form_Header__dateInputZone">
            <label htmlFor="Form_dateInput">Date</label>
            <input
              type="date"
              value={dateValue}
              id="Form_dateInput"
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setDateValue(e.currentTarget.value);
              }}
            />
            <p className="Form_dateInputErr">Check input value</p>
          </div>
          <div className="Form_Header__checkboxZone">
            <label htmlFor="">isAbalible</label>
            <input
              type="checkbox"
            />            
          </div>
          <div className="Form_Header__radioZone">
            <fieldset className="Form_Header__fieldset">
              <legend>Select a box size:</legend>
              <div>
                <input
                  type="radio"
                  id="radio1"
                  value="radio1"                  
                  name="test_radio"
                  onChange={() => {}}
                  checked
                />
                <label htmlFor="radio1">small</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="radio2"
                  value="radio2"
                  name="test_radio"
                  onChange={() => {}}
                />
              <label htmlFor="radio2">mediul</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="radio3"
                  value="radio3"                
                  name="test_radio"
                  onChange={()=>{}}
                />
              <label htmlFor="radio3">big</label>
            </div>
          </fieldset>
          </div>
          <div className="Form_Header__fileZone">
          <div className="Form_Header__fileInputZone">
            <label htmlFor="Form_fileInput">File</label>
            <input
              type="file"
              value={fileValue}
              id="Form_fileInput"
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setFileValue(e.currentTarget.value);
              }}
            />
            <p className="Form_fileInputErr">Check input value</p>
          </div>
          </div>
        </form>
        <button>Add card</button>
      </div>
      <div className="Form_Cards">Cards</div>
    </div>
  );
};
export default Form;
