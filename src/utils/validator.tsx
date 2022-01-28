export function hasNumber(value: string) {
  return /\d/.test(value);
}

export function formatRun(run: string): string {
  if (run !== undefined) {
    if (run.length > 1) {
      run = run.split("-").join("").split(".").join("");
      const dv = run.substr(run.length - 1, 1);
      const rut = parseInt(run.substr(0, run.length - 1));
      if (isNaN(rut)) {
        return run;
      }
      if (rut <= 0) {
        return run;
      }
      let num = rut
        .toString()
        .split("")
        .reverse()
        .join("")
        .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
      num = num.split("").reverse().join("").replace(/^[.]/, "");
      return num.toString().concat("-").concat(dv.toUpperCase());
    }
  }
  return run;
}

export function rut(rutCompleto: string) {
  try {
    rutCompleto = rutCompleto.replace("‐", "-");
    rutCompleto = rutCompleto.split("-").join("");
    rutCompleto = rutCompleto.split(".").join("");
    rutCompleto =
      rutCompleto.substr(0, rutCompleto.length - 1) +
      "-" +
      rutCompleto.substr(rutCompleto.length - 1, 1);
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) {
      return false;
    }

    const tmp = rutCompleto.split("-");
    let digv = tmp[1];
    const rut = parseInt(tmp[0], 10);
    if (digv == "K") digv = "k";

    return dv(rut) == digv;
  } catch {
    return false;
  }
}

function dv(T: number) {
  let M = 0;
  let S = 1;
  for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
  return S ? S - 1 : "k";
}
//Input format for Date type ej: "YYYY-MM-DD HH:mm"
export const dateFormat = "DD/MM/YYYY";
