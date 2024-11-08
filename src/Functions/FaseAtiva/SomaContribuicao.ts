import { DefaulValueTable1 } from "./../../Components/Templates/HomeTemplate/useHome";
import { ITypeFaseTable } from "./../../Types/table.d";
import { IFormMainDTO } from "./../../Types/formMain.d";

export function formatDataSomaContribuicaoFaseAtiva({
  data,
  contribuicao_RPPS,
  contribuicao_RPC_basica,
  contribuicao_RPC_facultativa,
}: {
  data: IFormMainDTO;
  contribuicao_RPPS: ITypeFaseTable;
  contribuicao_RPC_basica: ITypeFaseTable;
  contribuicao_RPC_facultativa: ITypeFaseTable;
}): ITypeFaseTable {
  console.log(data);
  const sem_migracao =
    contribuicao_RPPS.sem_migracao +
    contribuicao_RPC_basica.sem_migracao +
    contribuicao_RPC_facultativa.sem_migracao;

  return { ...DefaulValueTable1.soma_contribuicao, sem_migracao: sem_migracao };
}
