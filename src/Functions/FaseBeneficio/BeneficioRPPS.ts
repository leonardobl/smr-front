import { DefaultValueTable2 } from "../../Data/DeafaultValue/Table2";
import { IFaseTableItem } from "../../Types/table";

export function formatDataBeneficioRPPSFaseBeneficio({
  remuneracao,
}: {
  remuneracao: IFaseTableItem;
}): IFaseTableItem {
  const sem_migracao = remuneracao.sem_migracao;
  return { ...DefaultValueTable2.beneficio_especial, sem_migracao };
}
