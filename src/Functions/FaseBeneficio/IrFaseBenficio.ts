import { DefaultValueTable2 } from "../../Data/DeafaultValue/Table2";
import { TabelaIR } from "../../Data/TabelaIR";

import { IFaseTableItem } from "../../Types/table";

export function IrFaseBeneficio({
  saldo_liquido_ir,
}: {
  saldo_liquido_ir: IFaseTableItem;
}): IFaseTableItem {
  const IR_CORRESPONDENTE_SEM_MIGRACAO = Object.values(TabelaIR).find(
    (ir) =>
      saldo_liquido_ir.sem_migracao >= ir.min &&
      saldo_liquido_ir.sem_migracao <= ir.max
  );
  const sem_migracao =
    (IR_CORRESPONDENTE_SEM_MIGRACAO!.aliquota / 100) *
      saldo_liquido_ir.sem_migracao -
    IR_CORRESPONDENTE_SEM_MIGRACAO!.deducao;

  // const com_migracao =
  //   (IR_CORRESPONDENTE_SEM_MIGRACAO!.aliquota / 100) *
  //     salario_liquido_contribuicao.com_migracao -
  //   IR_CORRESPONDENTE_SEM_MIGRACAO!.deducao;

  // const com_migracao_rpc_basica =
  //   (IR_CORRESPONDENTE_SEM_MIGRACAO!.aliquota / 100) *
  //     salario_liquido_contribuicao.com_migracao_rpc_basica -
  //   IR_CORRESPONDENTE_SEM_MIGRACAO!.deducao;

  // const com_migracao_rpc_facultativa =
  //   (IR_CORRESPONDENTE_SEM_MIGRACAO!.aliquota / 100) *
  //     salario_liquido_contribuicao.com_migracao_rpc_facultativa -
  //   IR_CORRESPONDENTE_SEM_MIGRACAO!.deducao;
  return {
    ...DefaultValueTable2.ir_fase_beneficio,
    sem_migracao,
  };
}
