import { IFormMainDTO } from "../../Types/formMain";
import { ITableFaseAtiva } from "../../Types/table";

export function formatDataRemuneracaoFaseAtiva({
  data,
  setTable,
}: {
  data: IFormMainDTO;
  setTable: React.Dispatch<React.SetStateAction<ITableFaseAtiva>>;
}) {
  const rem_sem_migracao = data.remuneracao_ativa_atual;

  setTable((prev) => ({
    ...prev,
    remuneracao: {
      ...prev.remuneracao,
      sem_migracao: rem_sem_migracao,
    },
  }));
}
