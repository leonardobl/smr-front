import { DefaultValueTable1 } from "../../Data/DeafaultValue/Table1";
import { IFormMainDTO } from "../../Types/formMain";
import { IFaseTableItem } from "../../Types/table";

export function formatDataRemuneracaoFaseAtiva({
  data,
}: {
  data: IFormMainDTO;
}): IFaseTableItem {
  const rem_sem_migracao = data.remuneracao_ativa_atual;

  return { ...DefaultValueTable1.remuneracao, sem_migracao: rem_sem_migracao };
}
