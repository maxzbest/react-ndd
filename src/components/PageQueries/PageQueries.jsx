import React, { Component } from 'react';
import styles from './PageQueries.module.scss';
import SelectForm from '../Select';
import Button from '../Button';
import Svg from '../ImportImage';
import TableQueries from '../Table/TableQueries';
import Input from '../Input/Input';
import TablePagination from '../TablePagination';

const DEFAULT_VALUE_SELECT = { value: '1', label: '1' };

export default class PageQueries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValueNameObject: '',
      inputValueAddress: '',
      inputValueTerm: '',
      selectedCounty: DEFAULT_VALUE_SELECT,
      activePage: 1,
      countData: 50,
    };
  }

  handleNameObjectChange = value => {
    this.setState({
      inputValueNameObject: value,
    });
  };

  handleAddressChange = value => {
    this.setState({
      inputValueAddress: value,
    });
  };

  handleTermChange = value => {
    this.setState({
      inputValueTerm: value,
    });
  };

  clearInputs = () => {
    this.setState({
      selectedCounty: DEFAULT_VALUE_SELECT,
    });
  };

  handleSelectCounty = value => {
    this.setState({
      selectedCounty: value,
    });
  };

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  render() {
    const {
      inputValueNameObject,
      inputValueAddress,
      inputValueTerm,
      selectedCounty,
      activePage,
      countData,
    } = this.state;
    const valueCounty = selectedCounty && selectedCounty.value;
    return (
      <div>
        <h1 className={styles.form_title}>Порядок и условия выполнения запросов</h1>
        <div className={styles.form_location}>
          <div className={styles.wrap_form}>
            <form className={styles.form}>
              <div className={styles.form_row}>
                <div className={styles.form_item}>
                  <p className={styles.form_label}>Федеральный округ/субъект РФ</p>
                  <SelectForm
                    options={[
                      { value: '1', label: 'Все' },
                      { value: '2', label: 'Дальневосточный федеральный округ' },
                      { value: '3', label: 'Крымский федеральный округ' },
                      { value: '4', label: 'Приволжский федеральный округ' },
                      { value: '5', label: 'Северо-Кавказский федеральный округ' },
                      { value: '6', label: 'Северо-Западный федеральный округ' },
                      { value: '7', label: 'Сибирский федеральный округ' },
                      { value: '8', label: 'Уральский федеральный округ' },
                      { value: '9', label: 'Центральный федеральный округ' },
                      { value: '10', label: 'Южный федеральный округ' },
                      { value: '11', label: 'Республика Адыгея (Адыгея)' },
                      { value: '12', label: 'Республика Алтай' },
                      { value: '13', label: 'Алтайский край' },
                      { value: '14', label: 'Амурская область' },
                      { value: '15', label: 'Архангельская область' },
                      { value: '16', label: 'Астраханская область' },
                      { value: '17', label: 'Республика Башкортостан' },
                      { value: '18', label: 'Белгородская область' },
                      { value: '19', label: 'Брянская область' },
                      { value: '20', label: 'Республика Бурятия' },
                      { value: '21', label: 'Владимирская область' },
                      { value: '22', label: 'Волгоградская область' },
                      { value: '23', label: 'Вологодская область' },
                      { value: '24', label: 'Воронежская область' },
                      { value: '25', label: 'Республика Дагестан' },
                      { value: '26', label: 'Еврейская автономная область' },
                      { value: '27', label: 'Забайкальский край' },
                      { value: '28', label: 'Ивановская область' },
                      { value: '29', label: 'Республика Ингушетия' },
                      { value: '30', label: 'Иркутская область' },
                      { value: '31', label: 'Кабардино-Балкарская Республика' },
                      { value: '32', label: 'Калининградская область' },
                      { value: '33', label: 'Республика Калмыкия' },
                      { value: '34', label: 'Калужская область' },
                      { value: '35', label: 'Камчатский край' },
                      { value: '36', label: 'Карачаево-Черкесская Республика' },
                      { value: '37', label: 'Республика Карелия' },
                      { value: '38', label: 'Кемеровская область' },
                      { value: '39', label: 'Кировская область' },
                      { value: '40', label: 'Республика Коми' },
                      { value: '41', label: 'Костромская область' },
                      { value: '42', label: 'Краснодарский край' },
                      { value: '43', label: 'Красноярский край' },
                      { value: '44', label: 'Республика Крым' },
                      { value: '45', label: 'Курганская область' },
                      { value: '46', label: 'Курская область' },
                      { value: '47', label: 'Ленинградская область' },
                      { value: '48', label: 'Липецкая область' },
                      { value: '49', label: 'Магаданская область' },
                      { value: '50', label: 'Республика Марий Эл' },
                      { value: '51', label: 'Республика Мордовия' },
                      { value: '52', label: 'Г.Москва' },
                      { value: '53', label: 'Московская область' },
                      { value: '54', label: 'Мурманская область' },
                      { value: '55', label: 'Ненецкий автономный округ' },
                      { value: '56', label: 'Нижегородская область' },
                      { value: '57', label: 'Новгородская область' },
                      { value: '58', label: 'Новосибирская область' },
                      { value: '59', label: 'Омская область' },
                      { value: '60', label: 'Оренбургская область' },
                      { value: '61', label: 'Орловская область' },
                      { value: '62', label: 'Пензенская область' },
                      { value: '63', label: 'Пермский край' },
                      { value: '64', label: 'Приморский край' },
                      { value: '65', label: 'Псковская область' },
                      { value: '66', label: 'Ростовская область' },
                      { value: '67', label: 'Рязанская область' },
                      { value: '68', label: 'Самарская область' },
                      { value: '69', label: 'Г.Санкт-Петербург' },
                      { value: '70', label: 'Саратовская область' },
                      { value: '71', label: 'Республика Саха (Якутия)' },
                      { value: '72', label: 'Сахалинская область' },
                      { value: '73', label: 'Свердловская область' },
                      { value: '74', label: 'Г.Севастополь' },
                      { value: '75', label: 'Республика Северная Осетия - Алания' },
                      { value: '76', label: 'Смоленская область' },
                      { value: '77', label: 'Ставропольский край' },
                      { value: '78', label: 'Тамбовская область' },
                      { value: '79', label: 'Республика Татарстан (Татарстан)' },
                      { value: '80', label: 'Тверская область' },
                      { value: '81', label: 'Томская область' },
                      { value: '82', label: 'Тульская область' },
                      { value: '83', label: 'Республика Тыва' },
                      { value: '84', label: 'Тюменская область' },
                      { value: '85', label: 'Удмуртская Республика' },
                      { value: '86', label: 'Ульяновская область' },
                      { value: '87', label: 'Хабаровский край' },
                      { value: '88', label: 'Республика Хакасия' },
                      { value: '89', label: 'Ханты-Мансийский автономный округ - Югра' },
                      { value: '90', label: 'Челябинская область' },
                      { value: '91', label: 'Чеченская Республика' },
                      { value: '92', label: 'Чувашская Республика - Чувашия' },
                      { value: '93', label: 'Чукотский автономный округ' },
                      { value: '94', label: 'Ямало-Ненецкий автономный округ' },
                      { value: '95', label: 'Ярославская область' },
                    ]}
                    defaultValue={selectedCounty}
                    handleSelect={this.handleSelectCounty}
                    value={valueCounty}
                  />
                </div>
                <div className={styles.form_item}>
                  <p className={styles.form_label}>Наименование объекта</p>
                  <Input name="NameObject" onChange={this.handleNameObjectChange} value={inputValueNameObject} />
                </div>
              </div>
              <div className={styles.form_row}>
                <div className={styles.form_item}>
                  <p className={styles.form_label}>Адрес для направления запроса</p>
                  <Input name="Address" onChange={this.handleAddressChange} value={inputValueAddress} />
                </div>
                <div className={styles.form_item}>
                  <p className={styles.form_label}>Срок выполнения запроса</p>
                  <Input name="Term" onChange={this.handleTermChange} value={inputValueTerm} />
                </div>
              </div>
              <div className={styles.form_footer}>
                <Button className={styles.form_button} typebtn="warning">
                  <Svg name="filter" />
                  Найти запросы
                </Button>
                <Button typebtn="clear" onClick={this.clearInputs}>
                  Очистить форму
                </Button>
              </div>
            </form>
          </div>
        </div>
        <TableQueries countData={countData} />
        <TablePagination activePage={activePage} onChange={this.handlePageChange} totalItemsCount={countData} />
      </div>
    );
  }
}
