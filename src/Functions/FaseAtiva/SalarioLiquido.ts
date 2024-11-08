import { IFaseTableItem } from "./../../Types/table.d";
import { IFormMainDTO } from "./../../Types/formMain.d";
import { DefaultValueTable1 } from "../../Data/DeafaultValue/Table1";

export function formatDataSalarioLiquidoFaseAtiva({
  data,
  remuneracao,
  soma_contribuicao,
}: {
  data: IFormMainDTO;
  remuneracao: IFaseTableItem;
  soma_contribuicao: IFaseTableItem;
}): IFaseTableItem {
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
    ...DefaultValueTable1.salario_liquido_contribuicao,
    sem_migracao,
    com_migracao,
    com_migracao_rpc_basica,
    com_migracao_rpc_facultativa,
  };
}
