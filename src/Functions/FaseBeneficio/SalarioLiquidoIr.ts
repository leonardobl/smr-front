import { DefaultValueTable2 } from "../../Data/DeafaultValue/Table2";
import { IFormMainDTO } from "../../Types/formMain";
import { IFaseTableItem } from "../../Types/table";

export function formatDataSalarioLiquidoIRFaseBeneficio({
  data,
  beneficio_rpps,
  contribuicao_beneficio_RPPS,
}: {
  data: IFormMainDTO;
  beneficio_rpps: IFaseTableItem;
  contribuicao_beneficio_RPPS: IFaseTableItem;
}): IFaseTableItem {
  const sem_migracao =
    data.idade_prevista_aposentadoria >= 65
      ? beneficio_rpps.sem_migracao
      : beneficio_rpps.sem_migracao - contribuicao_beneficio_RPPS.sem_migracao;

  return { ...DefaultValueTable2.saldo_liquido_ir, sem_migracao };
}
