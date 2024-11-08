import { DefaulValueTable1 } from "../../Components/Templates/HomeTemplate/useHome";
import { IFormMainDTO } from "../../Types/formMain";
import { ITypeFaseTable } from "../../Types/table";

export function formatDataContribuicaoRPPSFaseAtiva({
  data,
}: {
  data: IFormMainDTO;
}): ITypeFaseTable {
  const sem_migracao =
    (data.remuneracao_ativa_atual * data.aliquota_contribuicao_rpps) / 100;

  return {
    ...DefaulValueTable1.contribuicao_RPPS,
    sem_migracao,
  };
}
