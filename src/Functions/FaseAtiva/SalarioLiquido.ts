import { DefaulValueTable1 } from "./../../Components/Templates/HomeTemplate/useHome";
import { ITypeFaseTable } from "./../../Types/table.d";
import { IFormMainDTO } from "./../../Types/formMain.d";

export function formatDataSalarioLiquidoFaseAtiva({
  data,
  remuneracao,
  soma_contribuicao,
}: {
  data: IFormMainDTO;
  remuneracao: ITypeFaseTable;
  soma_contribuicao: ITypeFaseTable;
}): ITypeFaseTable {
  console.log(data);
  const sem_migracao =
    remuneracao.sem_migracao - soma_contribuicao.sem_migracao;

  const com_migracao =
    remuneracao.sem_migracao - soma_contribuicao.com_migracao;

  const com_migracao_rpc_basica =
    remuneracao.sem_migracao - soma_contribuicao.com_migracao_rpc_basica;

  const com_migracao_rpc_facultativa =
    remuneracao.sem_migracao - soma_contribuicao.com_migracao_rpc_facultativa;

  return {
    ...DefaulValueTable1.salario_liquido_contribuicao,
    sem_migracao,
    com_migracao,
    com_migracao_rpc_basica,
    com_migracao_rpc_facultativa,
  };
}
