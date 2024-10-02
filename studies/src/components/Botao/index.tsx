import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode; // Adicionando a prop children
}> {
  render() {
    const { type = "button", children } = this.props;
    return (
      <button type={type} className={style.botao}>
        {children}
      </button>
    );
  }
}

export default Botao;
