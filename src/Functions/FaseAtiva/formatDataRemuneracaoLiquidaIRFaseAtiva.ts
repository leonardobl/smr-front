import { DefaulValueTable1 } from "../../Components/Templates/HomeTemplate/useHome";
import { ITypeFaseTable } from "../../Types/table";

export function formatDataRemuneracaoLiquidaIRFaseAtiva({
  salario_liquido_contribuicao,
  ir,
}: {
  salario_liquido_contribuicao: ITypeFaseTable;
  ir: ITypeFaseTable;
}): ITypeFaseTable {
  const sem_migracao =
    salario_liquido_contribuicao.sem_migracao - ir.sem_migracao;

  const com_migracao =
    salario_liquido_contribuicao.com_migracao - ir.com_migracao;

  const com_migracao_rpc_basica =
    salario_liquido_contribuicao.com_migracao_rpc_basica -
    ir.com_migracao_rpc_basica;

  const com_migracao_rpc_facultativa =
    salario_liquido_contribuicao.com_migracao_rpc_facultativa -
    ir.com_migracao_rpc_facultativa;

  return {
    ...DefaulValueTable1.remuneracao_liquida_ir,
    sem_migracao,
    com_migracao,
    com_migracao_rpc_basica,
    com_migracao_rpc_facultativa,
  };
}
