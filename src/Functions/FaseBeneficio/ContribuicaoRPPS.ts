import { IFaseTableItem } from "./../../Types/table.d";
import { DefaultValueTable2 } from "./../../Data/DeafaultValue/Table2";
import { IFormMainDTO } from "../../Types/formMain";

export function formatDataContribuicaoRPPSFaseBeneficio({
  data,
  beneficio_rpps,
}: {
  data: IFormMainDTO;
  beneficio_rpps: IFaseTableItem;
}): IFaseTableItem {
  const sem_migracao =
    (beneficio_rpps.sem_migracao - data.valor_teto_rgps) *
    (data.aliquota_contribuicao_rpps / 100);
  return { ...DefaultValueTable2.contribuicao_beneficio_RPPS, sem_migracao };
}
