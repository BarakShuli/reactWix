import React from 'react';
import styles from './widgetNavBar.module.scss';

const widgetNavBar: React.FC = () => (
  <div className={styles.widgetNavBar} data-testid="widgetNavBar">
    widgetNavBar Component
  </div>
);

export default widgetNavBar;
