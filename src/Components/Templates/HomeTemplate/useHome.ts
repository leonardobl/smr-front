import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { IFormMainDTO } from "../../../Types/formMain";
import { SexoEnum } from "../../../Enum/sexo";
import { maskNiver } from "../../../Util/masks";

const schema = z.object({
  nome: z.string(),
  data_nascimento: z.string().min(10),
  sexo: z.string(),
  remuneracao_ativa_atual: z.number(),
  beneficio_especial: z.number(),
  prazo_recebimento_beneficio_rpc: z.string(),
  idade_ingresso_ente_federativo: z.number(),
  idade_prevista_aposentadoria: z.number(),
  taxa_juros_anual: z.string(),
  aliquota_contribuicao_rpps: z.number(),
  aliquota_contribuicao_rpc: z.number(),
  valor_teto_rgps: z.number(),
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

interface ITypeFaseTable {
  sem_migracao: number;
  com_remuneracao: number;
  com_migracao_rpc_basica: number;
  com_migracao_rpc_facultativa: number;
}

interface ITableFaseAtiva {
  remuneracao: ITypeFaseTable;
  contribuicao_RPPS: ITypeFaseTable;
  contribuicao_RPC_basica: ITypeFaseTable;
  contribuicao_RPC_facultativa: ITypeFaseTable;
  soma_contribuicao: ITypeFaseTable;
  salario_liquido_contribuicao: ITypeFaseTable;
  ir: ITypeFaseTable;
  remuneracao_liquida_ir: ITypeFaseTable;
}

const defaulValue: ITableFaseAtiva = {
  remuneracao: {
    com_migracao_rpc_basica: 0,
    com_migracao_rpc_facultativa: 0,
    com_remuneracao: 0,
    sem_migracao: 0,
  },
  contribuicao_RPC_basica: {
    com_migracao_rpc_basica: 0,
    com_migracao_rpc_facultativa: 0,
    com_remuneracao: 0,
    sem_migracao: 0,
  },
  contribuicao_RPC_facultativa: {
    com_migracao_rpc_basica: 0,
    com_migracao_rpc_facultativa: 0,
    com_remuneracao: 0,
    sem_migracao: 0,
  },
  contribuicao_RPPS: {
    com_migracao_rpc_basica: 0,
    com_migracao_rpc_facultativa: 0,
    com_remuneracao: 0,
    sem_migracao: 0,
  },
  ir: {
    com_migracao_rpc_basica: 0,
    com_migracao_rpc_facultativa: 0,
    com_remuneracao: 0,
    sem_migracao: 0,
  },
  remuneracao_liquida_ir: {
    com_migracao_rpc_basica: 0,
    com_migracao_rpc_facultativa: 0,
    com_remuneracao: 0,
    sem_migracao: 0,
  },
  salario_liquido_contribuicao: {
    com_migracao_rpc_basica: 0,
    com_migracao_rpc_facultativa: 0,
    com_remuneracao: 0,
    sem_migracao: 0,
  },
  soma_contribuicao: {
    com_migracao_rpc_basica: 0,
    com_migracao_rpc_facultativa: 0,
    com_remuneracao: 0,
    sem_migracao: 0,
  },
};

export const useHome = () => {
  const [formNumber, setFormNumber] = useState(1);
  const [valorTeto, setValorTeto] = useState("");
  // const [resultCalculoRPC, setResultCalculoRPC] = useState(0);
  const [table1, setTable1] = useState<ITableFaseAtiva>(defaulValue);

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
    console.log(data);

    calculoSalarioRPC(data);

    // const result =
    //   (data.remuneracao_ativa_atual * data.aliquota_contribuicao_rpps) / 100;

    setTable1(defaulValue);
  }

  function printPage() {
    window.print();
  }

  function calculoSalarioRPC(data: IFormMainDTO) {
    const salario = data.remuneracao_ativa_atual - data.valor_teto_rgps;
    setValue("salario_contribuicao_rpc", salario);
    // setResultCalculoRPC(result);
  }

  useEffect(() => {
    if (watch("data_nascimento")?.length) {
      setValue("data_nascimento", maskNiver(watch("data_nascimento")));
    }
  }, [watch("data_nascimento")]);

  return {
    formNumber,
    setFormNumber,
    control,
    register,
    reset,
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
  };
};
