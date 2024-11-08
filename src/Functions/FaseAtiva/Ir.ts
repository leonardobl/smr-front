import { DefaultValueTable1 } from "../../Data/DeafaultValue/Table1";
import { TabelaIR } from "../../Data/TabelaIR";
import { IFaseTableItem } from "../../Types/table";

export function IrFaseAtiva({
  salario_liquido_contribuicao,
}: {
  salario_liquido_contribuicao: IFaseTableItem;
}): IFaseTableItem {
  const IR_CORRESPONDENTE_SEM_MIGRACAO = Object.values(TabelaIR).find(
    (ir) =>
      salario_liquido_contribuicao.com_migracao >= ir.min &&
      salario_liquido_contribuicao.com_migracao <= ir.max
  );
  const sem_migracao =
    (IR_CORRESPONDENTE_SEM_MIGRACAO!.aliquota / 100) *
      salario_liquido_contribuicao.sem_migracao -
    IR_CORRESPONDENTE_SEM_MIGRACAO!.deducao;

  const com_migracao =
    (IR_CORRESPONDENTE_SEM_MIGRACAO!.aliquota / 100) *
      salario_liquido_contribuicao.com_migracao -
    IR_CORRESPONDENTE_SEM_MIGRACAO!.deducao;

  const com_migracao_rpc_basica =
    (IR_CORRESPONDENTE_SEM_MIGRACAO!.aliquota / 100) *
      salario_liquido_contribuicao.com_migracao_rpc_basica -
    IR_CORRESPONDENTE_SEM_MIGRACAO!.deducao;

  const com_migracao_rpc_facultativa =
    (IR_CORRESPONDENTE_SEM_MIGRACAO!.aliquota / 100) *
      salario_liquido_contribuicao.com_migracao_rpc_facultativa -
    IR_CORRESPONDENTE_SEM_MIGRACAO!.deducao;

  return {
    ...DefaultValueTable1.ir,
    sem_migracao,
    com_migracao,
    com_migracao_rpc_basica,
    com_migracao_rpc_facultativa,
  };
}
