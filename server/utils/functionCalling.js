const fns = {
  getPageCount: (meta) => meta?.pages ?? null,
  getAuthor: (meta) => meta?.author ?? null
};

export const tryFunctionCall = async (modelText, pdfMeta) => {
  const ask = /"call_function"\s*:\s*"(\w+)"/i.exec(modelText)?.[1];
  if (ask && fns[ask]) {
    const result = fns[ask](pdfMeta);
    return { called: ask, result };
  }
  return { called: null, result: null };
};
