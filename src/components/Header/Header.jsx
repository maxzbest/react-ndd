import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Svg from '../ImportImage';
import Navigation from '../Navigation';
import FormSearch from '../FormSearch';
import ChangeRegion from '../ChangeRegion';
import styles from './Header.module.scss';
import PopUp from '../PopUp';
import ChangeRegionModal from '../ChangeRegionModal';

const DEFAULT_VALUE_SELECT = { value: '86', label: 'Ульяновская область' };

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRegion: DEFAULT_VALUE_SELECT,
      isModalOpen: false,
    };
  }

  showModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  handleSelectRegion = value => {
    this.setState({
      userRegion: value,
    });
  };

  render() {
    const { userRegion, isModalOpen } = this.state;
    const valueRegion = userRegion && userRegion.value;

    return (
      <div>
        <header className={styles.header}>
          <div className={styles.header__content}>
            <div className={styles.header__logo}>
              <Link to="/">
                <Svg name="logo" />
              </Link>
            </div>
            <div className={styles.header__title}>
              <Link to="/">
                <a href="/">Информация об условиях и порядке доступа к инфраструктуре ПАО «Ростелеком»</a>
              </Link>
            </div>
            <div className={styles.header__search}>
              <FormSearch />
            </div>
          </div>
          <Navigation />
        </header>
        <div className={styles.header__region}>
          <ChangeRegion isModalOpen={this.showModal} region={userRegion.label} />
        </div>
        <PopUp
          closeModal={this.closeModal}
          open={isModalOpen}
          innerComponent={
            <ChangeRegionModal
              selectedRegion={userRegion}
              valueSelect={valueRegion}
              defaultValue={valueRegion}
              handleSelect={this.handleSelectRegion}
              submitRegion={this.closeModal}
            />
          }
        />
      </div>
    );
  }
}
export default Header;
