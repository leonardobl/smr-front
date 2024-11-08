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

  return { ...DefaulValueTable1.salario_liquido_contribuicao, sem_migracao };
}
