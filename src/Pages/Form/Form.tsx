import Header from '../../components/Header/Header';
import React, { FC, ReactElement, useState } from 'react';

import './Form.scss';
import FormCards from '../FormCards/FormCards';

type IFormProps = {
  prop?: string;
};

export type TStorageData = {
  id?: number;
  title: string | undefined;
  img?: string | undefined;
  price: string | undefined;
  date: string | undefined;
  color: 'red' | 'green' | ' black';
  isAvalible: boolean | undefined;
  boxSize: 'small' | 'medium' | 'big';
};

const Form: FC<IFormProps> = ({}): ReactElement => {
  const [cardsData, addCardData] = useState<TStorageData[]>([]);

  const [inputValue, setInputValue] = useState<string>('');
  const [numberValue, setNumberValue] = useState<number>(0);
  const [dateValue, setDateValue] = useState<string>('');
  const [fileValue, setFileValue] = useState<string>('');
  const [checkValue, setCheckValue] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const [selectedRadio, setSelectedRadio] = useState<'small' | 'medium' | 'big'>('small');

  const buttonFormClickHandler = () => {
    let colorToSend: 'red' | 'green' | ' black' = 'red';
    if (selectedColor === 0) {
      colorToSend = 'red';
    } else if (selectedColor === 1) {
      colorToSend = 'green';
    } else if (selectedColor === 2) {
      colorToSend = ' black';
    }
    if (inputValue !== '' && numberValue >= 0 && dateValue !== '' && fileValue !== '') {
      addCardData([
        ...cardsData,
        {
          id: cardsData.length + 1,
          boxSize: selectedRadio,
          color: colorToSend,
          date: dateValue,
          isAvalible: checkValue,
          price: '' + numberValue,
          title: inputValue,
          img: fileValue,
        },
      ]);
      setInputValue('');
      setNumberValue(0);
      setDateValue('');
      setFileValue('');
      setCheckValue(false);
      setSelectedRadio('small');
      alert('Card created!');
    } else {
      alert('Field validation error');
    }
  };
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
            <p
              className={`Form_textInputErr ${
                inputValue.length > 0 ? 'Form_hiddenError' : 'Form_showError'
              }`}
            >
              Required field
            </p>
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
            <p
              className={`Form_numberInputErr ${
                numberValue >= 0 ? 'Form_hiddenError' : 'Form_showError'
              }`}
            >
              Price must be positive
            </p>
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
            <p
              className={`Form_numberInputErr ${
                dateValue != '' ? 'Form_hiddenError' : 'Form_showError'
              }`}
            >
              Required field
            </p>
          </div>
          <div className="Form_Header__checkboxZone">
            <label htmlFor="">isAbalible</label>
            <input
              type="checkbox"
              checked={checkValue || false}
              onChange={() => {
                setCheckValue(!checkValue);
              }}
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
                  onChange={() => {
                    setSelectedRadio('small');
                  }}
                  checked={selectedRadio === 'small'}
                />
                <label htmlFor="radio1">small</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="radio2"
                  value="radio2"
                  name="test_radio"
                  onChange={() => {
                    setSelectedRadio('medium');
                  }}
                  checked={selectedRadio === 'medium'}
                />
                <label htmlFor="radio2">mediul</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="radio3"
                  value="radio3"
                  name="test_radio"
                  onChange={() => {
                    setSelectedRadio('big');
                  }}
                  checked={selectedRadio === 'big'}
                />
                <label htmlFor="radio3">big</label>
              </div>
            </fieldset>
          </div>
          <select
            id="Form_select"
            onChange={(e: React.FormEvent<HTMLSelectElement>) => {
              setSelectedColor(e.currentTarget.selectedIndex);
            }}
          >
            <option>red</option>
            <option>green</option>
            <option>black</option>
          </select>
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
              <p
                className={`Form_numberInputErr ${
                  fileValue != '' ? 'Form_hiddenError' : 'Form_showError'
                }`}
              >
                Required field
              </p>
            </div>
          </div>
        </form>
        <button
          className="Form_addCardButton"
          onClick={() => {
            buttonFormClickHandler();
          }}
        >
          Add card
        </button>
      </div>
      <div className="Form_Cards">
        <FormCards cards={cardsData} />
      </div>
    </div>
  );
};
export default Form;
