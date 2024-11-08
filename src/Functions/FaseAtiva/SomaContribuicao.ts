import { ITableFaseAtiva } from "./../../Types/table.d";
import { IFormMainDTO } from "./../../Types/formMain.d";

export function formatDataSomaContribuicaoFaseAtiva({
  data,
  setTable,
  table,
}: {
  data: IFormMainDTO;
  table: ITableFaseAtiva;
  setTable: React.Dispatch<React.SetStateAction<ITableFaseAtiva>>;
}) {
  console.log(data);

  const soma_sem_migracao =
    table.contribuicao_RPPS.sem_migracao +
    table.contribuicao_RPC_basica.sem_migracao +
    table.contribuicao_RPC_facultativa.sem_migracao;

  setTable((prev) => ({
    ...prev,
    soma_contribuicao: {
      ...prev.soma_contribuicao,
      sem_migracao: soma_sem_migracao,
    },
  }));
}
