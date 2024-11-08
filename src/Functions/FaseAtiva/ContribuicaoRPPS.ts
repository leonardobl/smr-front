import { IFormMainDTO } from "../../Types/formMain";
import { ITableFaseAtiva } from "../../Types/table";

export function formatDataContribuicaoRPPSFaseAtiva({
  data,
  setTable,
}: {
  data: IFormMainDTO;
  setTable: React.Dispatch<React.SetStateAction<ITableFaseAtiva>>;
}) {
  console.log(data);

  const cont_sem_migracao =
    (data.remuneracao_ativa_atual * data.aliquota_contribuicao_rpps) / 100;

  setTable((prev) => ({
    ...prev,
    contribuicao_RPPS: {
      ...prev.contribuicao_RPPS,
      sem_migracao: cont_sem_migracao,
    },
  }));
}
