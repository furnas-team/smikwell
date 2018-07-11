import React from 'react';
import './button.scss'
import classNames from 'classnames';
import {string, any, func} from 'prop-types';

export class Button extends React.Component {

  static propTypes = {
    className: string,
    children: any,
    onClick: func,
    href: string
  };

  static defaultProps = {
    onClick() {
    }
  };

  render() {
    const {className, children, onClick, href} = this.props;

    return (
      <a className={classNames('button', className)}
         href={href}
         onClick={onClick}>
        {children}
      </a>
    );
  }

}
