import React from 'react';
import Button from '../Button';
import Svg from '../ImportImage';

export default function ButtonBox() {
  return (
    <div>
      <br />
      <br />
      <Button typebtn="warning">
        <Svg name="filter" />
        Найти объекты
      </Button>
      <br />
      <br />
      <Button typebtn="clear">Очистить форму</Button>
      <br />
      <br />
      <Button typebtn="info">
        <Svg name="calc" />
        Рассчитать
      </Button>
      <br />
      <br />
      <Button typebtn="warning">
        <Svg name="calc" />
        Рассчитать
      </Button>
      <br />
      <br />
      <Button disabled="" typebtn="disabled">
        Отправить
      </Button>
      <br />
      <br />
      <Button typebtn="warning">Oтправить</Button>
      <br />
      <br />
      <Button typebtn="invert">Вернуться на главную</Button>
      <br />
    </div>
  );
}
