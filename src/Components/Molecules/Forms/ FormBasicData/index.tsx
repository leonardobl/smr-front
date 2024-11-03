import { SexoEnum } from "../../../../Enum/sexo";

import { Input } from "../../../Atoms/Input";
import { InputMoney } from "../../../Atoms/InputMoney";
import { InputRadio } from "../../../Atoms/InputRadio";
import { SimpleSelect } from "../../../Atoms/SimpleSelect";
import * as S from "./styles";

export const FormBasicData = () => {
  return (
    <S.FormBasic>
      <div>
        <Input label="Nome" placeholder="Digite seu nome" />
      </div>
      <div>
        <Input label="Data de nascimento" placeholder="00/00/0000" />
      </div>
      <div>
        <InputRadio
          label="Sexo"
          values={[SexoEnum.Masculino, SexoEnum.Feminino]}
          name="sexo"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div>
        <InputMoney placeholder="R$ 0,00" label="Remuneração ativa atual" />
      </div>
      <div>
        <InputMoney placeholder="R$ 0,00" label="Benefício Especial" />
      </div>

      <div>
        <SimpleSelect
          label="Prazo de recebimento do benefício no RPC"
          placeholder={"Selecione um prazo"}
        />
      </div>
      <div>
        <Input
          type="number"
          label="Idade de ingresso Ente Federativo"
          placeholder="30"
        />
      </div>
      <div>
        <Input
          type="number"
          label="Idade prevista para aposentadoria"
          placeholder="60"
        />
      </div>
    </S.FormBasic>
  );
};
