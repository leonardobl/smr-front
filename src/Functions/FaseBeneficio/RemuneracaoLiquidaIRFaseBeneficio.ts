import { IFormMainDTO } from "./../../Types/formMain.d";
import { DefaultValueTable2 } from "../../Data/DeafaultValue/Table2";
import { IFaseTableItem } from "../../Types/table";

export function formatDataRemuneracaoLiquidaIRFaseBeneficio({
  contribuicao_beneficio_RPPS,
  ir_fase_beneficio,
  beneficio_rpps,
  data,
}: {
  contribuicao_beneficio_RPPS: IFaseTableItem;
  ir_fase_beneficio: IFaseTableItem;
  beneficio_rpps: IFaseTableItem;
  data: IFormMainDTO;
}): IFaseTableItem {
  const sem_migracao =
    beneficio_rpps.sem_migracao +
    data.beneficio_especial -
    contribuicao_beneficio_RPPS.sem_migracao -
    ir_fase_beneficio.sem_migracao;

  // const com_migracao =
  //   contribuicao_beneficio_RPPS.com_migracao - ir_fase_beneficio.com_migracao;

  // const com_migracao_rpc_basica =
  //   contribuicao_beneficio_RPPS.com_migracao_rpc_basica -
  //   ir_fase_beneficio.com_migracao_rpc_basica;

  // const com_migracao_rpc_facultativa =
  //   contribuicao_beneficio_RPPS.com_migracao_rpc_facultativa -
  //   ir_fase_beneficio.com_migracao_rpc_facultativa;

  return {
    ...DefaultValueTable2.remuneracao_liquida_ir_fase_beneficio,
    sem_migracao,
    // com_migracao,
    // com_migracao_rpc_basica,
    // com_migracao_rpc_facultativa,
  };
}
