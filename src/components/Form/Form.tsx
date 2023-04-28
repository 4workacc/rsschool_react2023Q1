import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';
import './Form.scss';
import Header from '../../components/Header/Header';
import { useFullStateDispatch, useFullStateSelector } from '../../redux/store';
import { actions as formAction } from '../../redux/reducers/formReducer';

type Inputs = {
  title: string;
  price: number;
  date: string;
  check: boolean;
  radio: 'small' | 'medium' | 'big';
  color: 'red' | 'green' | 'black';
  file: string;
};

export default function App() {
  const formCards = useFullStateSelector((state) => state.formReducer.formCards);
  const dispatch = useFullStateDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(
      formAction.setFormCards({
        formCards: [
          ...formCards,
          {
            id: formCards.length + 1,
            title: data.title,
            // img: data.file,
            img: '1',
            price: '' + data.price,
            date: data.date,
            color: data.color,
            isAvalible: data.check,
            boxSize: data.radio,
          },
        ],
      })
    );
    alert('Card is created!');
    reset({
      title: '',
      price: 0,
      date: '',
      check: false,
      radio: 'small',
      color: 'red',
      file: '',
    });
  };
  return (
    <div>
      <Header />
      <form className="Form_Header" onSubmit={handleSubmit(onSubmit)}>
        <input
          id="Form_textInput"
          defaultValue="Title"
          type="string"
          {...register('title', { required: true })}
        />
        {errors.title && <span>This field is required</span>}
        <input
          id="Form_numberInput"
          type="number"
          {...register('price', { required: true, min: 1, max: 99 })}
        />
        {errors.price && <span>This field is required and [1..99] </span>}
        <input id="Form_dateInput" type="date" {...register('date', { required: true })} />
        {errors.date && <span>This field is required</span>}
        <input type="checkbox" {...register('check', { required: true })} />
        {errors.check && <span>This field is required</span>}
        <fieldset className="Form_Header__fieldset">
          <label htmlFor="radio0">
            <input type="radio" id="radio0" value="small" {...register('radio')} defaultChecked />
            small
          </label>
          <label htmlFor="radio1">
            <input type="radio" id="radio1" value="medium" {...register('radio')} />
            medium
          </label>
          <label htmlFor="radio2">
            <input type="radio" id="radio2" value="big" {...register('radio')} />
            big
          </label>
        </fieldset>
        <select id="Form_select" {...register('color')}>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="black">black</option>
        </select>
        <input type="file" {...register('file', { required: true })} />
        <input type="submit" />
      </form>
    </div>
  );
}
