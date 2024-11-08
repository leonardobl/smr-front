import { DefaultValueTable1 } from "../../Data/DeafaultValue/Table1";
import { IFaseTableItem } from "./../../Types/table.d";

export function formatDataSomaContribuicaoFaseAtiva({
  contribuicao_RPPS,
  contribuicao_RPC_basica,
  contribuicao_RPC_facultativa,
}: {
  contribuicao_RPPS: IFaseTableItem;
  contribuicao_RPC_basica: IFaseTableItem;
  contribuicao_RPC_facultativa: IFaseTableItem;
}): IFaseTableItem {
  const sem_migracao =
    contribuicao_RPPS.sem_migracao +
    contribuicao_RPC_basica.sem_migracao +
    contribuicao_RPC_facultativa.sem_migracao;

  const com_migracao =
    contribuicao_RPPS.com_migracao +
    contribuicao_RPC_basica.com_migracao +
    contribuicao_RPC_facultativa.com_migracao;

  const com_migracao_rpc_basica =
    contribuicao_RPPS.com_migracao_rpc_basica +
    contribuicao_RPC_basica.com_migracao_rpc_basica +
    contribuicao_RPC_facultativa.com_migracao_rpc_basica;

  const com_migracao_rpc_facultativa =
    contribuicao_RPPS.com_migracao_rpc_basica +
    contribuicao_RPC_basica.com_migracao_rpc_basica +
    contribuicao_RPC_facultativa.com_migracao_rpc_facultativa;

  return {
    ...DefaultValueTable1.soma_contribuicao,
    sem_migracao,
    com_migracao,
    com_migracao_rpc_basica,
    com_migracao_rpc_facultativa,
  };
}
