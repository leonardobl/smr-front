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

  const com_migracao = Math.round(
    (data.aliquota_contribuicao_rpps / 100) *
      Math.min(data.remuneracao_ativa_atual, data.valor_teto_rgps)
  );

  return {
    ...DefaulValueTable1.contribuicao_RPPS,
    sem_migracao,
    com_migracao,
  };
}
