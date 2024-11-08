import { DefaultValueTable2 } from "./../../../Data/DeafaultValue/Table2";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { IFormMainDTO } from "../../../Types/formMain";
import { SexoEnum } from "../../../Enum/sexo";
import { maskNiver } from "../../../Util/masks";
import { useContextSite } from "../../../Hooks/useContextSite";
import { ITableFaseAtiva, ITableFaseBeneficio } from "../../../Types/table";
import { formatDataRemuneracaoFaseAtiva } from "../../../Functions/FaseAtiva/Remuneracao";
import { formatDataContribuicaoRPPSFaseAtiva } from "../../../Functions/FaseAtiva/ContribuicaoRPPS";
import { formatDataContribuicaoRPCBasicaFaseAtiva } from "../../../Functions/FaseAtiva/ContribuicaoRPCBasica";
import { formatDataContribuicaoRPCBasicaFacultativaFaseAtiva } from "../../../Functions/FaseAtiva/ContribuicaoRPCBasicaFacultativa";
import { formatDataSomaContribuicaoFaseAtiva } from "../../../Functions/FaseAtiva/SomaContribuicao";
import { formatDataSalarioLiquidoFaseAtiva } from "../../../Functions/FaseAtiva/SalarioLiquido";
import { IrFaseAtiva } from "../../../Functions/FaseAtiva/Ir";
import { formatDataRemuneracaoLiquidaIRFaseAtiva } from "../../../Functions/FaseAtiva/RemuneracaoLiquidaIRFaseAtiva";
import { DefaultValueTable1 } from "../../../Data/DeafaultValue/Table1";
import { formatDataBeneficioRPPSFaseBeneficio } from "../../../Functions/FaseBeneficio/BeneficioRPPS";
import { formatDataContribuicaoRPPSFaseBeneficio } from "../../../Functions/FaseBeneficio/ContribuicaoRPPS";
import { formatDataSalarioLiquidoIRFaseBeneficio } from "../../../Functions/FaseBeneficio/SalarioLiquidoIr";
import { IrFaseBeneficio } from "../../../Functions/FaseBeneficio/IrFaseBenficio";
import { formatDataRemuneracaoLiquidaIRFaseBeneficio } from "../../../Functions/FaseBeneficio/RemuneracaoLiquidaIRFaseBeneficio";

const schema = z.object({
  nome: z.string(),
  data_nascimento: z.string().min(10),
  sexo: z.string(),
  remuneracao_ativa_atual: z.number().gt(0),
  beneficio_especial: z.number(),
  prazo_recebimento_beneficio_rpc: z.string(),
  idade_ingresso_ente_federativo: z.number(),
  idade_prevista_aposentadoria: z.number().gt(0),
  taxa_juros_anual: z.string(),
  aliquota_contribuicao_rpps: z.number().gt(0),
  aliquota_contribuicao_rpc: z.number(),
  valor_teto_rgps: z.number().gt(0),
  salario_contribuicao_rpc: z.number(),
  indice_infl: z.number(),
  indice_reajuste_beneficio_rpc: z.number(),
  indice_reajuste_beneficio_rpps: z.number(),
  indice_reajuste_paridade: z.number(),
});

const PrazosOptions = ["5", "10", "15", "20", "25", "Vitalício"].map(
  (item) => ({
    label: !isNaN(+item) ? `${item} Anos` : item,
    value: item,
  })
);

const Taxas_Anual_Options = [
  "0,50%",
  "1,00%",
  "1,50%",
  "2,00%",
  "2,50%",
  "3,00%",
  "3,50%",
  "4,00%",
  "4,50%",
  "5,00%",
  "5,50%",
  "6,00%",
  "6,50%",
  "7,00%",
  "7,50%",
  "8,00%",
  "8,50%",
  "9,00%",
  "9,50%",
  "10,00%",
  "10,50%",
  "11,00%",
  "11,50%",
  "12,00%",
  "12,50%",
  "13,00%",
  "13,50%",
  "14,00%",
  "14,50%",
  "15,00%",
  "15,50%",
  "16,00%",
].map((item) => ({
  label: item,
  value: item,
}));

export const useHome = () => {
  const { setIsLoad } = useContextSite();
  const [formNumber, setFormNumber] = useState(1);
  const [valorTeto, setValorTeto] = useState("");
  const [remuneracaoAtivaAtualText, setRemuneracaoAtivaAtualText] =
    useState("");
  const [beneficioEspecialText, setBeneficioEspecialText] = useState("");
  const [table1, setTable1] = useState<ITableFaseAtiva>(DefaultValueTable1);
  const [table2, setTable2] = useState<ITableFaseBeneficio>(DefaultValueTable2);

  const {
    control,
    register,
    reset,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IFormMainDTO>({
    defaultValues: {
      nome: "",
      data_nascimento: "",
      sexo: SexoEnum.Masculino,
      remuneracao_ativa_atual: 0,
      beneficio_especial: 0,
      prazo_recebimento_beneficio_rpc: "",
      idade_ingresso_ente_federativo: 0,
      idade_prevista_aposentadoria: 0,
      taxa_juros_anual: "",
      aliquota_contribuicao_rpps: 0,
      aliquota_contribuicao_rpc: 0,
      valor_teto_rgps: 0,
      salario_contribuicao_rpc: 0,
      indice_infl: 0,
      indice_reajuste_beneficio_rpc: 0,
      indice_reajuste_beneficio_rpps: 0,
      indice_reajuste_paridade: 0,
    },
    resolver: zodResolver(schema),
    mode: "all",
  });

  function getData(data: IFormMainDTO) {
    setIsLoad(true);

    const salario_contribuicao_rpc = Math.floor(
      data.remuneracao_ativa_atual - data.valor_teto_rgps
    );
    setValue("salario_contribuicao_rpc", salario_contribuicao_rpc);

    // FASE ATIVA

    const remuneracao = formatDataRemuneracaoFaseAtiva({ data });
    const contribuicao_RPPS = formatDataContribuicaoRPPSFaseAtiva({
      data,
    });
    const contribuicao_RPC_basica = formatDataContribuicaoRPCBasicaFaseAtiva({
      data,
      salario_contribuicao_rpc,
    });

    const contribuicao_RPC_facultativa =
      formatDataContribuicaoRPCBasicaFacultativaFaseAtiva({
        data,
        salario_contribuicao_rpc,
      });
    const soma_contribuicao = formatDataSomaContribuicaoFaseAtiva({
      contribuicao_RPC_basica,
      contribuicao_RPC_facultativa,
      contribuicao_RPPS,
    });

    const salario_liquido_contribuicao = formatDataSalarioLiquidoFaseAtiva({
      data,
      soma_contribuicao,
      remuneracao,
    });

    const ir = IrFaseAtiva({
      salario_liquido_contribuicao,
    });

    const remuneracao_liquida_ir = formatDataRemuneracaoLiquidaIRFaseAtiva({
      salario_liquido_contribuicao,
      ir,
    });

    setTable1((prev) => ({
      ...prev,
      remuneracao,
      contribuicao_RPPS,
      contribuicao_RPC_basica,
      soma_contribuicao,
      salario_liquido_contribuicao,
      contribuicao_RPC_facultativa,
      ir,
      remuneracao_liquida_ir,
    }));

    //

    // FASE BENEFICIO

    const beneficio_rpps = formatDataBeneficioRPPSFaseBeneficio({
      remuneracao,
    });

    const contribuicao_beneficio_RPPS = formatDataContribuicaoRPPSFaseBeneficio(
      {
        data,
        beneficio_rpps,
      }
    );

    const saldo_liquido_ir = formatDataSalarioLiquidoIRFaseBeneficio({
      data,
      beneficio_rpps,
      contribuicao_beneficio_RPPS,
    });

    const ir_fase_beneficio = IrFaseBeneficio({ saldo_liquido_ir });

    const remuneracao_liquida_ir_fase_beneficio =
      formatDataRemuneracaoLiquidaIRFaseBeneficio({
        contribuicao_beneficio_RPPS,
        ir_fase_beneficio,
        beneficio_rpps,
        data,
      });

    setTable2((prev) => ({
      ...prev,
      beneficio_rpps,
      contribuicao_beneficio_RPPS,
      saldo_liquido_ir,
      ir_fase_beneficio,
      remuneracao_liquida_ir_fase_beneficio,
    }));

    //

    setTimeout(() => {
      setIsLoad(false);
    }, 1200);
  }

  function printPage() {
    window.print();
  }

  useEffect(() => {
    if (watch("data_nascimento")?.length) {
      setValue("data_nascimento", maskNiver(watch("data_nascimento")));
    }
  }, [watch("data_nascimento")]);

  function resetForm() {
    reset();
    setTable1(DefaultValueTable1);
    setValorTeto("");
    setRemuneracaoAtivaAtualText("");
  }

  return {
    formNumber,
    setFormNumber,
    control,
    register,
    handleSubmit,
    errors,
    Controller,
    getData,
    printPage,
    PrazosOptions,
    Taxas_Anual_Options,
    setValorTeto,
    valorTeto,
    watch,
    table1,
    remuneracaoAtivaAtualText,
    setRemuneracaoAtivaAtualText,
    resetForm,
    beneficioEspecialText,
    setBeneficioEspecialText,
    table2,
  };
};
