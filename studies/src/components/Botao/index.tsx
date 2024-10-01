import React from 'react';
import style from './Botao.module.scss';

// Definindo o tipo das props do Botao
interface BotaoProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

class Botao extends React.Component<BotaoProps> {
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
