import React, { Component, Fragment } from 'react';
import MaskedInput from 'react-text-mask';
import cn from 'classnames';
import emailMask from 'text-mask-addons/dist/emailMask';

import SymbolCount from '../SymbolCount';
import TextArea from '../TextArea';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Input from '../Input';
import SelectForm from '../Select';
import styles from './PageFeedback.module.scss';

const DEFAULT_VALUE_SELECT = { value: '1', label: '1' };
const MAX_LENGTH = 500;

export default class PageFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValueOrgName: '',
      isEmptyOrgName: true,
      isDirtyOrgName: false,
      inputValueClientName: '',
      isEmptyClientName: true,
      isDirtyClientName: false,
      inputValuePhone: '',
      isEmptyPhone: true,
      isDirtyPhone: false,
      inputValueEmail: '',
      isEmptyEmail: true,
      isDirtyEmail: false,
      inputValueAppealTheme: '',
      isEmptyAppealTheme: true,
      isDirtyAppealTheme: false,
      selectedOrganization: DEFAULT_VALUE_SELECT,
      checkbox: false,
      agreeNotChecked: true,
      textAreaValue: '',
      isEmptyTextAreaValue: true,
      isDirtyTextAreaValue: false,
    };
  }

  getCounterType = () => {
    const { textAreaValue } = this.state;
    if (textAreaValue.length && textAreaValue.length <= MAX_LENGTH) return 'valid';
    return 'invalid';
  };

  checkboxHandleChange = () => {
    this.setState(({ agreeNotChecked, checkbox }) => ({ agreeNotChecked: !agreeNotChecked, checkbox: !checkbox }));
  };

  handleChangeInputOrgName = orgName => {
    this.setState({
      inputValueOrgName: orgName,
    });

    if (orgName.trim().length > 0) {
      this.setState({
        isEmptyOrgName: false,
      });
    } else {
      this.setState({
        isEmptyOrgName: true,
      });
    }
  };

  handleClickInputOrgName = () => {
    this.setState({
      isDirtyOrgName: true,
    });
  };

  handleFocusInputOrgName = () => {
    this.setState({
      isDirtyOrgName: true,
    });
  };

  handleChangeInputClientName = clientName => {
    this.setState({
      inputValueClientName: clientName,
    });

    if (clientName.trim().length > 0) {
      this.setState({
        isEmptyClientName: false,
      });
    } else {
      this.setState({
        isEmptyClientName: true,
      });
    }
  };

  handleClickInputClientName = () => {
    this.setState({
      isDirtyClientName: true,
    });
  };

  handleFocusInputClientName = () => {
    this.setState({
      isDirtyClientName: true,
    });
  };

  handleChangeInputPhone = e => {
    this.setState({
      inputValuePhone: e.target.value,
    });

    const phoneNumbersCount = e.target.value.split('').filter(elem => Number(elem) || elem === '0');

    if (phoneNumbersCount.length > 10) {
      this.setState({
        isEmptyPhone: false,
      });
    } else {
      this.setState({
        isEmptyPhone: true,
      });
    }
  };

  handleClickInputPhone = () => {
    this.setState({
      isDirtyPhone: true,
    });
  };

  handleFocusInputPhone = () => {
    this.setState({
      isDirtyPhone: true,
    });
  };

  handleChangeInputEmail = e => {
    this.setState({
      inputValueEmail: e.target.value,
    });

    const validateEmail = email => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };

    if (validateEmail(e.target.value) === true) {
      this.setState({
        isEmptyEmail: false,
      });
    } else {
      this.setState({
        isEmptyEmail: true,
      });
    }
  };

  handleClickInputEmail = () => {
    this.setState({
      isDirtyEmail: true,
    });
  };

  handleFocusInputEmail = () => {
    this.setState({
      isDirtyEmail: true,
    });
  };

  handleChangeInputAppealTheme = appealTheme => {
    this.setState({
      inputValueAppealTheme: appealTheme,
    });

    if (appealTheme.trim().length > 0) {
      this.setState({
        isEmptyAppealTheme: false,
      });
    } else {
      this.setState({
        isEmptyAppealTheme: true,
      });
    }
  };

  handleClickInputAppealTheme = () => {
    this.setState({
      isDirtyAppealTheme: true,
    });
  };

  handleFocusInputAppealTheme = () => {
    this.setState({
      isDirtyAppealTheme: true,
    });
  };

  handleTextAreaValueChange = text => {
    this.setState({
      textAreaValue: text,
    });

    if (text.trim().length > 0) {
      this.setState({
        isEmptyTextAreaValue: false,
      });
    } else {
      this.setState({
        isEmptyTextAreaValue: true,
      });
    }
  };

  handleClickTextAreaValue = () => {
    this.setState({
      isDirtyTextAreaValue: true,
    });
  };

  handleFocusTextAreaValue = () => {
    this.setState({
      isDirtyTextAreaValue: true,
    });
  };

  handleSelectOrganization = valueOrganization => {
    this.setState({
      selectedOrganization: valueOrganization,
    });
  };

  renderInputOrgNameWarning = () => {
    const { inputValueOrgName, isDirtyOrgName } = this.state;
    return inputValueOrgName.trim().length === 0 && isDirtyOrgName === true ? (
      <span className={styles.errornotice}>Обязательное поле</span>
    ) : (
      false
    );
  };

  renderInputClientNameWarning = () => {
    const { inputValueClientName, isDirtyClientName } = this.state;
    return inputValueClientName.trim().length === 0 && isDirtyClientName === true ? (
      <span className={styles.errornotice}>Обязательное поле</span>
    ) : (
      false
    );
  };

  renderInputPhoneWarning = () => {
    const { inputValuePhone, isDirtyPhone } = this.state;
    const phoneNumbersCount = inputValuePhone.split('').filter(elem => Number(elem) || elem === '0');
    return phoneNumbersCount.length <= 10 && isDirtyPhone === true ? (
      <span className={styles.errornotice}>Обязательное поле</span>
    ) : (
      false
    );
  };

  renderInputEmailWarning = () => {
    const { inputValueEmail, isDirtyEmail } = this.state;
    const validateEmail = email => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };
    return validateEmail(inputValueEmail) === false && isDirtyEmail === true ? (
      <span className={styles.errornotice}>Обязательное поле</span>
    ) : (
      false
    );
  };

  renderInputAppealThemeWarning = () => {
    const { inputValueAppealTheme, isDirtyAppealTheme } = this.state;
    return inputValueAppealTheme.trim().length === 0 && isDirtyAppealTheme === true ? (
      <span className={styles.errornotice}>Обязательное поле</span>
    ) : (
      false
    );
  };

  renderButton = () => {
    const {
      isEmptyOrgName,
      isEmptyClientName,
      isEmptyPhone,
      isEmptyEmail,
      isEmptyAppealTheme,
      agreeNotChecked,
      isEmptyTextAreaValue,
      textAreaValue,
    } = this.state;

    const inputsValidation =
      isEmptyOrgName ||
      isEmptyClientName ||
      isEmptyPhone ||
      isEmptyEmail ||
      isEmptyAppealTheme ||
      agreeNotChecked ||
      isEmptyTextAreaValue ||
      textAreaValue.length > MAX_LENGTH;

    return inputsValidation === false ? (
      <Button typebtn="warning">Oтправить</Button>
    ) : (
      <Button disabled="" typebtn="disabled">
        Отправить
      </Button>
    );
  };

  renderCounter = () => {
    const { textAreaValue, isDirtyTextAreaValue } = this.state;
    if (textAreaValue.length === 0 && isDirtyTextAreaValue === true) {
      return <div className={styles.invalid}>Обязательное поле</div>;
    }

    if (textAreaValue.length > MAX_LENGTH) {
      return <div className={styles.invalid}>Превышено максимальное кол-во символов ({MAX_LENGTH})</div>;
    }

    if (isDirtyTextAreaValue === true) {
      return <SymbolCount count={MAX_LENGTH - textAreaValue.length} type={this.getCounterType()} />;
    }

    return false;
  };

  render() {
    const {
      inputValueOrgName,
      isEmptyOrgName,
      isDirtyOrgName,
      inputValueClientName,
      isEmptyClientName,
      isDirtyClientName,
      inputValuePhone,
      isEmptyPhone,
      isDirtyPhone,
      inputValueEmail,
      isEmptyEmail,
      isDirtyEmail,
      inputValueAppealTheme,
      isEmptyAppealTheme,
      isDirtyAppealTheme,
      selectedOrganization,
      checkbox,
      textAreaValue,
      isEmptyTextAreaValue,
      isDirtyTextAreaValue,
    } = this.state;

    const valueOrganization = selectedOrganization && selectedOrganization.value;

    const inputOrgNameClass = cn({
      [styles.feedbackform__input]: true,
      [styles.errorborder]: isEmptyOrgName && isDirtyOrgName,
    });

    const inputClientNameClass = cn({
      [styles.feedbackform__input]: true,
      [styles.errorborder]: isEmptyClientName && isDirtyClientName,
    });

    const inputPhoneClass = cn({
      [styles.feedbackform__input]: true,
      [styles.errorborder]: isEmptyPhone && isDirtyPhone,
    });

    const inputEmailClass = cn({
      [styles.feedbackform__input]: true,
      [styles.errorborder]: isEmptyEmail && isDirtyEmail,
    });

    const inputAppealThemeClass = cn({
      [styles.feedbackform__input]: true,
      [styles.errorborder]: isEmptyAppealTheme && isDirtyAppealTheme,
    });

    const textAreaClass = cn({
      [styles.textarea]: true,
      [styles.errorborder]: isEmptyTextAreaValue && isDirtyTextAreaValue,
    });

    return (
      <Fragment>
        <h1>Обращение по работе Портала и Правилам недискриминационного доступа</h1>
        <div className={styles.flexcontainer}>
          <div className={styles.wrapper}>
            <form className={styles.feedbackform}>
              <div className={styles.rowtop}>
                <div className={styles.col}>
                  <div className={styles.feedbackform__item}>
                    <div className={styles.feedbackform__label}>
                      <abbr title="Обязательно для заполнения">*</abbr>
                      Наименование организации
                    </div>
                    <div className={styles.feedbackform__cell}>
                      <Input
                        className={inputOrgNameClass}
                        onChange={this.handleChangeInputOrgName}
                        onClick={this.handleClickInputOrgName}
                        onFocus={this.handleFocusInputOrgName}
                        value={inputValueOrgName}
                        name="orgName"
                        required
                      />
                      {this.renderInputOrgNameWarning()}
                    </div>
                  </div>
                  <div className={styles.feedbackform__item}>
                    <div className={styles.feedbackform__label}>
                      <abbr title="Обязательно для заполнения">*</abbr>
                      Тип организации
                    </div>
                    <div className={styles.feedbackform__cell}>
                      <SelectForm
                        options={[
                          { value: '1', label: 'Оператор' },
                          { value: '2', label: 'Госзаказчик' },
                          { value: '3', label: 'Бизнес-клиент' },
                          { value: '4', label: 'Застройщик' },
                          { value: '5', label: 'Подрядная организация' },
                          { value: '6', label: 'Частное лицо' },
                          { value: '7', label: 'Иное' },
                        ]}
                        defaultValue={selectedOrganization}
                        handleChange={this.handleSelectOrganization}
                        value={valueOrganization}
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.feedbackform__item}>
                    <div className={styles.feedbackform__label}>
                      <abbr title="Обязательно для заполнения">*</abbr>
                      Ф.И.О. представителя
                    </div>
                    <div className={styles.feedbackform__cell}>
                      <Input
                        className={inputClientNameClass}
                        onChange={this.handleChangeInputClientName}
                        onClick={this.handleClickInputClientName}
                        onFocus={this.handleFocusInputClientName}
                        value={inputValueClientName}
                        name="clientName"
                        required
                      />
                      {this.renderInputClientNameWarning()}
                    </div>
                  </div>
                  <div className={styles.feedbackform__item}>
                    <div className={styles.feedbackform__label}>
                      <abbr title="Обязательно для заполнения">*</abbr>
                      Контактный телефон
                    </div>
                    <div className={styles.feedbackform__cell}>
                      <MaskedInput
                        mask={[
                          '+',
                          '7',
                          ' ',
                          '(',
                          /[1-9]/,
                          /\d/,
                          /\d/,
                          ')',
                          ' ',
                          /\d/,
                          /\d/,
                          /\d/,
                          '-',
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                        ]}
                        className={inputPhoneClass}
                        placeholder="+7 (___) ___-____"
                        onChange={this.handleChangeInputPhone}
                        onClick={this.handleClickInputPhone}
                        onFocus={this.handleFocusInputPhone}
                        value={inputValuePhone}
                        required
                      />
                      {this.renderInputPhoneWarning()}
                    </div>
                  </div>
                  <div className={styles.feedbackform__item}>
                    <div className={styles.feedbackform__label}>
                      <abbr title="Обязательно для заполнения">*</abbr>
                      E-mail
                    </div>
                    <div className={styles.feedbackform__cell}>
                      <MaskedInput
                        mask={emailMask}
                        className={inputEmailClass}
                        placeholder="example@mail.com"
                        onChange={this.handleChangeInputEmail}
                        onClick={this.handleClickInputEmail}
                        onFocus={this.handleFocusInputEmail}
                        value={inputValueEmail}
                        required
                      />
                      {this.renderInputEmailWarning()}
                    </div>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.feedbackform__item}>
                    <div className={styles.feedbackform__label}>
                      <abbr title="Обязательно для заполнения">*</abbr>
                      Тема обращения
                    </div>
                    <div className={styles.feedbackform__cell}>
                      <Input
                        className={inputAppealThemeClass}
                        onChange={this.handleChangeInputAppealTheme}
                        onClick={this.handleClickInputAppealTheme}
                        onFocus={this.handleFocusInputAppealTheme}
                        value={inputValueAppealTheme}
                        name="appealTheme"
                        required
                      />
                      {this.renderInputAppealThemeWarning()}
                    </div>
                  </div>
                  <div className={styles.feedbackform__item}>
                    <div className={styles.feedbackform__label}>
                      <abbr title="Обязательно для заполнения">*</abbr>
                      Обращение
                    </div>
                    <TextArea
                      value={textAreaValue}
                      className={textAreaClass}
                      onChange={this.handleTextAreaValueChange}
                      onClick={this.handleClickTextAreaValue}
                      onFocus={this.handleFocusTextAreaValue}
                    />
                    {this.renderCounter()}
                  </div>
                  <div className={styles.feedbackform__item}>
                    <Checkbox handleChange={this.checkboxHandleChange} isChecked={checkbox} required />
                  </div>
                </div>
              </div>
              <div className={styles.rowbottom}>{this.renderButton()}</div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
